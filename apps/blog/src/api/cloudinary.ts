import https from 'https'
import { type UploadApiOptions, v2 as cloudinary } from 'cloudinary'

class CloudinaryApi {
  constructor() {
    const cloudinaryUrl = process.env.CLOUDINARY_URL!
    const urlRegex = /^cloudinary:\/\/([a-z0-9-_]+):([a-z0-9-_]+)@([a-z0-9-_]+)$/i
    if (!urlRegex.test(cloudinaryUrl)) {
      throw new Error(`Invalid Cloudinary URL provided. It should match ${urlRegex.toString()}`)
    }
    const [, apiKey, apiSecret, cloudName] = cloudinaryUrl.match(urlRegex) ?? []

    cloudinary.config({
      secure: true,
      api_key: apiKey,
      api_secret: apiSecret,
      cloud_name: cloudName,
    })
  }

  private downloadImageToBase64(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const req = https.request(url, response => {
        const chunks: unknown[] = []

        response.on('data', function (chunk) {
          chunks.push(chunk)
        })

        response.on('end', function () {
          const result = Buffer.concat(chunks as ReadonlyArray<Uint8Array>)
          resolve(result.toString('base64'))
        })
      })
      req.on('error', reject)
      req.end()
    })
  }

  private uploadImage(image: string, options: UploadApiOptions = {}): Promise<{ url: string }> {
    return cloudinary.uploader
      .upload(image, options)
      .then(result => ({
        url: result.secure_url,
      }))
      .catch(error => {
        console.error(error)
        return { url: '' }
      })
  }

  async convertToPermanentImage(notionImageUrl: string, title: string) {
    const imgBase64 = await this.downloadImageToBase64(notionImageUrl)
    const { url: cloudinaryUrl } = await this.uploadImage(`data:image/jpeg;base64,${imgBase64}`, {
      folder: process.env.CLOUDINARY_UPLOAD_FOLDER!,
      public_id: title.split(' ').join('_').trim(),
      overwrite: true,
    })

    return cloudinaryUrl
  }
}

export const cloudinaryApi = new CloudinaryApi()

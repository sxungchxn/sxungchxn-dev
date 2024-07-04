import { type UploadApiOptions, v2 as cloudinary } from 'cloudinary'

export const config = () => {
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

export const uploadImage = (
  image: string,
  options: UploadApiOptions = {},
): Promise<{ url: string }> => {
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

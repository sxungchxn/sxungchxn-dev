import { downloadImageToBase64 } from '@/utils/download-image'
import * as cloudinary from './cloudinary'

export const convertToPermanentImage = async (notionImageUrl: string, title: string) => {
  cloudinary.config()

  const imgBase64 = await downloadImageToBase64(notionImageUrl)

  const { url: cloudinaryUrl } = await cloudinary.uploadImage(
    `data:image/jpeg;base64,${imgBase64}`,
    {
      folder: process.env.CLOUDINARY_UPLOAD_FOLDER!,
      public_id: title.split(' ').join('_').trim(),
    },
  )

  return cloudinaryUrl
}

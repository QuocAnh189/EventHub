import { RcFile, UploadFile } from 'antd/es/upload'

export async function URLtoFile(url: string) {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const file = new File([blob], url.split('/')[5].split('?')[0], { type: blob.type })
    const uploadFile: UploadFile = {
      name: file.name,
      uid: file.name,
      originFileObj: file as RcFile,
      fileName: file.name,
      lastModified: file.lastModified,
      preview: url,
      size: file.size,
      thumbUrl: url,
      url: url,
      type: file.type
    }
    return uploadFile
  } catch (error) {
    console.log(error)
  }
}

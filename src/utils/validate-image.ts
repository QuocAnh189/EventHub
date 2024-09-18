import { RcFile } from 'antd/es/upload'

export const validator = (file: RcFile) => {
  const isImage = file.type.split('/')[0] === 'image'
  const errorMgs = []
  if (!isImage) {
    errorMgs.push(`'${file.name}' is not an image file`)
  }

  const isLessThan3MB = file.size / 1024 / 1024 < 3
  if (!isLessThan3MB) {
    errorMgs.push(`Image must smaller than 3MB!`)
  }

  return errorMgs
}

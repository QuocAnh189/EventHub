import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

const DownloadSampleExcel = () => {
  const sampleData = [
    { Name: 'John Doe', Email: 'johndoe@example.com', Phone: '123-456-7890' },
    { Name: 'Jane Smith', Email: 'janesmith@example.com', Phone: '098-765-4321' }
  ]

  // Chuyển đổi dữ liệu thành một worksheet
  const worksheet = XLSX.utils.json_to_sheet(sampleData)

  // Tạo một workbook và thêm worksheet vào workbook
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sample')

  // Tạo file Excel từ workbook
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })

  // Tạo Blob từ buffer của file Excel và tải xuống file .xlsx
  const blob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  })
  saveAs(blob, 'sample.xlsx')
}

export default DownloadSampleExcel

import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

interface IProps {
  data: any[]
}
const DownloadSampleExcel = (props: IProps) => {
  const { data } = props
  // const sampleData = [
  //   {
  //     Name: 'Happy New Year 2025',
  //     EventCycleType: EEventStyle.RECURRING,
  //     StartTime: '2025-01-01T07:00',
  //     EndTime: '2025-01-02T17:00',
  //     location: 'University Of Information Technology',
  //     pathLocation:
  //       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
  //     description: 'This is description for the events',
  //     reasons: JSON.stringify(['Reason 1', 'Reason 2', 'Reason 3', 'Reason 4', 'Reason 5']),
  //     eventPaymentType: EEventPaymentTicket.Paid,
  //     ticketTypes: JSON.stringify([
  //       { name: 'VIP', quantity: 100, price: 100000 },
  //       { name: 'Normal', quantity: 1000, price: 50000 }
  //     ]),
  //     isPrivate: false
  //   }
  // ]

  // Chuyển đổi dữ liệu thành một worksheet
  const worksheet = XLSX.utils.json_to_sheet(data)

  // Tạo một workbook và thêm worksheet vào workbook
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sample')

  // Tạo file Excel từ workbook
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })

  // Tạo Blob từ buffer của file Excel và tải xuống file .xlsx
  const blob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  })
  saveAs(blob, 'event_create_sample.xlsx')
}

export default DownloadSampleExcel

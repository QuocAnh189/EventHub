// //hook
// import usePermissionsTable from './usePermissionsTable'

// //components
// import Empty from '@components/Empty'
// import { toast } from 'react-toastify'

// //interface
// import { IPermissionScreen } from 'interfaces/systems'

// //style
// import StyledTable from './styles'

// //redux
// import { useUpdatePermissionMutation } from '@redux/apis/permission.api'

// interface PermissionsTableProps {
//   permissions: IPermissionScreen[]
// }

const PermissionsTable = () => {
  // const [columns]: any = usePermissionsTable({ onChangePermission })
  // const [updatePermission] = useUpdatePermissionMutation()
  // async function onChangePermission(functionId: string, commandId: string, value: boolean) {
  //   try {
  //     await updatePermission({ functionId, commandId, value }).unwrap()
  //     toast.success('Update permission successfully!')
  //   } catch (error) {
  //     console.log('🚀 ~ onChangePermission ~ error:', error)
  //     toast.error('Failed to update permission')
  //   }
  // }
  // return (
  //   <StyledTable
  //     columns={columns}
  //     dataSource={permissions}
  //     pagination={false}
  //     locale={{
  //       emptyText: <Empty text='No permissions found' />
  //     }}
  //     rowKey={(record: any) => record.id}
  //   />
  // )
}

export default PermissionsTable

// //hook
// import useRolePermissionsTable from './useRolePermissionsTable'

// //components
// import { toast } from 'react-toastify'
// import Empty from '@components/Empty'

// //style
// import StyledTable from './styles'

// //interface
// import { IFunction, IRolePermission } from 'interfaces/systems'

// //redux
// import { useUpdatePermissionByRoleMutation } from '@redux/apis/permission.api'

// interface PermissionsTableProps {
//   permissions: IRolePermission[]
//   functions: IFunction[]
// }

const RolePermissionsTable = () => {
  // const [columns]: any = useRolePermissionsTable({ onChangePermission, functions })
  // const [updatePermissionByRole] = useUpdatePermissionByRoleMutation()
  // async function onChangePermission(roleId: string, functionId: string, value: boolean) {
  //   try {
  //     await updatePermissionByRole({ roleId, functionId, value }).unwrap()
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

export default RolePermissionsTable

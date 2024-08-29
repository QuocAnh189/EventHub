import Empty from '@components/Empty'
import { IFunction, IRolePermission } from 'interfaces/systems'
import { toast } from 'react-toastify'
import StyledTable from './styles'
import useRolePermissionsTable from './useRolePermissionsTable'
import { useUpdatePermissionByRoleMutation } from '@redux/services/permissionApi'

interface PermissionsTableProps {
  permissions: IRolePermission[]
  functions: IFunction[]
}

const RolePermissionsTable = ({ permissions, functions }: PermissionsTableProps) => {
  const [columns] = useRolePermissionsTable({ onChangePermission, functions })

  const [updatePermissionByRole] = useUpdatePermissionByRoleMutation()

  async function onChangePermission(roleId: string, functionId: string, value: boolean) {
    try {
      await updatePermissionByRole({ roleId, functionId, value }).unwrap()
      toast.success('Update permission successfully!')
    } catch (error) {
      console.log('🚀 ~ onChangePermission ~ error:', error)
      toast.error('Failed to update permission')
    }
  }

  return (
    <StyledTable
      columns={columns}
      dataSource={permissions}
      pagination={false}
      locale={{
        emptyText: <Empty text='No permissions found' />
      }}
      rowKey={(record) => record.id}
    />
  )
}

export default RolePermissionsTable

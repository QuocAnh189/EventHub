import Empty from '@components/Empty'
import { IPermissionScreen } from 'interfaces/systems'
import { toast } from 'react-toastify'
import StyledTable from './styles'
import usePermissionsTable from './usePermissionsTable'
import { useUpdatePermissionMutation } from '@redux/services/permissionApi'

interface PermissionsTableProps {
  permissions: IPermissionScreen[]
}

const PermissionsTable = ({ permissions }: PermissionsTableProps) => {
  const [columns] = usePermissionsTable({ onChangePermission })

  const [updatePermission] = useUpdatePermissionMutation()

  async function onChangePermission(functionId: string, commandId: string, value: boolean) {
    try {
      await updatePermission({ functionId, commandId, value }).unwrap()
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

export default PermissionsTable

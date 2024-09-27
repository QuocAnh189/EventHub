import { Checkbox } from 'antd'
import { AnyObject } from 'antd/es/_util/type'
import type { ColumnType, ColumnsType } from 'antd/es/table/interface'
import { IFunction, IRolePermission } from 'interfaces/systems'

interface RolePermissionsTableHookProps {
  onChangePermission: (roleId: string, functionId: string, value: boolean) => void
  functions: IFunction[]
}

export default function useRolePermissionsTable({ onChangePermission, functions }: RolePermissionsTableHookProps) {
  const functionColumns = functions.map((f: any) => {
    const column: ColumnType<IRolePermission | AnyObject> = {
      title: f.name,
      dataIndex: 'functionIds',
      key: 'functionIds',
      align: 'center',
      render: (ids: string[], permission) => (
        <Checkbox
          checked={ids.includes(f.id)}
          onChange={(event) => onChangePermission(permission.roleId, f.id, event.target.checked)}
        />
      )
    }
    return column
  })

  const columns: ColumnsType<IRolePermission | AnyObject> = [
    {
      title: '',
      dataIndex: 'roleName',
      key: 'roleName',
      colSpan: 1,
      render: (value: string) => <span className='inline-block h6 !text-sm max-w-[155px]'>{value}</span>
    },
    ...functionColumns
  ]

  return [columns]
}

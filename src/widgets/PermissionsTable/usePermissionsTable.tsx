import { COMMAND } from '@constants/command.constant'
import { Checkbox } from 'antd'
import { AnyObject } from 'antd/es/_util/type'
import type { ColumnsType } from 'antd/es/table/interface'
import { IPermissionScreen } from 'interfaces/systems'

interface PermissionsTableHookProps {
  onChangePermission: (functionId: string, commandId: string, value: boolean) => void
}

export default function usePermissionsTable({ onChangePermission }: PermissionsTableHookProps) {
  const columns: ColumnsType<IPermissionScreen | AnyObject> = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      colSpan: 1,
      render: (value: string) => <span className='inline-block h6 !text-sm max-w-[155px]'>{value}</span>
    },
    {
      title: 'Has View',
      dataIndex: 'hasView',
      key: 'hasView',
      align: 'center',
      render: (value: boolean, permission) => (
        <Checkbox
          checked={value}
          onChange={(event) => onChangePermission(permission.id, COMMAND.VIEW, event.target.checked)}
        />
      )
    },
    {
      title: 'Has Create',
      dataIndex: 'hasCreate',
      key: 'hasCreate',
      align: 'center',
      render: (value: boolean, permission) => (
        <Checkbox
          checked={value}
          onChange={(event) => onChangePermission(permission.id, COMMAND.CREATE, event.target.checked)}
        />
      )
    },
    {
      title: 'Has Update',
      dataIndex: 'hasUpdate',
      key: 'hasUpdate',
      align: 'center',
      render: (value: boolean, permission) => (
        <Checkbox
          checked={value}
          onChange={(event) => onChangePermission(permission.id, COMMAND.UPDATE, event.target.checked)}
        />
      )
    },
    {
      title: 'Has Delete',
      dataIndex: 'hasDelete',
      key: 'hasDelete',
      align: 'center',
      render: (value: boolean, permission) => (
        <Checkbox
          checked={value}
          onChange={(event) => onChangePermission(permission.id, COMMAND.DELETE, event.target.checked)}
        />
      )
    },
    {
      title: 'Has Approve',
      dataIndex: 'hasApprove',
      key: 'hasApprove',
      align: 'center',
      render: (value: boolean, permission) => (
        <Checkbox
          checked={value}
          onChange={(event) => onChangePermission(permission.id, COMMAND.APPROVE, event.target.checked)}
        />
      )
    }
  ]

  return [columns]
}

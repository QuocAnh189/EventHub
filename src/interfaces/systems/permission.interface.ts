export interface IPermissionScreen {
  id?: string
  name: string
  parentId: string
  hasCreate: boolean
  hasUpdate: boolean
  hasDelete: boolean
  hasView: boolean
  hasApprove: boolean
}

export interface IRolePermission {
  id?: string
  functionIds: string[]
  functionNames: string[]
  roleId: string
  roleName: string
}

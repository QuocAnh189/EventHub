export type UpdatePermissionPayload = {
  functionId: string
  commandId: string
  value: boolean
}

export type UpdatePermissionByRolePayload = {
  roleId: string
  functionId: string
  value: boolean
}

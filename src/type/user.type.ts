export interface IChangePasswordPayload {
  userId: string
  oldPassword: string
  newPassword: string
}

export interface IFollowPayload {
  followerId: string
  followedId: string
}

export interface INotificationFollowing {
  id: string
  follower: Followee
  followeeId: string
  createdAt: string
}

interface Followee {
  id: string
  email: string
  avatarUrl: string
  fullName: string
  userName: string
}

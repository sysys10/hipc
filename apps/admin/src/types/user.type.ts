type Roles = 'admin' | 'user'
interface User {
  id: number
  name: string
  email: string
  emailVerified: string
  updatedAt: string
  createdAt: string
  permission: string[]
  role: Roles
}
export type { User }

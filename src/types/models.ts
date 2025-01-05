// src/types/models.ts
export interface User {
    id: string
    openid: string
    phone?: string
    nickname?: string
    avatarUrl?: string
    gender?: number
    createdAt: string
    updatedAt: string
    lastLoginAt?: string
    status: number
}

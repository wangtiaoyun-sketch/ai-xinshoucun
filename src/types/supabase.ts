export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string | null
          avatar_url: string | null
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name?: string | null
          avatar_url?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string | null
          avatar_url?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          tutorial_slug: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          tutorial_slug: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          tutorial_slug?: string
          created_at?: string
        }
      }
      learning_progress: {
        Row: {
          id: string
          user_id: string
          tutorial_slug: string
          completed: boolean
          progress_percent: number
          last_accessed: string
        }
        Insert: {
          id?: string
          user_id: string
          tutorial_slug: string
          completed?: boolean
          progress_percent?: number
          last_accessed?: string
        }
        Update: {
          id?: string
          user_id?: string
          tutorial_slug?: string
          completed?: boolean
          progress_percent?: number
          last_accessed?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}

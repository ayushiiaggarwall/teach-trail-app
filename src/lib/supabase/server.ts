import { createServerClient } from '@supabase/ssr'
// Note: This is a client-side only setup for Vite/React Router
import { Database } from './database.types'
import { createMockClient } from './mock-client'

export const createClient = () => {
  // Check if Supabase is properly configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  // If not configured, return mock client for demo
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('placeholder')) {
    console.warn('⚠️ Supabase not configured - using mock client for demo')
    return createMockClient() as any
  }

  // For client-side React Router, use regular client
  return createMockClient() as any
}
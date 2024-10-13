'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/util/supabase/server'

export async function login(formData) {
  const supabase = createClient()

  const data = {
    email: formData.email,
    password: formData.password,
  }
  const { error } = await supabase.auth.signInWithPassword(data)
}

export async function signup(formData) {
  const supabase = createClient()

  const data = {
    email: formData.email,
    password: formData.password,
  }

  const { error } = await supabase.auth.signUp(data)
  return error
  // revalidatePath('/', 'layout')
  // redirect('/')
}

export async function logout() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
}
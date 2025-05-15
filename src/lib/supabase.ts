
import { supabase } from '@/integrations/supabase/client';
import type { Profile, Program, UserProgram } from '@/types';

// Programs API
export async function fetchPrograms() {
  const { data, error } = await supabase
    .from('programs')
    .select('*');
  
  if (error) {
    console.error('Error fetching programs:', error);
    throw error;
  }
  
  return data as Program[];
}

// User programs API
export async function fetchUserPrograms(userId: string) {
  const { data, error } = await supabase
    .from('user_programs')
    .select('*, programs(*)')
    .eq('user_id', userId);
    
  if (error) {
    console.error('Error fetching user programs:', error);
    throw error;
  }
  
  return data;
}

export async function enrollInProgram(userId: string, programId: string) {
  const { data, error } = await supabase
    .from('user_programs')
    .insert({
      user_id: userId,
      program_id: programId
    })
    .select()
    .single();
    
  if (error) {
    console.error('Error enrolling in program:', error);
    throw error;
  }
  
  return data;
}

// Profile API
export async function fetchProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();
    
  if (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
  
  return data as Profile | null;
}

export async function updateProfile(userId: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
    
  if (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
  
  return data;
}

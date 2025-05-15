
import type { Database } from '@/integrations/supabase/types';

// Custom types that extend Supabase types
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Program = Database['public']['Tables']['programs']['Row'];
export type UserProgram = Database['public']['Tables']['user_programs']['Row'];

// Custom type for program with potential additional frontend properties
export type ProgramWithStatus = Program & {
  isEnrolled?: boolean;
};

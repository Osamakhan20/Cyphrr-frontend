import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    'Missing VITE_SUPABASE_URL. Please ensure your .env file is in the project root (not in src/) and contains VITE_SUPABASE_URL. Restart your dev server after adding/updating .env file.'
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    'Missing VITE_SUPABASE_ANON_KEY. Please ensure your .env file is in the project root (not in src/) and contains VITE_SUPABASE_ANON_KEY. Restart your dev server after adding/updating .env file.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

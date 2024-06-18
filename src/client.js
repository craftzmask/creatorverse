import { createClient } from '@supabase/supabase-js';

const URL = 'https://xsymqzoxfvtbxtdfudeb.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzeW1xem94ZnZ0Ynh0ZGZ1ZGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0OTI2MDEsImV4cCI6MjAzNDA2ODYwMX0.-07dkYurdsOGzvOMF3nVrRk3WCrh_syp3vgLmG6hBVs';
export const supabase = createClient(URL, API_KEY);
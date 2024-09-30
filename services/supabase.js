// src/services/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://diushupzozxozxlbeorl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpdXNodXB6b3p4b3p4bGJlb3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MjIwMTQsImV4cCI6MjA0MzE5ODAxNH0.nNeM51bIv4EObqroWveOcACyelnURX441OUZKmrf1DU';

export const supabase = createClient(supabaseUrl, supabaseKey);

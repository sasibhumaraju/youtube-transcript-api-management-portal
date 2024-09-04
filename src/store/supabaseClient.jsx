import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = "https://bxdejyjvtlxcyhoduqak.supabase.co/"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZGVqeWp2dGx4Y3lob2R1cWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NzE3MDUsImV4cCI6MjAzOTE0NzcwNX0.wQ8OKnKY1GFTze90Iy0RDLuI_MbOlOwoM2vfFfLWkCU"

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY)
export default supabase;
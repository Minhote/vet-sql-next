import { createClient } from "@supabase/supabase-js";
import { Database } from "../../database";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

export const supabase = createClient<Database>(url, key);

const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const client = require('@supabase/supabase-js')

const supabaseURL = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_KEY

// Create and export a new Supabase client for interacting with the database
const supabaseClient = client.createClient(
    supabaseURL,
    supabaseAnonKey,
);

module.exports = supabaseClient;
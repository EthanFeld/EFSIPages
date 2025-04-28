// script.js

// Initialize your Supabase client
const SUPABASE_URL = 'https://YOUR-SUPABASE-URL.supabase.co';
const SUPABASE_KEY = 'YOUR-PUBLIC-ANON-KEY'; // safe for frontend use
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Function to log a page visit
async function logPageVisit(pageName) {
    const { error } = await supabase
        .from('page_visits')
        .insert([
            { page: pageName, timestamp: new Date().toISOString() }
        ]);

    if (error) {
        console.error('Error logging page visit:', error.message);
    } else {
        console.log('Page visit logged:', pageName);
    }
}

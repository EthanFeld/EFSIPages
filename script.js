// script.js

// Initialize your Supabase client
const supabaseUrl = 'https://uqsfqzutpateuyuzpswi.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxc2ZxenV0cGF0ZXV5dXpwc3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDY4NjAsImV4cCI6MjA2MTQyMjg2MH0.pLEmpvMgLm1tQPbH1-fENP5Nab7FL7lEozLNMFaQSzw'; // safe for frontend use
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

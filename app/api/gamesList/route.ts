import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextResponse } from 'next/server'



export async function GET(req:Request){ 
    const {data,error}=await supabaseAdmin
    .from('games_list')
    .select('*')
    .order('game_name',{ascending:true})
    
    if(error){
        return NextResponse.json({error:error.message},{status:500})
    }
return NextResponse.json(data||null);
   
}
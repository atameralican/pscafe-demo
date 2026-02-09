import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextResponse } from 'next/server'


export const revalidate = 60 * 60 * 24 * 30; //cache for 30 days

export async function GET(req: Request) {
  const { data, error } = await supabaseAdmin
    .from('games_list')
    .select('id, game_name, image_url')
    .eq('is_popular', true)
    .order('game_name', { ascending: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data || null)
}
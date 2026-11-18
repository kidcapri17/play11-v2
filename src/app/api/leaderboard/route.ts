import {NextResponse} from 'next/server';
import {adminClient} from '../../../lib/supabase';
import {ukDay} from '../../../lib/challenges';
export const dynamic='force-dynamic';
export async function GET(){const db=adminClient();if(!db)return NextResponse.json({enabled:false,entries:[]});const {data,error}=await db.from('daily_scores').select('display_name,score,completed_at').eq('day',ukDay()).order('score',{ascending:false}).order('completed_at',{ascending:true}).limit(20);if(error)return NextResponse.json({error:'Leaderboard unavailable'},{status:500});return NextResponse.json({enabled:true,entries:data||[]},{headers:{'Cache-Control':'no-store'}})}

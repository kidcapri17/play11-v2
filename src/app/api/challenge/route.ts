import {NextResponse} from 'next/server';
import {dailySet,publicChallenge,ukDay} from '../../../lib/challenges';
export const dynamic='force-dynamic';
export function GET(){const day=ukDay();return NextResponse.json({day,questions:dailySet(day).map(publicChallenge)},{headers:{'Cache-Control':'no-store'}})}

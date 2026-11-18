export type Challenge = { id:string; mode:'player'|'career'|'club'|'trivia'; clue:string; answer:string; aliases?:string[]; options?:string[] };
export const BANK: Challenge[] = [
{id:'p1',mode:'player',clue:'Argentine forward • World Cup winner in 2022 • Played for Barcelona and Paris Saint-Germain',answer:'Lionel Messi',aliases:['Messi']},
{id:'p2',mode:'player',clue:'Portuguese forward • Played for Sporting CP, Manchester United, Real Madrid and Juventus',answer:'Cristiano Ronaldo',aliases:['Ronaldo','CR7']},
{id:'p3',mode:'player',clue:'French striker • World Cup winner in 2018 • Began his senior career at Monaco',answer:'Kylian Mbappé',aliases:['Mbappe','Kylian Mbappe']},
{id:'p4',mode:'player',clue:'Norwegian striker • Played for Molde, Salzburg and Borussia Dortmund before Manchester City',answer:'Erling Haaland',aliases:['Haaland']},
{id:'p5',mode:'player',clue:'Egyptian winger • Played for Basel, Chelsea, Fiorentina and Roma before Liverpool',answer:'Mohamed Salah',aliases:['Salah','Mo Salah']},
{id:'p6',mode:'player',clue:'Croatian midfielder • Won the 2018 Ballon d’Or • Played for Tottenham and Real Madrid',answer:'Luka Modrić',aliases:['Luka Modric','Modric']},
{id:'c1',mode:'career',clue:'Sporting CP → Manchester United → Real Madrid → Juventus → Manchester United',answer:'Cristiano Ronaldo',aliases:['Ronaldo']},
{id:'c2',mode:'career',clue:'Malmö FF → Ajax → Juventus → Inter → Barcelona → AC Milan → Paris Saint-Germain',answer:'Zlatan Ibrahimović',aliases:['Zlatan','Ibrahimovic','Zlatan Ibrahimovic']},
{id:'c3',mode:'career',clue:'São Paulo → Real Madrid → Arsenal → Roma',answer:'Júlio Baptista',aliases:['Julio Baptista','Baptista']},
{id:'c4',mode:'career',clue:'Groningen → PSV → Chelsea → Real Madrid → Bayern Munich',answer:'Arjen Robben',aliases:['Robben']},
{id:'c5',mode:'career',clue:'Boca Juniors → Corinthians → West Ham → Manchester United → Manchester City → Juventus',answer:'Carlos Tevez',aliases:['Tevez','Carlos Tévez']},
{id:'c6',mode:'career',clue:'Le Havre → Leicester City → Manchester City → Al Ahli',answer:'Riyad Mahrez',aliases:['Mahrez']},
{id:'b1',mode:'club',clue:'Founded in 1892 • Plays at Anfield • Nicknamed the Reds',answer:'Liverpool',aliases:['Liverpool FC']},
{id:'b2',mode:'club',clue:'Founded in 1902 • Plays at the Santiago Bernabéu • Based in Madrid',answer:'Real Madrid',aliases:['Real Madrid CF']},
{id:'b3',mode:'club',clue:'Founded in 1905 • Plays at Stamford Bridge • Based in west London',answer:'Chelsea',aliases:['Chelsea FC']},
{id:'b4',mode:'club',clue:'Founded in 1899 • Traditionally plays at Camp Nou • Based in Catalonia',answer:'Barcelona',aliases:['FC Barcelona','Barca','Barça']},
{id:'b5',mode:'club',clue:'Founded in 1886 • Plays at Emirates Stadium • Nicknamed the Gunners',answer:'Arsenal',aliases:['Arsenal FC']},
{id:'b6',mode:'club',clue:'Founded in 1900 • Plays at Allianz Arena • Based in Bavaria',answer:'Bayern Munich',aliases:['Bayern','FC Bayern']},
{id:'t1',mode:'trivia',clue:'Which country won the 2022 FIFA Men’s World Cup?',answer:'Argentina',options:['Argentina','France','Brazil','Croatia']},
{id:'t2',mode:'trivia',clue:'How many players does each team normally have on the pitch at kick-off?',answer:'11',options:['9','10','11','12']},
{id:'t3',mode:'trivia',clue:'Which country hosted the 2010 FIFA Men’s World Cup?',answer:'South Africa',options:['Germany','South Africa','Brazil','Japan']},
{id:'t4',mode:'trivia',clue:'Which club won the 2015 UEFA Champions League final?',answer:'Barcelona',options:['Juventus','Bayern Munich','Barcelona','Real Madrid']},
{id:'t5',mode:'trivia',clue:'Which national team is nicknamed the Azzurri?',answer:'Italy',options:['Spain','Italy','France','Portugal']},
{id:'t6',mode:'trivia',clue:'Which country won the first FIFA Men’s World Cup in 1930?',answer:'Uruguay',options:['Argentina','Uruguay','Brazil','Italy']}
];
export const MODES = ['player','career','club','trivia'] as const;
export function ukDay(date=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'}).format(date)}
export function dailySet(day:string){const index=Math.floor(Date.parse(day+'T00:00:00Z')/86400000);return MODES.map(mode=>{const arr=BANK.filter(c=>c.mode===mode);return arr[((index%arr.length)+arr.length)%arr.length]})}
export function normalize(s:string){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'')}
export function correct(c:Challenge,guess:string){return [c.answer,...(c.aliases||[])].some(a=>normalize(a)===normalize(guess))}
export function publicChallenge(c:Challenge){return {id:c.id,mode:c.mode,clue:c.clue,options:c.options}}

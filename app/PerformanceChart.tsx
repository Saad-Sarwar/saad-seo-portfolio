'use client';
import {useState} from 'react';
const projects=[
 {id:1,clicks:28700,impressions:4280000}, {id:2,clicks:26400,impressions:2700000},
 {id:3,clicks:657,impressions:76100}, {id:4,clicks:2380,impressions:263000},
 {id:5,clicks:5770,impressions:148000}, {id:6,clicks:20200,impressions:1920000},
 {id:7,clicks:5050,impressions:710000}, {id:8,clicks:5100,impressions:525000},
 {id:9,clicks:4290,impressions:488000}, {id:10,clicks:6760,impressions:704000},
];
const format=(n:number)=>n>=1000000?`${(n/1000000).toFixed(2).replace(/0$/,'').replace(/\.$/,'')}M`:n>=1000?`${(n/1000).toFixed(1).replace(/\.0$/,'')}K`:String(n);
export default function PerformanceChart(){
 const [metric,setMetric]=useState<'clicks'|'impressions'>('clicks');
 const max=Math.max(...projects.map(p=>p[metric]));
 return <div className="card mt-10 p-5 sm:p-8" aria-label="Comparison of Google Search Console project totals">
  <div className="flex flex-wrap items-center justify-between gap-4">
   <div><h3 className="text-xl font-extrabold">Compare project performance</h3><p className="mt-2 text-sm text-muted">Reported totals from 10 separate Google Search Console screenshots</p></div>
   <div className="flex gap-2 rounded-xl border border-slate-300 bg-blue-50 p-1" role="group" aria-label="Chart metric">
    {(['clicks','impressions'] as const).map(m=><button key={m} type="button" aria-pressed={metric===m} onClick={()=>setMetric(m)} className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${metric===m?'bg-lime text-white':'text-slate-600 hover:text-[#112342]'}`}>{m==='clicks'?'Clicks':'Impressions'}</button>)}
   </div>
  </div>
  <div className="mt-9 grid grid-cols-10 items-end gap-2 sm:gap-4" style={{height:260}} role="img" aria-label={`Bar chart showing ${metric} totals across ten projects`}>
   {projects.map(p=><div key={p.id} className="group flex h-full min-w-0 flex-col items-center justify-end gap-2" title={`Project ${String(p.id).padStart(2,'0')}: ${format(p[metric])} ${metric}`}>
    <span className="text-[10px] font-bold text-slate-700 sm:text-sm">{format(p[metric])}</span>
    <div className="w-full max-w-16 rounded-t-md bg-gradient-to-t from-blue-700 to-blue-400 shadow-[0_0_20px_rgba(21,84,192,.10)] transition-[height,filter] duration-700 ease-out group-hover:brightness-125" style={{height:`${Math.max(3,p[metric]/max*195)}px`}}/>
    <span className="text-[10px] text-slate-500 sm:text-xs">{String(p.id).padStart(2,'0')}</span>
   </div>)}
  </div>
  <p className="mt-8 border-t border-slate-200 pt-4 text-xs leading-6 text-muted">Projects cover different websites and reporting periods. This chart compares absolute reported totals only; it does not represent month-over-month growth or imply that all results were caused solely by my work.</p>
 </div>
}

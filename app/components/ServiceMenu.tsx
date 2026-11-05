export const serviceLinks = [
  {title:'Technical SEO',href:"/services/technical-seo"},
  {title:'On-Page & Content SEO',href:"/services/on-page-content-seo"},
  {title:'International SEO',href:"/services/international-seo"},
  {title:'Local SEO',href:"/services/local-seo"},
  {title:'SEO Analytics & Reporting',href:"/services/seo-analytics-reporting"},
  {title:'Ecommerce & CMS SEO',href:"/services/ecommerce-cms-seo"},
  {title:'AI Search Readiness',href:"/services/ai-search-readiness"},
];
export default function ServiceMenu(){return <details className="group relative inline-block text-left"><summary className="cursor-pointer list-none rounded-lg px-2 py-2 text-sm font-semibold text-[#1554c0] hover:bg-blue-50">SEO Services <span aria-hidden="true">▾</span></summary><div className="absolute left-0 top-full z-[80] w-72 rounded-2xl border border-blue-100 bg-white p-2 shadow-2xl">{serviceLinks.map(item=><a key={item.href} href={item.href} className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1554c0]">{item.title}</a>)}<a href="/services" className="block border-t border-blue-100 px-4 py-3 text-sm font-bold text-[#1554c0]">View all services →</a></div></details>}

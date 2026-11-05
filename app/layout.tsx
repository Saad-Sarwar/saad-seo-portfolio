import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:'Saad Sarwar | SEO Strategist & International SEO Consultant',
 description:'SEO Strategist with 5+ years of experience across 50+ websites. Helping businesses worldwide improve search visibility through data-driven SEO.',
 robots:{index:true,follow:true},
 openGraph:{title:'Saad Sarwar | SEO Strategist & International SEO Consultant',description:'International SEO strategy, technical SEO, content optimization and worldwide collaboration.',type:'website'},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

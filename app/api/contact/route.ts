import {NextResponse} from 'next/server';
export async function POST(request:Request){
 try{
  const data=await request.json();
  const {name,email,subject,message}=data||{};
  if(![name,email,subject,message].every(v=>typeof v==='string'&&v.trim()))return NextResponse.json({error:'Please complete every field.'},{status:400});
  if(name.length>100||email.length>200||subject.length>150||message.length>5000||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({error:'Please check your input.'},{status:400});
  const key=process.env.RESEND_API_KEY;const from=process.env.CONTACT_FROM_EMAIL;
  if(!key||!from)return NextResponse.json({error:'Contact form email service is not configured yet. Please email saadsarwar93@gmail.com directly.'},{status:503});
  const result=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:['saadsarwar93@gmail.com'],reply_to:email,subject:`Portfolio: ${subject}`,text:`Name: ${name}\nEmail: ${email}\n\n${message}`})});
  if(!result.ok)return NextResponse.json({error:'Message could not be delivered. Please try again or email directly.'},{status:502});
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:'Invalid request.'},{status:400});}
}

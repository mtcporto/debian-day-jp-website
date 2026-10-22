import { ImageResponse } from 'next/og';
export const size={width:1200,height:630};
export const contentType='image/png';
export const alt='Debian Day João Pessoa 2025 — 15 e 16 de agosto, UNIESP';
export default function OpenGraphImage(){return new ImageResponse(<div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:80,color:'white',background:'linear-gradient(135deg,#d70a53,#337ab7 60%,#6cc04a)'}}><div style={{fontSize:76,fontWeight:700,display:'flex'}}>Debian Day</div><div style={{fontSize:54,display:'flex',marginTop:10}}>João Pessoa 2025</div><div style={{fontSize:30,display:'flex',marginTop:45}}>15 e 16 de agosto · UNIESP</div></div>,size)}

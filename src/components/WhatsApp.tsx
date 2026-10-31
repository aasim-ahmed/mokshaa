import { MessageCircle } from 'lucide-react';
// Demo contact is intentionally not hard-coded: replace with the spa owner's confirmed WhatsApp number.
export const whatsappUrl = (message='Hello Mokshaa, I would like to enquire about an appointment.') => `https://wa.me/?text=${encodeURIComponent(message)}`;
export default function WhatsApp({label='Enquire on WhatsApp',message}:{label?:string;message?:string}){return <a className="btn btn-dark" href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle size={16}/>{label}</a>}

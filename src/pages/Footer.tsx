import mail from "/mail.png"
import X from "/X.png"
import Instagram from "/Instagram.png"
import { LocalizedFooter } from "../types/content";
import footerDataJson from "../data/footer.json";

const localizedData: LocalizedFooter = footerDataJson;

interface FooterProps {
    lang: 'ja' | 'en';
}

function Footer({ lang }: FooterProps) {
    const data = localizedData[lang];
    return (
        <div id='footer'>
            <div className='footer-info'>
                <h3>{data.title}</h3>
                <div className="footer-mobile-ids">
                    {data.contacts.map((c, idx) => (
                        <p key={idx}>{c.type === 'email' ? 'Mail' : c.type === 'x' ? 'X' : 'Instagram'}: {c.id}</p>
                    ))}
                </div>
            </div>
            <ul className="footer-links">
                {data.contacts.map((contact, idx) => {
                    let imgSrc = "";
                    if (contact.type === "email") imgSrc = mail;
                    if (contact.type === "x") imgSrc = X;
                    if (contact.type === "instagram") imgSrc = Instagram;
                    
                    return (
                        <li key={idx}>
                            <a href={contact.url} target="_blank" rel="noopener noreferrer">
                                <img src={imgSrc} alt={contact.type} />
                                <span className="footer-desktop-id">{contact.id}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Footer
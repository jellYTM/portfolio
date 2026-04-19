import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import icon from '/icon.png'
import { LocalizedHeader } from '../types/content'
import headerDataJson from '../data/header.json'

const localizedHeaderData: LocalizedHeader = headerDataJson;

interface HeaderProps {
    lang: 'ja' | 'en';
    setLang: (lang: 'ja' | 'en') => void;
}

function Header({ lang, setLang }: HeaderProps) {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const headerData = localizedHeaderData[lang];

    useEffect(() => {
        const handleScroll = () => {
            const distToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);
            // フッターの高さ(約58px) + 余裕を持たせた距離で判定
            setIsAtBottom(distToBottom < 70);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
        <nav style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
          <ul style={{ overflowX: 'auto', flexShrink: 1 }}>
            <Link className="Link" to="/"><img src={ icon } alt="icon" style={{ flexShrink: 0 }} /></Link>
            {headerData.links.map((link, idx) => (
                <Link key={idx} className="Link" to={link.path} style={{ flexShrink: 0 }}><li>{link.name}</li></Link>
            ))}
          </ul>
          <button 
              className={`lang-toggle-btn ${isAtBottom ? 'at-bottom' : ''}`}
              onClick={() => setLang(lang === 'ja' ? 'en' : 'ja')}
          >
              {lang === 'ja' ? 'EN' : 'JP'}
          </button>
        </nav>
      </header>
    )
}

export default Header
import { useState } from 'react'
import { JellyfishApp } from "./JellyfishAnimation.tsx"
import { LocalizedAboutMe } from "../types/content"
import aboutMeData from "../data/aboutMe.json"

const localizedData = aboutMeData as LocalizedAboutMe;

interface AboutMeProps {
    lang: 'ja' | 'en';
}

function AboutMe({ lang }: AboutMeProps) {
    const [idx, setIdx] = useState(0);
    const [careerLevel, setCareerLevel] = useState<'formal' | 'academic' | 'personal'>('formal');
    
    const data = localizedData[lang];

    return (
        <div className='wrapper'> 
            <div className='container'>
                <div className='flex-wrapper'>
                    <div className="flexbox">
                        <div className="flexImg">
                            <img src={data.profile.mainImage} alt="Profile Main" />
                            <img src={data.profile.coverImage} className='cover-img' alt="Profile Cover" />
                        </div>
                        <div className="flexInfo">
                            <h2>{data.profile.title}</h2>
                            <p><span>{data.profile.data.nameLabel}</span>： {data.profile.data.name}</p>
                            <p><span>{data.profile.data.genderLabel}</span>： {data.profile.data.gender}</p>
                            <p><span>{data.profile.data.birthdayLabel}</span>： {data.profile.data.birthday}</p>
                            <p><span>{data.profile.data.belongLabel}</span>： {data.profile.data.belong}</p>
                            <p><span>{data.profile.data.gradeLabel}</span>： {data.profile.data.grade}</p>
                        </div>
                    </div>
                </div>
                <div className='flex-wrapper'>
                    <div className='flexbox'>
                        <div className='centerTitle'><h2>{data.history.title}</h2></div>
                        <div className='flexInfo'>
                            {data.history.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex-wrapper'>
                    <div className='flexbox'>
                        <div className='centerTitle'><h2>{data.programming.title}</h2></div>
                        <div className='flexInfo'>
                            {data.programming.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='last-flex-wrapper'>
                    <div className='flexbox'>
                        <div className='centerTitle'><h2>{data.careers.title}</h2></div>
                        <div className='flexInfo'>
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', flexWrap: 'wrap', width: '100%' }}>
                                {(["formal", "academic", "personal"] as const).map(level => (
                                    <button
                                        key={level}
                                        onClick={() => setCareerLevel(level)}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            border: '1px solid #ccc',
                                            backgroundColor: careerLevel === level ? 'white' : 'transparent',
                                            color: careerLevel === level ? '#232b2b' : '#ccc',
                                            cursor: 'pointer',
                                            fontWeight: careerLevel === level ? 'bold' : 'normal',
                                            fontSize: '0.85em',
                                            transition: 'all 0.3s ease',
                                            flex: '1 1 auto',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {data.careers.levelLabels[level]}
                                    </button>
                                ))}
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {data.careers.items
                                    .filter(item => {
                                        const weight = { formal: 1, academic: 2, personal: 3 };
                                        return weight[item.type] <= weight[careerLevel];
                                    })
                                    .map((item, i) => {
                                        const getOpacity = (type: 'formal' | 'academic' | 'personal') => {
                                            if (type === 'formal') return 1.0;
                                            if (type === 'academic') return 0.85;
                                            return 0.7;
                                        };
                                        const opacity = getOpacity(item.type);
                                        return (
                                            <li key={i} style={{ marginBottom: '20px', opacity: opacity, transition: 'opacity 0.3s ease' }}>
                                                <span style={{ fontWeight: 'bold', display: 'block', color: 'gray', fontSize: '0.85em', paddingBottom: '3px' }}>{item.date}</span>
                                                <span style={{ fontSize: '1.05em', color: `rgba(255, 255, 255, ${opacity})` }}>{item.event}</span>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="JellyfishApp-background">
                <JellyfishApp idx={idx} setIdx={setIdx}/>
            </div>
        </div>
    )
}

export default AboutMe
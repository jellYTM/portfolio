import { useState } from "react";
import { JellyfishApp } from "./JellyfishAnimation";
import { LocalizedResearch } from "../types/content";
import researchDataJson from "../data/research.json";

const localizedData: LocalizedResearch = researchDataJson;

interface ResearchProps {
    lang: 'ja' | 'en';
}

function Research({ lang }: ResearchProps) {
    const researchData = localizedData[lang];
    const [idx, setIdx] = useState(0);
    return (
        <div className='wrapper'> 
            <div className='container'>
                <div className='last-flex-wrapper'>
                    <p className="left-title2">{researchData.headerText}</p>
                    {researchData.items.map((item) => (
                        <div className="flexbox" key={item.id}>
                            <div className="flexImg2"><img src={item.imageUrl} alt={item.altText} /></div>
                            <div className="flexInfo">
                                <h2>
                                    {item.titleLines.map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < item.titleLines.length - 1 && <br/>}
                                        </span>
                                    ))}
                                </h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="JellyfishApp-background">
                <JellyfishApp idx={idx} setIdx={setIdx}/>
            </div>
        </div>
    )
}

export default Research
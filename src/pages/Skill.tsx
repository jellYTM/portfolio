import { useState } from "react";
import { JellyfishApp } from "./JellyfishAnimation.tsx";
import { LocalizedSkills } from "../types/content";
import skillsDataJson from "../data/skills.json";

const localizedData: LocalizedSkills = skillsDataJson;

interface SkillProps {
    lang: 'ja' | 'en';
}

function Skill({ lang }: SkillProps) {
    const [idx, setIdx] = useState(0);
    const skillsData = localizedData[lang];
    return (
        <div className="wrapper"> 
            <div className='container'>
                <div className="flexbox-list-wrapper">
                    {skillsData.categories.map((category) => (
                        <div key={category.categoryName}>
                            <h2 className="left-title">{category.categoryName}</h2>
                            <div className='flexbox-list'>
                                {category.items.map((item) => (
                                    <div className="flexbox-container" key={item.id}>
                                        <img className="flexbox-container-image" src={item.imageUrl} alt={item.altText} />
                                        <div className="flexbox-container-info">
                                            {item.descriptions.map((desc, i) => (
                                                <p key={i}>{desc}</p>
                                            ))}
                                            {item.creditLink && (
                                                <a href={item.creditLink} title={item.creditTitle}>{item.creditText}</a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flexbox-list">
                        {skillsData.footers.map((footer, index) => (
                            <p key={index} className="left-title">
                                {footer.text}<a href={footer.link}>{footer.linkText}</a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="JellyfishApp-background">
                <JellyfishApp idx={idx} setIdx={setIdx}/>
            </div>
        </div>
    )
}

export default Skill
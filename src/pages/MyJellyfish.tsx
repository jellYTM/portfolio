import { useState } from "react";
import { JellyfishApp } from "./JellyfishAnimation";
import { LocalizedMyJellyfish } from "../types/content";
import myJellyfishDataJson from "../data/myJellyfish.json";

const localizedData: LocalizedMyJellyfish = myJellyfishDataJson;

interface MyJellyfishProps {
    lang: 'ja' | 'en';
}

function MyJellyfish({ lang }: MyJellyfishProps) {
    const myJellyfishData = localizedData[lang];
    const [idx, setIdx] = useState(0);
    return (
        <div className="wrapper"> 
            <div className='container'>
                <div>
                    <div className="flexbox-list">
                        {myJellyfishData.map((item) => (
                            <div className="flexbox-container2" key={item.id}>
                                <img className="flexbox-container-image3" src={item.imageUrl} alt={item.altText} />
                                <div className="flexbox-container-info2">
                                    <p>{item.nameJp}<br/>{item.nameSciFront} <span>{item.nameSciBack}</span></p>
                                </div>
                            </div>
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

export default MyJellyfish
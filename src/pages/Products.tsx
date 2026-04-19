import { useState } from "react";
import { JellyfishApp } from "./JellyfishAnimation";
import { LocalizedProducts } from "../types/content";
import productsDataJson from "../data/products.json";

const localizedData: LocalizedProducts = productsDataJson;

interface ProductsProps {
    lang: 'ja' | 'en';
}

function Products({ lang }: ProductsProps) {
    const productsData = localizedData[lang];
    const [idx, setIdx] = useState(0);
    return (
        <div className='wrapper'> 
            <div className='container'>
                <h2 className="left-title2">{productsData.mainTitle}</h2>
                {productsData.mainItems.map((item, index) => (
                    <div className={index === 0 ? 'first-flex-wrapper' : 'flex-wrapper'} key={item.id}>
                        <div className="flexbox">
                            <div className={index === 0 ? "flexImg2" : "flexImg3"}>
                                <img src={item.imageUrl} alt={item.altText} />
                            </div>
                            <div className="flexInfo">
                                <h2>{item.title}</h2>
                                {item.subtitle && <p>{item.subtitle}</p>}
                                {item.descriptions.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                                {item.link && (
                                    <a href={item.link}>{item.linkText}</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                
                <h2 className="left-title2">{productsData.otherTitle}</h2>
                <div className="flexbox-list-wrapper">
                    <div className="flexbox-list">
                        {productsData.otherItems.map((item) => (
                            <div className="flexbox-container" key={item.id}>
                                <img className="flexbox-container-image2" src={item.imageUrl} alt={item.altText} />
                                <div className="flexbox-container-info">
                                    <h2>{item.title}</h2>
                                    {item.descriptions.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                    {item.link && (
                                        <p><a href={item.link}>{item.linkText}</a></p>
                                    )}
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

export default Products
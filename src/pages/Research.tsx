import { useState } from "react"
import { JellyfishApp } from "./JellyfishAnimation"
import JellyfishTrackingSystem from "../assets/JellyfishTrackingSystem.gif"

function Research() {
    const [idx, setIdx] = useState(0);
    return (
        <div className='wrapper'> 
            <div className='container'>
                <div className='last-flex-wrapper'>
                    <p className="left-title2">まだ世に出していないものが多く、学会で発表した内容を軽く掲載しています。</p>
                    <div className="flexbox">
                        <div className="flexImg2"><img src={JellyfishTrackingSystem} /></div>
                        <div className="flexInfo">
                            <h2>拍動パターンの<br/>自動分類・種間比較</h2>
                            <p>開発物にあるJellyfish Tracking Systemを用いてクラゲの拍動リズムをトラックし、機械学習アルゴリズムを用いて分類し、系統比較をする研究をしています。</p>
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

export default Research
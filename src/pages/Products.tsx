import { JellyfishApp } from "./JellyfishAnimation"
import JellyfishTrackingSystem from "../assets/JellyfishTrackingSystem.gif"
import NewsR from "../assets/NewsR.png"
import { useState } from "react"

function Products() {
    const [idx, setIdx] = useState(0);
    return (
        <div className='wrapper'> 
            <div className='container'>
                <div className='flex-wrapper'>
                    <div className="flex-box">
                        <div className="flexImg2">
                            <img src={JellyfishTrackingSystem} />
                        </div>
                        <div className="flexInfo">
                            <h2>Jellyfish Tracking System</h2>
                            <p>現在開発中です</p>
                            <p>クラゲの行動解析を行うために作成しています。</p>
                            <p>とりあえず写真のようなトラッキングは可能に…</p>
                            <p>いつかはオープンソースにする予定です。</p>
                            <p>ご連絡いただければ、開発済みの機能は使えるようにします。</p>
                            <p>こんな機能欲しいという声も待ってます。</p>
                        </div>
                    </div>
                </div>
                <div className='flex-wrapper'>
                    <div className='flex-box'>
                        <div className="flexImg3">
                            <img src={NewsR} />
                        </div>
                        <div className='flexInfo'>
                            <h2>News R</h2>
                            <p>エビングハウスの忘却曲線に基づいてリマインドしてくれるLINEBotです。</p>
                            <p>浪人の時に効率的な暗記をするために作成しました。</p>
                            <p>GASで作成し、データベースにスプレッドシートを用ました。</p>
                            <p>軽くですがバックエンドをここで初めて実装しました。</p>
                            <p>今ではサイエンスなニュース等のリマインドをしてもらっています、</p>
                            <a href="https://github.com/jellYTM/News_R">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className='last-flex-wrapper'>
                    <div className='flex-box'>
                        <div className='centerTitle'><h2>プログラミングとの出会い</h2></div>
                        <div className='flexInfo'>
                            <p>割と昔から興味と憧れだけはあった。</p>
                            <p>高校生の頃、研究のためPythonを学習</p>
                            <p>そこから開発にのめりこむ</p>
                            <p>根性があればなんでも作れると思っている</p>
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

export default Products
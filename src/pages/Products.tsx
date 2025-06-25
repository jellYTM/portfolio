import { JellyfishApp } from "./JellyfishAnimation"
import JellyfishTrackingSystem from "../assets/JellyfishTrackingSystem.gif"
import NewsR from "../assets/NewsR.png"
import icon from "../assets/icon.png"
import AlbumTemplate from "../assets/AlbumTemplate.png"
import { useState } from "react"

function Products() {
    const [idx, setIdx] = useState(0);
    return (
        <div className='wrapper'> 
            <div className='container'>
                <h2 className="left-title">主要な開発物</h2>
                <div className='flex-wrapper'>
                    <div className="flexbox">
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
                    <div className='flexbox'>
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
                <div className='flex-wrapper'>
                    <div className='flexbox'>
                        <div className="flexImg3">
                            <img src={icon} />
                        </div>
                        <div className='flexInfo'>
                            <h2>Portfolio</h2>
                            <p>このポートフォリオです。</p>
                            <p>クラゲのアニメーションはThree.jsで生成しています。</p>
                            <p>動画のフレーム20枚から27個のプロパティを定規で測ってデータを作成しています。</p>
                            <p>いづれクラゲのアニメの種類を増やすときは骨格推定から楽にやりたいです。</p>
                            <a href="https://github.com/jellYTM/portfolio/projects">Source Code</a>
                        </div>
                    </div>
                </div>
                <h2 className="left-title">その他の開発物</h2>
                <div className="flexbox-list-wrapper">
                    <div className="flexbox-list">
                        <div className="flexbox-container">
                            <img className="flexbox-container-image2" src={AlbumTemplate} />
                            <div className="flexbox-container-info">
                                <h2>Album Template</h2>
                                <p>GASで作ったWebページのテンプレートです。</p>
                                <p>GASにしては頑張ったと思います。</p>
                                <p>浪人期に作りました。</p>
                                <p><a href="https://script.google.com/macros/s/AKfycbzwn5L51WfwNO1fiMQqFwQ_OMPVRka29A8Nqjnyv20nPIoPMj8B05qLvxUmGoFFd5Ys/exec">Template Link</a></p>
                                <p><a href="https://github.com/jellYTM/Album_Template1">Source Code</a></p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image2" src={AlbumTemplate} />
                            <div className="flexbox-container-info">
                                <h2>Coyote AI Competition</h2>
                                <p>Coyoteというカードゲームで戦わせるAIを作りました。</p>
                                <p>初めてのベイズ推定を使った実装です。</p>
                                <p>残りカードの情報から合計値の事前分布を作り、コヨーテ宣言をしていない事実を事後分布として扱いました。
                                    （実際は事後確率を正規化定数、条件付き確率を階段関数として計算しています。）</p>
                                <p>スポンサー賞でKateSawada賞をいただきました。</p>
                                <p><a href="https://github.com/coyote-AI-competition/resource">Source Code</a></p>
                            </div>
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
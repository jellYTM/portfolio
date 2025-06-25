import { useState } from 'react'
import Me3 from '../assets/Me3.jpg'
import Me4 from '../assets/Me4.jpg'
import {JellyfishApp} from "./JellyfishAnimation.tsx"

function AboutMe() {
    const [idx, setIdx] = useState(0);
    return (
        <div className='wrapper'> 
            <div className='container'>
                <div className='flex-wrapper'>
                    <div className="flexbox">
                        <div className="flexImg">
                            <img src={Me3} />
                            <img src={Me4} className='cover-img'/>
                        </div>
                        <div className="flexInfo">
                            <h2>Profile</h2>
                            <p><span>氏名</span>： 竹内 優輝 （Masaki Takeuchi）</p>
                            <p><span>性別</span>： 男</p>
                            <p><span>誕生日</span>： 2004年 12月 1日 （20歳）</p>
                            <p><span>所属</span>： 名古屋大学 理学部 生命理学科</p>
                            <p><span>学年</span>： 学部 2年</p>
                        </div>
                    </div>
                </div>
                <div className='flex-wrapper'>
                    <div className='flexbox'>
                        <div className='centerTitle'><h2>海月との歩み</h2></div>
                        <div className='flexInfo'>
                            <p>小学生の頃、母親に買ってもらった危険生物の図鑑でクラゲに興味を持つ</p>
                            <p>中学ではいつの間にかアイデンティティへ</p>
                            <p>高校の時に所属していた自然科学部で研究を始める</p>
                            <p>そして現在に至る…</p>
                        </div>
                    </div>
                </div>
                <div className='last-flex-wrapper'>
                    <div className='flexbox'>
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

export default AboutMe
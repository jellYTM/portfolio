import { useState } from 'react'
import Me3 from '/Me3.jpg'
import Me4 from '/Me4.jpg'
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
                            <p><span>Name</span>: Masaki Taleuchi</p>
                            <p><span>Gender</span>: Male</p>
                            <p><span>Birthday</span>: Dec. 1st, 2004. (20yrs)</p>
                            <p><span>Belong</span>: Biological Science, Nagoya University</p>
                            <p><span>Grade</span>: 2nd year</p>
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
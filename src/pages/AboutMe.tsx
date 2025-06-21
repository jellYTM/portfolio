import Me1 from '../assets/Me1.jpg'
import JellyfishApp from "./JellyfishAnimation.tsx"

function AboutMe() {
    return (
        <div id='AboutMe'> 
            <div id="JellyfishApp-background">
                <JellyfishApp />
            </div>
            <div className='container'>
                <div className="flex-box">
                    <div className="flexImg"><img src={Me1} /></div>
                    <div className="flexInfo">
                        <h2>Base Info</h2>
                        <p><span>氏名</span>： 竹内 優輝 （Masaki Takeuchi）</p>
                        <p><span>性別</span>： 男</p>
                        <p><span>誕生日</span>： 2004年 12月 1日 （20歳）</p>
                        <p><span>所属</span>： 名古屋大学 理学部 生命理学科</p>
                        <p><span>学年</span>： 学部 2年</p>
                    </div>
                </div>
                <div className='flex-box'>
                    <div className='centerTitle'><h2>More Info</h2></div>
                    <div className='BaseInfo'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
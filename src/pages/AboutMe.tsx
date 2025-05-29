import Me1 from '../assets/Me1.jpg'

function AboutMe() {
    return (
        <> 
            <h1>About Me</h1>
            <div id="Base-and-img">
                <img src={Me1} />
                <div id="BaseInfo">
                    <h2>Base Info</h2>
                    <p><span>氏名</span>： 竹内 優輝 （Masaki Takeuchi）</p>
                    <p><span>性別</span>： 男</p>
                    <p><span>誕生日</span>： 2004年 12月 1日</p>
                    <p><span>所属</span>： 名古屋大学 理学部 生命理学科</p>
                    <p><span>学年</span>： 学部 2年</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe
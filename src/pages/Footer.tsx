import mail from "/mail.png"
import X from "/X.png"
import Instagram from "/Instagram.png"

function Footer() {
    return (
        <div id='footer'>
            <ul>
                <li><a href="mailto:t.masaki1226@outlook.jp"></a><img src={mail} /></li>
                <li><a href="https://x.com/nj8Jr31dRi4mqy8"></a><img src={X} /></li>
                <li><a href="https://www.instagram.com/tj.masaki/?igsh=MWc5OW9sNTV3cGF4Nw%3D%3D#"></a><img src={Instagram} /></li>
            </ul>
        </div>
    )
}

export default Footer
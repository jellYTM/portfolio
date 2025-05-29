import { Link } from 'react-router-dom'
import icon from '../assets/icon.png'

function Header() {
    return (
        <header>
        <nav>
          <ul>
            <Link className="Link" to="/"><img src={ icon } /></Link>
            <Link className="Link" to="/AboutMe"><li>About me</li></Link>
            <Link className="Link" to="/Skill"><li>スキル</li></Link>
            <Link className="Link" to="/Products"><li>開発物</li></Link>
            <Link className="Link" to="/MyJellyfish"><li>クラゲ図鑑</li></Link>
            <Link className="Link" to="/Research"><li>研究</li></Link>
          </ul>
        </nav>
      </header>
    )
}

export default Header
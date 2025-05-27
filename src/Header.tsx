import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
        <nav>
          <ul>
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/AboutMe">About me</Link></li>
            <li><Link to="/Skill">スキル</Link></li>
            <li><Link to="/Products">開発物</Link></li>
            <li><Link to="/MyJellyfish">クラゲ図鑑</Link></li>
            <li><Link to="/Research">研究</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header
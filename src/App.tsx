import './AppApp.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li><link to="#">ホーム</a></li>
              <li><a href="#">About me</a></li>
              <li><a href="#">スキル</a></li>
              <li><a href="#">開発物</a></li>
              <li><a href="#">お問い合わせ</a></li>
            </ul>
          </nav>
        </header>
        <h1>Masaki Takeuchi</h1>
        <div>
          <h2>About me</h2>
          <p>Name: Masaki Takeuchi（竹内優輝）</p>
          <p>Gender: Male</p>
          <p>BirthDay: 2004 12/1 </p>
          <p>Affliation: Nagoya univ. Department of Biological Science </p>
          <p>Dream: Enginier & Researcher in biological science</p>
          <p>Hobby: Coding and Reading book
          <p>Favorite: Mcdnald's</p>
          </p>
        </div>
        <h2>Skill</h2>
        <h2>Works</h2>
        <h2>Contact</h2>
      </BrowserRouter>
    </>
  )
}

export default App

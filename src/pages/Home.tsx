import {JellyfishApp, JellyfishPatternInfo} from "./JellyfishAnimation.tsx"
import blueprint1 from "../assets/Aurelia.sp Bone - blueprint 1 umbrella_20250615210700.png"
import blueprint2 from "../assets/Aurelia.sp Bone - blueprint 1 oral,tent_20250615210553.png"
import { useState } from "react"

function Home() {
    const [idx, setIdx] = useState(0)
    return (
        <div id="Home">
            <div id="bluebrint-container">
                <div id="Title-wrapper">
                    <h1>My Portfolio</h1>
                    <p className="pc">Please hover the mouse over</p>
                    <p className="tablet">Please tap Here</p>
                    <p className="phone">I want you to watch from PC or tablet...</p>
                </div>
                <img className="blueprint" id="blueprint1" src={blueprint1}/>
                <img className="blueprint" id="blueprint2" src={blueprint2}/>
                <JellyfishPatternInfo idx={idx} setIdx={setIdx}/>
                <div id="JellyfishInfo">
                    <p>Model Name: Moon Jelly（Aurelia sp.）</p>
                </div>
            </div>
            <div id="JellyfishApp-container"><JellyfishApp idx={idx} setIdx={setIdx}/></div>
        </div>
    )
}

export default Home
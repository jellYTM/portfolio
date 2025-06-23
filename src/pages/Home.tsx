import JellyfishApp from "./JellyfishAnimation.tsx"
import blueprint1 from "../assets/Aurelia.sp Bone - blueprint 1 umbrella_20250615210700.png"
import blueprint2 from "../assets/Aurelia.sp Bone - blueprint 1 oral,tent_20250615210553.png"

function Home() {
    return (
        <div id="Home">
            <div id="bluebrint-container">
                <div id="Title-wrapper">
                    <h1>My Portfolio</h1>
                </div>
                <img className="blueprint" id="blueprint1" src={blueprint1}/>
                <img className="blueprint" id="blueprint2" src={blueprint2}/>
            </div>
            <JellyfishApp />
        </div>
    )
}

export default Home
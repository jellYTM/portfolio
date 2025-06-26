import { useState } from "react"
import { JellyfishApp } from "./JellyfishAnimation"
import Hydrocoryne_miurensis from "/Jellyfish/Hydrocoryne_miurensis.jpg"
import Cludonema_pacificum from "/Jellyfish/Cludonema_pacificum.jpg"

function MyJellyfish() {
    const [idx, setIdx] = useState(0);
    return (
        <div className="wrapper"> 
            <div className='container'>
                <div>
                    <div className="flexbox-list">
                        <div className="flexbox-container2">
                            <img className="flexbox-container-image3" src={Hydrocoryne_miurensis}/>
                            <div className="flexbox-container-info2">
                                <p>オオタマウミヒドラ<br/>Hydrocoryne <span>miurensis</span></p>
                            </div>
                        </div>
                        <div className="flexbox-container2">
                            <img className="flexbox-container-image3" src={Cludonema_pacificum}/>
                            <div className="flexbox-container-info2">
                                <p>エダアシクラゲ<br/>Cludonema <span>pacificum</span></p>
                            </div>
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

export default MyJellyfish
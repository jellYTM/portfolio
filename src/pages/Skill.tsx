import {JellyfishApp} from "./JellyfishAnimation.tsx"
import R from "/r.png"
import GAS from "/google-apps-script.png"
import Blogger from "/blogger.png"
import { useState } from "react";

function Skill() {
    const [idx, setIdx] = useState(0);
    return (
        <div className="wrapper"> 
            <div className='container'>
                <div className="flexbox-list-wrapper">
                    <h2 className="left-title">Language</h2>
                    <div className='flexbox-list'>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                            <div className="flexbox-container-info">
                                <p>初めて触ったプログラミング言語（VBAを除く）</p>
                                <p>主に画像トラッキングやAIの開発に使用</p>
                                <p>研究は大体こいつ</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src={R} />
                            <div className="flexbox-container-info">
                                <p>グラフの作成で少し使用</p>
                                <p>最近は大体Python</p>
                                <a href="https://www.flaticon.com/free-icons/r" title="r icons">R icons created by Becris - Flaticon</a>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            <div className="flexbox-container-info">
                                <p>高３の時に憧れで勉強しました。</p>
                                <p>最近はtsx</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                            <div className="flexbox-container-info">
                                <p>htmlと一緒に勉強</p>
                                <p>そろそろTailwind CSSとやらも触ってみたい</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                            <div className="flexbox-container-info">
                                <p>js自身で書いたことはほぼ皆無</p>
                                <p>大体GASかtsで</p>
                                <p>paizaのコーディングチェックで使ったくらい</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"  />
                            <div className="flexbox-container-info">
                                <p>サークルの先輩に教えていただいた</p>
                                <p>なんやかんや使いやすい</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src={GAS} />
                            <div className="flexbox-container-info">
                                <p>Pythonの次に触った言語</p>
                                <p>Google大好きな私に最適性</p>
                                <p>この言語でWebアプリを初めて作成</p>
                                <a href="https://www.flaticon.com/free-icons/google-apps-script" title="google apps script icons">Google apps script icons created by Freepik - Flaticon</a>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                            <div className="flexbox-container-info">
                                <p>Unityで使用</p>
                                <p>あんまり開発経験はないです</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="left-title">Framework</h2>
                    <div className="flexbox-list">
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                            <div className="flexbox-container-info">
                                <p>tsと一緒に先輩に教えていただきました</p>
                                <p>抵抗はあったけど、フック使いやすい</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                            <div className="flexbox-container-info">
                                <p>typescriptの開発でお世話になってます。</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="left-title">Platform</h2>
                    <div className="flexbox-list">
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                            <div className="flexbox-container-info">
                                <p>言わずもがな使ってます</p>
                                <p>高校の時の自分に教えてあげたい</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"  />
                            <div className="flexbox-container-info">
                                <p>tsとreactと一緒に先輩にご教授いただいた</p>
                                <p>脱GASの要因</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src={Blogger}  />
                            <div className="flexbox-container-info">
                                <p>html,cssの勉強で一瞬使いました</p>
                                <p>使いにくかったです</p>
                                <a href="https://www.flaticon.com/free-icons/blogger" title="blogger icons">Blogger icons created by riajulislam - Flaticon</a>
                            </div>
                        </div>
                    </div>
                    <h2 className="left-title">Software</h2>
                    <div className="flexbox-list">
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                            <div className="flexbox-container-info">
                                <p>最初飲み込むのに苦労しました</p>
                                <p>できるだけCLIで使うようにしています</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"  />
                            <div className="flexbox-container-info">
                                <p>開発でほとんど使っています</p>
                                <p>これ無しでコーディングはしたくない</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"  />
                            <div className="flexbox-container-info">
                                <p>すこし勉強しました</p>
                                <p>基本的なものは作れます</p>
                            </div>
                        </div>
                        <div className="flexbox-container">
                            <img className="flexbox-container-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"  />
                            <div className="flexbox-container-info">
                                <p>サークルの開発で2Dマリオライクなものを作りました</p>
                            </div>
                        </div>
                        <p className="left-title">Icons by <a href="https://devicon.dev/">Devicon</a></p>
                        <p className="left-title">Icons by <a href="https://www.flaticon.com/">Flaticon</a></p>
                    </div>
                </div>
            </div>
            <div className="JellyfishApp-background">
                <JellyfishApp idx={idx} setIdx={setIdx}/>
            </div>
        </div>
    )
}

export default Skill
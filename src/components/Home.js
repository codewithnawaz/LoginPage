
import { faGlobe, faEye,faInstagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = () => {
    return (
        <>
            <div class="container-main">
                <div class="container-left bg-cover">
                    <img class="text-img" src="./images/text.png" alt="" />
                    <p class="p1">100% Uptime<img class="emoji" src="./images/emoji.png" alt="" /></p>
                    <p class="p2">Zero infrastructure <br />Management</p>
                    <p class="p3"><FontAwesomeIcon icon={faGlobe} /> aesthisia.com</p>
                    <div class="icons">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </div>
                </div>
                <div class="container-right">
                    <div className="container">
                        <div class="logo"><img class="image" src="./images/petals 1.png" alt="" width="100px" /></div>
                        <p class="p4">Welcome <mark class="green bg-transparent text-teal-600">Back!</mark></p>
                        <p class="grey text-neutral-500 font-normal mb-7">Glad to see you, Again!</p>
                        <div class="formDiv">
                            <form class="form" action="submit">
                                <input class="input mb-5" type="text" placeholder='Enter your email' />
                                <input class="input" type="password" placeholder='Enter your password' />
                                <span class="psswrd text-neutral-400 font-normal mb-9 text-sm">forgot password?</span>
                                <div class="button">
                                    <button class="btn">Log In</button>
                                    <span class="mt-12">Don't have account yet? <mark class="green bg-transparent text-teal-600"> Sign Up </mark></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
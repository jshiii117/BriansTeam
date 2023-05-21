import './page.css'

export default function LandingPage(){
    return(
        <div className='container'>
            <div className='navBar'>
                <div className='logo'>
                    <a href='/landingPage'>
                        <img src='/logo.png'></img>
                    </a>
                </div>  
                <div className='moto'>
                    Chat Through History
                </div>
            </div>

            <div className='mainBody'>
                <div className='leftContainer'>
                    <div className='leftContainerTitle'>
                        Chat Through History
                    </div>

                    <div className='leftContainerText'>
                        Your AI powered chat companion to learn <br></br>
                        from famous figures
                    </div>

                    <div className='grayBar'></div>

                    <a href='/'>

                    <div className='chatNowBTN'>
                        Chat Now
                    </div>
                    </a>
                </div>

                <div className='rightContainer'>
                    <div className='image'>
                        <img src='/landingPageImage.png'>
                        </img>
                    </div>
                </div>
            </div>

        </div>
    )
}
import './page.css'

export default function SelectionPage(){
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
                    <div className='leftImage'>
                        <img src="/elonImage.png"></img>
                    </div>

                    <div className='leftTitle'>
                        Chat with Elon 
                    </div>

                    <div className='leftDescription'>
                        Elon Musk is a visionary entrepreneur and innovator known for his leadership in companies like SpaceX, Tesla, and Neuralink, as well as his ambition to revolutionize space exploration, sustainable energy, and transportation.
                    </div>

                    <div className='grayBar'></div>

                
                    <a href='/' className='leftChatBTN'>
                        <div >
                            Chat With Elon
                        </div>
                    </a>
                    
                </div>
                
                <div className='middleContainer'>
                    <div className='middleImage'>
                        <img src="/guyImage.png"></img>
                    </div>

                    <div className='middleTitle'>
                        Chat with Guy
                    </div>

                    <div className='middleDescription'>
                        Guy Fieri is a celebrity chef, restaurateur, and television personality known for his energy, enthusiasm and signature blond hair. He gained fame as the host of the Food Network shows "Diners, Drive-Ins and Dives" and "Guy's Grocery Games." 
                    </div>

                    <div className='grayBar'></div>

                    <a href='/' className='leftChatBTN'>
                        <div >
                            Chat With Guy
                        </div>
                    </a>
                </div>
                
                <div className='rightContainer'>
                    <div className='rightImage'>
                        <img src="/charlesImage.png"></img>
                    </div>

                    <div className='rightTitle'>
                        Chat with Charles
                    </div>

                    <div className='rightDescription'>
                        Charles Darwin was a British naturalist and biologist who proposed the theory of evolution through natural selection. His groundbreaking work, "On the Origin of Species," revolutionized our understanding of life's diversity and interconnectedness. 
                    </div>

                    <div className='grayBar'></div>

                    <a href='/' className='leftChatBTN'>
                        <div >
                            Chat With Charles
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}
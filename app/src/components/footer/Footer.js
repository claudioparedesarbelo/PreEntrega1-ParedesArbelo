import './Footer.css'
import LogoNike from '../../img/nike.png'
import Instagram from '../../img/instagram.svg'
import Facebook from '../../img/facebook.svg'
import Twitch from '../../img/twitch.svg'
import Twitter from '../../img/twitter.svg'
import Youtube from '../../img/youtube.svg'

const Footer = () => {
 
    return(
        <div className='Footer'>
            
            <a className='LogoNike'><img src={LogoNike}></img></a>
            
            <h2>Tienda Nike Official</h2>
            <div className='Iconos'>
                <img src={Instagram}/>
                <img src={Facebook}/>
                <img src={Twitch}/>
                <img src={Twitter}/>
                <img src={Youtube}/>
            </div>
        </div>       
        
    )
    
    }
    
    export default Footer 
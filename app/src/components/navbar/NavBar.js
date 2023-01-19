import { Link } from 'react-router-dom'

import './NavBar.css'
import CardWidget from '../cardwidget/CardWidget.js'
import { Button } from 'react-bootstrap';
import LogoNike from '../../img/nike.png'

const NavBar = () => {
 
return(
    <header className='NavBar'>
       <div>
       <a className='LogoNike'><img src={LogoNike}></img></a>
       <p>Tienda Nike Official</p>
       </div>
       <div>
       <Button variant="outline-secondary">Home</Button>{' '}
       <Button variant="outline-secondary">Productos</Button>{' '}
       <Button variant="outline-secondary">Categorias</Button>{' '}
       <Button variant="outline-secondary">Nosotros</Button>{' '}
       <CardWidget></CardWidget>
        </div>
        
    </header>
)

}

export default NavBar 
import './CardWidget.css'
import CarritoImg from '../../img/anadir-a-la-cesta.png'
const CardWidget = (props) => {
    return(
        <a className='Carrito' href='#'><img src={CarritoImg}></img></a>
        
    )


}

export default CardWidget
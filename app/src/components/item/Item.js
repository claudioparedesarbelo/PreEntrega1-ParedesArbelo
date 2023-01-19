import './Item.css'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import ItemCount from '../itemCount/ItemCount'



const Item = (props) => {
    const {id, articulo, nombre, precio, stock} = props.data

     
     return (

        <Card className='card-separated'>
            <Card.Header as="h5">{articulo}</Card.Header>
            <Card.Body>
                <Card.Title>{nombre} || Value ={precio}</Card.Title>
                <Link to={`/producto/${id}`}> Ver Detalle del Producto </Link>
                <ItemCount stock={stock} />
                
            </Card.Body>
        </Card>


    )

}

export default Item
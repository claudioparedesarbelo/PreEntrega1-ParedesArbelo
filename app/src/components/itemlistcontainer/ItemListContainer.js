import './ItemListContainer.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Zapatilla1 from '../../img/zapatilla01.jpg'
import Zapatilla2 from '../../img/zapatilla02.jpg'
import Zapatilla3 from '../../img/pantufla.jpg'

const ItemListContainer = (props) => {

    return (
        <div className='Productos'>

        <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={Zapatilla1} />
        <Card.Body>
          <Card.Title>zapatillas</Card.Title>
          <Card.Text>
          Nike revolution 6 0454
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Zapatilla2} />
        <Card.Body>
          <Card.Title>zapatillas</Card.Title>
          <Card.Text>
          Nike waffle trainer 2
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Zapatilla3} />
        <Card.Body>
          <Card.Title>zapatillas</Card.Title>
          <Card.Text>
          Nike waffle trainer 2
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
      </div>
      
    )
}

export default ItemListContainer
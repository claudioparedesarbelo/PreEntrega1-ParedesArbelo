/* Modulos */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes , Route } from 'react-router-dom';


/* Estilos */
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/* Componentes */
import NavBar from './components/navbar/NavBar.js' 
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import Footer from './components/footer/Footer.js'
import Home from './components/home/Home';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import AboutUs from './components/aboutUs/AboutUs';

/* Webvitals */
import reportWebVitals from './reportWebVitals';


/* Logica */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    <NavBar/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/productos' element={<ItemListContainer greeting='Estamos en la lista de productos'/>}/>
        <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>
        <Route exact path='/nosotros' element={<AboutUs/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();

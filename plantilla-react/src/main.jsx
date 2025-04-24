import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './header.jsx'
import Home from './Home/home.jsx'
import Menu from './Menu/menu.jsx'
import Contacto from './Contacto/contacto.jsx'
import Footer from './footer.jsx'
import BotonWhatsApp from './botonWhatsapp.jsx'






// IMAGENES
import logo from "./assets/img/1.png" //Logo de Hero

import paquete_1 from "./assets/img/2.png" //Imagen de Paquete 1
import paquete_2 from "./assets/img/3.png" //Imagen de Paquete 2
import paquete_3 from "./assets/img/5.png" //Imagen de Paquete 3


// IMAGENES DE PRODUCTOS EN MENÚ
import menu__1 from "./assets/img/2.png" //Imagen de Producto 1
import menu__2 from "./assets/img/3.png" //Imagen de Producto 2
import menu__3 from "./assets/img/5.png" //Imagen de Producto 3
import menu__4 from "./assets/img/6.png" //Imagen de Producto 4
import menu__5 from "./assets/img/7.png" //Imagen de Producto 5
import menu__6 from "./assets/img/8.png" //Imagen de Producto 6
import menu__7 from "./assets/img/9.png" //Imagen de Producto 7




// INFORMACION DE ADMINISTRADOR
const telefono = "+525561369256"
const nombreNegocio = "Luz y Café"
const textoHero = '"El mejor café, bajo la luz que inspira tus ideas."'
const imgInicio = logo;
const ubicacion = 
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860711354!2d-99.16888681117258!3d19.427023124964272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1745522776108!5m2!1ses!2smx";
const enlaces = [
  {
    nombre: "Facebook",
    enlace: "https://www.facebook.com/profile.php?id=61563336665877"
  },
  {
    nombre: "Instagram",
    enlace: "https://www.instagram.com/ki_infinity/"
  },
  {
    nombre: "Whatsapp",
    enlace: "https://api.whatsapp.com/send?phone=+525561369256&text=Hola, quiero información sobre tus productos"
  }
]

// Sección inicio
const seccionInicio = "Ofertas"

// INFORMACION DE PAQUETES
const informacionPaquetes = [
  {
    nombrePaquete: "Café Expreso",
    precio: 20,
    imagen: paquete_1,
    descripcion: "200 ml | Incluye 1 croussant chico de chocolate",
    tel: telefono,
    mensaje: "Quiero realizar el pedido de esta oferta: "
  },

  {
    nombrePaquete: "Café Americano",
    precio: 25,
    imagen: paquete_2,
    descripcion: "200ml | Incluye 1 croussant chico de chocolate",
    tel: telefono,
    mensaje: "Quiero realizar el pedido de esta oferta: "
  },

  {
    nombrePaquete: "Croussant grande",
    precio: 17,
    imagen: paquete_3,
    descripcion: "Sabor a elegir entre: | chocolate | vainilla",
    tel: telefono,
    mensaje: "Quiero realizar el pedido de esta oferta: "
  }

]


// INFORMACIÓN DE PRODUCTOS DE LA SECCIÓN MENÚ
const secciones = ["Cafeteria", "Panaderia", "Desayunos"]


const productos = [
  {
    seccion : "Cafeteria",
    id: "1",
    nombre: "Café Expresso (200 ml)",
    precio: 35,
    imagen: menu__1,
    cantidad: 0
  },
  {
    seccion : "Cafeteria",
    id: "2",
    nombre: "Capuchino 400 ml",
    precio: 60,
    imagen: menu__2,
    cantidad: 0
  },
  {
    seccion : "Panaderia",
    id: "3",
    nombre: "Croussant chico",
    precio: 13,
    imagen: menu__3,
    cantidad: 0
  },
  {
    seccion : "Panaderia",
    id: "4",
    nombre: "Rol de canela",
    precio: 20,
    imagen: menu__4,
    cantidad: 0
  },
  {
    seccion : "Panaderia",
    id: "5",
    nombre: "Panque sabor a elegir (nuez, chocolate, vainilla)",
    precio: 14,
    imagen: menu__5,
    cantidad: 0
  },
  {
    seccion : "Desayunos",
    id: "6",
    nombre: "Sanwitch sabor a elegir (huevo, salchicha, milanesa, jamon)",
    precio: 25,
    imagen: menu__6,
    cantidad: 0
  },
  {
    seccion : "Desayunos",
    id: "7",
    nombre: "Baguette 3 ingredientes a elegir (huevo, salchicha, milanesa, jamon, tocino, pierna, chuleta)",
    precio: 55,
    imagen: menu__7,
    cantidad: 0
  }
]



//****** APP  *************
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    {/* CONTENEDOR PRINCIPAL */}
      <div className='contenedor_principal'>

        {/* HEADER */}
        <Header marca={ nombreNegocio } />


        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home logo = {imgInicio} paquetes={informacionPaquetes} textoHero={textoHero} seccionInicio={seccionInicio} marca={nombreNegocio} />} />
          <Route path="/menu" element={<Menu productos={productos} tel={telefono} secciones={secciones} />} />
          <Route path="/contacto" element={<Contacto enlaces={enlaces} ubicacion={ubicacion} />} />
        </Routes>

        {/* BOTON WHATSAPP */}
        <BotonWhatsApp tel={telefono} mensaje="Hola, quiero información sobre tus productos" />
        {/* FOOTER */}
        
      </div>
      <Footer marca={nombreNegocio} año="2025"/>
    </BrowserRouter>
  </StrictMode>
)

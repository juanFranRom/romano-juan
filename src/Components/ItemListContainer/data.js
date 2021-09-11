import uuid from 'react-uuid'
import imagenBChorizo from '../../assets/Images/Bife de Chorizo.jpg'
import imagenBLomo from '../../assets/Images/Bola de Lomo.jpg'
import imagenTomahawk from '../../assets/Images/Tomahawk.jpg'
import imagenMCerdo from '../../assets/Images/Matambre de Cerdo.jpg'
import imagenRiñon from '../../assets/Images/Riñon.jpg'
import imagenVTernera from '../../assets/Images/Vacio de Ternera.jpg'


export const data = [
    {
        id: uuid(),
        name: "Bife de Chorizo",
        image: imagenBChorizo,
        precio: 700,
        stock: 10
    },
    {
        id: uuid(),
        name: "Bola de Lomo",
        image: imagenBLomo,
        precio: 700,
        stock: 10
    },
    {
        id: uuid(),
        name: "Tomahawk",
        image: imagenTomahawk,
        precio: 700,
        stock: 10
    },
    {
        id: uuid(),
        name: "Matambre de Cerdo",
        image: imagenMCerdo,
        precio: 700,
        stock: 10
    },
    {
        id: uuid(),
        name: "Riñon",
        image: imagenRiñon,
        precio: 700,
        stock: 10
    },
    {
        id: uuid(),
        name: "Vacio",
        image: imagenVTernera,
        precio: 700,
        stock: 10
    },
]
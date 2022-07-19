export const productos = [
{
    id:1, 
    category: 'Mothers',
    description: 'MAXSUN Z690', 
    img: 'https://picsum.photos/200', 
    name: 'MotherBoard',
    price: 5000,
    stock: 5, 
},
{
    id:2, 
    category:'Cpus',
    description: 'I5 9800F', 
    img: 'https://picsum.photos/201', 
    name: 'CPU', 
    price: 10000,
    stock: 5, 
},
{   
    id:3, 
    category:'Gpus',
    description: 'Nvidia 1070 ti', 
    img: 'https://picsum.photos/202', 
    name: 'GPU', 
    price: 30000,
    stock: 5, 
},
{
    id:4, 
    category:'Discos',
    description: 'Disco HDD de 1TB', 
    img: 'https://picsum.photos/203', 
    name: 'Discos', 
    price: 4000,
    stock: 5, 
},
];
const producto = {id:1, name: 'MotherBoard', description: 'MAXSUN Z690', img: 'https://picsum.photos/200', stock: 5, category: 'mothers'}

export const getProds = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(productos)
        },500)
    })
}

export const getProd = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(producto)
        },2000)
    })
}

import { Product } from '@/types/Product';

export const products: Product[] = [
    {
        id: 1,
        name: 'Laptop Gamer Pro',
        price: 1299.99,
        image: 'https://picsum.photos/300/200?random=1',
        description: 'Laptop de alto rendimiento para gaming y trabajo profesional',
        category: 'Electrónica',
        stock: 15
    },
    {
        id: 2,
        name: 'Smartphone Ultra',
        price: 899.99,
        image: 'https://picsum.photos/300/200?random=2',
        description: 'Teléfono con cámara de 108MP y batería de larga duración',
        category: 'Electrónica',
        stock: 25
    },
    {
        id: 3,
        name: 'Auriculares Bluetooth',
        price: 149.99,
        image: 'https://picsum.photos/300/200?random=3',
        description: 'Cancelación de ruido activa y 30h de batería',
        category: 'Audio',
        stock: 40
    },
    {
        id: 4,
        name: 'Smart Watch Pro',
        price: 299.99,
        image: 'https://picsum.photos/300/200?random=4',
        description: 'Monitor de salud con GPS y resistencia al agua',
        category: 'Wearables',
        stock: 20
    },
    {
        id: 5,
        name: 'Tablet 10"',
        price: 449.99,
        image: 'https://picsum.photos/300/200?random=5',
        description: 'Pantalla 2K, 128GB almacenamiento, perfecta para diseño',
        category: 'Electrónica',
        stock: 18
    },
    {
        id: 6,
        name: 'Cámara DSLR',
        price: 799.99,
        image: 'https://picsum.photos/300/200?random=6',
        description: '24MP, grabación 4K, kit de lentes incluido',
        category: 'Fotografía',
        stock: 12
    }
];

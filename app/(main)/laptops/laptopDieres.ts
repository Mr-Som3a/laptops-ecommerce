import { Laptop } from "@/hooks/declare";
import { model } from "mongoose";

export const laptops: Laptop[] = [
    {
        id: 1,
        title: 'Dell Latitude 7290',
        model:' Latitude',
        category: 'dell',
        description:'Item Package Dimension - 15799999983884L x 1249999998725W x 2699999997246H inches',
        price: 340,
        offer:15,
        img: ['https://m.media-amazon.com/images/I/61-EN1HSS5L._AC_SX679_.jpg','https://m.media-amazon.com/images/I/71eVxVzkO8L._AC_SX522_.jpg','https://m.media-amazon.com/images/I/712mbn6KKJL._AC_SX679_.jpg']
    },
    {
        id: 2,
        title: 'Laptop 15-fd0095wm',
        model:'A2BZ9UA#ABA',
        category: 'hp',
        description:'High performance: 12th Gen Intel Core processors distributes performance where you need it the most — saving you time and increasing your ability to do the things you actually want.',
        price: 280,
        offer:15,
        img: ['https://m.media-amazon.com/images/I/61-EN1HSS5L._AC_SX679_.jpg','https://m.media-amazon.com/images/I/71eVxVzkO8L._AC_SX522_.jpg','https://m.media-amazon.com/images/I/712mbn6KKJL._AC_SX679_.jpg']
    },
    {
        id: 3,
        title: 'MacBook Air',
        model:'13-inch MacBook Air (M3, 2024)',
        category: 'Mac',
        description:'LEAN. MEAN. M3 MACHINE—The blazing-fast MacBook Air with the M3 chip is a superportable laptop that sails through work and play.',
        price: 400,
        offer:15,
        img: ['https://m.media-amazon.com/images/I/61-EN1HSS5L._AC_SX679_.jpg','https://m.media-amazon.com/images/I/71eVxVzkO8L._AC_SX522_.jpg','https://m.media-amazon.com/images/I/712mbn6KKJL._AC_SX679_.jpg']
    },
    {
        id: 4,
        title: 'Lenovo Newest V15',
        model:'Lenovo V15',
        category: 'lenovo',
        description:'[High Speed RAM And Enormous Space] 16GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once; 512GB PCIe NVMe M.2 Solid State Drive allows to fast bootup and data transfer',
        price: 560,
        offer:15,
        img: ['https://m.media-amazon.com/images/I/61-EN1HSS5L._AC_SX679_.jpg','https://m.media-amazon.com/images/I/71eVxVzkO8L._AC_SX522_.jpg','https://m.media-amazon.com/images/I/712mbn6KKJL._AC_SX679_.jpg']
    },
    {
        id: 5,
        title: 'ASUS Vivobook 15',
        model:'X1504VA-NJ121W',
        category: 'lenovo',
        description:'13th Gen Intel Core i7-1355U ASUS webcam shield for instant privacy',
        price: 370,
        offer:15,
        img: ['https://m.media-amazon.com/images/I/61-EN1HSS5L._AC_SX679_.jpg','https://m.media-amazon.com/images/I/71eVxVzkO8L._AC_SX522_.jpg','https://m.media-amazon.com/images/I/712mbn6KKJL._AC_SX679_.jpg']
    },
]
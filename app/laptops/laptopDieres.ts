export interface laptop {
    id: number,
    title: string,
    category: string,
    description:string,
    price: number,
    src: string,
    alt: string
};
export const laptops: laptop[] = [
    {
        id: 1,
        title: 'Dell-32',
        category: 'dell',
        description:'this new one',
        price: 387,
        src: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        alt: 'dell-32laptop'
    },
    {
        id: 2,
        title: 'hp-32',
        category: 'hp',
        description:'this new one',
        price: 387,
        src: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        alt: 'hp-32laptop'
    },
    {
        id: 3,
        title: 'Mac-32',
        category: 'Mac',
        description:'this new one',
        price: 387,
        src: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        alt: 'Mac-32laptop'
    },
    {
        id: 4,
        title: 'lenovo-32',
        category: 'lenovo',
        description:'this new one',
        price: 387,
        src: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        alt: 'lenovo-32laptop'
    },
    {
        id: 5,
        title: 'lenovo-32',
        category: 'lenovo',
        description:'this new one',
        price: 375,
        src: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        alt: 'lenovo-22laptop'
    },
]
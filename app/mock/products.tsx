export interface IItems{
    image: string;
    title: string;
    price: string;
    sold: string;
}

export interface IProduct{
    name: string;
    title: string;
    isActive: boolean;
    items: IItems[];
    
}

export const products: IProduct[] = [
    {
        title: "Mobile Legends",
        name: "ml",
        isActive: true,
        items: [
            {
                image: require('../assets/images/fighter.png'),
                title: "King of the fighter",
                price: '100.000',
                sold: '999+ Produk terjual'
            },
            {
                image: require('../assets/images/item2.png'),
                title: "King of the Tank",
                price: '85.000',
                sold: '999+ Produk terjual'
            },
            {
                image: require('../assets/images/item3.png'),
                title: "King of the Assassin",
                price: '120.000',
                sold: '999+ Produk terjual'
            }
        ]
    },
    {
        title: "Fire Fire",
        name: "ff",
        isActive: false,
        items: [
            {
                image: require('../assets/images/item3.png'),
                title: "King of the",
                price: '100.000',
                sold: '999+ Produk terjual'
            }
        ]
    },
    {
        title: "VoucherLyto",
        name: "vl",
        isActive: false,
        items: [
            {
                image: require('../assets/images/item3.png'),
                title: "King of the",
                price: '100.000',
                sold: '999+ Produk terjual'
            },
            {
                image: require('../assets/images/fighter.png'),
                title: "King of the fighter",
                price: '100.000',
                sold: '999+ Produk terjual'
            },
        ]
    },
    {
        title: "Voucher Garena",
        name: "vg",
        isActive: false,
        items: [
            {
                image: require('../assets/images/fighter.png'),
                title: "King of the fighter",
                price: '100.000',
                sold: '999+ Produk terjual'
            },
            {
                image: require('../assets/images/item3.png'),
                title: "King of the",
                price: '100.000',
                sold: '999+ Produk terjual'
            },
            {
                image: require('../assets/images/fighter.png'),
                title: "King of the fighter",
                price: '100.000',
                sold: '999+ Produk terjual'
            },
        ]
    },
]

// export const products: IProduct[] = [
//     {
//         image: require('../assets/images/fighter.png'),
//         title: "King of the fighter",
//         price: '100.000',
//         sold: '999+ Produk terjual'
//     },
//     {
//         image: require('../assets/images/fighter.png'),
//         title: "King of the fighter",
//         price: '100.000',
//         sold: '999+ Produk terjual'
//     },
//     {
//         image: require('../assets/images/fighter.png'),
//         title: "King of the fighter",
//         price: '100.000',
//         sold: '999+ Produk terjual'
//     }
// ]
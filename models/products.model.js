const products = [
    {
        id: 1,
        title: "Harry Potter",
        cover: "https://picsum.photos/200/300",
        basePrice: 200000
    },
    {
        id: 2,
        title: "Sherlock Holmes",
        cover: "https://picsum.photos/200/300",
        basePrice: 150000
    },
    {
        id: 3,
        title: "Ngồi khóc trên cây",
        cover: "https://picsum.photos/200/300",
        basePrice: 135000
    },
    {
        id: 4,
        title: "Đắc nhân tâm",
        cover: "https://picsum.photos/200/300",
        basePrice: 110000
    },
    {
        id: 5,
        title: "Doraemon",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000
    },
    {
        id: 6,
        title: "Up",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000
    },
    {
        id: 7,
        title: "GDucky",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000
    },
    {
        id: 8,
        title: "Good Boy",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000
    },
    {
        id: 9,
        title: "Bad Boy",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000
    },
    {
        id: 10,
        title: "Binz",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000
    },
    {
        id: 11,
        title: "Unicorn",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000
    }
]



exports.list = () => {
    return products
}

exports.productById = (id) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) return products[i]
    }
    return null;
}
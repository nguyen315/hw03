const products = [
    {
        id: 1,
        title: "Harry Potter",
        cover: "/assets/img/demo/harry-potter.jpg",
        basePrice: 200000,
        imgs: ["/assets/img/demo/harry-potter.jpg", "/assets/img/demo/harry-potter.jpg"]
    },
    {
        id: 2,
        title: "Sherlock Holmes",
        cover: "/assets/img/demo/sherlock-holmes.png",
        basePrice: 150000,
        imgs: ["/assets/img/demo/sherlock-holmes.png", "/assets/img/demo/sherlock-holmes.png"]
    },
    {
        id: 3,
        title: "Ngồi khóc trên cây",
        cover: "/assets/img/demo/ngoi-khoc-tren-cay.jpg",
        basePrice: 135000,
        imgs: ["/assets/img/demo/ngoi-khoc-tren-cay.jpg", "/assets/img/demo/ngoi-khoc-tren-cay.jpg"]
    },
    {
        id: 4,
        title: "Đắc nhân tâm",
        cover: "/assets/img/demo/dac-nhan-tam.jpg",
        basePrice: 110000,
        imgs: ["/assets/img/demo/dac-nhan-tam.jpg", "/assets/img/demo/dac-nhan-tam.jpg"]
    },
    {
        id: 5,
        title: "Doraemon",
        cover: "/assets/img/demo/doraemon.jpg",
        basePrice: 500000,
        imgs: ["/assets/img/demo/doraemon.jpg", "/assets/img/demo/doraemon.jpg"]
    },
    {
        id: 6,
        title: "Up",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000,
        imgs: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"]

    },
    {
        id: 7,
        title: "GDucky",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000,
        imgs: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"]
    },
    {
        id: 8,
        title: "Good Boy",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000,
        imgs: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"]
    },
    {
        id: 9,
        title: "Bad Boy",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000,
        imgs: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"]
    },
    {
        id: 10,
        title: "Binz",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000,
        imgs: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"]
    },
    {
        id: 11,
        title: "Unicorn",
        cover: "https://picsum.photos/200/300",
        basePrice: 500000,
        imgs: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"]
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
import p1_img from "./product-1.jpg";
import p2_img from "./product-2.jpg";
import p3_img from "./product-3.jpg";
import p4_img from "./product-4.jpg";
import p5_img from "./product-5.jpg";

let products = [
    {
        id: 1,
        name: "Phone",
        category: "phone",
        image: p1_img,
        new_price: "12.000.000",
        old_price: "15.000.000",
        price: 12000000,
    },
    {
        id: 2,
        name: "Phone",
        category: "phone",
        image: p2_img,
        new_price: "11.000.000",
        old_price: "14.000.000",
        price: 11000000,
    },
    {
        id: 3,
        name: "Phone",
        category: "phone",
        image: p3_img,
        new_price: "10.000.000",
        old_price: "13.000.000",
        price: 10000000,
    },
    {
        id: 4,
        name: "Laptop",
        category: "laptop",
        image: p4_img,
        new_price: "20.000.000",
        old_price: "23.000.000",
        price: 20000000,
    },
    {
        id: 5,
        name: "Máy tính bảng",
        category: "tablet",
        image: p5_img,
        new_price: "15.000.000",
        old_price: "18.000.000",
        price: 15000000,
    },
]

export default products;
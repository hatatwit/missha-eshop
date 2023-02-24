import { DeleteOutlined } from "@mui/icons-material";

import "./Cart.scss";

export default function Cart() {
    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            img2: "https://images.unsplash.com/photo-1627225793904-a2f900a6e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title: "Short Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
            img2: "https://images.unsplash.com/photo-1609004000524-8e41bd4bb72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "White Dress",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ]

    return (
        <div className="cart">
            <h1>Your Bag</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>Size: M</p>
                        <p>Qty: 1 x ${item.price}</p>
                    </div>
                    <DeleteOutlined className="deleteIcon"/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$19</span>
            </div>
            <button>CONTINUE TO CHECKOUT</button>
        </div>
    )
}
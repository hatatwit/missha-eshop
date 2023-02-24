import Card from "../Card/Card";

import "./List.scss";

export default function List() {

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
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            img2: "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            title: "Boyfriend Jeans",
            isNew: false,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            img2: "https://images.unsplash.com/photo-1629580626780-7fe7fb0523e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            title: "Warm Sweater",
            isNew: false,
            oldPrice: 19,
            price: 12
        },
        
    ]

    return (
        <div className="list">
            {data?.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}
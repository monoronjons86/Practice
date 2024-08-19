import { useEffect, useState } from "react";

const Products = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
         .then(data=>setUsers(data))  

    },[])
    return (
        <div>
            <h1>users:{users.length}</h1>
        </div>
    );
};

export default Products;
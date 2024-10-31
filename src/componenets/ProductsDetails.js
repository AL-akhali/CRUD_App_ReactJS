import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductsDetails()
{
    const [product,setProduct] = useState();

    let {productID} = useParams();

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/${productID}')
        .then((res) => res.json())
        .then((product) => {
            setProduct(product)
        });
    },[]);

    return(
        <>
         {product && <h1> {product.title} </h1>}
        </>
    );
}
export  default ProductsDetails;
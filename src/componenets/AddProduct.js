import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function AddProduct(){

    const[title ,setTitle] = useState('');
    const[price ,setPrice] = useState(0);

    let navigate = useNavigate()

    const fromSubmit = (e) => {
        e.preventDefault();
        
        axios.post('https://fakestoreapi.com/products',{
            method:"POST",
            headers:{
             "Content-Type": "Application/json",
            },
            body: JSON.stringify({
                title,
                price
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            navigate('/products');

        })
    };



    return(
        <>
                <h1>AddProduct page</h1>

        <form onSubmit={fromSubmit}>
  <div className="mb-3">
    <label htmlFor="productTitle" classNameName="form-label">Title</label>
    <input type="text" classNameName="form-control" id="productTitle" placeholder="Product Title" aria-describedby="Product Title"
    onChange={(e) => setTitle(e.target.value)}
    />
   </div>
   <div className="mb-3">
    <label htmlFor="productPrice" classNameName="form-label">Price</label>
    <input type="number" classNameName="form-control" id="productPrice"  placeholder="Product Price" aria-describedby="Product Price"
    onChange={(e) => setPrice(e.target.value)}
    />
   </div>
  <button type="submit" className="btn btn-primary">Add Product</button>
</form>
        </>
    );
}
export default AddProduct;
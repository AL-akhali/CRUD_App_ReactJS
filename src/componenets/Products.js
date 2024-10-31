import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Swal from 'sweetalert2'

function Products(){
    const [products,setProducts] = useState([]);
    useEffect(()=> {
        getAllProducts()
    },[]);

    const getAllProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((data)=>{
            setProducts(data);
        });
    }

    const deleteProduct = (productId)=>{
        Swal.fire({
            title:'You Are Going to Delete ${product.title}?',
            showCancelButton:true,
        }).then((data)=>{
            if(data.isConfirmed){
                fetch('https://fakestoreapi.com/products/${product.id}',{
                    method: "DELETE",
                })
                .then((res) => res.json())
                .then((data) => {
                        getAllProducts()
                });
            }
        });
    };

    return(
        <>
        <h1>Products page</h1>

        <Link to={'/products/add'} className="btn btn-success mt-3">Add New Product</Link>

        <table className="table table-striped mt-5">
            <thead>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Operations</th>
            </thead>
            <tbody>
                {products.map((product)=>{
                    return(
                <tr key={product.id}>
                   <td>{product.id}</td>
                   <td>{product.title}</td>
                   <td>{product.description.slice(0,20)}</td>
                   <td>{product.price}</td>
                   <td>
                    <button className="btn btn-danger btn-sm" onClick={()=> deleteProduct(product)}>Delete</button>
                    <Link to={'/products/${product.id}'} className="btn btn-info btn-sm">View</Link>
                    <Link to={'/products/Edit'}className="btn btn-primary btn-sm">Edit</Link>
                   </td>
                </tr>
                    )
                })}
            
            </tbody>
        </table>
        <Outlet />
        </>
    );
}
export default Products;
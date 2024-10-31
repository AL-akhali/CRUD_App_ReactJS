import { useEffect, useState } from "react";

function Categories(){
    const [Category,setCategory] = useState([]);
    useEffect(()=> {
        getAllCategories()
    },[]);

    const getAllCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((res)=> res.json())
        .then((data)=>{
            setCategory(data);
        });
    }

    return(
        <>
        <h1>Categories page</h1>
        <table className="table table-striped mt-5">
            <tbody>
            
                <tr>
                   <td>{Category}</td>
                </tr>
                
            
            </tbody>
        </table>
        </>
    );
}
export default Categories;
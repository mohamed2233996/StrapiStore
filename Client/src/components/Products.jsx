import {useEffect, useState} from 'react';
import useFetch from '../Hooks/useFatch';
import './products.css'

const Products = () => {
    const [products, setproducts] = useState([]);
    const {data, loading, error} = useFetch("/products?populate=*");
    
    useEffect(()=>{
        data && setproducts(data);
    },[data]);

    return (
        <div className='flex products'>
            {loading
            ? "Loading..."
            : products.map(product => (
                <div key={product.id} className="product-box">
                    <div className='img-fuild'>
                        <img src={import.meta.env.VITE_APP_URL + product.attributes.imge.data.attributes.url} alt="" />
                        <p className='product-desr'>{product.attributes.descraption}</p>
                        <p className='product-prise'>{product.attributes.price}$</p>
                    </div>
                    <h1>{product.attributes.title}</h1>
                </div>
            ))} 
        </div>
    );
}

export default Products;

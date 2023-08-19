import {useContext, useEffect, useState} from 'react';
import useFetch from '../Hooks/useFatch';
import './products.css'
import StoreContext from '../Hooks/StoreContext';
import { addtoCart } from '../redux/cardReducer'
import { useDispatch } from 'react-redux';

const Products = () => {
    const [products, setproducts] = useState([]);
    const {valueSend} = useContext(StoreContext);
    const {data, loading, error} = useFetch(valueSend);
    const dispatch =  useDispatch()

    
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
                    < button className='product-btn'
                        onClick={()=>dispatch(addtoCart({
                            id: product.id,
                            title: product.attributes.title,
                            price: product.attributes.price,
                            desc: product.attributes.descraption,
                            image: product.attributes.imge.data.attributes.url
                        }))}
                    >Add to cart</button>
                </div>
            ))} 
        </div>
    );
}

export default Products;

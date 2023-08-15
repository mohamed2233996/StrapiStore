import {Fragment, useEffect, useState} from 'react';
import useFetch from '../Hooks/useFatch';
import './categories.css'
import Chekbox from './Chekbox';

const Categores = () => {
    const [categores, setcategores] = useState([]);
    const {data, loading, error} = useFetch("/categores?populate=*");
    
    useEffect(()=>{
        data && setcategores(data);
        console.log(categores)
    },[data]);

    return (
        <div className='categores'>
            {loading
            ? "Loading..."
            : categores.map(categores => (
                <Fragment key={categores.id}>
                    <Chekbox categores={categores} />
                </Fragment>
            ))} 
        </div>
    );
}

export default Categores;
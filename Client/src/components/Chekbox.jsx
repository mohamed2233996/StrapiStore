import React, { useContext, useEffect, useState } from 'react';
import './Chekbox.css'
import qs from "qs"
import StoreContext from '../Hooks/StoreContext';

const Chekbox = ({ categores }) => {
    const { valueSend, setValueSend, selectedCategore, setselectedCategore } = useContext(StoreContext);

    useEffect(()=>{
        const query = qs.stringify({
            filters: {
                categores: {
                    id: {
                        $in: selectedCategore
                    },
                },
            },
        });
        setValueSend("http://localhost:1337/api/products?populate=*&" + query);
    },[selectedCategore]);

    const handelValueSend = (e) => {
        const selectedID = e.target.dataset.categores
        const isChecked = e.target.checked

        setselectedCategore(selectedCategore=> {
            if (isChecked) return [...selectedCategore, selectedID]
            return selectedCategore.filter(id => id !== selectedID)
        })
    }


    return (
        <div className='checkbox-wrapper'>
            <label className="toggler-wrapper style-1">
                <input type="checkbox" onChange={handelValueSend} data-categores={categores.id}/>
                <div className="toggler-slider">
                    <div className="toggler-knob" />
                </div>
            </label>
            <div className="badge">{categores.attributes.title}</div>
        </div>
    );
}

export default Chekbox;

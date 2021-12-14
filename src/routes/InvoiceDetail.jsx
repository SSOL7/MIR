import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Seoul from './seoul.jpg';

function InvoiceDetail() {
    const [invoice, setInvoice] = useState({});

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchItems();
      }, []);

    const fetchItems = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        console.log(`We got data: ${data.name}`);
        setInvoice(data);
    }



    return (
        <div className='card'>
            <img src={Seoul} alt=""/>
            <h2>{invoice.name}</h2>
            <h2>{invoice.phone}</h2>
            <h2>{invoice.username}</h2>
            <button onClick={() => navigate('/')}>Go back</button>
        </div>
    )
}

export default InvoiceDetail

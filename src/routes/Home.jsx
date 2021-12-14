import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import Seoul from './seoul.jpg';

function Home() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems();
    },[])

    const fetchItems = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        setItems(data);
    }

    return (
        <div>
            <h1>Home</h1>
            <ul>
      {items.map(item => {
        return (
        <li key={item.id}>
            <div className='card'>
                <img src={Seoul} alt="seoul" />
                <h3>{item.name}</h3>
                <p>{item.email}</p>
                <Link to={`/invoices/${item.id}`}>View Details</Link>
            </div>
        </li>
        )
      })}
    </ul>
        </div>
    )
}

export default Home

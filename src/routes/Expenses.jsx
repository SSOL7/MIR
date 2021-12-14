import React, {useState, useEffect} from 'react';

function Expenses() {
    const [items, setItems] = useState([]);
    const [houses] = useState([
        {
            "label": "Alppiharju",
            "value": "Alppiharju"
          },
          {
            "label": "Kulosaari",
            "value": "Kulosaari"
          },
          {
            "label": "Kumpula",
            "value": "Kumpula"
          },
          {
            "label": "Pasila",
            "value": "Pasila"
          },
          {
            "label": "Pitäjänmäki",
            "value": "Pitäjänmäki"
          },
          {
            "label": "Suutarila",
            "value": "Suutarila"
          },
          {
            "label": "Sörnäinen",
            "value": "Sörnäinen"
          },
    ]);

    useEffect(() => {
        async function getCharacters() {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const body = await response.json();
          setItems(body.map(({ name }) => ({ label: name, value: name })));
          console.log(body);
        }
        getCharacters();
      }, []);

    

    return (
<>
    <select>
      {houses.map(item => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>


    <select>
  {items.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>

</>
    )
}
export default Expenses
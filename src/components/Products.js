import { useState } from 'react';

function Products() {
    const [products, setProducts] = useState([
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ]);

    const listItems = products.map(p =>
        <li key={p.id} onClick={handleClick} style={{ color: p.isFruit ? 'green' : 'blue' }}>{p.title}</li>
    );
    function handleClick() {
        const newProducts = [ ...products, {
            title: 'Orange',
            isFruit: true,
            id: products.length + 1
        }];
        setProducts(newProducts);
    }
    return (
        <ul>{listItems}</ul>
    )
}

export default Products;
import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { ProductFilter } from './components/ProductFilter';
import { useState } from 'react';

function App() {
  const products =  [{
    title: "MB M1",
    price: 1200,
    imageSrc: "laptop.png",
    specification: ["Black color", "256GB Storage", "8GB RAM"],
    stockCount: 3,
  }, 
  {
    title: "MBP M1",
    price: 1400,
    imageSrc: "laptop.png",
    specification: ["Black color", "256GB Storage", "16GB RAM"],
    stockCount: 0,
  },
  {
    title: "MBP M2",
    price: 2100,
    imageSrc: "laptop.png",
    specification: ["Black color", "1TB Storage", "32GB RAM"],
    stockCount: 10,
  }
]

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 999,
  })

  function handlePurchase(product) {
    console.log(`You clicked on ${product.title} that costs ${product.price} again.`)
  }

  function handleFilter(key,value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }))
  }

  return (
    <div className="App">
      React Crash Course

      <div>
        <ProductList>
          {products.map(product => (
            <ProductCard key={product.title} product={product} onPurchase={handlePurchase}/>
          ))}
        </ProductList>
      </div>

      <div>
        <h2>All Products (quickly unpackage the variables using curly braces)</h2>
        
        <ul>
          {products.map(({title, price}) => (
            <li key={title}>{title}, {price}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Products filtered by price</h2>
          <ProductFilter filters={filters} onFilter={handleFilter}/>
          <ul>
            {products.filter(({price}) => price >= filters.minPrice && price <=filters.maxPrice)
            .map(({title, price}) => (
              <li>{title} costs ${price}</li>
            ))}
          </ul>
      </div>
    </div>

  );
}

export default App;

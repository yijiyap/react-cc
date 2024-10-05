import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {
  const products =  [{
    title: "MBA",
    price: 1200,
    imageSrc: "laptop.png",
    specification: ["Black color", "256GB Storage", "8GB RAM"],
    stockCount: 3,
  }, 
  {
    title: "MBP",
    price: 1400,
    imageSrc: "laptop.png",
    specification: ["Black color", "256GB Storage", "16GB RAM"],
    stockCount: 0,
  },
  {
    title: "MBP",
    price: 2100,
    imageSrc: "laptop.png",
    specification: ["Black color", "1TB Storage", "32GB RAM"],
    stockCount: 10,
  }
]
  function handlePurchase(product) {
    console.log(`You clicked on ${product.title} that costs ${product.price} again.`)
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
        <h2>All Products (quickly unpackage the varialbes using curly braces)</h2>
        
        <ul>
          {products.map(({title, price}) => (
            <li>{title}, {price}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Products less than $1500 (using filter)</h2>

          <ul>
            {products.filter(({price}) => price<1500)
            .map(({title, price}) => (
              <li>{title} costs ${price}</li>
            ))}
          </ul>
      </div>
    </div>

  );
}

export default App;

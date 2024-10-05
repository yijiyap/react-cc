export function ProductCard({
    product, 
    onPurchase,
}) {
    return (
        <div style={{border: '1px solid white', padding: '16px', textAlign: 'center', width: '100%'}}>
            <h2>{product.title}</h2>
            <img
                src={product.imageSrc}
                alt={product.title}
                width={128}
                height={128}
            />
            <p>Specification:</p>
            <ul style={{listStyle: 'none', padding: 0}}>
                {product.specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                ))}
            </ul>
            <Status stockCount={product.stockCount}/>
            {product.stockCount >0 && (<button onClick={()=>onPurchase(product)} >Buy for ${product.price} using event in props</button>)}
        </div>
    )
}

function Status({ stockCount }) {
    if (stockCount === 0) {
        return <p style={{ color: 'lightsalmon'}}>Sold out</p>
    }
    return <p style={{ color: 'lightgreen'}}>{stockCount} items available</p>;
}

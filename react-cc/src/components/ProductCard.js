import { useState } from "react";

export function ProductCard({
    product, 
    onPurchase,
}) {
    const [stockCount, setStockCount] = useState(product.stockCount);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setStockCount(stockCount -1);
        onPurchase(product);
    }

    return (
        <div style={{border: '1px solid white', padding: '16px', textAlign: 'center', width: '100%'}}>
            <h2>{product.title}</h2>
            <img
                src={product.imageSrc}
                alt={product.title}
                width={128}
                height={128}
            />
            <p>
                Specification:
                <button onClick={()=>setShowMore(!showMore)}>{showMore ? 'hide' : 'show'}</button>
            </p>
            { showMore &&
            <ul style={{listStyle: 'none', padding: 0}}>
                {product.specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                ))}
            </ul>}
            <Status stockCount={product.stockCount}/>                    
            {product.stockCount >0 && (
                <>
                    <p>Price: ${product.price}</p>
                    <button onClick={()=>handleClick} >
                        Buy for ${product.price} using event in props
                    </button>
                </>
            )}
        </div>
    )
}

function Status({ stockCount }) {
    if (stockCount === 0) {
        return <p style={{ color: 'lightsalmon'}}>Sold out</p>
    }
    return <p style={{ color: 'lightgreen'}}>{stockCount} items available</p>;
}

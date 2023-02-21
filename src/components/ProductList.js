import '../App.css';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        
                        <div style={{ width: '25%' }}>
                            <div className='product-item'>
                                <img className='product-img' src={productItem.url} width="100%" />
                                <div className='flex-main'>
                                    <div className='flex-left'>
                                <span className='product-name'>{productItem.name} |  </span>               
                                <span>&#8377;{productItem.price} </span>
                                </div>
                                
                                <button className='btnadd'
                                    onClick={() => addToCart(productItem)}
                                >Add Game</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList
import '../assets/img/cover.jpg'
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';
import { useState } from 'react';
import Home from './Home';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://images6.alphacoders.com/121/1216717.jpg',
      name: 'Ghost Wire',
      category: 'Tokyo',
      seller: 'AMZ Seller Ghz',
      price: 999
    },
    {
      url: 'https://images.alphacoders.com/128/1282982.jpg',
      name: 'Valorant',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 599
    },
    {
      url: 'https://images2.alphacoders.com/570/570396.jpg',
      name: 'CounterStrike',
      category: 'Global Offensive',
      seller: 'Delhi Laptops',
      price: 599
    },
    {
      url: 'https://images5.alphacoders.com/124/1248880.png',
      name: 'Far Cry 6',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 1199
    },
    {
      url: 'https://images4.alphacoders.com/115/1151249.jpg',
      name: 'Elden Ring',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 1599
    },
    {
      url: 'https://images3.alphacoders.com/128/1288485.jpg',
      name: 'The Callisto Protocol',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 1099
    },
    {
      url: 'https://images6.alphacoders.com/897/897994.jpg',
      name: 'Deceit',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 499
    },
    {
      url: 'https://images5.alphacoders.com/110/1104367.jpg',
      name: 'Among Us',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 299
    },
    {
      url: 'https://images4.alphacoders.com/587/587526.jpg',
      name: 'GTA V',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 1299
    },
    {
      url: 'https://images5.alphacoders.com/981/981500.jpg',
      name: 'Sekiro',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 1399
    },
    {
      url: 'https://images7.alphacoders.com/714/714040.jpg',
      name: 'God of War',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 699
    },
    {
      url: 'https://images4.alphacoders.com/149/149156.jpg',
      name: 'Call of Duty',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 899
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
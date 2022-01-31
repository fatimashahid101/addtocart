
import './App.css';
import Home from '../src/components/Home'
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart";
function App() {
  return (
  <>
  < CartProvider>
  < Home />
  < Cart />
  </CartProvider>
  </>
  );
}

export default App;

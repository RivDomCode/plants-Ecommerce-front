
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { ProductDetail } from "./components/ProductDetail";
import { ShoppingCart } from "./components/ShoppingCart";
import { NewPassword } from "./pages/NewPassword";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <NewPassword />
      <ProductDetail />
      <ShoppingCart />
    </div>
  );
}

export default App;

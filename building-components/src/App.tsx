import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Mouse", "Laptop"]);

  return (
    <main className="p-3">
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </main>
  );
}

export default App;

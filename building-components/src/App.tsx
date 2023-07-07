import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ManageStateExercise from "./components/ManageStateExercise";

function App() {
  const [cartItems, setCartItems] = useState(["Mouse", "Laptop"]);

  return (
    <main className="p-3">
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <ManageStateExercise />
    </main>
  );
}

export default App;

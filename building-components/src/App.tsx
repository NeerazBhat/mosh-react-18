import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState(["Mouse", "Laptop"]);

  const listData = ["Nepal", "India", "China"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <main className="p-3">
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Hello <span className="fw-bold">World</span>
        </Alert>
      )}
      <ListGroup
        title="Country List"
        items={listData}
        onSelectItem={handleSelectItem}
      />
      <Button
        variant="warning"
        className="mt-3"
        onClick={() => setShowAlert(true)}
      >
        Toggle Alert
      </Button>
      <div className="d-flex justify-content-between mt-3">
        <Button variant="secondary">Prev</Button>
        <Button onClick={() => console.log("Next page rendred")}>Next</Button>
      </div>
    </main>
  );
}

export default App;

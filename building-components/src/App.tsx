import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [personName, setPersonName] = useState({
    firstName: "David",
    lastName: "Dumri",
  });
  // Exercise 1
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  // Exercise 2
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  // Exercise 3
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const listData = ["Nepal", "India", "China"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleGame = () => {
    setGame({ ...game, player: { ...game.player, name: "David" } });
  };

  const handlePizza = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "red"],
    });
  };

  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <main className="p-3">
      <h1 className="text-primary">
        Hello, {personName.firstName + " " + personName.lastName}
      </h1>
      <div className="bg-warning p-3 rounded mb-3">
        <p>{game.id}</p>
        <h4>{game.player.name}</h4>
        <Button onClick={handleGame}>Change Name</Button>
      </div>

      <div className="bg-danger p-3 rounded mb-3 text-white">
        <h4>{pizza.name}</h4>
        <p>{pizza.toppings.map((pizzaName) => pizzaName + " ")}</p>
        <Button variant="light" onClick={handlePizza}>
          Add more
        </Button>
      </div>

      <div className="bg-light rounded mb-3 p-3">
        <ul>
          {cart.items.map((item) => (
            <li>
              {item.title} , {item.quantity} ,{" "}
              <Button onClick={handleCart}>+</Button>
            </li>
          ))}
        </ul>
      </div>

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

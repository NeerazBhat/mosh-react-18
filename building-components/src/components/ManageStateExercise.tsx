import { useState } from "react";
import Button from "./Button";
import { produce } from "immer";
import ExpandableText from "./ExpandableText";

const ManageStateExercise = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Chicken Pizza",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Mouse", quantity: 1 },
      { id: 2, title: "Keyboard", quantity: 1 },
    ],
  });

  const handleGame = () => {
    // setGame({
    //   ...game,
    //   player: {
    //     ...game.player,
    //     name: "David",
    //   },
    // });

    setGame(
      produce((draft) => {
        draft.player.name = "Mady";
      })
    );
  };

  const handlePizza = () => {
    // setPizza({
    //   ...pizza,
    //   toppings: [...pizza.toppings, "Cheese"],
    // });

    setPizza(
      produce((draft) => {
        draft.toppings.push("Cheese");
      })
    );
  };

  const handleCart = () => {
    // setCart({
    //   ...cart,
    //   items:
    //     cart.items.map((item) =>
    //       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    //     ),
    // });

    setCart(
      produce((draft) => {
        // draft.items.map((item) => item.id === 1 && item.quantity++);
        const item = draft.items.find((item) => item.id === 1);
        if (item) item.quantity = item.quantity + 1;
      })
    );
  };

  return (
    <>
      <div className="bg-success p-3 rounded-3 my-2">
        <h6>{game.player.name}</h6>
        <Button variant="light" onClick={handleGame}>
          Change Name
        </Button>
      </div>

      <div className="bg-secondary p-3 rounded-3 my-2">
        <h6>{pizza.name}</h6>
        <ul>
          {pizza.toppings.map((topping) => (
            <li>{topping}</li>
          ))}
        </ul>
        <Button variant="light" onClick={handlePizza}>
          Add Topping
        </Button>
      </div>

      <div className="bg-primary p-3 rounded-3 my-2 text-white">
        <h6>My Cart</h6>
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.title}, Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <Button variant="light" onClick={handleCart}>
          Add Quantity
        </Button>
      </div>

      <ExpandableText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat ab sequi quasi iste facilis quod eos aperiam. Quas possimus dignissimos dolorem numquam expedita asperiores dolor optio, maiores, alias voluptatum ratione aspernatur consectetur quaerat quis id laborum, reiciendis magni veritatis consequatur ipsa? Repudiandae voluptatem nam officiis eos illum! Ullam, est!</ExpandableText>
    </>
  );
};

export default ManageStateExercise;

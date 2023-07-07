import Button from "./Button";

interface ICartProps {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: ICartProps) => {
  return (
    <>
      <h4>My Cart :</h4>
      <ul>
        {cartItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <Button onClick={onClear}>Clear All</Button>
    </>
  );
};

export default Cart;

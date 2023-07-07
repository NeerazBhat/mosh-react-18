interface INavbarProps {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: INavbarProps) => {
  return <div>Navbar : {cartItemsCount}</div>;
};

export default Navbar;

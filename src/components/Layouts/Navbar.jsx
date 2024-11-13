import { useEffect, useState, useContext } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-20 bg-zinc-700 text-white items-center px-10">
      {username}
      <Button variant="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-black p-2 rounded-md ml-5 mr-5">
        item : {totalCart} | price : $ {total}
      </div>
      <Button
        className="bg-white px-10 mx-5 text-black rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "light" : "dark"}
      </Button>
    </div>
  );
};

export default Navbar;

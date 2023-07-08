import { Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = ({ cart, limpiar, removeById, total }) => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h5>{item.title}</h5>
                  <h5>${item.price}</h5>
                  <h5>Unidades: {item.quantity}</h5>
                </div>
                <IconButton
                  aria-label="Add"
                  color="error"
                  variant="contained"
                  onClick={() => removeById(item.id)}
                >
                  <RemoveIcon />
                </IconButton>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Descripcion del carrito:</h2>
          <h3>Cantidad de productos: {totalItems} </h3>
          <h3>Impuestos: {Math.round(total * 0.22, -1)} </h3>
          <h3>Precio total: ${total}</h3>
          <h3>Precio final: ${Math.round(total * 1.22, -1)}</h3>
          <h1>El total del carrito es ${Math.round(total * 1.22, -1)}</h1>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={limpiar} variant="contained">
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="contained">Finalizar compra</Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

import CartContainer from "../components/pages/cart/Container";
import CheckoutContainer from "../components/pages/checkout/Container";
import ProductDetailContainer from "../components/pages/productDetail/Container";
import ProductsListContainer from "../components/pages/productsList/Container";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ProductsListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ProductsListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];

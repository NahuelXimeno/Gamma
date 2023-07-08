import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { PacmanLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";

import { collection, getDoc, doc } from "firebase/firestore";

const Container = () => {
  const [productSelected, setProductSelect] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado exitosamente",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {productSelected.id ? (
        <ProductDetail
          cantidad={cantidad}
          productSelected={productSelected}
          addToCart={addToCart}
          onAdd={onAdd}
        />
      ) : (
        <PacmanLoader color="#ffed00" cssOverride={{}} loading size={62} />
      )}
    </div>
  );
};

export default Container;

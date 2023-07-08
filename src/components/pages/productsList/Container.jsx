import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

import { useParams } from "react-router";
import { PacmanLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const Container = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
      consulta = query(itemCollection, where("category", "==", categoryName));
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (items.length === 0) {
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
        <PacmanLoader color="#ffed00" cssOverride={{}} loading size={62} />
      </div>
    );
  }

  return (
    <div>
      <ProductsList items={items} />
    </div>
  );
};

export default Container;

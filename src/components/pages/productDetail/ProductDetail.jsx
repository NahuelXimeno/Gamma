import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { ItemCount } from "../../common/ItemCount";
const ProductDetail = ({ productSelected, onAdd }) => {
  return (
    <>
      <div className="cards-container">
        <Card
          sx={{
            width: 400,
            height: 430,
            backgroundColor: "black",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={productSelected.img}
            title=""
          />
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            sx={{ height: 170 }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="white"
              textAlign={"center"}
            >
              {productSelected.title}
            </Typography>
            <Typography
              variant="h6"
              color="white"
              fontSize={16}
              textAlign={"center"}
            >
              {productSelected.description}
            </Typography>

            <Typography
              variant="subtitle1"
              color="lightblue"
              textAlign={"center"}
            >
              ${productSelected.price}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              color: "White",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {productSelected.stock > 0 ? (
              <ItemCount
                stock={productSelected.stock}
                onAdd={onAdd}
                initial={1}
              />
            ) : (
              <h3>No hay stock</h3>
            )}
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ProductDetail;

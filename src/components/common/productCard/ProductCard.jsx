import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 380,
        backgroundColor: "black",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={elemento.img} title="" />
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
          {elemento.title}
        </Typography>
        <Typography
          variant="h6"
          color="white"
          fontSize={16}
          textAlign={"center"}
        >
          {elemento.description}
        </Typography>

        <Typography variant="subtitle1" color="lightblue" textAlign={"center"}>
          ${elemento.price}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

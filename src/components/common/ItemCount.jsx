import { Button } from "@mui/material";
import { useCount } from "../hooks/useCount";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="count--container">
        <IconButton aria-label="Add" color="error" onClick={decrement}>
          <RemoveIcon />
        </IconButton>
        <span>{count}</span>
        <IconButton aria-label="Add" color="success" onClick={increment}>
          <AddIcon />
        </IconButton>

        <Button size="small" variant="contained" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

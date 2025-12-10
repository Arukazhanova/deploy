import { useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export type Item = { product: string; amount: string };

type AddItemProps = { addItem: (item: Item) => void };

const AddItem = ({ addItem }: AddItemProps) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item>({ product: "", amount: "" });

  const handleAdd = () => {
    if (!item.product || !item.amount) return;
    addItem(item);
    setItem({ product: "", amount: "" });
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        ADD ITEM
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField
            value={item.product}
            onChange={(e) => setItem({ ...item, product: e.target.value })}
            label="Product"
            fullWidth
            margin="dense"
          />
          <TextField
            value={item.amount}
            onChange={(e) => setItem({ ...item, amount: e.target.value })}
            label="Amount"
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const ShoppingList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (item: Item) => setItems([item, ...items]);

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Shopping List</Typography>
        </Toolbar>
      </AppBar>

      <div style={{ margin: "20px 0" }}>
        <AddItem addItem={addItem} />
      </div>

      <List>
        {items.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={item.product} secondary={item.amount} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ShoppingList;

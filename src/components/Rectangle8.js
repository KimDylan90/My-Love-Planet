import { TextField } from "@mui/material";
import styles from "./Rectangle8.module.css";
const RectangleComponent1 = () => {
  return (
    <TextField
      className={styles.rectangleTextfield}
      sx={{ width: 468 }}
      color="primary"
      variant="standard"
      type="text"
      label="add City"
      placeholder="Placeholder"
      size="medium"
      margin="none"
    />
  );
};

export default RectangleComponent1;

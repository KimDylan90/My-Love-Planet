import { Button } from "@mui/material";
import styles from "./RectangleComponent.module.css";
const RectangleComponent = () => {
  return (
    <Button
      className={styles.rectangleButton}
      sx={{ width: 85 }}
      variant="contained"
      name="add city"
      color="primary"
    >
      Button
    </Button>
  );
};

export default RectangleComponent;

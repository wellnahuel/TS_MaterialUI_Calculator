import { Button as MuiButton, Grid, styled } from "@mui/material";

interface OperationButtonProps {
  selectedOperation: string;
  operation: string;
  selectOperation: (operation: string) => void;
}

const Button = styled(MuiButton)<{ selected: boolean }>((props) => ({
  borderColor: props.selected ? "#fff" : "rgba(255, 241, 73, 0.5)",
}));

export const OperationButton: React.FC<OperationButtonProps> = ({
  selectedOperation,
  operation,
  selectOperation,
}) => {
  return (
    <Grid item xs={3}>
      <Button
        fullWidth
        variant="outlined"
        sx={{ backgroundColor: "rgb(254,241,73,.1)" }}
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </Button>
    </Grid>
  );
};
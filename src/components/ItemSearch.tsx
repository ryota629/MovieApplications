import { TextField, Button } from "@material-ui/core";
import Box from "@mui/material/Box";

type Props = {
  value: string;
  handleFreeWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

const ItemSearch = (props: Props) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& >:not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="freeword"
          label="フリーワード"
          variant="outlined"
          name="freeword"
          value={props.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.handleFreeWord(e)
          }
        ></TextField>
        <br />
        <Button variant="outlined" onClick={() => props.handleSubmit()}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default ItemSearch;

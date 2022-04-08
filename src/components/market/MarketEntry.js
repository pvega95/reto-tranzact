import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteSelection } from "../../actions/selection";

export const MarketEntry = ({ market, option }) => {
  const dispatch = useDispatch();
  const { name: teamName, price } = option;
  const { id, name: marketName } = market;

  const handleDelete = () => {
    dispatch(deleteSelection(id));
  }

  return (
    <>
      <Card sx={{ minWidth: 275 }} className="market__card">
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            {marketName}
          </Typography>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {teamName}
          </Typography>
          <Typography sx={{ fontSize: 21 }} variant="body2">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ handleDelete } color="error">Delete</Button>
        </CardActions>
      </Card>
    </>
  );
};

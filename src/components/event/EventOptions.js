import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewSelection } from "../../actions/selection";

export const EventOptions = ({ market, selections }) => {

  const { selections:betSlips } = useSelector((state) => state.bets);
  const dispatch = useDispatch();
  const { id, name } = market;

  
  const handleSelection =  (selection) => {
    const newSelection = {
      id,
      name,
      selected: selection
    }
    dispatch(startNewSelection(newSelection));
  }

  const isSelected = (id, betSlips) => {
    return !!betSlips.find(({selected}) => selected.id === id)
  }

  return (
    <div className="event__selections">
      <p>{ name }</p>
      <div className="event__buttons">
      { selections.map(({ id, name, price }) => (
        <Button 
        variant="outlined"
        size="small"
        key={ id } 
        onClick={ ()=> handleSelection({ id, name, price })  }
        className={ `${ isSelected( id, betSlips ) ? 'event__buttons-active' : ''} ` }
        >{name} { price } </Button>
      ))}
      </div>
      
    </div>
  );
};

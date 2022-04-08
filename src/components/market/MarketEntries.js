import React from "react";
import { MarketEntry } from "./MarketEntry";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { Alert, AlertTitle } from "@mui/material";

export const MarketEntries = () => {
  const { selections } = useSelector((state) => state.bets);

  if (selections.length === 0) {
    return (
      <div className="market__empty">
        <Alert severity="error">
          <AlertTitle>Uy!</AlertTitle>
          No existen apuestas activas
        </Alert>
      </div>
    );
  }

  return (
    <div className="market__container">
      <div className="market__close">
        <CloseIcon />
      </div>

      {selections.map(({ id, name, selected }) => (
        <MarketEntry key={id} market={{ id, name }} option={selected} />
      ))}
    </div>
  );
};

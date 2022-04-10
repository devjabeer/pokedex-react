import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonById } from "../store/detailsSlice";

function PokemonDetails() {
  const { id } = useParams();

  const { loading, pokemon } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonById(id));
  }, []);

  return loading ? (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <div>{pokemon.id}</div>
  );
}
export default PokemonDetails;

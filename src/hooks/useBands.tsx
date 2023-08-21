import { useContext } from "react";

import { bandsContext } from "../contexts/bands/bandsContext";

export const useBands = () => {
  return useContext(bandsContext);
};

import { useState } from "react";
import veggies from "../data/data";
import Expand from "./Expand";
import Expandv1 from "./Expand-V1";
import veggiesv1 from "../data/datav1";

const Structure = () => {
  return (
    <>
      <Expandv1 veggies={veggiesv1} />
    </>
  );
};
export default Structure;

import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";


function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <div>
      <MesaVerde />
      <p> {trees}</p>
      <p>{wildlife}</p>
    </div>
  )
}

export default ColoradoStateParks
import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

/** Generates Box List Component
 *
 * @props none
 * @state Boxes
 *
 * App -> BoxList 
 */
function BoxList() {
  //boxes is an array of objects with box specs.
  //[{width: 500px, height: 220px, backgroundColor: black}, {...}, ...]
  const [boxes, setBoxes] = useState([]);


  /** Add new box. */
  function addBox(formData) {
    let newBox = { ...formData, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** Remove box. */
  function removeBox(id) {
    setBoxes(boxes => boxes.filter(b => b.id !== id));
  }

  /** Render all boxes stored in state. */
  function renderBoxesJsx() {
    return (
      <div>
        {boxes.map(box => (
          <Box
            key={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={()=>removeBox(box.id)}
          />
        )
        )}
      </div>
    );
  }

  return (<div>
    <NewBoxForm addBox={addBox} />
    {renderBoxesJsx()}
  </div>
  );
}


export default BoxList;

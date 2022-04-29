import React from "react";

/** Generates Box Component with Remove Button.
 *
 * @props width, height, background color, removeBox, id
 * @state none
 *
 * App -> BoxList -> Box
 */
function Box({ width, height, backgroundColor, removeBox }) {

  return <div>
    <div style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor
    }}>
    </div>
    <button onClick={removeBox}>Remove The Box!</button>
  </div>;
}

export default Box;
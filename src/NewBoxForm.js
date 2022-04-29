import React, { useState } from "react";


/** Generates New Box Form Component
 *
 * @props addBox function
 * @state formData
 *
 * App -> BoxList -> NewBoxForm
 */
function NewBoxForm({ addBox }) {
  const initialState = {
    height: "",
    width: "",
    backgroundColor: ""
  };
  const [formData, setFormData] = useState(initialState);

  /** Send {formData} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);

    //empty form state
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="height-input">Height: </label>
      <input
        id="height-input"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
    </p>
    <p>
      <label htmlFor="width-input">Width: </label>
      <input
        id="width-input"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
    </p>
    <p>
      <label htmlFor="backgroundColor-input">Background Color: </label>
      <input
        id="backgroundColor-input"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
    </p>
    <button className="NewBoxForm-button">Add a new box!</button>
  </form>;
}

export default NewBoxForm;

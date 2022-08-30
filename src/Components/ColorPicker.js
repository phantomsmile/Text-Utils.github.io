import React, { useState }from "react";
import { ChromePicker } from "react-color";


export default function ColorPicker(props) {
  const [color, setColor] = useState("#fff");

  return (
    <div style={{height: '40px'}}>
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          Select Theme
        </button>
      </p>
      <div>
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
          <div className="card card-body" style={{width: '300px'}}>
            <ChromePicker
              color={color}
              onChange={(updatedColor) => {setColor(updatedColor.hex); props.color(updatedColor.hex)}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const [currentHex, setCurrentHex] = useState(state.color);

  const handleInputColor = (input) => {
    const hexCol = /^#[0-9A-F]{6}$/i;

    setCurrentHex(input);

    if (hexCol.test(input)) {
      state.color = input;
    }
  };

  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => {
          state.color = color.hex;
          setCurrentHex(color.hex);
        }}
      />
      <div className="flex items-center gap-2 w-[195px] glassmorphism p-2 mt-1 rounded-md">
        <div
          className="w-4 h-4 rounded-sm"
          style={{ backgroundColor: state.color }}
        />
        <input
          type="text"
          className="w-full text-xs text-zinc-700 p-[2px] rounded-sm bg-transparent hover:bg-white/40 focus:outline-none"
          value={currentHex}
          onChange={(color) => handleInputColor(color.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorPicker;

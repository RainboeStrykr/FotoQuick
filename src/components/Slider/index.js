// Providers
import { SliderContext } from "App";
import { useContext } from "react";
// Components (styles)
import { Wrapper } from "./slider.styles";

function Slider({ min, max, value, handleChange }) {
  const { show } = useContext(SliderContext);

  return (
    <>
      {show && (
        <Wrapper>
          <input
            id="slider"
            type="range"
            min={min}
            max={max}
            step={1}
            value={value}
            onChange={handleChange}
          />
          <span className="slider__value">{value}</span>
        </Wrapper>
      )}
    </>
  );
}

export default Slider;

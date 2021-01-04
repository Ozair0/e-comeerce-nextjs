import { useState, useRef, useEffect } from "react";

export default function Sidebar() {
  const [range1, setRange1] = useState(0);
  const [range2, setRange2] = useState(1000);
  const slider1 = useRef();
  const slider2 = useRef();
  const track = useRef();
  const range = useRef();
  const TL = useRef();
  const TR = useRef();

  function setLeftValue() {
    let min = parseInt(slider1.current.min);
    let max = parseInt(slider1.current.max);

    slider1.current.value = Math.min(
      parseInt(slider1.current.value),
      parseInt(slider2.current.value) - 1
    );

    var percent = ((slider1.current.value - min) / (max - min)) * 100;
    TL.current.style.left = percent + "%";
    range.current.style.left = percent + "%";
  }

  function setRightValue() {
    let min = parseInt(slider2.current.min);
    let max = parseInt(slider2.current.max);

    slider2.current.value = Math.max(
      parseInt(slider2.current.value),
      parseInt(slider1.current.value) + 1
    );

    var percent = ((slider2.current.value - min) / (max - min)) * 100;
    TR.current.style.right = 100 - percent + "%";
    range.current.style.right = 100 - percent + "%";
  }
  useEffect(() => {
    setLeftValue();
    setRightValue();
  }, []);
  return (
    <div className="col-4 sidebar_c">
      <p className="price_b">Price Between</p>

      <div className="middle">
        <input
          ref={slider1}
          type="range"
          id="input-left"
          min="0"
          max="1000"
          value={range1}
          onChange={(event) => {
            if (slider2.current.value - event.target.value > 10) {
              setRange1(event.target.value);
              setLeftValue();
            }
          }}
          onMouseOver={() => {
            TL.current.classList.add("hover");
          }}
          onMouseOut={() => {
            TL.current.classList.remove("hover");
          }}
          onMouseDown={() => {
            TL.current.classList.add("active");
          }}
          onMouseUp={() => {
            TL.current.classList.remove("active");
          }}
        />
        <input
          ref={slider2}
          type="range"
          id="input-right"
          min="0"
          max="1000"
          value={range2}
          onChange={(event) => {
            if (event.target.value - slider1.current.value > 10) {
              setRange2(event.target.value);
              setRightValue();
            }
          }}
          onMouseOver={() => {
            TR.current.classList.add("hover");
          }}
          onMouseOut={() => {
            TR.current.classList.remove("hover");
          }}
          onMouseDown={() => {
            TR.current.classList.add("active");
          }}
          onMouseUp={() => {
            TR.current.classList.remove("active");
          }}
        />

        <div className="sliddd">
          <div ref={track} className="track"></div>
          <div ref={range} className="range"></div>
          <div ref={TL} className="thumb left">
            {range1}$
          </div>
          <div ref={TR} className="thumb right">
            {range2}$
          </div>
        </div>
      </div>
      <div className="btn_search">
        <button>Search</button>
      </div>
    </div>
  );
}

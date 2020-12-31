import { useState, React, useRef, useEffect } from "react";
import InputRange from "react-input-range";
export default function Home() {
  const [rangeValue, setRangeValue] = useState({ min: 0, max: 20 });
  const [rangeValue2, setRangeValue2] = useState(0);
  // const slider = useRef(null);
  // const slider2 = useRef(null);
  // useEffect(() => {
  //   slider2.current.style.left = ((rangeValue - 0) / (10 - 0)) * 100 + "px";
  //   slider.current.style.right =
  //     100 - ((rangeValue2 - 0) / (10 - 0)) * 100 + "%";
  // }, []);
  return (
    <div className="store">
      <div className="col-4">
        <p className="price_b">Price Between</p>

        <div className="middle">
          <InputRange
            maxValue={20}
            minValue={0}
            formatLabel={(value) => `${value} $`}
            value={rangeValue}
            step={1}
            onChange={(value) => setRangeValue(value)}
            onChangeComplete={(value) => console.log(value)}
          />
        </div>
      </div>
      <div className="col-8">
        <div>
          <p>Search Bar with Categorize By</p>
        </div>
        <div>
          <p>Products</p>
          <p>Pagination</p>
        </div>
      </div>
    </div>
  );
}

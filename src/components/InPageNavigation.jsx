/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function InPageNavigation({ teams, children }) {
  console.log(teams);

  const [index, setIndex] = useState(0);

  // getting recreance from the dom
  let tabLineRef = useRef();
  let btnRef = useRef();

  // adjusting the line on first render
  useEffect(() => {
    ToggBtn(btnRef.current, 0);
  }, []);

  function ToggBtn(btn, i) {
    console.log(btn.offsetWidth);
    console.log(btn.offsetLeft);
    console.log(tabLineRef.current);

    let { offsetWidth, offsetLeft } = btn;

    tabLineRef.current.style.width = offsetWidth + "px";
    tabLineRef.current.style.left = offsetLeft + "px";

    setIndex(i);
  }

  return (
    <div className="w-full">
      <div
        className={
          "bg-blue-600 w-full flex justify-between items-end mx-auto" +
          (teams.length > 2 ? " h-[100px]" : " h-[50px]")
        }
      >
        {teams.length > 2
          ? teams.map(({ path, title }, i) => (
              <Link to={path} key={i}>
                <button
                  key={i}
                  className={
                    "mr-1 text-l font-semibold  px-7 py-5  hover:bg-gray-200/20  lg:py-4 lg:px-16 " +
                    (index === i ? " text-white " : " text-gray-100/70 ")
                  }
                  ref={i == 0 ? btnRef : null}
                  onClick={(e) => ToggBtn(e.target, i)}
                >
                  {title}
                </button>
              </Link>
            ))
          : teams.map((data, i) => (
              <button
                key={i}
                className={
                  "bg-slate-900 w-[50%] h-full px-10 border border-gray-500" +
                  (index === i ? " text-white " : " text-slate-100/60")
                }
                ref={i == 0 ? btnRef : null}
                onClick={(e) => ToggBtn(e.target, i)}
              >
                {data}
              </button>
            ))}

        <hr
          ref={tabLineRef}
          className="border-white border-2 absolute duration-300"
        />
      </div>
      {teams.length > 2 ? "" : children[index]}
    </div>
  );
}

export default InPageNavigation;

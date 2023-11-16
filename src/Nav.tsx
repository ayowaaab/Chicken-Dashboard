import gsap from "gsap";
import { useState } from "react";

function Nav() {
  const [name, setName] = useState("Page1");
  const onName = (val: string) => {
    setName(val);
    gsap.from("#img", {
      x: "-=400",
      ease: "elastic.out(1,.5)",
      duration: 1.5,
      opacity: 0,
    });
  };

  return (
    <>
      <nav className="d-flex justify-content-between p-3">
        <i>
          <h1 className="h1">Brand ™</h1>
        </i>
        <ul className="d-flex align-items-center gap-5">
          <a onClick={() => onName("Page1")} className="pageLink">
            Page 1
          </a>
          <a onClick={() => onName("Page2")} className="pageLink">
            Page 2
          </a>
          <a onClick={() => onName("Page3")} className="pageLink">
            Page 3
          </a>
        </ul>
        <button className="btn btn-light">Button</button>
      </nav>
      <main className="d-flex justify-content-center overflow-hidden">
        <img id="img" width={"800px"} src={name + ".png"} alt="page" />
      </main>
    </>
  );
}

export default Nav;

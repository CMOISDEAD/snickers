import { useState } from "react";
import { Model } from "./components/three/Model";

function App() {
  const [selected, setSelected] = useState<null | string>(null);

  return (
    <div className="relative h-screen">
      <a href="/">
        <img
          src="https://i.pinimg.com/originals/b9/46/bf/b946bfda1684e33d35517d77e931b050.jpg"
          alt="vans logo"
          className="absolute top-5 left-5 w-20 z-10"
        />
      </a>
      <div className="absolute bottom-5 left-5 flex flex-col gap-2 w-48 bg-black text-white font-ki">
        <p className="text-[0.6rem]">
          <span>&ldquo;</span>
          Unleash Your Urban Spirit with Our Vans-Inspired Sneakers. Designed
          for the rebels, the dreamers, and the trailblazers. Experience
          unmatched comfort and bold style with every step. Make your mark on
          the streets.
          <span>&rdquo;</span>
        </p>
        <p className="text-sm">{new Date().toLocaleString()}</p>
      </div>

      <Model description={selected} />

      <div className="absolute bottom-0 top-0 right-5 m-auto h-full flex flex-col justify-between gap-5 w-1/12 py-5">
        <ul className="flex flex-col gap-10">
          {["Sophisticated", "Stylish", "Comfortable"].map((item, i) => (
            <li
              key={i}
              onMouseEnter={() => setSelected(item)}
              onMouseLeave={() => setSelected("Modern")}
              className="cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="bg-black text-white p-2 hover:bg-neutral-950 transition-colors shadow w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default App;

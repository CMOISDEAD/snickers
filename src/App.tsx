import { Model } from "./components/three/Model";

function App() {
  return (
    <div className="relative h-screen">
      <img
        src="https://i.pinimg.com/originals/b9/46/bf/b946bfda1684e33d35517d77e931b050.jpg"
        alt="vans logo"
        className="absolute top-5 left-5 w-20 z-10"
      />
      <Model />

      <ul className="absolute bottom-5 left-0 right-0 w-fit m-auto flex gap-10">
        <li>Sophisticated</li>
        <li>Stylish</li>
        <li>Comfortable</li>
      </ul>
    </div>
  );
}

export default App;

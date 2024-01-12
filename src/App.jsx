import "./App.css";

import { useRef, useEffect } from "react";
import { Niivue } from "@niivue/niivue";

const NiiVue = ({ imageUrl }) => {
  const canvas = useRef();
  useEffect(() => {
    const volumeList = [
      {
        url: imageUrl,
      },
    ];
    const nv = new Niivue();
    nv.attachToCanvas(canvas.current);
    nv.loadVolumes(volumeList);
  }, [imageUrl]);

  return (
    <canvas
      ref={canvas}
      height={100}
      width={100}
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
};

function App() {
  return (
    <>
      <NiiVue
        imageUrl={"https://niivue.github.io/niivue-demo-images/mni152.nii.gz"}
      ></NiiVue>
    </>
  );
}
export default App;

import React, { useState } from "react";

function doSettimeout(i, path, setnumber, setconcretpath) {
  setTimeout(function () {
    setconcretpath(path + i + ".png");
    setnumber(i);
  }, 1000);
}
function onmouseEnter(number, path, setnumber, setconcretpath) {
  for (let i = number; i <= 5; i++) {
    doSettimeout(i, path, setnumber, setconcretpath);
  }
}

function onMNouseLeaves(number, path, setnumber, setconcretpath) {
  for (let i = number; i >= 1; i--) {
    setconcretpath(path + i + ".png");
    setnumber(i);
  }
}
export default function Icon() {
  const path = "../resources/brain/images_";
  const [number, setnumber] = useState(1);
  let [concretpath, setconcretpath] = useState(path + "1.png");
  return (
    <>
      <div> Zdjecie</div>
      <img
        src={require("../resources/brain/images_" + number + ".png")}
        onMouseEnter={() =>
          onmouseEnter(number, path, setnumber, setconcretpath)
        }
        onMouseLeave={() =>
          onMNouseLeaves(number, path, setnumber, setconcretpath)
        }
      />
    </>
  );
}

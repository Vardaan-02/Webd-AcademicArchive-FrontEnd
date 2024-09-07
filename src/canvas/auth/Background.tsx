import { useEffect, useRef, useState } from "react";
import Circle from "./Circle";

function Background() {
  const canvasRef = useRef(null);
  const [height,setHeight] = useState(window.innerHeight);
  const [width,setWidth] = useState(window.innerWidth);

  window.onresize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  function animation(circleArr: Array<any>, context: any) {
    requestAnimationFrame(() => {
      animation(circleArr, context);
    });
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    circleArr.forEach((circle) => {
      circle.move(circleArr);
    });
  }

  useEffect(() => {
    const canvas: any = canvasRef.current;
    canvas.height = height;
    canvas.width = width;
    const context = canvas.getContext("2d");

    let circleArr = [];
    for (let i = 0; i < 200 ; i++) {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let radius = (Math.random())*2+0.25;
      let dx = (Math.random() - 0.5) * 0.2;
      let dy = (Math.random() - 0.5) * 0.2;

      circleArr.push(
        new (Circle as any)(
          radius,
          dx,
          dy,
          x,
          y,
          context,
          "#FFF",
        )
      );
    }
    animation(circleArr, context);
  }, [height,width]);

  return <canvas ref={canvasRef} className="bg-black absolute z-0"></canvas>;
}

export default Background;

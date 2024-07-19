import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterCloth = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      Composites = Matter.Composites;

    // Create engine
    const engine = Engine.create(),
      world = engine.world;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
      },
    });

    Render.run(render);

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // See cloth function defined later in this file
    const cloth = createCloth(200, 200, 20, 12, 5, 5, false, 8);

    for (let i = 0; i < 20; i++) {
      cloth.bodies[i].isStatic = true;
    }

    Composite.add(world, [
      cloth,
      Bodies.circle(300, 500, 80, {
        isStatic: true,
        render: { fillStyle: "#060a19" },
      }),
      Bodies.rectangle(500, 480, 80, 80, {
        isStatic: true,
        render: { fillStyle: "#060a19" },
      }),
      Bodies.rectangle(400, window.innerHeight, window.innerWidth, 50, {
        isStatic: true,
      }),
    ]);

    // Add mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.98,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight },
    });

    const handleResize = () => {
      render.bounds.max.x = window.innerWidth;
      render.bounds.max.y = window.innerHeight;
      render.options.width = window.innerWidth;
      render.options.height = window.innerHeight;
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: window.innerWidth, y: window.innerHeight },
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} className="matter-cloth-container" />;
};

// Function to create cloth
const createCloth = (
  xx,
  yy,
  columns,
  rows,
  columnGap,
  rowGap,
  crossBrace,
  particleRadius,
  particleOptions,
  constraintOptions
) => {
  const Body = Matter.Body,
    Bodies = Matter.Bodies,
    Common = Matter.Common,
    Composites = Matter.Composites;

  const group = Body.nextGroup(true);
  particleOptions = Common.extend(
    {
      inertia: Infinity,
      friction: 0.00001,
      collisionFilter: { group: group },
      render: { visible: false },
    },
    particleOptions
  );
  constraintOptions = Common.extend(
    { stiffness: 0.06, render: { type: "line", anchors: false } },
    constraintOptions
  );

  const cloth = Composites.stack(
    xx,
    yy,
    columns,
    rows,
    columnGap,
    rowGap,
    function (x, y) {
      return Bodies.circle(x, y, particleRadius, particleOptions);
    }
  );

  Composites.mesh(cloth, columns, rows, crossBrace, constraintOptions);

  cloth.label = "Cloth Body";

  return cloth;
};

export default MatterCloth;

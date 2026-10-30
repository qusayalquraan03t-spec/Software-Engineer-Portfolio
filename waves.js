
(() => {
  const canvas = document.getElementById("wave-canvas");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();

    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    draw(reduceMotion ? 0 : frame);
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    const lines = 7;

    for (let j = 0; j < lines; j++) {

      ctx.beginPath();

      for (let x = 0; x <= width; x += 8) {

        const y =
          height * (0.42 + j * 0.055) +

          Math.sin(
            x * 0.008 +
            time * 0.0012 +
            j * 0.55
          ) * (16 + j * 2) +

          Math.cos(
            x * 0.003 +
            time * 0.0007
          ) * 20;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle =
        `rgba(54, 151, 255, ${0.055 + j * 0.012})`;

      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  function animate(time) {
    frame = time;

    draw(time);

    if (!reduceMotion) {
      requestAnimationFrame(animate);
    }
  }

  window.addEventListener("resize", resize, {
    passive: true
  });

  resize();

  if (!reduceMotion) {
    requestAnimationFrame(animate);
  }

})();

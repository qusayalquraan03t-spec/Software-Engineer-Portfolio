
(() => {
  const canvas = document.getElementById("wave-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationId = 0;
  let lastFrame = 0;
  let elapsed = 0;

  const spacing = 16;
  const waveRows = 25;
  const waveSpeed = 0.00055;
  const secondaryWaveSpeed = 1.7;

  function resize() {
    width = canvas.clientWidth || window.innerWidth;
    height = canvas.clientHeight || window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const columns = Math.ceil(width / spacing) + 1;
    const rows = Math.min(
      waveRows,
      Math.ceil(height * 0.55 / spacing)
    );

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const x = col * spacing;

        const phase =
          col * 0.047 +
          row * 0.2 +
          elapsed;

        const y =
          height * 0.86 -
          row * spacing +
          Math.sin(phase) * 25 +
          Math.sin(
            col * 0.025 - elapsed * secondaryWaveSpeed
          ) * 17;

        if (y < height * 0.2 || y > height) continue;

        const fade = Math.max(
          0,
          1 - Math.abs(y - height * 0.72) / (height * 0.5)
        );

        const pulse = (Math.sin(phase * 1.35) + 1) / 2;
        const alpha = (0.08 + pulse * 0.38) * fade;
        const radius = 0.65 + pulse * 0.85;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(35, 153, 255, ${alpha})`;
        ctx.fill();
      }
    }
  }

  function animate(timestamp) {
    if (document.hidden) {
      animationId = 0;
      return;
    }

    if (timestamp - lastFrame >= 16) {
      const delta = lastFrame
        ? Math.min(timestamp - lastFrame, 50)
        : 0;

      lastFrame = timestamp;

      if (!reducedMotion.matches) {
        elapsed += delta * waveSpeed;
      }

      draw();
    }

    if (!reducedMotion.matches) {
      animationId = requestAnimationFrame(animate);
    }
  }

  function start() {
    cancelAnimationFrame(animationId);
    animationId = 0;
    lastFrame = 0;

    if (reducedMotion.matches) {
      draw();
    } else if (!document.hidden) {
      animationId = requestAnimationFrame(animate);
    }
  }

  window.addEventListener("resize", resize);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
      animationId = 0;
    } else {
      start();
    }
  });

  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener("change", start);
  } else if (reducedMotion.addListener) {
    reducedMotion.addListener(start);
  }

  resize();
  start();
})();

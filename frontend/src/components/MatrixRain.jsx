import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;
    let drops = [];
    const fontSize = 16;
    const chars =
      "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ010110".split("");

    const setup = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * canvas.height) / fontSize)
      );
    };

    const draw = () => {
      ctx.fillStyle = "rgba(4, 4, 4, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "Azeret Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright leading character
        if (Math.random() > 0.975) {
          ctx.fillStyle = "#ccffdd";
        } else {
          ctx.fillStyle = "#00ff66";
        }
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    const handleResize = () => setup();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="matrix-rain-canvas"
      className="absolute inset-0 h-full w-full opacity-50"
      aria-hidden="true"
    />
  );
};

export default MatrixRain;

import { useEffect, useRef } from "react";

const SERVICES = [
  "NETFLIX",
  "PRIME",
  "HULU",
  "DISNEY+",
  "HBO MAX",
  "ESPN",
  "PEACOCK",
  "APPLE TV",
  "PARAMOUNT",
  "SPORTS",
  "PPV",
  "LIVE TV",
  "MAX",
  "STARZ",
];

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;
    let columns = [];
    const fontSize = 18;
    const stepInterval = 90; // ms between row advances (slower rain)
    let lastStep = 0;

    const randWord = () => SERVICES[Math.floor(Math.random() * SERVICES.length)];

    const setup = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const colCount = Math.floor(canvas.width / fontSize);
      columns = Array.from({ length: colCount }, () => ({
        word: randWord(),
        head: Math.floor((Math.random() * canvas.height) / fontSize) -
          Math.floor(Math.random() * 12),
      }));
    };

    const draw = (time) => {
      animationId = requestAnimationFrame(draw);
      if (time - lastStep < stepInterval) return;
      lastStep = time;

      // Fade previous frame
      ctx.fillStyle = "rgba(4, 4, 4, 0.16)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${fontSize}px "Azeret Mono", monospace`;
      ctx.textAlign = "center";

      const totalRows = Math.ceil(canvas.height / fontSize);

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        const x = i * fontSize + fontSize / 2;
        const letters = col.word;

        for (let j = 0; j < letters.length; j++) {
          const row = col.head - (letters.length - 1) + j;
          if (row < 0) continue;
          const y = row * fontSize;
          const isHead = j === letters.length - 1;
          if (isHead) {
            ctx.fillStyle = "#e9ffef";
            ctx.shadowColor = "#00ff66";
            ctx.shadowBlur = 8;
          } else {
            const fade = 0.35 + (j / letters.length) * 0.55;
            ctx.fillStyle = `rgba(0, 255, 102, ${fade})`;
            ctx.shadowBlur = 0;
          }
          ctx.fillText(letters[j], x, y);
        }
        ctx.shadowBlur = 0;

        col.head++;
        // Reset once the whole word has dropped below the screen
        if (col.head - letters.length > totalRows && Math.random() > 0.5) {
          col.head = -Math.floor(Math.random() * 8);
          col.word = randWord();
        }
      }
    };

    setup();
    animationId = requestAnimationFrame(draw);

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

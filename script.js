"use strict";
(function () {
  const canvas = document.getElementById('canvas');
  const yellow = `rgb(250, 212, 47)`;
  const green = `#71aa4a`;
  const gray = `rgb(240, 240, 240)`;
  const rad = (deg) => {
    return -(deg * PI) / 180;
  };
  const arc = (ctx, start, end, color) => {
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.lineCap = `round`;
    ctx.strokeStyle = `${color}`;
    ctx.arc(75, 75, 72, rad(start), rad(end));
    ctx.stroke();
  }
  const PI = Math.PI;
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    arc(ctx, 205, 110, gray);
    arc(ctx, 310, 205, green);
    arc(ctx, 70, 310, yellow);

  }

  const widthGraf = ({ id, mainWidth, anotherWidth }) => {
    const block = document.querySelector(`#${id}`);
    const main = block.querySelector(`.js-graf--main`);
    const another = block.querySelector(`.js-graf--another`);
    main.style.width = `${mainWidth}%`;
    another.style.width = `${anotherWidth}%`;
  }

  widthGraf({
    id: `indicators-1`,
    mainWidth: 32,
    anotherWidth: 29,
  });

  widthGraf({
    id: `indicators-2`,
    mainWidth: 39,
    anotherWidth: 37,
  });

  widthGraf({
    id: `indicators-3`,
    mainWidth: 25,
    anotherWidth: 29,
  });

})();
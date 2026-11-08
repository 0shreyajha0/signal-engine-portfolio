// Live pointer position: pixels (x, y) and normalised -1..1 (nx, ny).

export const pointer = { x: innerWidth / 2, y: innerHeight / 2, nx: 0, ny: 0 };

addEventListener(
  'pointermove',
  (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.nx = (e.clientX / innerWidth) * 2 - 1;
    pointer.ny = (e.clientY / innerHeight) * 2 - 1;
  },
  { passive: true }
);

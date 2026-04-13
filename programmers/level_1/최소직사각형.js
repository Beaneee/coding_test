function solution(sizes) {
  const arr = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)]);
  let mw = -Infinity;
  let mh = -Infinity;

  for (const [w, h] of arr) {
    if (mw <= w) mw = w;
    if (mh <= h) mh = h;
  }

  return mw * mh;
}
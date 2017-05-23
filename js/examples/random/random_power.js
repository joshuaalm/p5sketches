let n = 0.2;
let record, max;
let resolution = 150;
initRecord();

for (let i = 0; i < resolution * 10; i ++) {
  nextRandom();
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  background(254, 253, 183);

  let v;
  for (let i = 0; i < resolution; i ++) {
    v = nextRandom();
    line(v * width, 0, v * width, height);
  }

  fill(0);stroke(0);
  for (let i = 0; i < resolution; i ++) {
    let w = width / resolution;
    let h = height / max * record[i];
    let x = w * i;
    let y = height - h;
    rect(x, y, w, h);
  }

  fill(254, 253, 183);
  drawLabel((n < 1) ? width -16 : 16, height - 16, "n = " + n.toPrecision(2), (n < 1) ? RIGHT : LEFT);

  n = (Math.floor(frameCount / 60) % 10 + 1) * 0.2;
  if (frameCount % 60 == 0) {
    initRecord();
  }
}

function initRecord() {
  max = 1;
  if (!record) {
    record = [];
  } else {
    record.length = 0;
  }

  for (let i = 0; i < resolution; i ++) {
    record.push(0);
  }
}

function nextRandom() {
  let v = Math.pow(Math.random(), n);
  if (++record[Math.floor(v * resolution)] > max) {max ++};
  return v;
}

/** drawLabel **/
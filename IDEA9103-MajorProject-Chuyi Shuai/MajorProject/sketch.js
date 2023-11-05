let colors = [];
var nums1 = [10, 100, 210, 320, 470, 500, 630, 700, 790];
var nums2 = [30, 100, 210, 300, 400, 550, 630, 750, 790];
let scaleX, scaleY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();

  let grayColor = color(150);  // Gray
  let blueColor = color(21, 29, 176);  // Blue
  let redColor = color(161, 7, 2);  // Red

  colors.push(grayColor);
  colors.push(blueColor);
  colors.push(redColor);

  scaleX = windowWidth / 800; // Assuming the original design was based on an 800x800 canvas
  scaleY = windowHeight / 800;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleX = windowWidth / 800;
  scaleY = windowHeight / 800;
}

function draw() {
  background(250);

  // Vertical rectangles
  for (let i = 1; i < 10; i++) {
    let x = width / 50 * i * 5;
    let y = 0;
    let w = width / 50;
    let h = i == 2 || i == 4 || i == 7 ? height / 2 : height;
    fill(255, 229, 6); // Use yellow
    rect(x, y, w, h);

    // Fill in small rects in random 3 colors only in yellow sections
    for (let k = 0; k < 15; k++) {
      let rectX = x;
      let rectY = random(0, h);
      let rectW = w;
      let rectH = 20;
      fill(random(colors));
      rect(rectX, rectY, rectW, rectH);
      
      // Hover effect
      if (mouseX > rectX && mouseX < rectX + rectW && mouseY > rectY && mouseY < rectY + rectH) {
        fill(0); // Change color on hover
        rect(rectX, rectY, rectW, rectH);
      }
    }
  }

  // Horizontal rectangles
  for (let j = 1; j < 8; j++) {
    let x = 0;
    let y = height / 8 * j;
    let w = j == 1 || j == 5 || j == 6 ? width / 2 : width;
    let h = height / 40;
    fill(255, 229, 6); // Use yellow
    rect(x, y, w, h);

    // Fill in small rects in random 3 colors only in yellow sections
    for (let k = 0; k < 15; k++) {
      let rectX = random(0, w);
      let rectY = y;
      let rectW = 20;
      let rectH = h;
      fill(random(colors));
      rect(rectX, rectY, rectW, rectH);
      
      // Hover effect
      if (mouseX > rectX && mouseX < rectX + rectW && mouseY > rectY && mouseY < rectY + rectH) {
        fill(0); // Change color on hover
        rect(rectX, rectY, rectW, rectH);
      }
    }
  }

  let hoverColor = color(153, 51, 255); // Set the hover color when the mouse hovers
  
  /// Fixed position rectangles
  for (let i = 0; i < 8; i++) {
    noStroke();
    if (mouseX >= nums1[i] * scaleX && mouseX <= (nums1[i] + 100) * scaleX &&
        mouseY >= nums2[i] * 3 * scaleY && mouseY <= (nums2[i] * 3 + 70) * scaleY) {
      fill(hoverColor);
    } else {
      fill(colors[1]); //blue
    }
    rect(nums1[i] * scaleX, nums2[i] * 3 * scaleY, 100 * scaleX, 70 * scaleY);
  }


  for (let i = 0; i < 8; i++) {
    noStroke();
    if (mouseX >= nums1[i] * scaleX && mouseX <= (nums1[i] + 150) * scaleX &&
        mouseY >= nums2[i] * 2 * scaleY && mouseY <= (nums2[i] * 2 + 80) * scaleY) {
      fill(hoverColor);
    } else {
      fill(colors[2]); //red
    }
    rect(nums1[i] * scaleX, nums2[i] * 2 * scaleY, (100 + 50) * scaleX, 80 * scaleY);
  }

  for (let i = 0; i < 8; i++) {
    noStroke();
    if (mouseX >= nums1[i] * 2 * scaleX && mouseX <= (nums1[i] * 2 + 60) * scaleX &&
        mouseY >= nums2[i] * scaleY && mouseY <= (nums2[i] + 50) * scaleY) {
      fill(hoverColor);
    } else {
      fill(colors[2]); //red
    }
    rect(nums1[i] * 2 * scaleX, nums2[i] * scaleY, 60 * scaleX, 50 * scaleY);
  }

  for (let i = 0; i < 6; i++) {
    noStroke();
    if (mouseX >= nums1[i] * 2 * scaleX && mouseX <= (nums1[i] * 2 + 60) * scaleX &&
        mouseY >= nums2[i] * scaleY && mouseY <= (nums2[i] + 50) * scaleY) {
      fill(hoverColor);
    } else {
      fill(colors[2]); //red
    }
    rect(nums1[i] * 2 * scaleX, nums2[i] * scaleY, 60 * scaleX, 50 * scaleY);
  }

  for (let i = 0; i < 10; i++) {
    noStroke();
    if (mouseX >= (nums1[i] * 2 + 20) * scaleX && mouseX <= (nums1[i] * 2 + 50) * scaleX &&
        mouseY >= (nums2[i] + 10) * scaleY && mouseY <= (nums2[i] + 40) * scaleY) {
      fill(hoverColor);
    } else {
      fill(colors[0]); //gray
    }
    rect((nums1[i] * 2 + 20) * scaleX, (nums2[i] + 10) * scaleY, 30 * scaleX, 30 * scaleY);
  }

  for (let i = 0; i < 10; i++) {
    noStroke();
    if (mouseX >= (nums1[i] + 200) * scaleX && mouseX <= (nums1[i] + 240) * scaleX &&
        mouseY >= (nums2[i] + 200) * scaleY && mouseY <= (nums2[i] + 280) * scaleY) {
      fill(hoverColor);
    } else {
      fill(255, 229, 6); //yellow
    }
    rect((nums1[i] + 200) * scaleX, (nums2[i] + 200) * scaleY, 40 * scaleX, 80 * scaleY);
  }

  for (let i = 0; i < 10; i++) {
    noStroke();
    if (mouseX >= (nums1[i * 2] + 220) * scaleX && mouseX <= (nums1[i * 2] + 320) * scaleX &&
        mouseY >= (nums2[i] + 400) * scaleY && mouseY <= (nums2[i] + 480) * scaleY) {
      fill(hoverColor);
    } else {
      fill(colors[1]); //blue
    }
    rect((nums1[i * 2] + 220) * scaleX, (nums2[i] + 400) * scaleY, 100 * scaleX, 80 * scaleY);
  }
}

// Call the draw function continuously
function mouseMoved() {
  redraw();
}

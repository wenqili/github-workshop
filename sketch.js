// slider object
slider = {
    //Line parameters
    Lx: 350,
    Ly: 460,
    length: 100,

    //slider parameters
    x: 350,
    y: 460,
    w: 10,
    h: 20,

    //display functions
    display: function() {
        fill(0);
        stroke(0);
        line(this.Lx, this.Ly, this.Lx + this.length, this.Ly);

        rect(this.x, this.y, this.w, this.h);
    },

    //slide functions
    //map interaction parameters
    a: 0,
    //dragging interaction parameters
    drag: false,
    slide: function() {
        if (this.drag) {
            if (mouseX < this.Lx) {
                this.x = this.Lx;
            } else if (mouseX > this.Lx + this.length) {
                this.x = this.Lx + this.length;
            } else {
                this.x = mouseX;
            }
            this.a = this.x - this.Lx;
        }
    }
};


function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255);
    rectMode(CENTER);
    // Map display
    push();
    // rotate(PI / 4);
    design();
    pop();

    //slider display
    slider.display();
    slider.slide();
}

//algorithmic design
function backgroundMap(col, sOffset, eOffset, bksp, w, h) {
    for (i = 5 - sOffset; i < width + eOffset; i += w + 9) {
        for (j = 7 - sOffset; j < height + eOffset; j += bksp) {
            fill(col);
            noStroke();
            rect(i, j, w, h, 20);
        }
    }
}

function frontMap(col_1, col_2, col_3, col_4, sOffset, eOffset, bksp, w, h) {
    for (i = 5 - sOffset; i < width + eOffset; i += w + 9) {
        if (i % 4 == 1) {
            fill(col_1);

        } else if (i % 4 == 2) {
            fill(col_2);

        } else if (i % 4 == 3) {
            fill(col_3);

        } else {
            fill(col_4);
        }
        for (j = 5 - sOffset; j < height + eOffset; j += bksp) {
            // fill(255, 0, 0, 80);
            noStroke();
            if (j % 2 == 1 | j % 2 == -1) {
                rect(i + 25 - slider.a, j, w, h, 20);
            } else {
                rect(i + slider.a, j, w, h, 20);
            }
        }
    }
}


function design() {
    //function backgroundMap(col,sOffset, eOffset, bksp, w, h)
    backgroundMap(color(23, 126, 137, 140), 500, 500, 15, 50, 10);
    // function frontMap(col_1, col_2, col_3, col_4,sOffset, eOffset, bksp, w, h)
    frontMap(color(8, 76, 97, 160),
        color(243, 119, 72, 180),
        color(235, 70, 90, 200),
        color(229, 43, 99, 220),
        500, 500, 15, 50, 10);
}

// mouse interaction
function mousePressed() {
    if (mouseX < slider.x * slider.w && mouseX > slider.x - slider.w && mouseY > slider.y - 1 / 2 * slider.h && mouseY < slider.y + slider.h && slider.drag == false) {
        slider.drag = true;
    }
}

function mouseReleased() {
    slider.drag = false;
}

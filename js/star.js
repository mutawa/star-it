
class Star {
    constructor(x, y, r, a) {
        this.x = x;
        this.y = y;
        this.r = r / 2;
        this.angle = a;
        this.segments = [];

        for(let a=45; a<=45*9; a+=30) {
            let x= 0.2972 * this.r * cos(a);
            let y= 0.2972 * this.r * sin(a);
            fill("black");
            stroke(0);
            strokeWeight(0.5);
            
            let y3 = 0.9658 * this.r * sin(a + 32.38);
            let x3 = 0.9658 * this.r * cos(a + 32.38);
            //line(x,y, x3, y3);
            this.segments.push(new Segment(x,y,x3,y3));
            let y4 = this.r * sin(a + 45);
            let x4 = this.r * cos(a + 45);
            //line(x3,y3, x4, y4);
            this.segments.push(new Segment(x3,y3,x4,y4));
            let x5 = 0.9658 * this.r * cos(a + (57.5));
            let y5 = 0.9658 * this.r * sin(a + (57.5));
            //line(x4,y4, x5,y5);
            this.segments.push(new Segment(x4,y4,x5,y5));
            let x6 = 0.2972 * this.r * cos(a+90);
            let y6 = 0.2972 * this.r * sin(a+90);
            //line(x5,y5,x6,y6);
            this.segments.push(new Segment(x5,y5,x6,y6));
            
        }

    }

    render() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        
        
        this.segments.forEach(segment => {
            segment.render();
        });
        
        
        pop();
    }
    update() {
        this.segments.forEach(segment => {
            segment.update();
        });

        //this.angle += 0.1;
    }
}
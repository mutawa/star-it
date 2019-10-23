class Segment {
    

    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        
        this.dist = dist(x1,y1,x2,y2);
        this.length = this.dist;
    }

    render() {
        ctx.setLineDash([0, this.length]);    
        line(this.x1, this.y1, this.x2, this.y2);

    }

    update() {
        if(this.length>0) {
            this.length -= random(2);
        }
    }
}
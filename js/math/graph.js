class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }

    addPoint(point) {
        this.points.push(point);
    }

    containsPoint(point) {
        return this.points.some((p) => p.equals(point));
    }

    tryAddPoint(point) {
        if(!this.containsPoint(point)) {
            this.addPoint(point);
            return true;
        }
        return false;
    }

    addSegment(seg) {
        this.segments.push(seg);
    }

    hasSegment(seg) {
        return this.segments.some((s) => s.equals(seg));
    }

    tryAddSegment(seg) {
        if(seg.p1.equals(seg.p2) || this.hasSegment(seg)) {
            return false;
        }
        this.addSegment(seg);
        return true;
    }

    draw(ctx) {
        for(const seg of this.segments) {
            seg.draw(ctx)
        }

        for(const point of this.points) {
            point.draw(ctx)
        }
    }
}
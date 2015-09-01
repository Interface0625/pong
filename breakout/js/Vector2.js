var Vector2 = {
    set: function (v, x, y ) {
        v.x = x;
        v.y = y;
        return v;
    },
    setX: function ( v, x ) {
        v.x = x;
        return v;
    },
    setY: function ( v, y ) {
        v.y = y;
        return v;
    },
    copy: function ( v ) {
        return { x: v.x, y: v.y };
    },
    add: function ( v, w ) {
        v.x += w.x;
        v.y += w.y;
        return v;
    },
    addScalar: function ( v, s ) {
        v.x += s;
        v.y += s;
        return v;
    },
    sub: function ( v, w ) {
        v.x -= w.x;
        v.y -= w.y;
        return v;
    },
    subScalar: function ( v, s ) {
        v.x -= s;
        v.y -= s;
        return v;
    },
    multiply: function ( v, w ) {
        v.x *= w.x;
        v.y *= w.y;
        return v;
    },
    multiplyScalar: function ( v, s ) {
        v.x *= s;
        v.y *= s;
        return v;
    },
    divide: function ( v, w ) {
        v.x /= w.x;
        v.y /= w.y;
        return v;
    },
    divideScalar: function ( v, s ) {
        if ( s !== 0 ) {
            var invS = 1 / s;
            v.x *= invS;
            v.y *= invS;
        } else {
            v.x = 0;
            v.y = 0;
        }
        return v;
    },
    min: function ( v, w ) {
        if ( v.x > w.x ) {
            v.x = w.x;
        }
        if ( v.y > w.y ) {
            v.y = w.y;
        }
        return v;
    },
    max: function ( v, w ) {
        if ( v.x < w.x ) {
            v.x = w.x;
        }
        if ( v.y < w.y ) {
            v.y = w.y;
        }
        return v;
    },
    clamp: function ( v, min, max ) {
        // This function assumes min < max, if this assumption isn't true it will not operate correctly
        if ( v.x < min.x ) {
            v.x = min.x;
        } else if ( v.x > max.x ) {
            v.x = max.x;
        }
        if ( v.y < min.y ) {
            v.y = min.y;
        } else if ( v.y > max.y ) {
            v.y = max.y;
        }
        return v;
    },
    floor: function (v) {
        v.x = Math.floor( v.x );
        v.y = Math.floor( v.y );
        return v;
    },
    ceil: function (v) {
        v.x = Math.ceil( v.x );
        v.y = Math.ceil( v.y );
        return v;
    },
    round: function (v) {
        v.x = Math.round( v.x );
        v.y = Math.round( v.y );
        return v;
    },
    roundToZero: function (v) {
        v.x = ( v.x < 0 ) ? Math.ceil( v.x ) : Math.floor( v.x );
        v.y = ( v.y < 0 ) ? Math.ceil( v.y ) : Math.floor( v.y );
        return v;
    },
    negate: function (v) {
        v.x = - v.x;
        v.y = - v.y;
        return v;
    },
    dot: function ( v, w ) {
        return v.x * w.x + v.y * w.y;
    },
    lengthSq: function (v) {
        return v.x * v.x + v.y * v.y;
    },
    length: function (v) {
        return Math.sqrt( v.x * v.x + v.y * v.y );
    },
    normalize: function (v) {
        return Vector2.divideScalar( v.length() );
    },
    distanceTo: function ( v, w ) {
        return Math.sqrt( Vector2.distanceToSquared( v, w ) );
    },
    distanceToSquared: function ( v, w ) {
        var dx = v.x - w.x, dy = v.y - w.y;
        return dx * dx + dy * dy;
    },
    setLength: function ( v, l ) {
        var oldLength = Vector2.length(v);
        if ( oldLength !== 0 && l !== oldLength ) {
            Vector2.multiplyScalar( v, l / oldLength );
        }
        return v;
    },
    lerp: function ( v, w, alpha ) {
        v.x += ( w.x - v.x ) * alpha;
        v.y += ( w.y - v.y ) * alpha;
        return v;
    },
    rotate: function(v, deg){
        var rad = deg * Math.PI/180,
            cos = Math.cos(rad),
            sin = Math.sin(rad),
            ny = v.y * cos + v.x * sin;
        v.x = v.x * cos - v.y * sin;
        v.y = ny;
        return v;
    },
    /*lerpVectors: function ( v, v1, v2, alpha ) {
        this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );
        return this;
    },*/
    clone: function (v) {
        return { x: v.x, y: v.y };
    }
};
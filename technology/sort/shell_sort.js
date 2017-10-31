Array.prototype.shellSort = function () {
    for (var step = this.length >> 1; step > 0; step >>= 1) {
        //alert(step >>= 1);
        for (var i = 0; i < step; ++i) {
            for (var j = i + step; j < this.length; j += step) {
                var k = j, value = this[j];
                while (k >= step && this[k - step] > value) {
                    this[k] = this[k - step];
                    k -= step;
                }
                this[k] = value;
            }
        }
    }
}
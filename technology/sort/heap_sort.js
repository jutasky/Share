require('./base')

Array.prototype.heapSort = function () {
    for (var i = 1; i < this.length; ++i) {
        for (var j = i, k = (j - 1) >> 1; k >= 0; j = k, k = (k - 1) >> 1) {
            if (this[k] >= this[j])
                break;
            this.swap(j, k);
        }
    }
    for (var i = this.length - 1; i > 0; --i) {
        this.swap(0, i);
        for (var j = 0, k = (j + 1) << 1; k <= i; j = k, k = (k + 1) << 1) {
            if (k == i || this[k] < this[k - 1])
                --k;
            if (this[k] <= this[j])
                break;
            this.swap(j, k);
        }
    }
}
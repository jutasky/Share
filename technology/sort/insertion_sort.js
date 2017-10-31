Array.prototype.insertionSort = function () {
    for (var i = 1; i < this.length; ++i) {
        var j = i,
            value = this[i];
        while (j > 0 && this[j - 1] > value) {
            this[j] = this[j - 1];
            --j;
        }
        this[j] = value;
    }
}
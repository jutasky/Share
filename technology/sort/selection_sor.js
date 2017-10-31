require('./base')

Array.prototype.selectionSort = function () {
    for (var i = 0; i < this.length; ++i) {
        var index = i;
        for (var j = i + 1; j < this.length; ++j) {
            if (this[j] < this[index])
                index = j;
        }
        this.swap(i, index);
    }
}
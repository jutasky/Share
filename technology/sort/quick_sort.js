require('./base')

Array.prototype.quickSort = function (s, e) {
    if (s == null)
        s = 0;
    if (e == null)
        e = this.length - 1;
    if (s >= e)
        return;
    this.swap((s + e) >> 1, e);
    var index = s - 1;
    for (var i = s; i <= e; ++i)
        if (this[i] <= this[e]) this.swap(i, ++index);
    this.quickSort(s, index - 1);
    this.quickSort(index + 1, e);
}
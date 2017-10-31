Array.prototype.mergeSort = function (s, e, b) {
    if (s == null)
        s = 0;
    if (e == null)
        e = this.length - 1;
    if (b == null)
        b = new Array(this.length);
    if (s >= e)
        return;
    var m = (s + e) >> 1;
    this.mergeSort(s, m, b);
    this.mergeSort(m + 1, e, b);
    for (var i = s, j = s, k = m + 1; i <= e; ++i)
        b[i] = this[(k > e || j <= m && this[j] < this[k]) ? j++ : k++];
    for (var i = s; i <= e; ++i)
        this[i] = b[i];
}
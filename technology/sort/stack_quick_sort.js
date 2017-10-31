require('./base')

Array.prototype.stackQuickSort = function () {
    var stack = [0, this.length - 1];
    while (stack.length > 0) {
        var e = stack.pop(), s = stack.pop();
        if (s >= e)
            continue;
        this.swap((s + e) >> 1, e);
        var index = s - 1;
        for (var i = s; i <= e; ++i) {
            if (this[i] <= this[e])
                this.swap(i, ++index);
        }
        stack.push(s, index - 1, index + 1, e);
    }
}
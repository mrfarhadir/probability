var Probablity = /** @class */ (function () {
    function Probablity() {
    }
    Probablity.prototype.singleChoose = function (A, S, config) {
        if (config === void 0) { config = {}; }
        var _config = {
            decimals: 0,
            select: 1
        };
        config.decimals = config.decimals ? config.decimals : _config.decimals;
        config.select = config.select ? config.select : _config.select;
        if (config.select === 1)
            return this.chooseOne(A, S, config);
        if (config.select > 1)
            return this.chooseMore(A, S, config);
        return 0;
    };
    Probablity.prototype.chooseMore = function (A, S, config) {
        var p = 0;
        var i = config.select;
        var j = 0;
        while (i) {
            var _p = (A.length - j);
            if (p === 0)
                p = _p;
            else
                p *= _p;
            i--;
            j++;
        }
        var allPossibleCases = this.factorial(S.length, S.length - config.select);
        p = (p / allPossibleCases);
        if (config.decimals)
            p = this.setDecimals(p, config.decimals);
        p = p < 0 ? 0 : p;
        return p;
    };
    Probablity.prototype.chooseOne = function (A, S, config) {
        var p = A.length / S.length;
        if (config.decimals)
            p = this.setDecimals(p, config.decimals);
        return p;
    };
    Probablity.prototype.multiChoose = function (A, S, config) {
        if (config === void 0) { config = {}; }
        var _config = {
            decimals: 0,
            select: 1
        };
        config.decimals = config.decimals ? config.decimals : _config.decimals;
        config.select = config.select ? config.select : _config.select;
        var allPossibleCases = 0;
        S.map(function (s) {
            allPossibleCases += s.count;
        });
        var p = 0;
        var isArr = A instanceof Array;
        if (!isArr) {
            p = this.multiChooseOne(A, allPossibleCases, S, config);
        }
        if (A.length === 1) {
            p = this.multiChooseOne(A[0], allPossibleCases, S, config);
        }
        if (isArr && A.length > 1)
            p = this.multiChooseMore(A, allPossibleCases, S, config);
        return p;
    };
    Probablity.prototype.multiChooseMore = function (A, allPossibleCases, S, config) {
        var _this = this;
        var p = 1;
        A.forEach(function (_A, i) {
            if (i > 0)
                allPossibleCases -= i * A[i - 1].count;
            var _p = _this.multiChooseOne(_A, allPossibleCases, S, config);
            p *= _p;
        });
        return p;
    };
    Probablity.prototype.multiChooseOne = function (A, allPossibleCases, S, config) {
        var p = 1;
        var c = A.count;
        var i = 0;
        var SelectionTotalValue = S.filter(function (s) { return s.name == A.name; })[0]['count'];
        while (c) {
            var _p = (SelectionTotalValue - i) / (allPossibleCases - i);
            p = p * _p;
            c--;
            i++;
        }
        return p;
    };
    Probablity.prototype.factorial = function (n, til) {
        if (til === void 0) { til = 0; }
        var s = 1;
        while (n > til)
            s *= n--;
        return s;
    };
    Probablity.prototype.setDecimals = function (n, decimals) {
        return parseFloat(n.toFixed(decimals));
    };
    return Probablity;
}());


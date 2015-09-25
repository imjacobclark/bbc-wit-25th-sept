define(['jQuery'], function ($) {
    var Common = function () {
    };

    Common.prototype.cutsMustard = function () {
        return (
            'querySelector' in document &&
            'localStorage' in window &&
            'addEventListener' in window
        );
    }

    return Common;
});

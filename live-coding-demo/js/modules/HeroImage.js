define(['jQuery'], function ($) {
    var HeroImage = function () {
    };

    HeroImage.prototype.init = function () {
        $('.hero-image__wrapper').css('opacity', 0);
        $('.hero-image__wrapper').fadeTo('slow', 1);
    }

    return HeroImage;
});

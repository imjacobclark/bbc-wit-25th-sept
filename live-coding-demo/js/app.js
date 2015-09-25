require.config({
    paths: {
        'jQuery': 'vendor/jquery'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }
    }
});

require(['jQuery', 'modules/HeroImage', 'modules/Common'], function ($, HeroImage, Common) {
    var common = new Common();

    if(common.cutsMustard()){
        var heroImage = new HeroImage();
        heroImage.init();
    };
});

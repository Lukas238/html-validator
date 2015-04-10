module.exports = {
    bundle: {
        main: {
            scripts: [
                './public/app/*.js'
            ],
            styles: './public/app/css/*.css'
        },
        vendor: {
            scripts: './public/app/lib/angular/angular.1.3.14.js'
        }
    },
    copy: './img/**/*.{png,svg}'
};

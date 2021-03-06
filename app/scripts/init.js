require.config({

    /* starting point for application */
    deps: ['backbone.marionette', 'main'],

    shim: {
      'foundation': {
        deps: ['fastclick', 'jquery'],
        exports: 'Foundation'
      },
      'foundation.reveal': {deps: ['foundation']},
      'foundation.offcanvas': {deps: ['foundation']},
      'foundation.topbar': {deps: ['foundation']},
      'foundation.magellan': {deps: ['foundation']},
      'foundation.dropdown': {deps: ['foundation']}
    },

    paths: {
        async: '../../bower_components/async/lib/async',
        domReady: '../../bower_components/requirejs-domready/domReady',
        jquery: '../../bower_components/jquery/dist/jquery',
        xDomainRequest: '../../bower_components/jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest',
        backbone: '../../bower_components/backbone-amd/backbone',
        underscore: '../../bower_components/underscore-amd/underscore',
        'underscore.string': '../../bower_components/underscore.string/lib/underscore.string',
        fastclick: '../../bower_components/fastclick/lib/fastclick',

        /* alias all marionette libs */
        'backbone.marionette': '../../bower_components/backbone.marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.paginator': '../../bower_components/backbone.paginator/lib/backbone.paginator',
        'backbone.relational': '../../bower_components/backbone-relational/backbone-relational',

        /* alias the foundation js lib */
        'foundation': '../../bower_components/foundation/js/foundation/foundation',
        'foundation.reveal': '../../bower_components/foundation/js/foundation/foundation.reveal',
        'foundation.topbar': '../../bower_components/foundation/js/foundation/foundation.topbar',
        'foundation.offcanvas': '../../bower_components/foundation/js/foundation/foundation.offcanvas',
        'foundation.magellan': '../../bower_components/foundation/js/foundation/foundation.magellan',
        'foundation.dropdown': '../../bower_components/foundation/js/foundation/foundation.dropdown',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
//        text: '../../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../../bower_components/require-handlebars-plugin/Handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../../bower_components/require-handlebars-plugin/hbs/json2',
        hbs: '../../bower_components/require-handlebars-plugin/hbs',

        text: '../../bower_components/text/text',
        'config': '../../build/config',

        baseApp: '../scripts/packages/base',

    },

    packages: ['baseApp'],

    hbs: {
        disableI18n: true
    }
});

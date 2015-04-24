'use strict';

/*global require*/
var knockout = require('terriajs-cesium/Source/ThirdParty/knockout');
var SvgPathBindingHandler = require('terriajs-cesium/Source/Widgets/SvgPathBindingHandler');

var KnockoutSanitizedHtmlBinding = require('./KnockoutSanitizedHtmlBinding');

var registerKnockoutBindings = function() {
    SvgPathBindingHandler.register(knockout);
    KnockoutSanitizedHtmlBinding.register(knockout);

    knockout.bindingHandlers.embeddedComponent = {
        init : function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var component = knockout.unwrap(valueAccessor());
            component.show(element);
            return { controlsDescendantBindings: true };
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        }
    };
};

module.exports = registerKnockoutBindings;
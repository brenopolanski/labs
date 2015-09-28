/*
 *  Project: jQuery plugin demo
 *  Author: Steely Wing
 *  License: Unlicense
 */

;(function ($, window, document, undefined) {

    var pluginName = "color",
        dataKey = "plugin_" + pluginName;

    var Plugin = function (element, options) {
    
        this.element = element;
        
        this.options = {
            background: '#000',
            color: '#999'
        };
        
        this.init(options);
    };

    Plugin.prototype = {
        init: function (options) {
            $.extend(this.options, options);
            this.element.css({
                'color': this.options.color,
                'background-color': this.options.background
            });
        },
        
        color: function (color) {
            this.options.color = color;
            this.element.css('color', color);
        },
        
        background: function (color) {
            this.options.background = color;
            this.element.css('background-color', color);
        }
    };

    /*
     * Plugin wrapper, preventing against multiple instantiations and
     * return plugin instance.
     */
    $.fn[pluginName] = function (options) {

        var plugin = this.data(dataKey);

        // has plugin instantiated ?
        if (plugin instanceof Plugin) {
            // if have options arguments, call plugin.init() again
            if (typeof options !== 'undefined') {
                plugin.init(options);
            }
        } else {
            plugin = new Plugin(this, options);
            this.data(dataKey, plugin);
        }
        
        return plugin;
    };

}(jQuery, window, document));

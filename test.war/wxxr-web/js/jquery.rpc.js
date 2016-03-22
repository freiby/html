/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-09 11:40:59
 * @version $Id$
 */

(function($) {
    function showMonitor() {
        var $overlayDiv = $('<div></div>');
        $overlayDiv.attr('id', 'loading-indicator-overlay');
        $overlayDiv.addClass('loading-indicator-overlay');
        $overlayDiv.height($('body').height() + $('body').scrollTop());
        $(document.body).append($overlayDiv);


        $.mobile.loading("show", {
            text: "loading...",
            textVisible: true,
            theme: "z",
            html: ""
        });
    };

    function hideMonitor() {
        $.mobile.loading("hide")
        $('#loading-indicator-overlay').remove();
    };

    $.invorkRpc = function(ajaxurl, method, params, isMonitor, successCb, errorCb) {

        if (isMonitor) {
            showMonitor();
        }



        var jsonRpcClient = new $.JsonRpcClient({
            'ajaxUrl': ajaxurl
        });

        jsonRpcClient.call(
            method, params,
            function(result) {
                console.log(method + ' success result');
                if (successCb !== undefined && successCb !== null) {
                    successCb.apply(null, [result]);
                    hideMonitor(ajaxurl + method);
                }

            },
            function(error) {
                console.log(method + ' error result' + error);
                if (errorCb !== undefined && errorCb !== null) {
                    errorCb.apply(null, [error]);
                    hideMonitor(ajaxurl + method);
                }
            }
        );
    }

})(jQuery)

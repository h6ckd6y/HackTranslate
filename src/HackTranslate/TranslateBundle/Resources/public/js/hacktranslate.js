jQuery(document).ready(function($) {

    // grow the textarea
    $('#tweetbox').focus(function(e){
        var $this = $(this);
        if ($this.height() == 20) {
            $this.animate({
                height : '120px'
            }, 400);
        }
    }).blur(function(){
        var $this = $(this);
        if ($this.height() == 120 && $this.val() == '') {
            $this.animate({ height:20}, 200);
        }
    });

    $('#translate').click(function() {
        translate('it','en','test');
    });

    function translate(toLanguage, fromLanguage, textToTranslate) {
        var p = {};
	    p.appid = '1DEA59FFA7DC652C652134FF0AC9F7170411CC5C';
	    p.to = toLanguage;
	    p.from = fromLanguage;
	    p.text = textToTranslate;

        $.ajax({
            url: 'http://api.microsofttranslator.com/V2/Ajax.svc/Translate',
            data: p,
            dataType: 'jsonp',
            jsonp: 'oncomplete',
            jsonpCallback: 'ajaxTranslateCallback',
            complete: function(request, status) {
                alert('complete: '+status);
            },
            success: function(data, status) {
                alert('success: data-'+data+',status-'+status);
            },
            error: function(request, status, error) {
                alert('error: status-'+status+',desc-'+error);
            }
        });
    }

    function ajaxTranslateCallback(response) {
	    alert('ajaxTranslateCallback('+response+')');
    }
});
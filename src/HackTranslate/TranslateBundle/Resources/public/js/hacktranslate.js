jQuery(document).ready(function($) {

    var $sourceLang = $('input#sourceLang'),
        $successMessage = $('.alert-message');

    // initially hide the notification
    $successMessage.hide();

    // close the notification div
    $successMessage.children('a.close').click(function(e){
        e.preventDefault();
        $successMessage.fadeOut();
    });

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

    $('#tweet-btn').click(function(e){
        e.preventDefault();
        var tweetText = $('#tweetbox').val(),
            fromLang = 'en',
            toLang = $('#tweet-lang-select option:selected').val();

        translate(toLang, fromLang, tweetText, function(data) {
            $.ajax({
                url : '/tweet/' + data,
                success : function(localData) {
                    $successMessage.fadeIn(200, function(){
                        $('#tweetbox').val('').animate({
                            height : 20
                        }, 120);
                    });
                    if (localData['user']['profile_image_url'] == undefined
                        || localData['user']['screen_name'] == undefined
                        || localData['created_at'] == undefined
                    ) {
                        return;
                    }
                    var html  = '<div class="well tweet new-tweet lang-"' + toLang +'">';
                        html += '<img src="' + localData['user']['profile_image_url'] + '" alt="" />';
                        html += '<p><a href="">' + localData['user']['screen_name'] + '</a> | ';
                        html += '<span class="date">' + localData['created_at'] + '</span></p>';
                        html += '<span class="tweet">' + localData['text'] + '</span>';
                        html += '<div style="clear: both;"></div>';
                        html += '</div>',
                    $('.timeline').children('div:first').before(html);
                    $('.new-tweet').hide().fadeIn(400);
                }
            })
        });

    });

    $('#tweet-lang-select').change(function(){
        var $this = $(this);
        console.log($sourceLang.children('option'));
    });


    function translate(toLanguage, fromLanguage, textToTranslate, callback) {
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
            success: callback,
            error: function(request, status, error) {
                alert('error: status-'+status+',desc-'+error);
            }
        });
    }

    function ajaxTranslateCallback(response) {
	    
    }
});
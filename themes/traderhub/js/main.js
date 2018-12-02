(function ($) {
  $(function() {

    //var hash = window.location.hash;
   // console.log(hash);
    // main page

    function handleErrors() {
      window.alert('Произошла, ошибка:', error);
      console.log('Error:', JSON.stringify(response), status, error);
    }

    function stadyCompleteCallbackForCRM(response) {
      console.log('success for registration result:', response);
    }

    function URLToArray(url) {
      var request = {},
          pairs = url.substring(url.indexOf('?') + 1).split('&');

      for (var i = 0; i < pairs.length; i++) {
        pairs[i] = decodeURIComponent(pairs[i]);
        var pair = pairs[i].split("\=");
        var key = pair[0].substring(pair[0].lastIndexOf("[")+1,pair[0].lastIndexOf("]"));
        request[key] = decodeURIComponent(pair[1]);
      }
      return request;
    }

    function getURLParameters() {
      var url = window.location.href;
      var result = {};
      var searchIndex = url.indexOf("?");
      if (searchIndex == -1 ) return result;
      var sPageURL = url.substring(searchIndex +1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++)
      {
        var sParameterName = sURLVariables[i].split('=');
        result[sParameterName[0]] = sParameterName[1];
      }

      return result;
    }

    function scroll2Error() {
      var params = getURLParameters();
      for (var paramName in params){
        if (paramName == 'form-error') {
          var dest = params[paramName];

          var p = $("#"+dest).offset().top;

          $('html, body').animate({
            scrollTop: p
          }, 1000);

        }
      }
    }

    function buildCRMForm(url) {
      var submitted = URLToArray(url),
          form = '<form id="hiddenCRMvalues">',
          subvalues = 0;

      for (key in submitted) {
        if (submitted.hasOwnProperty(key)) {
          //console.log(submitted[key]);
          form = form + '<input type="hidden" id="crm_' + key + '" name="crm_' + key + '" value="' +submitted[key] + '">';
          subvalues = subvalues + 1;
        }
      }

      form = form + '</form>';
      $(form).appendTo('.region-page-bottom');

      return subvalues;
    }

    function send2CRM(){
      var url = window.location.href,
          count = 0;

      if (url.indexOf('thankyou') !== -1) {
        count = buildCRMForm(url);

        // if (url.indexOf('thankyou1') !== -1 && count >=6) {
        //   landing.createObjectFromLanding(config1);
        // }
        //
        // if (url.indexOf('thankyou2') !== -1 && count >=6) {
        //   landing.createLeadFromLanding(config2);
        // }
        //
        // if (url.indexOf('thankyou5') !== -1 && count >=6) {
        //   landing.createLeadFromLanding(config3);
        // }
      }
    }

    function webformsJob() {
      if (!Cookies.get('ipCountry')) {
        $.getJSON("http://freegeoip.net/json/", function(data) {
          Cookies.set('ipCountry', data.country_name, { expires: 1 });
          Cookies.set('ipCity', data.city, { expires: 1 });
        });
      }

      $('.webform-client-form').each(function() {
        var $this = $(this),
            $btn = $this.find('.btn_sendsms'),
            $place = $this.find('.webform-component--smscode'),
            $country = $this.find('.webform-component--country input'),
            $city = $this.find('.webform-component--city input');

        $btn.insertAfter($place);

        if (!$country.val()) {
          $country.val(Cookies.get('ipCountry'));
        }

        if (!$city.val()) {
          $city.val(Cookies.get('ipCity'));
        }
      });
    }

    $( ".webform-component" )
        .on( "mouseenter", function() {
          var $this = $(this),
              $desc = $this.find('.description.formtips-processed');
          $desc.css('display', 'block');
        })
        .on( "mouseleave", function() {
          var $this = $(this),
              $desc = $this.find('.description.formtips-processed');
          $desc.css('display', 'none');
        });

    $(document).ready(function () {
      $('.front .block-system-main').remove(); //
      //$("body").delay(600).fadeIn(600);

      webformsJob();
      // send2CRM();
    });

    $(window).load(function() {
      scroll2Error();
    });

  });
}(jQuery));











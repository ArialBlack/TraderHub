(function ($) {
  $(function() {

    //var hash = window.location.hash;
   // console.log(hash);

    var config1 = {
      fields: {
        "Name": "#crm_name",
        "UsrSurname": "#crm_lastname",
        "Email": "#crm_Email",
        "MobilePhone": "#crm_phone",
        "City": "#crm_city",
        "Country": "#crm_country",
        "Commentary": "#crm_body"
      },
      landingId: "8a768405-a656-43b5-8487-fdbe78fc3e0e",
      serviceUrl: "https://fondexx.bpmonline.com/0/ServiceModel/GeneratedWebFormService.svc/SaveWebFormLeadData",
      redirectUrl: "http://trader-hub.com/thankyou1"
    };

    var confi2 = {
      fields: {
        "Name": "#crm_name",
        "UsrSurname": "#crm_lastname",
        "Email": "#crm_Email",
        "MobilePhone": "#crm_phone",
        "City": "#crm_city",
        "Country": "#crm_country",
        "Commentary": "#crm_body"
      },
      landingId: "46234ad8-7d7f-4dca-a3be-6385833cc633",
      serviceUrl: "https://fondexx.bpmonline.com/0/ServiceModel/GeneratedWebFormService.svc/SaveWebFormLeadData",
      redirectUrl: "http://trader-hub.com/thankyou2"
    };

    var config3 = {
      fields: {
        "Name": "#crm_name",
        "UsrSurname": "#crm_lastname",
        "Email": "#crm_Email",
        "MobilePhone": "#crm_phone",
        "City": "#crm_city",
        "Country": "#crm_country",
        "Commentary": "#crm_body"
      },
      landingId: "21f00e1c-f758-46af-abd6-ac609a40614d",
      serviceUrl: "https://fondexx.bpmonline.com/0/ServiceModel/GeneratedWebFormService.svc/SaveWebFormLeadData",
      redirectUrl: "http://trader-hub.com/thankyou5"
    };

    var submitted = 0;

    function URLToArray(url) {
      var request = {},
          pairs = url.substring(url.indexOf('?') + 1).split('&')

      for (var i = 0; i < pairs.length; i++) {
        if(!pairs[i])
          continue;
        var pair = pairs[i].split('=');
        var key = pair[0].substring(pair[0].lastIndexOf("[")+1,pair[0].lastIndexOf("]"));
        request[key] = decodeURIComponent(pair[1]);

        if (decodeURIComponent(pair[1])) {
          $('<input>').attr({
            type: 'hidden',
            id: 'crm_' + key,
            name: 'crm_' + key,
            value: decodeURIComponent(pair[1])
          }).appendTo('.region-page-bottom');

          submitted = submitted + 1;
        }
      }
      return request;
    }

    function checkUrl2CMR(){
      var url = window.location.href;

      if (url.indexOf('thankyou') !== -1) {
        URLToArray(url);

        if (url.indexOf('thankyou1') !== -1 && submitted >=6) {
          landing.initLanding(config1);
        }

        if (url.indexOf('thankyou2') !== -1 && submitted >=6) {
          landing.initLanding(config2);
        }

        if (url.indexOf('thankyou5') !== -1 && submitted >=6) {
          landing.initLanding(config3);
        }
      }
    }

    function webformsJob() {

      if ($('body .webform-client-form').length > 0) {
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
        $country.val(Cookies.get('ipCountry'));
        $city.val(Cookies.get('ipCity'));
      });
    }

    $(document).ready(function () {
      $('.front .block-system-main').remove(); //

      $("body").delay(600).fadeIn(600);
      //$(window).scrollTop(300); // $(hash).offset().top


      webformsJob();
      checkUrl2CMR();
    });

  });
}(jQuery));











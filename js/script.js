  $(document).ready(function() {
    /*$('.draggable').draggable({
      stack: '.draggable',
        containment: "#wrapper"
    });*/

     /*$('#clone').draggable({opacity:'0.5', helper:'clone'});
      $('#figures').droppable({drop:dropped});

  function dropped(ev, info) {
          var relX = ev.clientX;
          var relY = ev.clientY;
          $(info.draggable)
              .clone()
              .css({
                  "left": relX - 50,
                  "top": relY - 25
              })
              .prependTo('#figures').draggable({opacity: '0.5', helper: 'clone'});

  }*/

    $("#clone").on("dragstart", function() {
        $(this).clone().appendTo('#figures');

    });

    $('.draggable').draggable({
        stack: '.draggable',
        containment: "#wrapper",
    });

      $('img[usemap]').rwdImageMaps();

      $('area').on('click', function() {
      //    alert($(this).attr('alt') + ' clicked');
      });

    $('area').hover(function() {
        var target = $(this).data('target');
        $('#tooltip').show();
        $(target).show();
    },
        function() {
            var target = $(this).data('target');
            $(target).hide();
            $('#tooltip').hide();
        }
    );


    $('body').on('click', '#button-close-button img', function(e) {
      e.preventDefault();
      $('#popup').hide();
    });

    /*$('body #wrapper').on('click', function (e) {
        if($('#popup').is(':visible')) {
            e.preventDefault();
            $('#popup').hide();
        }
        else {
        }
    });*/

    $('figure').on('click', function(e) {
      e.preventDefault();
      var target = $(this).data('target');
      /*if($(target) == '#vid_box'){
        $('#vid_box').show();
        $('#popup').hide();
      }

      else {*/
          $('#popup').show();
          $('#popup .box').hide();
          $(target).show();
        $('img[usemap]').rwdImageMaps();

        //}
    });

    $('#screamer').on('click', function(e) {
       $('#screamer_vid').show();
        var vid = document.getElementById("scream");
        vid.play();
    });

    document.getElementById('scream').addEventListener('ended',myHandler,false);
      function myHandler(e) {
          $('#screamer_vid').hide();
      }

    $('#popup').on('blur',function(){
      $('#popup').hide();
    });

      var yourAudio = document.getElementById('yourAudio'),
          ctrl = document.getElementById('audioControl');

      ctrl.onclick = function () {

          // Update the Button
          var pause = ctrl.innerHTML === 'pause';
          ctrl.innerHTML = pause ? 'play' : 'pause';

          // Update the Audio
          var method = pause ? 'pause' : 'play';
          yourAudio[method]();

          // Prevent Default Action
          return false;
      };



    });

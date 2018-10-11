jQuery().ready(function () {

    var stickyPanelOptions = {
        afterDetachCSSClass: "",
        savePanelSpace: true
    };
    jQuery("nav.navbar").stickyPanel(stickyPanelOptions);

    jQuery(function() {
        jQuery('a[href^="#"]:not([href="#"])').click(function() {
            if( jQuery( this ).attr( 'data-toggle' ) == 'tab' ) {
                return true;
            }
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    jQuery('html,body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        back_to_top = jQuery('.back-to-top');

    //hide or show the "back to top" link
    jQuery(window).scroll(function(){
        ( jQuery(this).scrollTop() > offset ) ? back_to_top.addClass('back-to-top-visible') : back_to_top.removeClass('back-to-top-visible back-to-top-fade');
        if( jQuery(this).scrollTop() > offset_opacity ) { 
            back_to_top.addClass('back-to-top-fade');
        }
    });

    //smooth scroll to top
    back_to_top.on('click', function(event){
        event.preventDefault();
        jQuery('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});
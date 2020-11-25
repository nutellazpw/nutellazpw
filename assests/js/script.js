/* global $, mixitup, particlesJS */

/* ========= assalamu alaikum =========

  * Author      : Abdelaziz Sliem
  * Project     : Friend_814
  * Version     : 2.0

===================================== */


// Preloader
$(window).on('load', function () {
    "use strict";

    $('#loading').fadeOut('slow');
});

$(document).ready(function () {
    "use strict";

    var body = $('body, html'),
        home = $('header'),
        nav = $('.navbar'),
        navBtn = $('.navbar .navbar-toggler'),
        links = $('.nav-link'),
        navMobile = $('.navbar .collapse'),
        toTop = $('.to_top'),
        toDown = $('header .to_down'),
        contactmebtn = $('#contactme'),
        mixerContainer = $('#portfolio .works_content'),
        PopUp = $('#portfolio .popup'),
        snow = $('#snow-js'),
        particles = $('#particles-js');
        
        // Links of Sections in the navbar
        links.on('click', function (event) {
            event.preventDefault();
            if ($(window).innerWidth() > 766) {
                body.animate({scrollTop: $($(this).data('link')).offset().top}, 500);
            } else {
                body.scrollTop($($(this).data('link')).offset().top);
                navMobile.removeClass('show');
            }
        });

    // active the navbar when click on navbar button (change the color)
    navBtn.on('click', function () {
        if (!$(this).hasClass('collapsed') && body.scrollTop() <= 10) {
            nav.removeClass('active');
        } else {
            nav.addClass('active');
        }
    });
    
    // to top button (1- on click)
    toTop.click(function () {
        body.animate({scrollTop : 0}, 500);
    });
    
    // link to contact me section
    contactmebtn.on('click', function (event) {
        event.preventDefault();
        body.animate({scrollTop: $('#contact').offset().top}, 900);
    });
    
    // to down button (in the header)
    toDown.on('click', function () {
        body.animate({scrollTop: home.innerHeight() + 1}, 600);
    });

    // start typed.js (in the header)
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        backDelay: 900,
        loop: true,
        loopCount: false,
        showCursor: false,
        cursorChar: "|",
        attr: null,
        contentType: 'html'
    });
    
    // portfolio gallary (Magnific PopUp)
    PopUp.magnificPopup({
        type: 'image',
        disableOn: 400,
        key: 'some-key',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
    });

    // portfolio (MIXITUP)    
    if (mixerContainer.length > 0) {
        mixitup(mixerContainer, {
            selectors: {
                control: '.works_control > button'
            }
        });
    }

    // particles header
    if (particles.length > 0) {
        initParticles();
    }

    if (snow.length > 0) {
        initSnow(snow);
    }

    $(window).on('scroll', function () {
        // activate || deactivate the navbar
        if ($(window).scrollTop() > 10) {
            nav.addClass('active');
        }
        else {
            nav.removeClass('active');
        }

        // activate the current nav-link
        $('.section').each(function () {
            var id = $(this).attr('id'),
                target = $(this).offset().top;

            if ($(window).scrollTop() >= target - 1) {
                links.removeClass('active').blur();
                $('.nav-link[data-link="#' + id +  '"]').addClass('active');
            }
        });

        // activate || deactivate the "to top" button
        if ($(window).scrollTop() >= 500) {
            toTop.addClass('active');
        }
        else {
            toTop.removeClass('active');
        }
    });



});

// MY Experience
(function () {
    'use strict';
    var items = document.querySelectorAll(".experience li");
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function callbackFunc() {
        var i;
        for (i = 0; i < items.length; i += 1) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
}());

/**
 * initialize the particles canvas in the header
 */
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#333"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#888888"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#777",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    });
}

/**
 * initialize the snow canvas in the header
 */
function initSnow(snow) {
    snow.let_it_snow({
        speed: 1,           // How fast the snow falls [0 - 5]
        interaction: true,  // viewer interact with the falling snow
        size: 3,            // size of the snow [0 - 10]
        count: 150,         // number of snows displayed at a time
        opacity: 0,         // opacity variation of the snow. [0.00 - 1.00]
        color: "#999999",   // color of the snow
        windPower: 0.5,     // wind power [left => +ve number, right,-ve number]
        image: false        // path to an image instead of a default circle
    });
}
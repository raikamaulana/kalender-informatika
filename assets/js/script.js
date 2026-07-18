(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('body').addClass('page-loaded');
			$('.preloader').delay(1000).fadeOut(300);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var scrollY = $(window).scrollTop();
			var header = $('.main-header');
			var headerTop = $('.header-top'); // Marquee lo

			if (scrollY <= 400) {
				// STATE: ATAS (Sticky/Absolute)
				header.removeClass('header-fixed').addClass('header-absolute');
				header.css({
					"transform": "translateY(0)",
					"opacity": "1"
				});
				// Marquee tetap tampil di atas
				// headerTop.show(); 
				
			} else if (scrollY > 400 && scrollY <= 550) {
				// STATE: SEMBUNYI (Transisi kabur ke atas)
				header.css({
					"transform": "translateY(-100px)",
					"opacity": "0"
				});
				
			} else {
				// STATE: BAWAH (Fixed Glassy)
				header.addClass('header-fixed').removeClass('header-absolute');
				header.css({
					"transform": "translateY(0)",
					"opacity": "1"
				});
				// Marquee diumpetin pas lagi melayang biar ringkas
				// headerTop.hide();
			}
		}
	}
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
	headerStyle();

	$(window).on('scroll', function() {
		headerStyle();
	});

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);
		});
	}

	$(window).on('scroll', function() {
		var scrollPos = $(window).scrollTop();
		var btn = $('#backToTop');

		if (scrollPos > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	// Fungsi Klik: Balik ke Atas
	$('#backToTop').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 0);
	});
	
	// Loading masuk page akan di gantikan dengan fungsi berikut
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);

document.addEventListener("DOMContentLoaded", function () {
    let seeCalenderBtn = document.getElementById("seeCalenderBtn");
    let seeUpcomingBtn = document.getElementById("seeUpcomingBtn");
    let seeAllAgendaBtn = document.getElementById("seeAllAgendaBtn");
    let seeAllAgendaBtn2 = document.getElementById("seeAllAgendaBtn2");
    let upcomingSection = document.getElementById("agenda-terdekat-section");
    let calendarSection = document.getElementById("kalender-section");
    let termsSection = document.getElementById("term-and-conditions-section");

    seeCalenderBtn.addEventListener("click", function () {
        calendarSection.scrollIntoView({ behavior: "smooth" });
    });
    seeAllAgendaBtn.addEventListener("click", function () {
        calendarSection.scrollIntoView({ behavior: "smooth" });
    });
    seeAllAgendaBtn2.addEventListener("click", function () {
        calendarSection.scrollIntoView({ behavior: "smooth" });
    });
    seeUpcomingBtn.addEventListener("click", function () {
        upcomingSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const termAccordions = document.querySelectorAll(".term-item .accordion-toggle");
    termAccordions.forEach((accordion) => {
        accordion.addEventListener("change", function () {
            // Tutup card Media Partner lainnya saat card ini diklik buka
            termAccordions.forEach((item) => {
                if (item !== this) item.checked = false;
            });
        });
    });
});
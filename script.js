$(document).ready(function(){
    // Sticky Navbar and Scroll-Up Button
    $(window).scroll(function(){
        // Sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-Up Button Click
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'smooth'); // 'smooth' might require jQuery UI for full effect, otherwise it's a fast scroll
        // Removing smooth scroll for broader compatibility if jQuery UI is not used
        // $('html, body').animate({scrollTop: 0});
        return false; //  Preventing default click action
    });

    // Mobile Menu Toggle
    $('.menu-btn-toggler').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn-toggler i').toggleClass("active fa-times fa-bars"); // Toggles between bars and X icon
    });

    // Close mobile menu when a menu item is clicked
    $('.navbar .menu li a').click(function(){
        if($('.navbar .menu').hasClass("active")){
            $('.navbar .menu').removeClass("active");
            $('.menu-btn-toggler i').removeClass("active fa-times").addClass("fa-bars");
        }
    });

    // Typed.js Animation for Home Section
    if($('.home .typing').length){
        var typed = new Typed(".home .typing", {
            strings: ["Electrical Engineer", "Web Developer", "Designer", "Gaming Enthusiast", "Tech Consultant"], // Customize these
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Typed.js Animation for About Section
    if($('.about .typing-2').length){
        var typed2 = new Typed(".about .typing-2", {
            strings: ["Problem Solver", "Innovator", "Project Manager", "Lifelong Learner"], // Customize these
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Owl Carousel Initialization
    // Teams Carousel
    if($('.teams .carousel').length){
        $('.teams .carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000, // Time in ms
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
    }

    // Portfolio Carousel
    if($('.portfolio .portfolio-content.owl-carousel').length){ // Ensure it targets the owl-carousel class
        $('.portfolio .portfolio-content.owl-carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                768:{ // Changed breakpoint for 2 items
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
    }

    // Testimonials Carousel
    if($('.testimonials .carousel').length){
        $('.testimonials .carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                768:{ // Changed breakpoint for 1 or 2 items (adjust as needed for testimonial length)
                    items: 1, // Often 1 testimonial looks better on tablet
                    nav: false
                },
                1000:{
                    items: 2, // Or 1 or 3, depending on design
                    nav: false
                }
            }
        });
    }

    // Skill Bar Animation with Waypoints.js
    // This requires Waypoints.js (already in your HTML)
    // The actual width is set in CSS, this just adds a class to trigger an animation if you have one
    // Or, you can animate the width directly here.
    if($('.skills .skills-content').length) {
        $('.skills .skills-content').waypoint(function(direction) {
            if (direction === 'down') {
                $('.skills .skills-content .line').each(function() {
                    // Option 1: Add a class to trigger CSS animation
                    // $(this).addClass('animate-skill-bar');

                    // Option 2: Animate width directly with jQuery (if not using CSS for widths)
                    // var percentage = $(this).parent().find('span:nth-child(2)').text(); // Get percentage text
                    // $(this).find('::before').animate({ width: percentage }, 1500); // This won't work on ::before, needs JS to set width of the .line itself
                    // So for direct JS animation of skill bars, the approach is different:
                    // You'd have the :: before element in CSS with width 0 initially
                    // and then on waypoint, you set the width of the parent .line or an inner div.
                    // For simplicity with your current CSS, we assume CSS handles the final width.
                    // This waypoint can be used to trigger a class that starts a CSS transition/animation.
                    // Let's assume your CSS line::before has a transition property.
                    // The CSS width properties like .html::before { width: 70%; } will apply.
                    // To make them animate "on scroll", you'd initially set their width to 0% in CSS,
                    // then add a class here that applies the target width.

                    // Example: Assuming you have CSS transitions on the ::before pseudo-element's width
                    // and the actual width is set by classes like '.html', '.css' on the .line div
                    // This is a common pattern.
                    $(this).addClass('in-view'); // Add a class to parent .line div
                });
            }
        }, {
            offset: '75%' // Trigger when 75% of the element is visible
        });
    }
    // If you use the 'in-view' class method for skill bars, add this to your CSS:
    /*
    .skills .skills-content .right .line::before {
        width: 0; // Initial width
        transition: width 1.5s ease-out; // Animation
    }
    .skills .skills-content .right .line.in-view.html::before { width: 70%; }
    .skills .skills-content .right .line.in-view.css::before { width: 60%; }
    .skills .skills-content .right .line.in-view.digital-marketing::before { width: 95%; }
    .skills .skills-content .right .line.in-view.seo::before { width: 80%; }
    .skills .skills-content .right .line.in-view.pr::before { width: 75%; }
    .skills .skills-content .right .line.in-view.js::before { width: 50%; }
    .skills .skills-content .right .line.in-view.electrical-skill-1::before { width: 90%; }
    .skills .skills-content .right .line.in-view.electrical-skill-2::before { width: 85%; }
    */


    // Active Menu Item Highlighting on Scroll
    var sections = $('section');
    var nav_height = $('.navbar').outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height - 70, // Added extra offset
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                $('.navbar .menu li a').removeClass('active-menu-link'); // New class for active link
                sections.removeClass('active-menu-link');

                $(this).addClass('active-menu-link');
                $('.navbar .menu li a[href="#'+$(this).attr('id')+'"]').addClass('active-menu-link');
            }
        });

        // Handle the case for the top of the page (Home section)
        if (cur_pos < $(sections[0]).offset().top - nav_height - 70) {
             $('.navbar .menu li a').removeClass('active-menu-link');
             $('.navbar .menu li a[href="#home"]').addClass('active-menu-link');
        }
        // Handle the case for the bottom of the page (Contact section if it's the last one)
        if (cur_pos + $(window).height() > $(document).height() - 100) { // If near bottom
             $('.navbar .menu li a').removeClass('active-menu-link');
             $('.navbar .menu li a[href="#contact"]').addClass('active-menu-link');
        }
    });
    // Add this to your CSS for the active menu link style:
    /*
    .navbar .menu li a.active-menu-link {
        color: var(--secondary-color); // Or your chosen active link color
        font-weight: 700; // Example
    }
    .navbar.sticky .menu li a.active-menu-link {
        color: #f0f0f0; // Example for sticky nav
    }
    */

});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const message = this.message.value.trim();
  const status = document.getElementById('formStatus');
  
  if (!name || !email || !message) {
    status.textContent = 'Please fill in all required fields.';
    status.style.color = 'tomato';
    return;
  }
  
  // Here you could send data to backend or email service.
  // For now, just simulate success:
  
  status.textContent = 'Thank you, your message has been received!';
  status.style.color = 'lightgreen';
  
  // Reset form after success
  this.reset();
});


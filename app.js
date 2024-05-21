// animate logo on ready
$(document).ready(function() {
   var icon = $(".main-logo")
   icon.attr("trigger", "in")
   setTimeout(function() {
      icon.attr("trigger", "hover")
   }, 2500)
})

// go to newsletter on submit order
$("#wp").click(function() {
   setTimeout(function() {
      $(".newsletter-form").focus()
   })
})


// collapsing navbar
var navButton = $(".toggle-nav")
var navButton2 = $(".toggle-background div")
var mid = $(".nav-mid")
var bg = $(".toggle-background")
var doc = $("html")

navButton.click(function() {
      bg.css("width", "100vw");
      navButton2.css("animation", "bloom 0.25s ease 0.25s forwards")

  setTimeout(function() {
         mid.css("display", "flex");
         mid.css("animation", "bloom 0.25s ease forwards")
         doc.css("overflow-y", "hidden")
  }, 500)
})

navButton2.click(function(){
   mid.css("display", "none");
   mid.css("ainmation", "none")
   doc.css("overflow-y", "scroll")

   setTimeout(function(){
      bg.css("width", "0");
      navButton2.css("animation", "none") 
   }, 500)
})

// click to copy email and number
var topEmail = $(".email");

topEmail.on("mouseover", function() {
   var icon = $(".top-bar-email");
   icon.attr("trigger", "in")  ;
   topEmail.on("click", function(){
      icon.attr("trigger", "in");
      var text = this.text;
      navigator.clipboard.writeText(text);
      topEmail.attr("title", "copied");
      topEmail.on("mouseout", function() {
         topEmail.attr("title", "Click To Copy");
      });
   });
});

var topNumber = $(".number");

topNumber.on("mouseover", function() {
   var icon = $(".top-bar-telephone");
   icon.attr("trigger", "in");
   topNumber.on("click", function(){
      icon.attr("trigger", "in");
      var text = this.text;
      navigator.clipboard.writeText(text);
      topNumber.attr("title", "copied");
      topNumber.on("mouseout", function() {
         topNumber.attr("title", "Click To Copy");
      });
   });
});

// hover to animate services button

$(".button-1 h5").on("mouseover", function() {
   var thisIcon = $(".button-1 lord-icon")
   thisIcon.attr("trigger", "in")
   this.on("mouseout", function() {
      thisIcon.attr("trigger", "hover")
   })
})

$(".button-2 h5").on("mouseover", function() {
   var thisIcon = $(".button-2 lord-icon")
   thisIcon.attr("trigger", "in")
   this.on("mouseout", function() {
      thisIcon.attr("trigger", "hove")
   })
})

$(".button-3 h5").on("mouseover", function() {
   var thisIcon = $(".button-3 lord-icon")
   thisIcon.attr("trigger", "in")
   this.on("mouseout", function() {
      thisIcon.attr("trigger", "hove")
   })
})

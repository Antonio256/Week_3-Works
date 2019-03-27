
jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

jQuery("img").click(function() {
  alert("This is an image.");
});
});



// for colors.HTML
$(document).ready(function() {
  $("button#green").click(function() {
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").addClass("red-background");
  });
});


//updated to display all colours

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

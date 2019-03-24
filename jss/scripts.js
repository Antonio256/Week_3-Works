/*
$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});
*/


/* DIsplays an image when clicked but does not switch it back. The nect code switches it back.
And hides the image again
$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").show();
    $(".walrus-hidden").hide();
  });
});
*/

/*
$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});
*/

// catering for the clickable functionlaity below

$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});

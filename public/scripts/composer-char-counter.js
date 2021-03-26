//function for counting characters as tweet is being typed

$(document).ready(function () {
  $("#tweet-text")
    .keyup(function () {

      const maxCount = 140;
      const charCount = $(this).val().length;
      const charLeft = maxCount - charCount;
      const characterCounter = $(this).parent().find("#character-counter");

      characterCounter.text(charLeft);

      if (charLeft < 0) {
        characterCounter.addClass("red-counter")
      } else {
        characterCounter.removeClass("red-counter")
      }
      // another good method is to use characterCounter.toggleClass("red-counter", charLeft < 0)
    });
});
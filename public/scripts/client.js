$(document).ready(function () {

  //constructing the tweet box as designed in html
  const createTweetElement = function (tweet) {
    return `
  <article class="posted-tweet">
    <header> 
       <div>
       <img src= ${tweet.user.avatars}>
             <h3>${tweet.user.name}</h3>
           </div>
            <h4>${tweet.user.handle}</h4>
    </header>
        <div><p>${tweet.content.text}</p></div>
    <footer>
           <div>${new Date(tweet.created_at).toLocaleDateString('en-gb')}</div>
        <div>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
    </footer>
</article>
  `
  }

  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      $('section.article').prepend(createTweetElement(tweet));
    }
  }

  //Ajax get request for tweet//

  const loadTweets = function (renderTweets) {
    $.ajax('/tweets/', {
        method: 'GET'
      })
      .then(function (tweets) {
        console.log('Success: ', tweets);
        renderTweets(tweets);
      });
  };
  //calling loadtweets function to renderTweets//
  loadTweets(renderTweets);

  $("form").on("submit", function (event) {

    //slide-down error message if tweet is empty or null
    event.preventDefault();
    if ($("#tweet-text").val() === '' || $("#tweet-text").val() === null) {
      $("#errorMessages").empty().append("<p>Please make a tweet!!!</p>").hide();
      if ($("#errorMessages").first().is(":hidden")) {
        $("#errorMessages").slideDown("slow").addClass("red-error")
      }
    //slide-down error message if tweet is too long
    } else if ($("#tweet-text").val().length > 140) {
      $("#errorMessages").empty().append("<p>Your tweet is too long!!!</p>").hide();
      if ($("#errorMessages").first().is(":hidden")) {
        $("#errorMessages").slideDown("slow").addClass("red-error")
      }
      // Ajax post request for tweet
    } else {
      let str = $(this).serialize();
      console.log("string?", str)

      $.ajax({
        data: str,
        url: "/tweets/",
        method: "POST",
      }).then((result) => {
        console.log("tweets?", result)
        $("#errorMessages").hide();
        $("#tweet-text").val('');
        loadTweets(renderTweets);
        //resetting the textarea after tweet is made
        $("#character-counter").html(140);
      }).catch(err => {
        //checking for erros in developer tool
        console.log('ajax error caught');
        console.log(err);
      });
    }
  });
});
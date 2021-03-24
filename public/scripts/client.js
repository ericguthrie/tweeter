$(document).ready(function () {


  const createTweetElement = function (tweet) {
    let $tweet = `
    <article class="posted-tweet">
    <header> 
      <div><img src= ${tweet.user.avatars}>
      <h3>${tweet.user.name}</h3></div>
       <h4>${tweet.user.handle}</h4>
    </header>
  <div><p>${tweet.content.text}</p></div>
<footer>
  <div>${tweet.created_at}</div>
  <div>
       <i class="fas fa-flag"></i>
       <i class="fas fa-retweet"></i>
       <i class="fas fa-heart"></i>
      </div>
</footer>
</article>
    `
    return $tweet;
  }
  console.log(createTweetElement(tweetData));

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('section.article').append($tweet);
});


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

// to add it to the page so we can make sure it's got all the right elements, classes, etc.
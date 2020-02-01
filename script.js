$(document).ready(function() {

  function getQuote(){
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      $('#text').text(data.quoteText);
      $('#author').text(data.quoteAuthor);
    })

  }

  getQuote();

  $("#new-quote").on('click',function(){
    getQuote();
  });

  $('#tweet-quote').on('click', function(){
    window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='   + quote);

  })

});

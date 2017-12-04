$(document).ready(() => {
  //Tweet a quote
  $('#tweet-button').on('click', () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${$(
        '#quote-content'
      ).text()} ~ ${$('#quote-title').text()}`
    );
  });

  // Load a quote when the page loads
  $.ajax({
    url:
      'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      $('#quote-title').text(post.title);
      $('#quote-content').html(post.content);
      // If the Source is available, use it. Otherwise hide it.
      if (
        typeof post.custom_meta !== 'undefined' &&
        typeof post.custom_meta.Source !== 'undefined'
      ) {
        $('#quote-source').html('Source:' + post.custom_meta.Source);
      } else {
        $('#quote-source').text('');
      }
    },
    cache: false
  });

  // Load a new quote whenever button is pressed
  $('#get-quote-button').on('click', e => {
    e.preventDefault();
    $.ajax({
      url:
        'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);

        // If the Source is available, use it. Otherwise hide it.
        if (
          typeof post.custom_meta !== 'undefined' &&
          typeof post.custom_meta.Source !== 'undefined'
        ) {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  });
});

(function($) {

  'use strict';

  var $filters = $('.filter [data-filter]'),
    $main = $('.main [data-category]');

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);

    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $main.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $main.each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    } else {
      $main.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $main.filter('[data-category = "' + $filterColor + '"]').each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
       });
   }
 };

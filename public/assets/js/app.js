$(function(){
  //initializing global variables
  //gave $ to remember its a jQuery object
  var $remove = $(".glyphicon-remove");
  var $star = $(".glyphicon-star");
  var $checkbox = $(".checkBox");

  //removes list item when x button is clicked
  //moving from one element to another is traversing
  //callbacks are functions that wait to be called again
  function removeParent(){
    //adding event listener
    $(this).on('click', function(){
      $(this).parent().remove();
    });
  }

  //toggles color of star from grey to gold
  function starParent(){
    $(this).on('click', function(){
      $(this).toggleClass('active');
    });
  }

  //strikes through list item name
  function strikeParent(){
    $(this).on('click', function(){
      $(this).next().next().toggleClass('strikethrough');
    });
  }

  //event listeners
  $(".glyphicon-remove").each(removeParent);
  $(".glyphicon-star").each(starParent);
  $(".checkBox").each(strikeParent);

  //adds a new box and retreives value from todo id
  //made callback functions to include the new items created into array
  $(".btn").on('click', function(){
    $(".list").append("<p class='item'><input type='checkbox' class='checkBox'><i class='glyphicon glyphicon-star'></i><span>"+$('#todo').val()+"</span><i class='glyphicon glyphicon-remove'></i></p>");
    $('#todo').val('');
    console.log('add button pressed');
    $remove = $(".glyphicon-remove");
    $star = $(".glyphicon-star");
    $checkbox = $(".checkBox");
    $(".glyphicon-remove").each(removeParent);
    $(".glyphicon-star").each(starParent);
    $(".checkBox").each(strikeParent);
  });
})

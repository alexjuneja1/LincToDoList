$(function(){

  //load all todolist items from database
  function loadItems(){
    $.ajax({
      url: "/api",
      method: "GET",
      success: function(data){
        console.log("Items = " + data)
        data.forEach(function(todo){
          $(".list").append("<p class='item' id='"+todo._id+"'><input type='checkbox' class='checkBox'><i class='glyphicon glyphicon-star'></i><span>"+todo.name+"</span><i class='glyphicon glyphicon-remove'></i></p>");
          //event listeners
        })
        $(".glyphicon-remove").each(removeParent);
        $(".glyphicon-star").each(starParent);
        $(".checkBox").each(strikeParent);
      }
    })
  }
  loadItems()

  //removes list item when x button is clicked
  //moving from one element to another is traversing
  //callbacks are functions that wait to be called again

//BRIAN
  function removeParent(){
    //adding event listener
    $(this).on('click', function(){
      var id = $(this).parent().attr('id')
      $.ajax({
        url: "/api/" + id,
        method: "DELETE",
        success: function(data){
          console.log("Deleted item: " + data)
          $(this).parent().remove();
        }
      })
    });
  }

//EMMA
  //toggles color of star from grey to gold
  function starParent(){
    $(this).on('click', function(){
      $(this).toggleClass('active');
    });
  }

//ALEX
  //strikes through list item name
  function strikeParent(){
    $(this).on('click', function(){
      var id = $(this).parent().attr('id')
      $.ajax({
        url: "/api/" + id,
        method: "PUT",
        success: function(data){
          console.log("Completed item: " + data)
          $(this).next().next().toggleClass('strikethrough');
        }
      })
    })
  }

  //adds a new box and retreives value from todo id
  //made callback functions to include the new items created into array
  $(".btn").on('click', function(){
    var val = $('#todo').val()
    console.log("adding todo: " + val)
    $.ajax({
      url: "/api",
      method: "POST",
      data: { name: val, starred: false},
      dataType: "application/json",
      success: function(data){
        console.log(data);
        $(".list").append("<p class='item' id='"+data.item._id+"'><input type='checkbox' class='checkBox'><i class='glyphicon glyphicon-star'></i><span>"+data.item.name+"</span><i class='glyphicon glyphicon-remove'></i></p>");
        //redo event listener calls
        $(".glyphicon-remove").each(removeParent);
        $(".glyphicon-star").each(starParent);
        $(".checkBox").each(strikeParent);
        $('#todo').val('');
      }
    })
  });

})

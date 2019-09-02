 $(function () {
    // attach event listener to the form 
    $('#js-shopping-list-form').submit(function (event) {
    // stop default action for submit
    event.preventDefault();
    // add the input (item) to the list 
    var entry = $('#shopping-list-entry').val();
     $('.shopping-list').append(`<li><span class="shopping-item">${entry}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)
    })
    // when user clicks 'check', toggle strikethrough
    $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    })
    // when user clicks 'delete', remove item from list
    $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
        $(this).closest("li").remove();
    })
  });
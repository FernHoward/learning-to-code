var itemTemplate = $('#templates .item')
var list         = $('#list')
var addItemToPage = function(itemData) {
  var item = itemTemplate.clone()
  item.attr('data-id',itemData.id)
  item.find('.description').text(itemData.description)
  if(itemData.completed) {
    item.addClass('completed')
  }
  list.append(item)
}
var loadRequest = $.ajax({
  type: 'GET',
  url: "https://listalous.herokuapp.com/lists/Wash-Day-Routine-Checklist/"
})
loadRequest.done(function(dataFromServer) {
  var itemsData = dataFromServer.items

  itemsData.forEach(function(itemData) {
    addItemToPage(itemData)
  })
})

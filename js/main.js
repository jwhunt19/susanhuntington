const $photos = $(".gallery a");

$("#gallery-search").on("keyup", function(e) {
  const $input = $(e.target).val().toLowerCase();
  for ( let i = 0 ; i < $photos.length ; i += 1) {
    const $gallery_item = $photos.eq(i);
    if ($gallery_item.attr("data-alt").toLowerCase().indexOf($input) === -1) {
      $gallery_item.hide();
    } else { 
        $gallery_item.show(); 
    }
  }
});

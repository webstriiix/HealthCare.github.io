$('.hero').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    wrapAround: true
  });
  
  $("#search").on("keyup",function() {
    $(".friend ").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf($("input").val().toLowerCase()) > -1 )
    })
  })
  
  
  $("#berita").on("keyup",function() {
    $(".news .card").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf($("#berita").val().toLowerCase()) > -1 )
    })
  })
$(document).ready(function(){

  $("#animaloption").submit(function(event){
    event.preventDefault();
    var option = $("#animallist").val();
    console.log(option);

    $("#" + option).toggle();


  })
})


//
// $("#ratoption").click(function(){
//   // $("#ratstats").toggle();

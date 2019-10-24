$(document).ready(function(){

  $("#animaloption").submit(function(event){
    event.preventDefault();
    var option = $("#animallist").val();
    console.log(option);

    $("#" + option).toggle();

  });
});

$(document).ready(function(){
  $("#animalinsurance").submit(function(event){
    event.preventDefault();
    var age = parseInt($("#age").val());
    var gender = $("select#gender").val();
    if (age) {
       var quote = 1000 - age;
       if (gender === 'male' && age < 56) {
         quote += 250;
       }
       $("#rate").empty().append(quote);
       $("#quote").show();
     } else {
       alert('Please enter your age.');
     }
})

  });

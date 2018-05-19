//define functions here
function getIt(){
  return $('p').on("click", function(){
    alert("Hey!");
  });
}
function frameIt(){
return $('.tasty').on('load', function(){
  $('this').css('border', 'red');
});
}
function pressIt(){

}
function submitIt(){

}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});

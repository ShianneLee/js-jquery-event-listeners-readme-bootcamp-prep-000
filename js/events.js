//define functions here
function getIt(){
  return $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
return $('img').on('load', function(){
  $('img').addClass('tasty');
});
}

function pressIt(){
  return $('keydown').on('keydown', function(key){
    if(key.which == 71){
      alert('G key is pressed');
    }
  });
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

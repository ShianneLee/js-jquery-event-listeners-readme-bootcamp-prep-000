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
  return $(document).on('keydown', function(key){
    if(key.which == 71){
      alert('G key is pressed');
    }
  });
}

function submitIt(){
return $('form').on('submit', function(){
  if($('input:first').val() === 'correct'){
    alert('Your form is going to be submitted now.');
    return;
  }
});
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});

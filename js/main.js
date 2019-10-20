function seemoreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("seemore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}

window.onload=function(){
  var menu = document.getElementById('menu');
  var nav = document.getElementById('nav');
  var exit = document.getElementById('exit');
  
  menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
  });
  exit.addEventListener('click', function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
  
  });
}

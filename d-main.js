  
      // one click that two class added in different Element 
      // fisrt add class ==> nav-btn ====== right side 
      // secound add claas ==> main-nav ========= left side click that show navbar 

  const manu = document.getElementById ("nav-btn");
  manu.onclick = function(){
    manu.classList.toggle('navbar-show'); 
    const main = document.getElementById("main-nav");
    main.classList.toggle('navbar-hide'); 

  }


  // scroll up-down navbar/top-bar hide and show 
  // navbar top 0px and down full normal condition 

  var bottom = window.pageYOffset;
window.onscroll = function() {
var top = window.pageYOffset;
  if (bottom > top) {
    document.getElementById("top-bar").style.top = "0px";
  } else {
    document.getElementById("top-bar").style.top = "-125px";
  }
  bottom = top ;
}



// !=============================








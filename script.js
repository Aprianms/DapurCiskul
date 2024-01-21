let valueDisplays = document.querySelectorAll(".value")
let interval = 5000
let happyCustomerDisplay = document.getElementById("HappyCustomer")
valueDisplays.forEach((valueDisplays) =>{
    let startValue= 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    console.log(endValue) 
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter)
            
        }

    },duration)
})
window.addEventListener('scroll', function() {
  const navbarMenu = document.getElementById('navbarMenu');

  // Tutup daftar jika sedang terbuka
  if (navbarMenu.classList.contains('active')) {
    navbarMenu.classList.remove('active');
  }
});
document.addEventListener("DOMContentLoaded",function(){
  let nav = document.getElementById("navbar")
  let navtgl = document.getElementById("navbar-toggle")
  let footer = document.getElementById("footer").offsetTop
  window.addEventListener("scroll", function(){
    let scrollPosition  = this.window.scrollY;
    if (scrollPosition >= footer - 800){
      nav.classList.add("bg-dark")
      navtgl.classList.add("bg-dark")
    }
    else{
      nav.classList.remove("bg-dark");
      navtgl.classList.remove("bg-dark")
    }
  });
});
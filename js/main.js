var imgs = document.getElementsByClassName("imgItem");
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var close = document.getElementById("close");
var next = document.getElementById("next")
var prev = document.getElementById("prev")

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (eventInfo) {
    var imgSrc = eventInfo.target.src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    lightBoxContainer.style.display = "flex";
  })
}

close.addEventListener("click", closeslide);
function closeslide() {
  lightBoxContainer.style.display = "none";
}

var currentslide = 0
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (eventInfo) {
    currentslide = imgs.indexOf(eventInfo.target);

    var imgSrc = eventInfo.target.src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    lightBoxContainer.style.display = "flex";
  })
}
function changeImage(index) {
  currentslide = index;
  var imgSrc = imgs[currentslide].src;

  lightBoxItem.style.opacity = 0;

  setTimeout(function () {
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    lightBoxItem.style.opacity = 1;
  }, 250); 
}




next.addEventListener("click" , nextslide)
function nextslide(){
  currentslide++
  if(currentslide == imgs.length){
    currentslide=0
  }
  var imgSrc = imgs[currentslide].src;
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
  changeImage(currentslide);

}

prev.addEventListener("click" , prevslide)
function prevslide(){
  currentslide--
  if(currentslide < 0){
    currentslide=imgs.length - 1
  }
  var imgSrc = imgs[currentslide].src;
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
  changeImage(currentslide);

}

document.addEventListener("keyup" ,function(e){
  if(e.keyCode == 39){
    nextslide()
  }
else if (e.keyCode == 37){
  prevslide()
}
else if (e.keyCode == 27){
  closeslide()
}
})

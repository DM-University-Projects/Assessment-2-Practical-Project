window.onload = function(){
  var slideIndex = 0;
  showSlides();

  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2500); // Change image every 2.5 seconds
  }
};

  // Get the modal Harvard Referencing (HR2)
  var modal = document.getElementById('myModal');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  // Get all images and insert the clicked image inside the modal
  // Get the content of the image description and insert it inside the modal image caption
  var images = document.getElementsByTagName('img');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var i;
  for (i = 0; i < images.length; i++) {
     images[i].onclick = function(){
         modal.style.display = "block";
         modalImg.src = this.src;
         modalImg.alt = this.alt;
         captionText.innerHTML = this.nextElementSibling.innerHTML;
     }

};

window.onload = function () {

    let modal = document.getElementById('myModal');

    let btn = document.getElementById("myBtn");
  
    let span = document.getElementsByClassName("closeButtonForm")[0];
  
    function openModal() {
      modal.style.display = "block";
    }
    btn.addEventListener("click", openModal);
  
    function closeModal() {
      modal.style.display = "none";
    }
    span.addEventListener("click", closeModal);
  
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        modal.style.display = "none";
      }
      });54
    }
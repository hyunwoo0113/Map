function showModal(id) {//모달창 열기
    var modal = document.getElementById(id);
    var modalContent = modal.querySelector(".modal-content");
    modal.style.display = "block";
  }
  
  function closeModal(id) {//모달창 닫기
  var modal = document.getElementById(id);
  modal.style.display = "none";
}

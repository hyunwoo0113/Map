function showModal(id) {
    var modal = document.getElementById("myModal");
    var img = document.getElementById(id);
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// 모달 창 닫기
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
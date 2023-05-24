function showModal(id) {//모달창 열기
    var modal = document.getElementById(id);
    var modalContent = modal.querySelector(".modal-content");
    modal.style.display = "block";
  }
  
  function closeModal(id) {//모달창 닫기
  var modal = document.getElementById(id);
  modal.style.display = "none";
}


// 체크박스 요소 가져오기
var checkbox = document.querySelector('.checkbox');

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', function() {
  // 현재 스크롤 위치 가져오기
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // 체크박스 위치 업데이트
  checkbox.style.top = (20 + scrollTop) + 'px'; // 50은 체크박스 초기 위치입니다.
});

// IT콘텐츠과 체크박스
var itCheckbox = document.getElementById("it_checkbox")
itCheckbox.addEventListener("click", function() {
  var itImages = document.querySelectorAll(".it") // .it 클래스를 가진 모든 이미지 요소들을 가져옴
  if (itCheckbox.checked) {
    // 체크박스가 체크되면
    itImages.forEach(function(img) {
      img.style.display = "block" // 이미지 요소들을 보이게 함
    })
  } else {
    // 체크박스가 체크 해제되면
    itImages.forEach(function(img) {
      img.style.display = "none" // 이미지 요소들을 숨김
    })
  }
})

// 보건과 체크박스
var nurseCheckbox = document.getElementById("nurse_checkbox")
nurseCheckbox.addEventListener("click", function() {
  var nurseImages = document.querySelectorAll(".nurse") // .it 클래스를 가진 모든 이미지 요소들을 가져옴
  if (nurseCheckbox.checked) {
    // 체크박스가 체크되면
    nurseImages.forEach(function(img) {
      img.style.display = "block" // 이미지 요소들을 보이게 함
    })
  } else {
    // 체크박스가 체크 해제되면
    nurseImages.forEach(function(img) {
      img.style.display = "none" // 이미지 요소들을 숨김
    })
  }
})

// 뷰티과 체크박스
var beautyCheckbox = document.getElementById("beauty_checkbox")
beautyCheckbox.addEventListener("click", function() {
  var beautyImages = document.querySelectorAll(".beauty") // .it 클래스를 가진 모든 이미지 요소들을 가져옴
  if (beautyCheckbox.checked) {
    // 체크박스가 체크되면
    beautyImages.forEach(function(img) {
      img.style.display = "block" // 이미지 요소들을 보이게 함
    })
  } else {
    // 체크박스가 체크 해제되면
    beautyImages.forEach(function(img) {
      img.style.display = "none" // 이미지 요소들을 숨김
    })
  }
})

// 외조과 체크박스
var cookCheckbox = document.getElementById("cook_checkbox")
cookCheckbox.addEventListener("click", function() {
  var cookImages = document.querySelectorAll(".cook") // .it 클래스를 가진 모든 이미지 요소들을 가져옴
  if (cookCheckbox.checked) {
    // 체크박스가 체크되면
    cookImages.forEach(function(img) {
      img.style.display = "block" // 이미지 요소들을 보이게 함
    })
  } else {
    // 체크박스가 체크 해제되면
    cookImages.forEach(function(img) {
      img.style.display = "none" // 이미지 요소들을 숨김
    })
  }
})
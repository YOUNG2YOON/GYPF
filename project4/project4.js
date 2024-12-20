const btn = document.getElementById("ex-btn"); // 모달을 띄우는 버튼 요소 가져오기
const modal = document.getElementById("modalWrap"); // 모달 창 요소 가져오기
const closeBtn = document.getElementById("closeBtn"); // 모달을 닫는 버튼(X) 요소 가져오기

btn.onclick = function () {
  modal.style.display = "block"; // 버튼을 클릭하면 모달을 보이게 함
};

closeBtn.onclick = function () {
  modal.style.display = "none"; // 모달을 닫는 버튼(X)을 클릭하면 모달을 숨김
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // 모달 외부를 클릭하면 모달을 숨김
  }
};







const btn2 = document.getElementById("ex-btn2"); // 모달을 띄우는 버튼 요소 가져오기
const modal2 = document.getElementById("modalWrap2"); // 모달 창 요소 가져오기
const closeBtn2 = document.getElementById("closeBtn2"); // 모달을 닫는 버튼(X) 요소 가져오기

btn2.onclick = function () {
  modal2.style.display = "block"; // 버튼을 클릭하면 모달을 보이게 함
};

closeBtn2.onclick = function () {
  modal2.style.display = "none"; // 모달을 닫는 버튼(X)을 클릭하면 모달을 숨김
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none"; // 모달 외부를 클릭하면 모달을 숨김
  }
};



const section = $(".mainImg").offset().top;
$(window).on("scroll", function () {
  if (scrollY > section ) {
    $(".project2-wrapper .main-btn .site-btn").addClass("active");
  } else {
    $(".project2-wrapper .main-btn .site-btn").removeClass("active");
  }

});
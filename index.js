
  $('a[href="#"]').on('click', function (e) {
    e.preventDefault();
  });


// 메뉴 클릭 시 슬라이드 업/다운
$('header .nav .global-menu-btn').on('click', function () {
  const menu = $('header .nav .global-menu');
  if (menu.hasClass('active')) {
    menu.toggleClass('on');
  }
});

// GSAP ScrollTrigger 설정
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger 설정
ScrollTrigger.create({
  trigger: ".main", // '.main' 요소를 기준으로 동작
  start: "top top", // '.main'의 윗부분이 뷰포트의 상단에 닿을 때
  end: "bottom top", // '.main'의 윗부분이 뷰포트의 하단에 닿을 때 (선택사항)
  onEnter: () => {
    // 스크롤이 .main에 닿으면 'active' 클래스 추가
    const menu = document.querySelector(".global-menu");
    menu.classList.add("active");
    menu.classList.remove("on"); // 'on' 클래스가 있을 경우 제거
  },
  onLeaveBack: () => {
    // 스크롤이 최상단으로 돌아오면 'active' 클래스 제거
    const menu = document.querySelector(".global-menu");
    menu.classList.remove("active");
    menu.classList.remove("on"); // 'on' 클래스도 제거
  },
});
ScrollTrigger.create({
  trigger: ".main",
  start: "20% top",
  onEnter: () => {
    const btn = document.querySelector(".global-menu-btn");
    btn.classList.add("on");
  },
  onLeaveBack: () => {
    // 스크롤이 최상단으로 돌아오면 'active' 클래스 제거
    const btn = document.querySelector(".global-menu-btn");
    btn.classList.remove("on");
  },
});



// 스크롤에 따라 반복적으로 작동
ScrollTrigger.refresh();







gsap.utils.toArray(".project").forEach((item) => {
  ScrollTrigger.create({
    trigger: item, // 개별 item을 트리거로 설정
    start: "top top", // 트리거가 뷰포트의 상단에 닿을 때
    end: "bottom bottom", // 트리거가 뷰포트의 하단에 닿을 때

    onEnter: () => {
      gsap.to("body", {
        backgroundColor: "#E66926",
        duration: 0.6,
      });
      gsap.to(".global-menu-btn", {
        color: "#fff",
        duration: 0.6,
      });
      document.documentElement.style.setProperty("--color-global-menu-red", "#fff"); // ::before 색상 변경
    },
    onLeave: () => {
      gsap.to("body", {
        backgroundColor: "#ffffff",
        duration: 0.6,
      });
      gsap.to(".global-menu-btn", {
        color: "#E66926",
        duration: 0.6,
      });
      document.documentElement.style.setProperty("--color-global-menu-red", "#E66926"); // ::before 색상 변경
    },
    onEnterBack: () => {
      gsap.to("body", {
        backgroundColor: "#E66926",
        duration: 0.6,
      });
      gsap.to(".global-menu-btn", {
        color: "#fff",
        duration: 0.6,
      });
      document.documentElement.style.setProperty("--color-global-menu-red", "#fff"); // ::before 색상 변경
    },
    onLeaveBack: () => {
      gsap.to("body", {
        backgroundColor: "#ffffff",
        duration: 0.6,
      });
      gsap.to(".global-menu-btn", {
        color: "#E66926",
        duration: 0.6,
      });
      document.documentElement.style.setProperty("--color-global-menu-red", "#E66926"); // ::before 색상 변경
    },
  });
});






  // 도장 이벤트


  $(document).ready(function () {
    let clickCount = 0; // 클릭 횟수 저장
  
    // 도장 이미지 배열
    const stampImages = [
      './images/1.png', // 로컬 이미지
      './images/2.png', // 로컬 이미지
      './images/3.png', // 로컬 이미지
      './images/4.png', // 로컬 이미지
    ];
  
    // 클릭 이벤트
    $('.main').on('click', function (e) {
      // 첫 클릭 시 메시지 제거
      if (clickCount === 0) {
        $('.message').fadeOut(300); // 텍스트를 부드럽게 사라지게 함
      }
  
      // 클릭한 위치 가져오기
      const x = e.pageX;
      const y = e.pageY;
  
      // 랜덤 이미지 선택
      const randomImage = stampImages[Math.floor(Math.random() * stampImages.length)];
  
      // 도장 생성
      const $stamp = $('<div class="stamp"></div>');
      $stamp.css({
        top: y + 'px',
        left: x + 'px',
        backgroundImage: `url(${randomImage})`, // 랜덤 이미지 적용
      });
  
      // 도장 추가
      $('.main').append($stamp);
  
      // 클릭 횟수 증가
      clickCount++;
  
      // 클릭 횟수가 20번이면 모든 도장 제거
      if (clickCount >= 20) {
        $('.stamp').fadeOut(300, function () {
          $(this).remove(); // 도장을 완전히 제거
        });
        clickCount = 0; // 클릭 횟수 초기화
      }
    });
  });
  
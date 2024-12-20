gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
AOS.init({
	once: false,
});

$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});


$('#nav-icon3').on('click', function () {
  $(this).toggleClass('open');
  $('.global-menu').toggleClass('active');
	$('.body').toggleClass('fixed');
});


$('.menu-list').on('click', function () {
	$('.global-menu').removeClass('active');
	$('#nav-icon3').toggleClass('open');
	$('.body').removeClass('fixed');
})





$(window).on('scroll', function () {
  if ($(document).scrollTop() > 0) {
    $('.header').addClass('scroll');
    $('.h1').addClass('scroll');
    $('#nav-icon3').addClass('scroll');
  } else {
    $('.header').removeClass('scroll');
    $('.h1').removeClass('scroll');
    $('#nav-icon3').removeClass('scroll');
  }

  if (scrollY <= 1450) {
    const newSize = 100 + scrollY * 1.2; // 스크롤에 따라 크기 증가
    $('.circleM').css('width', `${newSize}px`);
    $('.circleM').css('height', `${newSize}px`);
  }
});

// const circle = document.querySelector('.circleM');
// window.addEventListener('scroll', () => {
//   // 현재 스크롤 위치를 가져옵니다.
//   const scrollY = window.scrollY;

//   // 스크롤 위치가 1500 이하일 때만 크기 조정
//   if (scrollY <= 1450) {
//     const newSize = 100 + scrollY * 1.2; // 스크롤에 따라 크기 증가
//     circle.style.width = `${newSize}px`;
//     circle.style.height = `${newSize}px`;
//   }
// });




// 단일 섹션에 대한 자동 스크롤
window.addEventListener("load", () => {
  setTimeout(() => {
    gsap.to(window, {
      scrollTo: {
        y: ".business-wrapper",        // 다음 섹션의 클래스나 ID
        autoKill: true         // 사용자가 스크롤 중이면 중단
      },
      duration: 6            // 스크롤 이동 시간
    });
  }, 1500);
});



// main 스크롤 막대
$(window).on('scroll', function () {
  if ($(document).scrollTop() > 10) {
    $('.scroll-line').addClass('on');
  } else {
    $('.scroll-line').removeClass('on');
  }
});





// $('.yourdiv').hover(function () {
// 	$(this).addClass('magictime puffIn');
// });


// mainDes 타이핑 효과
const typingText1 = "Since 1969";
const typingText2 = "건강한 매일, 맛있는 매일, 새로운 매일을 연구하고 개척하여 모두가 건강하고 행복한 함께하는 사회를 만들겠습니다.";


// 애니메이션 정의
gsap.to(".mainDesTit", {
	text: typingText1, // 목표 텍스트
	scrub: 5,
	duration: 0.5, // 애니메이션 지속 시간
	ease: "none", // 일정한 속도로 타이핑
	scrollTrigger: {
		trigger: ".businessTit", // 트리거 요소
		start: "top 80%", // 트리거 시작 위치
		toggleActions: "play reset play reset", // 동작 설정
	}
});

gsap.to(".mainDesSub", {
	text: typingText2, // 목표 텍스트
	scrub: 5,
	duration: 1.5, // 애니메이션 지속 시간
	ease: "none", // 일정한 속도로 타이핑
	scrollTrigger: {
		trigger: ".mainDes", // 트리거 요소
		start: "top 80%", // 트리거 시작 위치
		toggleActions: "play reset play reset", // 동작 설정
	}
});










// Lottie 애니메이션 설정
const lottieAnimation = bodymovin.loadAnimation({
  container: document.getElementById("labBox"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "./project4Img/maeil1.json", // Lottie JSON 파일 경로
});

const totalFrames1 = '100';
const texts1 = document.querySelectorAll(".labBoxDes");


const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".lab-wrapper",
    start: "80% 80%",
    end: "100%",
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      const progress = self.progress; // 스크롤 진행 비율 (0 ~ 1)
      const currentFrame = Math.round(progress * totalFrames1);
      lottieAnimation.goToAndStop(currentFrame, true);
    },
  },
});

// 텍스트 표시 타이밍 설정
const textIntervals1 = [0, 1]; 

textIntervals1.forEach((interval, index) => {
  timeline1.to(
    texts1[index],
    { opacity: 1, duration: 0.2 },
    interval 
	
);
});



// 품질 제일주의 이야기 bar
const texts2 = document.querySelectorAll(".qualityScrollDes");
const qualityScroll = document.querySelector('.qualityScroll');
const qualityScrollDesWrapper = document.querySelector('.qualityScrollDes-wrapper');

gsap.to(qualityScroll, {
  height: () => qualityScrollDesWrapper.scrollHeight,
  scrollTrigger: {
    trigger: qualityScrollDesWrapper,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      qualityScroll.style.height = `${progress * qualityScrollDesWrapper.scrollHeight}px`;
    }
  }
});

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".qualityScrollDes-wrapper",
    start: "-10% 80%",
    end: "100% 100%",
    scrub: 3,
    // markers: true,
  },
});

// 텍스트 표시 타이밍 설정
const textIntervals2 = [0,0.1,0.1,0.1,0.1,0.1]; // 각 텍스트의 표시 구간 비율

textIntervals2.forEach((interval, index) => {
  timeline2.to(
    texts2[index],
    { opacity: 1, duration: 0.2 },
    interval / 100
  );
});



document.addEventListener("DOMContentLoaded", () => {
	const map = document.querySelector('.globalMap');
	const container = document.querySelector('.globalMap-wrapper');

	let scale = 1; // 초기 확대 배율
	let translateX = 0; // 드래그 이동 X 좌표
	let translateY = 0; // 드래그 이동 Y 좌표
	let isDragging = false;
	let startX, startY; // 드래그 시작 좌표

	// 드래그 시작
	map.addEventListener('mousedown', (e) => {
		isDragging = true;
		startX = e.clientX;
		startY = e.clientY;
		map.style.cursor = 'grabbing';
	});

	// 드래그 중
	window.addEventListener('mousemove', (e) => {
		if (!isDragging) return;

		const dx = e.clientX - startX;
		const dy = e.clientY - startY;

		startX = e.clientX;
		startY = e.clientY;

		translateX += dx;
		translateY += dy;

		limitPosition(); // 경계 제한
		applyTransform();
	});

	// 드래그 끝
	window.addEventListener('mouseup', () => {
		isDragging = false;
		map.style.cursor = 'grab';
	});

	// 확대/축소
	container.addEventListener('wheel', (e) => {
		e.preventDefault();

		const zoomSpeed = 0.1;
		const rect = container.getBoundingClientRect();

		// 마우스 위치를 기준으로 확대/축소
		const mouseX = e.clientX - rect.left - container.clientWidth / 2;
		const mouseY = e.clientY - rect.top - container.clientHeight / 2;

		const prevScale = scale;

		// 배율 제한: 최소 1배, 최대 3배
		scale = Math.min(Math.max(scale - e.deltaY * zoomSpeed / 100, 1), 3);

		const scaleFactor = scale / prevScale;

		// 확대/축소 기준점을 중앙으로 조정
		translateX -= mouseX * (scaleFactor - 1);
		translateY -= mouseY * (scaleFactor - 1);

		limitPosition(); // 경계 제한
		applyTransform();
	});

	// 위치 제한 함수
	function limitPosition() {
		const rect = container.getBoundingClientRect();
		const mapRect = map.getBoundingClientRect();

		const minX = (rect.width - mapRect.width * scale) / 2;
		const maxX = (mapRect.width * scale - rect.width) / 2;

		const minY = (rect.height - mapRect.height * scale) / 2;
		const maxY = (mapRect.height * scale - rect.height) / 2;

		translateX = Math.max(-maxX, Math.min(translateX, maxX));
		translateY = Math.max(-maxY, Math.min(translateY, maxY));
	}

	// 변환 적용 함수
	function applyTransform() {
		map.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
	}
});



gsap.fromTo(".scroll-line2", 
	{ height: "0%" }, // 시작 상태
	{ 
		height: "30%", // 끝 상태
		duration: 2, // 애니메이션 시간
		ease: "power1.out", 
		scrollTrigger: {
			trigger: ".with-wrapper", // 트리거 요소
			start: "80% 90%", // 트리거 시작 위치
			scrub: true
		}
	}
);






// mission-wrapper 애니메이션 효과
gsap.to(".product1", {
	x: 60, // 위로 50px 이동
	y: 20,
	rotate: 30,
	duration: 1.5, // 애니메이션 지속 시간
	stagger: 0.1, // 각 요소 간의 시작 시간 간격
	ease: "power2.out", // 부드러운 애니메이션 효과
	scrollTrigger: {
		trigger: ".mission-wrapper", // 트리거 요소
		start: "top 40%", // 트리거 시작 위치
		toggleActions: "play none none none", // 동작 설정
		scrub: true
	}
});
gsap.to(".product2", {
	x: -60,
	y: 10,
	rotate: -50,
	duration: 1, // 애니메이션 지속 시간
	stagger: 0.1, // 각 요소 간의 시작 시간 간격
	ease: "power2.out", // 부드러운 애니메이션 효과
	scrollTrigger: {
		trigger: ".mission-wrapper", // 트리거 요소
		start: "top 40%", // 트리거 시작 위치
		toggleActions: "play none none none", // 동작 설정
		scrub: true
	}
});
gsap.to(".product3", {
	x: 60,
	y: -50,
	rotate: 30,
	duration: 1.5, // 애니메이션 지속 시간
	stagger: 0.1, // 각 요소 간의 시작 시간 간격
	ease: "power2.out", // 부드러운 애니메이션 효과
	scrollTrigger: {
		trigger: ".mission-wrapper", // 트리거 요소
		start: "top 40%", // 트리거 시작 위치
		toggleActions: "play none none none", // 동작 설정
		scrub: true
	}
});
gsap.to(".product4", {
	x: -40,
	y: -50, // 위로 50px 이동
	duration: 1.5, // 애니메이션 지속 시간
	stagger: 0.1, // 각 요소 간의 시작 시간 간격
	ease: "power2.out", // 부드러운 애니메이션 효과
	scrollTrigger: {
		trigger: ".mission-wrapper", // 트리거 요소
		start: "top 40%", // 트리거 시작 위치
		toggleActions: "play none none none", // 동작 설정
		scrub: true
	}
});
gsap.to(".product5", {
	x: 40,
	y: -50, // 위로 50px 이동
	rotate: 10,
	duration: 1.5, // 애니메이션 지속 시간
	stagger: 0.1, // 각 요소 간의 시작 시간 간격
	ease: "power2.out", // 부드러운 애니메이션 효과
	scrollTrigger: {
		trigger: ".mission-wrapper", // 트리거 요소
		start: "top 40%", // 트리거 시작 위치
		toggleActions: "play none none none", // 동작 설정
		scrub: true
	}
});


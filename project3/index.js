const floating1 = document.getElementById('floating1');
const floating2 = document.getElementById('floating2');
const floating3 = document.getElementById('floating3');
const floating4 = document.getElementById('floating4');

window.addEventListener('scroll', () => {
    const value = window.scrollY;

    floating1.style.top = value * -1 + 'px';
    floating2.style.top = value * -1 + 'px';
    floating3.style.top = value * -1 + 'px';
    floating4.style.top = value * -1 + 'px';
});




// 배경색 변해야 하는 위치: 1202 블랙
// 숫자 커져야 하는 위치: 4102
// 배경색 변해야 하는 위치: 6602 화이트




// 20 커지는 부분
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 800px)": function () {
        // 타임라인 생성
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".video-wrapper",
                scrub: true,
                start: "4202",
                end: "4900",
                pin: true
            }
        });

        // 애니메이션 정의
        const animate = [
            {
                target: '.big-num',
                keyframes: [
                    { scale: 5, duration: 20 },
                    { scale: 10, duration: 20 },
                    { scale: 20, duration: 20 },
                    { scale: 30, duration: 20 },
                    { scale: 75, duration: 5 },
                    { scale: 90, duration: 5 },
                    { scale: 100, duration: 5 },
                ]
            }
        ];

        // 애니메이션 추가
        animate.forEach(({ target, keyframes }) => {
            keyframes.forEach((keyframe) => {
                tl.to(target, keyframe);
            });
        });
    }
});




// 매거진 글자 효과
gsap.utils.toArray('.rolled-over-text').forEach((txt) => {
    const txtAni = gsap.timeline({
        scrollTrigger: {
            trigger: txt,
            start: '0% 100%',
            end: 'bottom bottom',
            scrub: 1
        }
    });
    txtAni.fromTo(
        txt,
        { opacity: 0, y: 170, overflow: 'hidden' },
        { opacity: 1, y: 0, ease: " easeInOutCubic(0.5,7,none)", duration: 3 }
    )
});



document.addEventListener("scroll", function () {
    const scrollY = window.scrollY; // 현재 Y스크롤 위치
    const intro = document.querySelector(".intro"); // .intro 요소 선택
    const introText = intro.querySelectorAll("h2"); // .intro 내 h2 요소들 선택
    const blackBg = document.querySelector(".story-wrapper")
    const magazineWrapper = document.querySelector(".magazine-wrapper");
    const magWTops = magazineWrapper.offsetTop;
    const home = document.querySelector(".home");






    // intro 배경색과 글자색 변경
    if (scrollY >= 900 && scrollY < 6602) {
        // Y스크롤이 1202 이상 6602 미만
        intro.style.backgroundColor = "#000"; // 배경색 검정
        blackBg.style.backgroundColor = "#000"; // 배경색 검정
        intro.style.transition = "0.3s";
        introText.forEach((text) => {
        text.style.color = "#FFF"; // 글자색 흰색
        text.style.transition = "0.3s";
        });
    }
    else {
        // 기본 상태
        intro.style.background = "#00D344"; // 기본 배경색
        introText.forEach((text) => {
            text.style.color = "#000"; // 기본 글자색 복원
        });
        home.style.color = "#000"; // 기본 글자색 복원
    }
});







// header 'home' 글자색 변경
document.addEventListener("scroll", function () {
    //const scrollY = window.scrollY; 현재 Y스크롤 위치
    const home = document.querySelector(".home"); // .home 요소 선택
    const magazineWrapper = document.querySelector(".magazine-wrapper");
    const magWTops = magazineWrapper.offsetTop;

    const magazine1 = document.querySelector(".magazine-1");
    const magzTops = magazine1.offsetTop;

    const mainSite = document.querySelector(".main-site");
    const mainTops = mainSite.offsetTop + mainSite.offsetHeight;

    const logo = document.querySelector(".logoImg");


    if (scrollY >= 0) {
        home.style.color = "#000";
        logo.style.filter = "invert(0%)";
        home.style.transition = "0.3s";
        logo.style.transition = "0.3s";
    }

    if (scrollY >= 1202) {
        home.style.color = "#fff";
        home.style.transition = "0.3s";
    }
    if (scrollY >= magWTops) {
        home.style.color = "#000";
        logo.style.filter = "invert(100%)";
        home.style.transition = "0.3s";
        logo.style.transition = "0.3s";
    }
    if (scrollY >= magzTops) {
        home.style.color = "#fff";
        logo.style.filter = "invert(0%)";
        home.style.transition = "0.3s";
        logo.style.transition = "0.3s";
    }

    console.log(magzTops);

    if (scrollY >= mainTops) {
        home.style.color = "#000";
        logo.style.filter = "invert(100%)";
        home.style.transition = "0.3s";
        logo.style.transition = "0.3s";
    }
});



// 매거진 스크롤 내리면 까맣게
gsap.utils.toArray('.magazineImg').forEach((item) => {
    const magImgAni = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: '10%',
            end: 'bottom bottom',
            scrub: 0.2
        }
    });
    magImgAni.fromTo(
        item,
        { opacity: 1 },
        { opacity: 0.3 }
    )
});


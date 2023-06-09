gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("cyber-intro");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const frameCount = 300;
const currentFrame = index => (
  `./canvas/male${(index + 1).toString().padStart(4, '0')}.png`
);

const images = []
const cyberfiction = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(cyberfiction, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 1
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[cyberfiction.frame], 0, 0);
}

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    pin: true,
    start: "top top",
    // end: "bottom bottom",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
    // markers: true,
  }
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3",
    pin: true,
    start: "top top",
    // end: "bottom bottom",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
    // markers: true,
  }
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4",
    pin: true,
    start: "top top",
    // end: "bottom bottom",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
    // markers: true,
  }
})


gsap.timeline({
  scrollTrigger: {
    trigger: ".c-avatar",
    start: "top top",
    end: "bottom top",
    scrub: 0,
    // markers: true,
  }
})

  .to('#cyber-intro', { opacity: 100 })

gsap.timeline({
  scrollTrigger: {
    trigger: ".c-roadmap",
    pin: false, // 고정
    start: "top bottom",
    end: "bottom bottom ",
    // end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
    // markers: true,
    // toggleClass: {targets: 'header', className: 'active'}
  }
})
  .to('.c-roadmap', { color: '#fff', backgroundColor: '#171010' })
  .to('header', { color: '#fff' })
  .to('.button-round', { color: '#171010', backgroundColor: '#fff', border: '1px solid #fff' })

window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});

document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});

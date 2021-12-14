let current = 0
let target = 0
let ease = 0.1;
let windowWidth, containerHeight, imageHeight, skewDiff;

let container = document.querySelector('.container');
let images = Array.from(document.querySelectorAll('.img_wrap'))
console.log(images)

images.forEach((image, idx) => (
    image.style.backgroundImage = `url(./images/${idx + 1}.jpg)`
))

function lint(start, end, t) {
    return start * (1 - t) + end * t
}
console.log(lint(10, 20, 0.5))


function setTransform(el, transform) {
    el.style.transform = transform;
}

function setAnimation() {
    windowWidth = window.innerWidth;
    containerHeight = container.getBoundingClientRect().height;
    imageHeight = containerHeight / (windowWidth > 760 ? images.length / 2 : images.length)
    document.body.style.height = `${containerHeight}px`
    smoothScroll()
}

function smoothScroll() {
    current = lint(current, target, ease);
    current = parseFloat(current.toFixed(2))
    target = window.scrollY

    setTransform(container, `translate(${-current}px)`)
    requestAnimationFrame(smoothScroll)
}

setAnimation()


const header = document.querySelector('header');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
})

const sclip = document.querySelectorAll('.clip');
for (let i = 0; i < sclip.length; i++) {
    sclip[i].addEventListener('mouseenter',
        function (e) {
            sclip[i].play()
        })
    sclip[i].addEventListener('mouseout',
        function (e) {
            sclip[i].pause()
        })
}
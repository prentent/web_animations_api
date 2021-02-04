
window.addEventListener("load", function () {
    //设置Animations
    setRandow();
});

function setRandow() {
    var root = document.getElementById('parent-img')
    var fragment = document.createDocumentFragment()
    for (let i = 0; i < 500; i++) {
        let img = document.createElement('img')
        //距左侧距离
        img.style.left = (Math.random() * 300) + "px";
        //动画开始的延迟（0-5秒内的随机数）
        img.style.animationDelay = (Math.random() * 5) + "s";
        img.src = "raindrops.png";
        fragment.appendChild(img)
    }
    root.appendChild(fragment);
}

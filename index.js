
window.addEventListener("load", function () {
    //设置Animations
    // setAnimationsByObject();
    setAnimationRandow();
    setAnimationsByArray();
});

function play() {
    document.getAnimations().forEach(
        function (animation) {
            animation.play();
        }
    );
}
function pause() {
    document.getAnimations().forEach(
        function (animation) {
            animation.pause();
        }
    );
}
function playAdd() {
    document.getAnimations().forEach(
        function (animation) {
            animation.playbackRate *= 1.5;
        }
    );
}

function playSubtract() {
    document.getAnimations().forEach(
        function (animation) {
            animation.playbackRate *= 0.5;
        }
    );
}

function setAnimationRandow() {
    var root = document.getElementById('parent-img')
    var fragment = document.createDocumentFragment()
    for (let i = 0; i < 500; i++) {
        let img = document.createElement('img')
        //距左侧距离
        img.style.left = (Math.random() * 300) + "px";
        img.src = "raindrops.png";
        fragment.appendChild(img)
    }
    root.appendChild(fragment);
}

function setAnimationsByArray() {
    document.querySelectorAll("img").forEach(element => {
        var a = element.animate([
            { transform: 'scale(0.5)', top: '0px' },
            { transform: 'scale(1.0)', top: '280px' }
        ], {
            delay: Math.random() * 5000,
            duration: 5000,
            iterations: Infinity,
            direction: 'normal',
            easing: ' ease-in'
        });
    });
}



function setAnimationsByObject() {
    document.querySelectorAll("img").forEach(element => {
        var a = element.animate({
            top: ['0px', '280px'],
            transform: ['scale(0.5)', 'scale(1.0)']
        }, {
            delay: Math.random() * 5000,
            duration: 5000,
            iterations: Infinity,
            direction: 'normal',
            easing: ' ease-in'
        });
    });
}


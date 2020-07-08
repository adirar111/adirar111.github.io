window.addEventListener("DOMContentLoaded", (event) => {
    // credit to https://codepen.io/lasjorg/pen/GRKreyJ
    const button = document.querySelector("#play-pause");
    const icon = document.querySelector("#volume-icon");
    const audio = document.querySelector("audio");

    button.addEventListener("click", () => {
        console.log("click");
        if (audio.paused) {
            audio.volume = 0.4;
            audio.play();
            icon.classList.remove("fa-volume-up");
            icon.classList.add("fa-volume-mute");
        } else {
            audio.pause();
            icon.classList.remove("fa-volume-mute");
            icon.classList.add("fa-volume-up");
        }
        button.classList.add("fade");
    });
});

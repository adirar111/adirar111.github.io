// let smallDisplay = window.matchMedia("(max-width: 1024px)");
// let icons = document.querySelectorAll(".fab");

// function resizeIcons(small) {
//     console.log(icons);
//     if (small.matches) {
//         console.log("make smoll");
//         console.log(icons[0]);
//         icons.forEach((i) => {
//             if (i.classList.contains("fa-6x")) {
//                 i.classList.replace("fa-6x", "fa-3x");
//                 console.log("big->small");
//             } else {
//                 i.classList.add("fa-3x");
//             }
//         });
//         console.log("smollify done");
//     } else {
//         console.log(icons[0]);
//         console.log("make beeg");
//         icons.forEach((i) => {
//             if (i.classList.contains("fa-3x")) {
//                 i.classList.replace("fa-3x", "fa-6x");
//                 console.log("small->big");
//             } else {
//                 i.classList.add("fa-6x");
//             }
//         });
//         console.log("emgenning done");
//     }
// }

// resizeIcons(smallDisplay);
// smallDisplay.addListener(resizeIcons);

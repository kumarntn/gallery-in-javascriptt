document.addEventListener("DOMContentLoaded",
    function () {
        const images = document.querySelectorAll(".images img");
        const model = document.querySelector(".model");
        const modelImg = document.querySelector(".model-img");
        const modelTxt = document.querySelector(".model-txt");
        const closebtn = document.querySelector(".close");
        let currentIndex = 0;
        const prevbtn = document.querySelector(".btnPrev");
        const nextbtn = document.querySelector(".btnNext");
        //   add click all image
        images.forEach((image, index) => {
            image.addEventListener("click", function () {
                currentIndex = index;
                updateModelContent();
                model.classList.add("show");
            });
        });
        //  show the model
        function updateModelContent() {
            const image = images[currentIndex];
            modelImg.classList.remove("show");
            setTimeout(() => {
                modelImg.src = image.src;
                modelTxt.innerHTML = image.alt;
                modelImg.classList.add("show");
            }, 300);
        }
        //next button onclick
        nextbtn.addEventListener("click", function () {
            currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1
            updateModelContent();
        });
        //prev button onclick
        prevbtn.addEventListener("click", function () {
            currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
            updateModelContent();
        });
        // Close Modal
        closebtn.addEventListener("click", function () {
            model.classList.remove("show");
        });
    });

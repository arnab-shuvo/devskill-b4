window.onload = () => {
    loadSkills();
};

function loadSkills() {
    let canvases = [
        { id: 1, skill: 80 },
        { id: 2, skill: 75 },
        { id: 3, skill: 78 },
        { id: 4, skill: 68 },
    ];
    canvases.forEach((singleCanvas) => {
        let canvas = document.getElementById("canvas" + singleCanvas.id),
            spanProcent = document.getElementById("procent" + singleCanvas.id),
            canvasContext = canvas.getContext("2d");

        let posX = canvas.width / 2,
            posY = canvas.height / 2,
            fps = 5,
            procent = 0,
            oneProcent = 360 / 100,
            result = oneProcent * singleCanvas.skill;

        arcMove();

        function arcMove() {
            let deegres = 0;
            let acrInterval = setInterval(function () {
                ++deegres;
                canvasContext.clearRect(0, 0, canvas.width, canvas.height);
                procent = deegres / oneProcent;
                spanProcent.innerHTML = procent.toFixed();

                canvasContext.beginPath();
                canvasContext.strokeStyle = "white";
                canvasContext.lineWidth = "5";
                canvasContext.arc(
                    posX,
                    posY,
                    70,
                    (Math.PI / 180) * 270,
                    (Math.PI / 180) * (270 + deegres)
                );
                canvasContext.stroke();
                if (deegres >= result) clearInterval(acrInterval);
            }, fps);
        }
    });
}

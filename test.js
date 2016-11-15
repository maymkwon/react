window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");

    context.shadowColor = "rgba(0,0,0,.5)";

    document.body.addEventListener("mousemove" , function(e){
        context.clearRect(0,0,600,600);
        var dx = 300 - e.clientX,
            dy = 300 - e.clientY,
            distance = Math.sqrt(dx * dx + dy * dy);

        context.OffsetX = dx * 0.5;
        context.OffsetY = dy * 0.5;
        context.shadowBlur = distance * 0.25;
        context.fillStyle = "red";
        context.fillRect(250,250,100,100);
    });
}

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let cnt = 0;
let myChart;

function canvasDefault(){
    ctx.font = "20px malgun gothic";
    ctx.fillStyle = "black";
    ctx.fillText("Chart will be displayed...", canvas.width / 7, 100);
}

function SetChart(result){
    canvas.style.width = "100%";
    canvas.style.height = "550px";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(cnt != 0) myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                "Insertion", "Selection", "Bubble",
                "Quick",  "Merge", "Heap",
                "Shell", "Radix", "Counting"
            ],
            datasets: [{
                label: "Task Time(ms)",
                data: result,
            }]
        },
        options:{
            responsive: false,
            scales: {
                xAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            }
        }
    });
    cnt++;
}
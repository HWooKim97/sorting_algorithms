const timeCanvas = document.querySelector(".time-chart");
const timeCTX = timeCanvas.getContext("2d");
let timeChart;

const chartTXT = document.querySelector(".chartTXT");
const chartBox = document.querySelector(".chartbox");

function SetTimeChart(result){
    if(timeChart == null){
        chartTXT.classList.add("hiding");
        chartBox.classList.remove("hiding");
        timeCanvas.style.border = "solid rgb(176, 176, 176) 1px";
        timeCanvas.width = parseInt(window.getComputedStyle(chartBox).width);
        timeCTX.clearRect(0, 0, timeCanvas.width, timeCanvas.height);

        timeChart = new Chart(timeCTX, {
            type: 'horizontalBar',
            data: {
                labels: [
                    "JSDefault","Insertion", "Selection", 
                    "Bubble", "Quick",  "Merge", "Heap",
                    "Shell", "RadixLSD", "RadixMSD", "Counting"
                ],
                datasets: [{
                    label: "Task Time(ms)",
                    data: result,
                }]
            },
            options:{
                responsive: false,
                maintainAspecRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            min: 0
                        }
                    }]
                }
            }
        });
    } else{
        timeChart.data.datasets[0].data = result;
        timeChart.update();
    }
}
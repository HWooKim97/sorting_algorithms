const timeCanvas = document.querySelector(".time-chart");
const timeCTX = timeCanvas.getContext("2d");
let timeChart;

const chartTXT = document.querySelector(".chartTXT");

function SetTimeChart(result){
    if(timeChart == null){
        chartTXT.classList.add("hiding");
        timeCanvas.style.border = "solid rgb(176, 176, 176) 1px";
        timeCanvas.style.width = "100%";
        timeCTX.clearRect(0, 0, timeCanvas.width, timeCanvas.height);

        timeChart = new Chart(timeCTX, {
            type: 'bar',
            data: {
                labels: [
                    "JSDefault","Insertion", "Selection", 
                    "Bubble", "Quick",  "Merge", "Heap",
                    "Shell", "Radix", "Counting"
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
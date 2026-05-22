
function drawChart(productsArray) {

    const chartType = document.getElementById('chart-type').value;

    let dataPointsArray = [];
    
    for (let i = 0; i < productsArray.length; i++) {
        let shortName = productsArray[i].name.substring(0, 15) + "...";
        
        dataPointsArray.push({
            label: shortName,
            y: productsArray[i].price
        });
    }

    let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Порівняння цін товарів"
        },
        data: [{
            type: chartType,
            dataPoints: dataPointsArray
        }]
    });

    chart.render();
}
document.getElementById('chart-type').addEventListener('change', () => {
    updateCatalog(); 
});
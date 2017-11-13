let data = {
    labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

    datasets: [
        {
            title: "Ana 1", color: "light-blue",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            title: "Datillo 2", color: "violet",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        },
        {
            title: "Datillo 3", color: "blue",
            values: [15, 20, -3, -15, 58, 12, -17, 37]
        }
    ]
};

let chart = new Chart({
    parent: "#chart", // or a DOM element
    title: "Ejemplo Chart",
    data: data,
    type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
    height: 250
});
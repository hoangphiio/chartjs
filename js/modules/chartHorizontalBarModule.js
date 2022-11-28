window.onload = function () {
  const labels = [
    "26/09 - 02/10",
    "19/09 - 25/09",
    "12/09 - 18/09",
    "05/09 - 11/09",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Hoàn tất trễ hạn",
        backgroundColor: "#ff9595",
        borderColor: "#ff9595",
        data: [15, 20, 6, 12],
        borderWidth: 1,
      },
      {
        label: "Hoàn tất đúng hạn",
        backgroundColor: "#c1ffbc",
        borderColor: "#c1ffbc",
        data: [35, 12, 46, 45],
        borderWidth: 1,
        padding: 10,
      },
      {
        label: "Đang thực hiện",
        backgroundColor: "#acd8ff",
        borderColor: "#acd8ff",
        data: [41, 21, 16, 32],
        borderWidth: 1,
      },
      {
        label: "Đã tạo",
        backgroundColor: "#eaeaea",
        borderColor: "#eaeaea",
        data: [4, 2, 6, 12],
        borderWidth: 1,
      },
    ],
  };

  const myChart = new Chart(document.getElementById("canvas-horizontalBar"), {
    type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data,
    options: {
      indexAxis: "y",
      scales: {
        x: {
          grid: {
            borderColor: "#e1e7ff",
            tickColor: "#fff",
            lineWidth: 1,
            borderDash: [5, 5],
          },
          grace: "5%",
          ticks: {
            stepSize: 5,
          },
        },
        y: {
          grid: {
            borderColor: "#e1e7ff",
            display: false,
          },
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            font: {
              size: 24,
            },
            padding: 50,
            usePointStyle: true,
          },
        },
      },
    },
  });
};

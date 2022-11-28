window.onload = function () {
  const ctx = document.getElementById("canvas-line");
  const labels = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Facebook",
        backgroundColor: "#c1ffbc",
        borderColor: "#c1ffbc",
        data: [100, 56, 82, 29, 31, 42, 61, 77, 28, 51, 90, 65],
        borderWidth: 1,
      },
      {
        label: "Instagram",
        backgroundColor: "#ff9595",
        borderColor: "#ff9595",
        data: [71, 45, 74, 62, 85, 23, 14, 12, 66, 52, 80, 11],
        type: "line",
      },
      {
        label: "Twitter",
        backgroundColor: "#acd8ff",
        borderColor: "#acd8ff",
        data: [69, 11, 34, 77, 85, 96, 41, 19, 75, 99, 56, 87],
        type: "line",
      },
    ],
  };

  const config = {
    type: "line",
    data,
    options: {
      scales: {
        x: {
          stacked: true,
          grid: {
            borderColor: "#e1e7ff",
            lineWidth: 1,
            display: false,
          },
        },
        y: {
          stacked: true,
          grid: {
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
              weight: "bold",
              size: 16,
            },
            padding: 50,
            usePointStyle: true,
          },
        },
      },
    },
  };

  const myChart = new Chart(ctx, config);
};

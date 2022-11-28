window.onload = function () {
  const ctx = document.getElementById("canvas-bar");
  const labels = [
    "An toàn thông tin.",
    "Cấu trúc dữ liệu và giải thuật.",
    "Thiết kế web.",
    "Bảo đảm chất lượng phần mềm.",
    "Công nghệ phần mềm nâng cao.",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Điểm của bạn",
        backgroundColor: "#c1ffbc",
        borderColor: "#c1ffbc",
        data: [7.3, 6.3, 8, 5.9, 9],
        borderWidth: 1,
        order: 2,
      },
      {
        label: "Điểm trung bình học phần",
        backgroundColor: "#ff9595",
        borderColor: "#ff9595",
        data: [7.1, 5.6, 7, 6.2, 8.5],
        type: "line",
        tension: 0.4,
        order: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      scales: {
        x: {
          stacked: true,
          grid: {
            borderColor: "#e1e7ff",
            tickColor: "#fff",
            lineWidth: 1,
            borderDash: [5, 5],
            display: false,
          },
        },
        y: {
          stacked: true,
          grid: {
            borderColor: "#fff",
            display: false,
          },
          beginAtZero: true,
          ticks: {
            display: false,
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Điểm trung bình lớp học phần",
          position: "left",
          font: {
            size: 16,
          },
        },
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

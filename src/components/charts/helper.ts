export const pieData = {
  labels: ["D Grade ", "B Grade", "C Grade", "A Grade", "E Grade"],
  datasets: [
    {
      label: "student percentage",
      data: [20, 20, 25, 15, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const lineOpt = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Joiners Vs Leavers",
    },
  },
};

export const lineData = {
  labels,
  datasets: [
    {
      label: "Joiners",
      data: [100, 300, 300, 400, 700, 300, 500],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Leavers",
      data: [100, 500, 300, 800, 600, 200, 500],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

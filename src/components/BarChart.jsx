import { CChart } from "@coreui/react-chartjs";

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [10, 20, 30, 40, 50],
      },
      {
        label: "Dataset 2",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [20, 30, 40, 50, 60],
      },
    ],
  };
  return (
    <CChart
      type="bar"
      data={{
        labels: data.labels,
        datasets: [
          {
            label: "Virtual",
            backgroundColor: "#99f6e4",
            borderColor: "#0038FF",
            data: data.datasets[0].data,
            barThickness: 40,
            borderRadius: 10,
          },
          {
            label: "Onsite",
            backgroundColor: "#3b82f6",
            borderColor: "#6092C0",
            data: data.datasets[1].data,
            barThickness: 40,
            borderRadius: 10,
          },
        ],
      }}
      labels="months"
      options={{
        plugins: {
          legend: {
            labels: {
              color: "black",
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#BACAE3",
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#BACAE3",
            },
          },
        },
      }}
    />
  );
};

export default BarChart;

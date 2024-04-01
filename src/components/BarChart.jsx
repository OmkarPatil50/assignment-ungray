import { CChart } from "@coreui/react-chartjs";

const BarChart = ({barChartData}) => {

    const xAxisLabels = barChartData?.map(item=>item?.Month)
    const thisYearValues = barChartData?.map(item=>item?.This_year)
    const lastYearValues = barChartData?.map(item=>item?.Last_year)


  const data = {
    labels: xAxisLabels,
    datasets: [
      {
        label: "Last Year",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: lastYearValues,
      },
      {
        label: "This Year",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: thisYearValues,
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
            label: "Last Year",
            backgroundColor: "#99f6e4",
            borderColor: "#0038FF",
            data: data.datasets[0].data,
            barThickness: 40,
            borderRadius: 10,
          },
          {
            label: "This Year",
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

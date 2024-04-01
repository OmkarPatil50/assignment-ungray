import { CChart } from "@coreui/react-chartjs";

const LineChart = ({ salesData }) => {
  const yAxisLabelsForWeb = salesData?.map((item) => item.web_sales);
  const yAxisLabelsForOffline = salesData?.map((item) => item.offline_sales);
  const labels = salesData?.map((item) => item.date);

  return (
    <CChart
      type="line"
      data={{
        labels,
        datasets: [
          {
            label: "Web",
            borderColor: "#99f6e4",
            pointBackgroundColor: "#fff",
            pointBorderColor: "#0038FF",
            pointRadius: 0,
            data: yAxisLabelsForWeb,
          },
          {
            label: "Offline",
            borderColor: "#3b82f6",
            pointBackgroundColor: "#fff",
            pointBorderColor: "#6092C0",
            pointRadius: 0,
            data: yAxisLabelsForOffline,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "#0038FF",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "--cui-border-color-translucent",
              display: false,
            },
            ticks: {
              display: false, // Hide x-axis tick labels
              color: "--cui-body-color",
            },
          },
          y: {
            grid: {
              color: "#BACAE3",
              display: false,
            },
            ticks: {
              display: false, // Hide y-axis tick labels
              color: "--cui-body-color",
            },
          },
        },
      }}
    />
  );
};

export default LineChart;

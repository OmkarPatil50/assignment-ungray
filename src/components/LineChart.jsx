import { CChart } from "@coreui/react-chartjs";


const LineChart = () => {
  const yAxisLabelsForVirtual = [10, 20, 30, 48, 26];
  const yAxisLabelsForOnsite = [5, 6, 24, 68, 12];

  return (
    <CChart
      type="line"
      data={{
        labels: ["a", "da" , 'weq', 'c','s'] ,
        datasets: [
          {
            label: "Virtual",
            borderColor: "#99f6e4",
            pointBackgroundColor: "#fff",
            pointBorderColor: "#0038FF",
            pointRadius: 0,
            data: yAxisLabelsForVirtual,
          },
          {
            label: "Onsite",
            borderColor: "#3b82f6",
            pointBackgroundColor: "#fff",
            pointBorderColor: "#6092C0",
            pointRadius: 0,
            data: yAxisLabelsForOnsite,
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
              color: "--cui-body-color",
            },
          },
          y: {
            grid: {
              color: "#BACAE3",
              display: false,
            },
            ticks: {
              color: "--cui-body-color",
            },
          },
        },
      }}
    />
  );
};

export default LineChart;

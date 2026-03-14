import "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
const Metrics = () => {
  //TODO: Fetch data from database instead of static
  let labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  let data1 = {
    labels: labels,
    datasets: [
      {
        label: "Roller Coaster",
        data: [100, 99, 102, 105, 110, 108, 113],
        fill: false,
        borderColor: "red",
        tension: 0.1,
      },
      {
        label: "Log Flume",
        data: [95, 99, 99, 115, 107, 109, 110],
        fill: false,
        borderColor: "blue",
        tension: 0.1,
      },
      {
        label: "Carousel",
        data: [80, 81, 85, 90, 88, 85, 82],
        fill: false,
        borderColor: "green",
        tension: 0.1,
      },
    ],
  };
  let data2 = {
    labels: ["Roller Coaster", "Log Flume", "Carousel"],
    datasets: [
      {
        data: [490, 510, 440],
        backgroundColor: ["red", "blue", "green"]
      },
    ],
  };
  return (
    <div className="metrics">
      <h1>Performance Metrics</h1>
      <div>
        <h2>Profits per Month</h2>
        <Line data={data1} options={{scales: {y:{beginAtZero:true}}}}/>
      </div>
      <div>
        <h2>Profits this Year</h2>
        <Bar data={data2} options={{scales: {y:{beginAtZero:true}}}}/>
      </div>
    </div>
  );
};

export default Metrics;

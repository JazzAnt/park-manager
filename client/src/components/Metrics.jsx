import "chart.js/auto";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
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
        data: [30, 60, 55, 90, 85, 110, 120],
        fill: false,
        borderColor: "blue",
        tension: 0.1,
      },
      {
        label: "Carousel",
        data: [70, 55, 65, 45, 30, 40, 25],
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
        label: "Rating",
        data: [3.9, 4.8, 2.5],
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };
  let data3 = {
    labels: ["Roller Coaster", "Log Flume", "Carousel"],
    datasets: [
      {
        label: "Revenue",
        data: [610, 450, 240],
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };
  let data4 = {
    labels: ["Roller Coaster", "Log Flume", "Carousel"],
    datasets: [
      {
        label: "Customers",
        data: [291060, 149888, 133490],
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };
  return (
    <div className="metrics-container">
      <div className="metrics">
        <h3>Profits per Month</h3>
        <div className="graph">
          <Line
            data={data1}
            options={{ scales: { y: { beginAtZero: true } } }}
          />
        </div>
      </div>
      <div className="metrics">
        <h3>Ratings</h3>
        <div className="graph">
          <Bar
            data={data2}
            options={{ scales: { y: { beginAtZero: true } } }}
          />
        </div>
      </div>
      <div className="metrics">
        <h3>Profits this Year</h3>
        <div className="graph">
          <Doughnut
            data={data3}
            options={{
              scales: { x: { display: false }, y: { display: false } },
            }}
          />
        </div>
      </div>
      <div className="metrics">
        <h3>Customers this Year</h3>
        <div className="graph">
          <Pie
            data={data4}
            options={{
              scales: { x: { display: false }, y: { display: false } },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Metrics;

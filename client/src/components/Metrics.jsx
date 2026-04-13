import "chart.js/auto";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
const Metrics = ({ facilities = [] }) => {
  const rollerCoasters = facilities.filter(
    (facility) => facility.category === "Roller Coaster",
  );
  const gentleRides = facilities.filter(
    (facility) => facility.category === "Gentle Ride",
  );
  const thrillRides = facilities.filter(
    (facility) => facility.category === "Thrill Ride",
  );
  const waterRides = facilities.filter(
    (facility) => facility.category === "Water Ride",
  );
  const foodStalls = facilities.filter(
    (facility) => facility.category === "Food Stall",
  );

  const getAverageRating = (list) => {
    const ratingSum = list.reduce((sum, facility) => {
      return sum + facility.rating;
    }, 0);
    const length = list.length;
    return ratingSum / length;
  };

  const getTotalProfits = (list) => {
    return list.reduce((sum, facility) => {
      return sum + facility.profitsThisYear;
    }, 0);
  }

  const getTotalCustomers = (list) => {
    return list.reduce((sum, facility) => {
      return sum + facility.customersThisYear;
    }, 0);
  }

  //TODO: Fetch data from database instead of static
  let labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  let monthly_profit = {
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
  let ratings = {
    labels: [
      "Roller Coasters",
      "Gentle Rides",
      "Thrill Rides",
      "Water Rides",
      "Food Stalls",
    ],
    datasets: [
      {
        label: "Average Rating",
        data: [
          getAverageRating(rollerCoasters),
          getAverageRating(gentleRides),
          getAverageRating(thrillRides),
          getAverageRating(waterRides),
          getAverageRating(foodStalls),
        ],
        backgroundColor: ["red", "orange", "purple", "blue", "green"],
      },
    ],
  };
  let yearly_profit = {
    labels: [
      "Roller Coasters",
      "Gentle Rides",
      "Thrill Rides",
      "Water Rides",
      "Food Stalls",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          getTotalProfits(rollerCoasters),
          getTotalProfits(gentleRides),
          getTotalProfits(thrillRides),
          getTotalProfits(waterRides),
          getTotalProfits(foodStalls),
        ],
        backgroundColor: ["red", "orange", "purple", "blue", "green"],
      },
    ],
  };
  let throughput = {
    labels: [
      "Roller Coasters",
      "Gentle Rides",
      "Thrill Rides",
      "Water Rides",
      "Food Stalls",
    ],
    datasets: [
      {
        label: "Throughput",
        data: [
          getTotalCustomers(rollerCoasters),
          getTotalCustomers(gentleRides),
          getTotalCustomers(thrillRides),
          getTotalCustomers(waterRides),
          getTotalCustomers(foodStalls),
        ],
        backgroundColor: ["red", "orange", "purple", "blue", "green"],
      },
    ],
  };
  return (
    <div className="metrics-container">
      <div className="metrics">
        <h3>Profits per Month</h3>
        <div className="graph">
          <Line
            data={monthly_profit}
            options={{ scales: { y: { beginAtZero: true } } }}
          />
        </div>
      </div>
      <div className="metrics">
        <h3>Ratings</h3>
        <div className="graph">
          <Bar
            data={ratings}
            options={{ scales: { y: { beginAtZero: true } } }}
          />
        </div>
      </div>
      <div className="metrics">
        <h3>Profits this Year</h3>
        <div className="graph">
          <Doughnut
            data={yearly_profit}
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
            data={throughput}
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

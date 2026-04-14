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
  };

  const getTotalCustomers = (list) => {
    return list.reduce((sum, facility) => {
      return sum + facility.customersThisYear;
    }, 0);
  };

  /**
   * Creating an entire monthly profit database is out of the scope of this project.
   * So this function simulates monthly profits by dividing the total profit by 12.
   *
   * By default each profit is evenly split to 1/12 of the profits. The optional
   * multiplier attribute can be used to alter it. It's an array of 12 numbers
   * which will be multiplicated to each 1/12 profit to change their distribution.
   *
   * For example the a multiplier of [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5]
   * will halve the profits of the first 6 month and increase the profits of the latter 6 months by 50%.
   * @param {*} list
   * @param {*} multiplier
   */
  const generateMonthlyProfits = (
    list,
    multiplier = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ) => {
    const yearlyProfit = getTotalProfits(list);
    const avgMonthlyProfit = yearlyProfit / 12;
    return multiplier.map((mult) => avgMonthlyProfit * mult);
  };

  //TODO: Fetch data from database instead of static
  let labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let monthly_profit = {
    labels: labels,
    datasets: [
      {
        label: "Roller Coasters",
        data: generateMonthlyProfits(
          rollerCoasters,
          [0.5, 0.6, 1.4, 1.2, 0.8, 0.9, 1.0, 0.9, 0.7, 1.5, 0.7, 1.8],
        ),
        fill: false,
        borderColor: "red",
        tension: 0.1,
      },
      {
        label: "Gentle Rides",
        data: generateMonthlyProfits(
          gentleRides,
          [0.6, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 0.8, 0.6],
        ),
        fill: false,
        borderColor: "orange",
        tension: 0.1,
      },
      {
        label: "Thrill Rides",
        data: generateMonthlyProfits(
          thrillRides,
          [0.5, 0.5, 0.6, 1.8, 0.8, 1.6, 1.1, 1.0, 0.7, 2.0, 0.6, 0.8],
        ),
        fill: false,
        borderColor: "purple",
        tension: 0.1,
      },
      {
        label: "Water Rides",
        data: generateMonthlyProfits(
          waterRides,
          [0.4, 0.4, 0.7, 0.9, 1.2, 1.7, 2.0, 1.8, 0.8, 0.7, 0.6, 0.8],
        ),
        fill: false,
        borderColor: "blue",
        tension: 0.1,
      },
      {
        label: "Food Stalls",
        data: generateMonthlyProfits(
          foodStalls,
          [0.9, 0.9, 1.1, 1.1, 1.0, 1.0, 1.1, 1.1, 0.9, 1.0, 0.9, 1.0],
        ),
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

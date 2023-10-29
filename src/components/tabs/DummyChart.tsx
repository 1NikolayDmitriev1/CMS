import React from "react";
const data = [
  { title: "Family Home", value: 92 },
  { title: "Apartment", value: 80 },
  { title: "Villa", value: 75 },
  { title: "Studio", value: 60 },
];
const DummyChart = () => {
  return (
    <div className="chart">
      {data.map((item) => (
        <div key={item.title} className="bar">
          <div className="bar-inner" style={{ height: item.value + "%" }}>
            <span className="value">{item.value}</span>
          </div>
          <div className="labels">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default DummyChart;

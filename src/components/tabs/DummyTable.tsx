import React from "react";

const data = [
  {
    id: 1,
    title: "Family Home",
    area: "232.26 sqm",
    location: "New York",
  },
  {
    id: 2,
    title: "Apartment",
    area: "92.9 sqm",
    location: "Chicago",
  },
  {
    id: 3,
    title: "Villa",
    area: "371.61 sqm",
    location: "Miami",
  },
  {
    id: 4,
    title: "Studio",
    area: "46.45 sqm",
    location: "Miami",
  },
];

const DummyTable: React.FC = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Area</th>
          <th>Location</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.area}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DummyTable;

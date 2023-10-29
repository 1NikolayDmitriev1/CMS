import React from "react";

const DummyTable: React.FC = () => {
  const data = [
    {
      id: 1,
      title: "Family Home",
      description:
        "Cozy family home with spacious rooms and a peaceful atmosphere, ideal for quality family time.",
      price: "$100000",
    },
    {
      id: 2,
      title: "Apartment",
      description:
        "Modern apartment offering convenience and style, perfect for urban living with all amenities nearby.",
      price: "$15000",
    },
    {
      id: 3,
      title: "Villa",
      description:
        "Luxurious villa with stunning architecture, private gardens, and breathtaking views, epitomizing elegance and comfort.",
      price: "$200000",
    },
    {
      id: 4,
      title: "Studio",
      description:
        "Charming studio space featuring a clever layout, ideal for individuals or couples seeking a cozy living experience.",
      price: "$2000",
    },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DummyTable;

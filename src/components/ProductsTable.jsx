import React from "react";

const ProductsTable = () => {
  const products = [
    {
      name: "Camera Mi 360",
      soldAmount: 432,
      unitPrice: 120,
      Revenue: 51840,
      Rating: 4.81,
    },
    {
      name: "Camera Mi 360",
      soldAmount: 432,
      unitPrice: 120,
      Revenue: 51840,
      Rating: 4.81,
    },
  ];

  return (
    <table className="w-full" >
      <thead className="text-xs text-gray-400 font-normal border-b" >
        <th className="text-start py-2" >Product</th>
        <th className="text-start py-2" >Sold Amount</th>
        <th className="text-start py-2" >Unit Price</th>
        <th className="text-start py-2" >Revenue</th>
        <th className="text-start py-2" >Rating</th>
      </thead>
      <tbody>
        {products.map((item) => {
          return (
            <tr >
              <td className="py-2 text-sm" >{item?.name}</td>
              <td className="py-2 text-sm text-gray-600" >{item?.soldAmount}</td>
              <td className="py-2 text-sm text-gray-600" >{item?.unitPrice}</td>
              <td className="py-2 text-sm text-gray-600" >{item?.Revenue}</td>
              <td className="py-2 text-sm text-gray-600" >{item?.Rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;

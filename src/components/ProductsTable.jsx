import React from "react";

const ProductsTable = ({productsData}) => {

  return (
    <table className="w-full">
      <thead className="text-xs text-gray-400 font-normal border-b">
        <th className="text-start py-2">Product</th>
        <th className="text-start py-2">Sold Amount</th>
        <th className="text-start py-2">Unit Price</th>
        <th className="text-start py-2">Revenue</th>
        <th className="text-start py-2">Rating</th>
      </thead>
      <tbody>
        {productsData?.map((item) => {
          return (
            <tr>
              <td className="py-2 text-sm">{item?.Product}</td>
              <td className="py-2 text-sm text-gray-600">
                {item?.sold_amount}
              </td>
              <td className="py-2 text-sm text-gray-600">{item?.unit_price}</td>
              <td className="py-2 text-sm text-gray-600">{item?.revenue}</td>
              <td className="py-2 text-sm text-gray-600">{item?.rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;

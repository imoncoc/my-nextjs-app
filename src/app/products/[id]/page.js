import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  //   console.log(searchParams);
  return (
    <div>
      <h1>This is dynamic Page: {params.id}</h1>
      <h2>Category: {searchParams?.category}</h2>
      <h3>Price: {searchParams?.price}</h3>
    </div>
  );
};

export default DynamicPage;

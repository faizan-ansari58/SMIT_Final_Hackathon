import React, { useEffect, useState } from "react";

import ProductsSection from "../components/ProductsSection/ProductsSection";

const Dashboard = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      <ProductsSection />
    </>
  );
};

export default Dashboard;

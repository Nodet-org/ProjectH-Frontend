import React from "react";
import Layout from "../components/Layout";
// import dynamic from "next/dynamic";
import Loader from "../components/Loader";
// const DynamicHero = dynamic(() => import("../components/Hero/index"), {
//   loading: () => <Loader />,
// });

const Index = () => {
  return (
    <Layout>
      {/* <DynamicHero /> */}
      <Loader />
    </Layout>
  );
};

export default Index;

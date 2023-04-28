import React from "react";
import Opportunity from "./CampanyComp/Opportunity";
import Cinetime from "./CampanyComp/Cinetime";
import Activity from "./CampanyComp/Activity";
import Subscription from "./CampanyComp/Subscription";

const Campany = () => {
  return (
    <div className="bg-gray-200">
      <div className="container max-w-[1440px] px-24">
        <div className="bg-white px-4 pt-4 pb-2">
          <Opportunity />
          <Cinetime />
          <Activity />
          <Subscription />
        </div>
      </div>
    </div>
  );
};

export default Campany;

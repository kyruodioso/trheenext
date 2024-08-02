import React from "react";
import ThreeScene from "@/components/ThreeScene";
import DataList from "@/components/DataList";
import Factory from "@/data/factory";
import Dropdown from "@/components/Dropdown";
import FactoryPlane from "@/assets/FactoryPlane";

const Sector = () => {
  return (
    <>
      {" "}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 mt-2">
          <div className="m-2">
            <div>
              <Dropdown />
            </div>
            <DataList />
          </div>
          <div className="mt-4">
            <FactoryPlane />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sector;

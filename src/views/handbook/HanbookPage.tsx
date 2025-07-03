import React from "react";
import SideMenu from "../../components/handbook/SideMenu";
import HandbookList from "../../components/handbook/ListHandBook";

const HanbookPage = () => {
  return (
    <div className="flex flex-row items-start mx-4 lg:mx-[100px] mt-4">
      <SideMenu></SideMenu>
      <HandbookList></HandbookList>
    </div>
  );
};

export default HanbookPage;

import { DownOutlined } from "@ant-design/icons";
import { DatePicker, Dropdown, Space, type MenuProps } from "antd";
import React from "react";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "08h00-12h00",
    onClick: () => console.log("08h00-12h00 selected"),
  },
  {
    key: "2",
    label: "14h00-18h00",
    onClick: () => console.log("14h00-18h00 selected"),
  },
  {
    key: "3",
    label: "19h00-210h00",
    onClick: () => console.log("19h00-21h00 selected"),
  },
];
const DateFilter: React.FC = () => {
  return (
    <div className="bg-[#f8f8f8] items-center lg:items-baseline w-full lg:w-fit flex flex-col gap-4 p-4 rounded-lg shadow-md ">
      <h1 className="font-bold text-xl">Thời gian giao hàng</h1>
      <div className="flex items-center gap-4">
        <DatePicker placeholder="Chọn ngày" />
        <Dropdown
          menu={{ items }}
          className="bg-white p-1 px-2 text-[14px] text-[#c9cbc9] w-1/2"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Chọn thời gian
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default DateFilter;

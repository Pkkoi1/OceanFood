import React, { useState } from "react";

interface Branch {
  name: string;
  address: string;
  hotline: string;
  location: string; // Changed to string to store iframe src
}

const StoreLocations: React.FC = () => {
  const branches: Branch[] = [
    {
      name: "Lofi Theme Hà Nội",
      address:
        "Địa chỉ: Tầng 6 - 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội",
      hotline: "Hotline: (+84)399 454 346",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8888813256185!2d105.81622417448123!3d21.037131687492487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0da2856791%3A0xd294b173b57f9d17!2zNzEvUC4gxJDhu5lpIEPhuqVuLzYgMjg1LCBUw7TMiSA1QiwgQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1752828710724!5m2!1svi!2s",
    },
    {
      name: "Lofi Theme Hà Nội",
      address: "Địa chỉ: 58 Nguyễn Khánh Toàn, Quan Hoa, Cầu Giấy, Hà Nội",
      hotline: "Hotline: 1900 6750",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9077214265244!2d105.80015507448122!3d21.036377987518378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3f9ef7aaf3%3A0xad3fca72f7e2955c!2zxJAuIE5ndXnhu4VuIEtow6FuaCBUb8OgbiAmIDU4LCBRdWFuIEhvYSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1752829158152!5m2!1svi!2s",
    },
    {
      name: "Lofi Theme Thanh Hóa",
      address: "Địa chỉ: Minh Thành 2, Xuân Bái, Thọ Xuân, Thanh Hóa",
      hotline: "Hotline: 1900 6750",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7503.1471619443!2d105.37235579357912!3d19.90022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136c30018f1c737%3A0x1a28b4475b2f715c!2swm%2B%20minh%20th%C3%A0nh%202!5e0!3m2!1svi!2s!4v1752829259865!5m2!1svi!2s",
    },
    {
      name: "Lofi Theme Bắc Giang",
      address: "Địa chỉ: Làng Kẹm, Minh Đức, Việt Yên, Bắc Giang",
      hotline: "Hotline: 1900 1234",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.9763812882593!2d106.114354974489!3d21.3119495779933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31351398b63ec585%3A0x37588dc5932a5e9a!2zVGjDtG4gS-G6uW0sIE1pbmggxJDhu6ljLCBWaeG7h3QgWcOqbiwgQuG6r2MgR2lhbmc!5e0!3m2!1svi!2s!4v1752829294945!5m2!1svi!2s",
    },
  ];

  const storeInfo = {
    floors: "Hệ thống 8 cửa hàng",
    staff: "Hơn 100 nhân viên",
    hours: "Mở cửa 8-22h cả CN & Lễ tết",
    address: "266 P. Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội",
  };

  const [selectedLocation, setSelectedLocation] = useState(
    branches[0].location
  );

  return (
    <div className="container mx-auto p-4 lg:px-[100px]">
      {/* Header Section */}
      <div className="border-[#37bee3] border p-4 rounded-lg mb-6 flex lg:flex-row flex-col justify-around items-start ">
        <div className="flex flex-row">
          <img
            src="https://bizweb.dktcdn.net/100/533/545/themes/971699/assets/icon_hethong1.png?1741101526784"
            alt="Floors Icon"
            className="w-14 h-14 mb-2 bg-[#37bee3] rounded-full p-2"
          />
          <div className="ml-4">
            <p className="font-bold">{storeInfo.floors}</p>
            <p>Trên toàn quốc</p>
          </div>
        </div>
        <div className="flex flex-row">
          <img
            src="https://bizweb.dktcdn.net/100/533/545/themes/971699/assets/icon_hethong2.png?1741101526784"
            alt="Staff Icon"
            className="w-14 h-14 mb-2 bg-[#37bee3] rounded-full p-2"
          />
          <div className="ml-4">
            <p className="font-bold">{storeInfo.staff}</p>
            <p>Để phục vụ quý khách</p>
          </div>
        </div>
        <div className="flex flex-row">
          <img
            src="https://bizweb.dktcdn.net/100/533/545/themes/971699/assets/icon_hethong3.png?1741101526784"
            alt="Hours Icon"
            className="w-14 h-14 mb-2 bg-[#37bee3] rounded-full p-2"
          />
          <div className="ml-4">
            <p className="font-bold">{storeInfo.hours}</p>
            <p>{storeInfo.address}</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Branch Selection and List */}
        <div className="flex-1">
          <div className="h-[50vh] overflow-y-auto border-0 bg-gray-200 rounded-lg p-4">
            {/* <div className="flex mb-6">
              <select className="border rounded-l-lg p-2 mr-2">
                <option>Chọn tỉnh thành</option>
              </select>
              <select className="border rounded-r-lg p-2">
                <option>Chọn quận/huyện</option>
              </select>
            </div> */}
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white p-2 rounded-lg border border-blue-200 shadow hover:bg-[#37bee3] group hover:text-white transition mb-2 cursor-pointer"
                onClick={() => setSelectedLocation(branch.location)}
              >
                <h3 className="font-bold text-md mb-1">{branch.name}</h3>
                <p className="text-xs mb-1">{branch.address}</p>
                <p className="text-xs text-blue-500 group-hover:text-white">
                  {branch.hotline}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-2">
          <iframe
            src={selectedLocation}
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-lg border border-blue-200"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StoreLocations;

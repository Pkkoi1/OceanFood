import React from "react";

interface Branch {
  name: string;
  address: string;
  hotline: string;
}

const StoreLocations: React.FC = () => {
  const branches: Branch[] = [
    {
      name: "Lofi Theme Hà Nội",
      address: "Địa chỉ: 58 Nguyễn Khánh Toàn, Quận Hoàn Kiếm, Hà Nội",
      hotline: "Hotline: (+84)399 454 346",
    },
    {
      name: "Lofi Theme Thanh Hóa",
      address: "Địa chỉ: Minh Thành 2, Xuân Bắc, Thọ Xuân, Thanh Hóa",
      hotline: "Hotline: 1900 6750",
    },
    {
      name: "Lofi Theme Bắc Giang",
      address: "Địa chỉ: Làng Kem, Minh Đức, Việt Yên, Bắc Giang",
      hotline: "Hotline: 1900 6750",
    },
    {
      name: "Lofi Theme Hải Phòng",
      address: "Địa chỉ: 123 Đường ABC, Quận XYZ, Hải Phòng",
      hotline: "Hotline: 1900 1234",
    },
    {
      name: "Lofi Theme Đà Nẵng",
      address: "Địa chỉ: 456 Đường DEF, Quận LMN, Đà Nẵng",
      hotline: "Hotline: 1900 5678",
    },
  ];

  const storeInfo = {
    floors: "Hệ thống 8 cửa hàng",
    staff: "Hơn 100 nhân viên",
    hours: "Mở cửa 8-22h cả CN & Lễ tết",
    address: "266 P. Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội",
  };

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
          <div className="h-[400px] overflow-y-auto border-0 bg-gray-200 rounded-lg p-4">
            <div className="flex mb-6">
              <select className="border rounded-l-lg p-2 mr-2">
                <option>Chọn tỉnh thành</option>
              </select>
              <select className="border rounded-r-lg p-2">
                <option>Chọn quận/huyện</option>
              </select>
            </div>
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-blue-200 shadow hover:shadow-lg transition mb-4"
              >
                <h3 className="font-bold text-lg mb-2">{branch.name}</h3>
                <p className="text-sm mb-1">{branch.address}</p>
                <p className="text-sm text-blue-500">{branch.hotline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904149430893!2d105.8133027744812!3d21.03652088751348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2bddedd8ff%3A0xde7c4fb8e272fabc!2zQ8O0bmcgdHkgQVZBIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1751508389308!5m2!1svi!2s"
            width="100%"
            height="450"
            loading="lazy"
            className="rounded-lg border border-blue-200"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StoreLocations;

import React, { useState, useEffect } from "react";
import { Select, Input } from "antd";
import vietnamAddresses from "../../data/vietnam_addresses.json";

const { TextArea } = Input;

interface District {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
  wards?: Ward[];
}

interface Ward {
  name?: string;
  code?: number;
  codename?: string;
  division_type?: string;
  short_codename: string;
}

interface Province {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  phone_code: number;
  districts: District[];
}

interface SelectOption {
  value: string;
  label: string;
}

interface CustomerInfoSectionProps {
  formData: {
    email: string;
    lastName: string;
    phone: string;
    address: string;
    province: string;
    district: string;
    ward: string;
    note: string;
  };
  onChange: (field: string, value: string) => void;
}

const CustomerInfoSection: React.FC<CustomerInfoSectionProps> = ({
  formData,
  onChange,
}) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [districts, setDistricts] = useState<SelectOption[]>([]);
  const [wards, setWards] = useState<SelectOption[]>([]);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUserName(parsedData.user?.fullName || null);
    }
  }, []);

  // Get provinces from JSON data
  const provinces: SelectOption[] = (vietnamAddresses as Province[]).map(
    (province) => ({
      value: province.code.toString(),
      label: province.name,
    })
  );

  const handleProvinceChange = (value: string) => {
    onChange("province", value);
    onChange("district", "");
    onChange("ward", "");

    // Find selected province and set its districts
    const selectedProvince = (vietnamAddresses as Province[]).find(
      (province) => province.code.toString() === value
    );

    if (selectedProvince) {
      const provinceDistricts: SelectOption[] = selectedProvince.districts.map(
        (district) => ({
          value: district.code.toString(),
          label: district.name,
        })
      );
      setDistricts(provinceDistricts);
      setWards([]);
    }
  };

  const handleDistrictChange = (value: string) => {
    onChange("district", value);
    onChange("ward", "");

    // Find selected district and set its wards
    const selectedProvince = (vietnamAddresses as Province[]).find(
      (province) => province.code.toString() === formData.province
    );

    if (selectedProvince) {
      const selectedDistrict = selectedProvince.districts.find(
        (district) => district.code.toString() === value
      );

      if (selectedDistrict && selectedDistrict.wards) {
        const districtWards: SelectOption[] = selectedDistrict.wards.map(
          (ward, index) => ({
            value: index.toString(),
            label: ward.short_codename
              .replace(/_/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase()),
          })
        );
        setWards(districtWards);
      }
    }
  };

  const handleLoginRedirect = () => {
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Thông tin nhận hàng</h2>
        {userName ? (
          <span className="text-gray-700 text-sm">Xin chào, {userName}</span>
        ) : (
          <a
            onClick={handleLoginRedirect}
            className="text-[#37bee3] text-sm flex items-center gap-1 cursor-pointer"
          >
            <span className="w-4 h-4 rounded-full bg-[#37bee3] text-white text-xs flex items-center justify-center">
              👤
            </span>
            Đăng nhập
          </a>
        )}
      </div>

      <div className="space-y-6 flex gap-2 flex-col">
        <Input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="w-full h-12"
          size="large"
        />

        <Input
          placeholder="Họ và tên"
          value={formData.lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
          className="w-full h-12"
          size="large"
        />

        <div className="flex gap-2 mb-0">
          <div className=" border rounded-[8px] border-[#d9d9d9] ">
            <Select
              defaultValue="+84"
              size="large"
              options={[{ value: "+84", label: "🇻🇳 +84" }]}
              bordered={false}
            />
          </div>

          <Input
            placeholder="Số điện thoại (tùy chọn)"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className="flex-1 h-12"
            size="large"
          />
        </div>

        <Input
          placeholder="Địa chỉ (tùy chọn)"
          value={formData.address}
          onChange={(e) => onChange("address", e.target.value)}
          className="w-full h-12"
          size="large"
        />

        <Select
          placeholder="Tỉnh thành"
          value={formData.province}
          onChange={handleProvinceChange}
          options={provinces}
          className="w-full"
          size="large"
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />

        <Select
          placeholder="Quận huyện (tùy chọn)"
          value={formData.district}
          onChange={handleDistrictChange}
          options={districts}
          className="w-full"
          size="large"
          disabled={!formData.province}
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />

        <Select
          placeholder="Phường xã (tùy chọn)"
          value={formData.ward}
          onChange={(value) => onChange("ward", value)}
          options={wards}
          className="w-full"
          size="large"
          disabled={!formData.district}
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />

        <TextArea
          placeholder="Ghi chú (tùy chọn)"
          value={formData.note}
          onChange={(e) => onChange("note", e.target.value)}
          rows={4}
          className="w-full"
          size="large"
        />
      </div>
    </div>
  );
};

export default CustomerInfoSection;

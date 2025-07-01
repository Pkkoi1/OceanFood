import {
  PhoneOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";

const NavBar = () => {
  return (
    <div className="bg-white shadow-sm relative">
      <div className="flex items-center justify-between px-[100px]">
        <SideMenu />

        <MainMenu />

        {/* Right side - Actions */}
        <div className="flex items-center gap-4">
          {/* Phone */}
          <div className="flex items-center bg-red-500 text-white px-4 py-2 rounded">
            <PhoneOutlined className="mr-2" />
            <span className="font-bold">19006750</span>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
            <div className="relative">
              <ShoppingCartOutlined className="text-xl text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
            <span className="text-gray-600">Giỏ hàng</span>
          </div>

          {/* Account */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
            <UserOutlined className="text-xl text-gray-600" />
            <span className="text-gray-600">Tài khoản</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

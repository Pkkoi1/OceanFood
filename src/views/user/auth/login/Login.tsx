import { createFromIconfontCN, GoogleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "../../../../Service/UserService";
import { notification } from "antd";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await loginAccount(formData.email, formData.password);
      localStorage.setItem("userData", JSON.stringify(response));
      api.success({
        message: "Đăng nhập thành công",
        description: "Bạn đã đăng nhập thành công. Đang chuyển hướng...",
        placement: "topRight",
      });
      setTimeout(() => {
        navigate("/"); // Redirect to the home page after 5 seconds
      }, 5000);
    } catch (error) {
      api.error({
        message: "Đăng nhập thất bại",
        description: "Email hoặc mật khẩu không đúng. Vui lòng thử lại.",
        placement: "topRight",
      });
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      {contextHolder}
      <div className="w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          ĐĂNG NHẬP
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Nếu bạn chưa có tài khoản, đăng ký tại đây
        </p>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors mb-4"
        >
          Đăng nhập
        </button>

        <p className="text-center text-sm text-gray-600 mb-4">Quên mật khẩu</p>

        <div className="text-center mb-4">Hoặc đăng nhập bằng</div>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors">
            <span className="flex items-center gap-2">
              <IconFont type="icon-facebook" style={{ color: "#fff" }} />
              Facebook
            </span>
          </button>
          <button className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-colors">
            <span className="flex items-center gap-2">
              <GoogleOutlined />
              Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

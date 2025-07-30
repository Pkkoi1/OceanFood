import React, { useState } from "react";
import { createFromIconfontCN, GoogleOutlined } from "@ant-design/icons";
import { registerAccount } from "../../../Service/UserService";
import { notification } from "antd";
import validateInput from "../../../components/validation/validateInput";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [api, contextHolder] = notification.useNotification();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field being edited
  };

  const handleRegister = async () => {
    const validationErrors = validateInput(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Prevent registration if there are validation errors
    }

    const fullName = `${formData.firstName} ${formData.lastName}`;
    try {
      const response = await registerAccount(
        fullName,
        formData.email,
        formData.phoneNumber,
        formData.password
      );
      api.success({
        message: "Đăng ký thành công",
        description: "Tài khoản của bạn đã được tạo thành công.",
        placement: "topRight",
      });
      console.log("Registration successful:", response);
    } catch (error: unknown) {
      type ErrorResponse = {
        response?: {
          status?: number;
          data?: {
            message?: string;
          };
        };
      };

      const err = error as ErrorResponse;

      if (
        typeof error === "object" &&
        error !== null &&
        "response" in err &&
        typeof err.response === "object" &&
        err.response !== null &&
        "status" in err.response
      ) {
        const errorMessage =
          err.response?.data?.message || "Đã xảy ra lỗi.";
        if (errorMessage.includes("email")) {
          setErrors({ ...errors, email: "Email đã được sử dụng." });
        } else if (errorMessage.includes("phone")) {
          setErrors({
            ...errors,
            phoneNumber: "Số điện thoại đã được sử dụng.",
          });
        } else {
          api.error({
            message: "Đăng ký thất bại",
            description: errorMessage,
            placement: "topRight",
          });
        }
      } else {
        api.error({
          message: "Đăng ký thất bại",
          description:
            "Đã xảy ra lỗi trong quá trình đăng ký. Vui lòng thử lại.",
          placement: "topRight",
        });
      }
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      {contextHolder}
      <div className="w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          ĐĂNG KÝ
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Đã có tài khoản, đăng nhập tại đây
        </p>

        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="Họ"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Tên"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Số điện thoại"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors mb-4 cursor-pointer"
        >
          Đăng ký
        </button>

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

export default Register;

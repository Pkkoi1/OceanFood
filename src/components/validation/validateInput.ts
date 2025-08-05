const validateInput = (data: Record<string, string>) => {
  const errors: Record<string, string> = {};

  if (!data.firstName) {
    errors.firstName = "Họ không được để trống.";
  }

  if (!data.lastName) {
    errors.lastName = "Tên không được để trống.";
  }

  if (!data.email) {
    errors.email = "Email không được để trống.";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email không hợp lệ.";
  }

  if (!data.phoneNumber) {
    errors.phoneNumber = "Số điện thoại không được để trống.";
  } else if (!/^\d{10,11}$/.test(data.phoneNumber)) {
    errors.phoneNumber = "Số điện thoại không hợp lệ.";
  }

  if (!data.password) {
    errors.password = "Mật khẩu không được để trống.";
  } else if (data.password.length < 6) {
    errors.password = "Mật khẩu phải có ít nhất 6 ký tự.";
  }

  return errors;
};

export default validateInput;

import React from "react";
import { Button, InputForm } from "../../components";

const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] bt-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">Đăng nhập</h3>
      <div className="w-full flex flex-col gap-5">
        <InputForm id="phone" lable="SỐ ĐIỆN THOẠI" />
        <InputForm id="password" lable="MẬT KHẨU" />
        <Button
          text="Đăng nhập"
          textColor="text-white"
          bgColor="bg-secondary1"
          fullWidth
        />
      </div>
      <div className="flex items-center justify-between mt-7">
        <span className="text-[blue] hover:text-[red] cursor-pointer">
          Bạn quên mật khẩu?
        </span>
        <span className="text-[blue] hover:text-[red] cursor-pointer">
          Tạo một tại khoản mới
        </span>
      </div>
    </div>
  );
};

export default Login;

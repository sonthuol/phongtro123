import React, { useState } from "react";
import { Button, InputForm } from "../../components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(location.state?.flag);

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  console.log(location);
  return (
    <div className="bg-white w-[600px] p-[30px] bt-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? "Đăng ký" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && <InputForm id="name" lable="HỌ VÀ TÊN " />}
        <InputForm id="phone" lable="SỐ ĐIỆN THOẠI" />
        <InputForm id="password" lable="MẬT KHẨU" />
        <Button
          text={isRegister ? "Đăng ký" : "Đăng nhập"}
          textColor="text-white"
          bgColor="bg-secondary1"
          fullWidth
        />
      </div>
      <div
        className={`flex items-center justify-between mt-7 ${
          isRegister && "float-right"
        }`}
      >
        {isRegister ? (
          <small>
            Bạn đã có tài khoản ?{" "}
            <span
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => setIsRegister(false)}
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu?
            </small>
            <small
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => setIsRegister(true)}
            >
              Tạo một tại khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

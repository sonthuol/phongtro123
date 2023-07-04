import React, { useState } from "react";
import { Button, InputForm } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";
import Sweetalert from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, message, update } = useSelector((state) => state.auth);
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    setIsRegister(location.state?.flag);
    setPayload({
      name: "",
      phone: "",
      password: "",
    });
    setInvalidFields([]);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    message && Sweetalert.fire("Opps!", message, "error");
  }, [message, update]);

  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let countFieldInvalid = validate(finalPayload);
    if (countFieldInvalid === 0)
      dispatch(
        isRegister ? action.register(finalPayload) : action.login(finalPayload)
      );
  };

  const validate = (payload) => {
    let countFieldInvalid = 0;
    let fields = Object.entries(payload);
    fields.forEach((field) => {
      if (field[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: field[0],
            message: "Trường không được bỏ trống",
          },
        ]);
        countFieldInvalid++;
      }
      switch (field[0]) {
        case "password":
          if (field[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: field[0],
                message: "Mật khẩu phải có tối thiểu 6 kí tự",
              },
            ]);
            countFieldInvalid++;
          }
          break;
        case "phone":
          if (!+field[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: field[0],
                message: "Số điện thoại không hợp lệ",
              },
            ]);
            countFieldInvalid++;
          }
          break;
        default:
          break;
      }
    });
    return countFieldInvalid;
  };

  return (
    <div className="bg-white w-[600px] p-[30px] bt-[100px] rounded-md shadow-sm m-5">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? "Đăng ký" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && (
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            id="name"
            lable="HỌ VÀ TÊN "
            value={payload.name}
            keyPayload="name"
            setValue={setPayload}
          />
        )}
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          id="phone"
          lable="SỐ ĐIỆN THOẠI"
          value={payload.phone}
          keyPayload="phone"
          setValue={setPayload}
        />
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          id="password"
          lable="MẬT KHẨU"
          value={payload.password}
          keyPayload="password"
          type="password"
          setValue={setPayload}
        />
        <Button
          text={isRegister ? "Đăng ký" : "Đăng nhập"}
          textColor="text-white"
          bgColor="bg-secondary1"
          fullWidth
          onClick={handleSubmit}
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
              onClick={() => {
                setIsRegister(false);
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
                setInvalidFields([]);
              }}
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
              onClick={() => {
                setIsRegister(true);
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
                setInvalidFields([]);
              }}
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

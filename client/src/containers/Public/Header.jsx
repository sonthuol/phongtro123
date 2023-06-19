import React, { useCallback } from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/constant";

const { AiOutlinePlusCircle } = icons;

const Header = () => {
  const navigate = useNavigate();

  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, [navigate]);

  return (
    <div className="w-1100">
      <div className="w-full flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-[240px] h-[70px] object-contain"
          onClick={() => navigate(path.HOME)}
        />
        <div className="flex items-center gap-1">
          <small className="hover:underline">Phongtro123.com Xin chào!</small>
          <Button
            text="Đăng nhập"
            textColor="text-white"
            bgColor="bg-[#3961FB]"
            onClick={goLogin}
          />
          <Button
            text="Đăng ký"
            textColor="text-white"
            bgColor="bg-[#3961FB]"
          />
          <Button
            text="Đăng tin mới"
            textColor="text-white"
            bgColor="bg-secondary2"
            IcAfter={AiOutlinePlusCircle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useCallback, useEffect, useRef } from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { path } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";

const { AiOutlinePlusCircle } = icons;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const ref = useRef();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const goLogin = useCallback(
    (flag) => {
      navigate(path.LOGIN, { state: { flag } });
    },
    [navigate]
  );

  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [searchParams]);

  return (
    <div ref={ref} className="lg:w-4/5 w-full">
      <div className="w-full flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-[240px] h-[70px] object-contain"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center gap-1">
          {isLoggedIn && (
            <>
              <small className="hover:underline hidden md:inline lg:inline">
                Phongtro123.com Xin chào!
              </small>
              <Button
                text="Đăng xuất"
                textColor="text-white"
                bgColor="bg-secondary2"
                onClick={() => dispatch(action.logout())}
                buttonHeader
              />
            </>
          )}
          {!isLoggedIn && (
            <>
              <Button
                text="Đăng nhập"
                textColor="text-white"
                bgColor="bg-[#3961FB]"
                onClick={() => goLogin(false)}
              />
              <Button
                text="Đăng ký"
                textColor="text-white"
                bgColor="bg-[#3961FB]"
                onClick={() => goLogin(true)}
              />
              <Button
                text="Đăng tin mới"
                textColor="text-white"
                bgColor="bg-secondary2"
                IcAfter={AiOutlinePlusCircle}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

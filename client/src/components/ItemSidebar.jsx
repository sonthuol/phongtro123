import React, { memo } from "react";
import icons from "../utils/icons";
import {
  Link,
  createSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { convertToSlug } from "../utils/Common/convertVietNameseToSlug";

const { GrNext } = icons;

function ItemSidebar({ title, content, isDouble, type, currentCode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const formatCodesidebar = () => {
    const oldEl = content?.filter((item, index) => index % 2 !== 0);
    const evendEl = content?.filter((item, index) => index % 2 === 0);
    const formatCodeContent = oldEl?.map((item, index) => {
      return {
        right: item,
        left: evendEl?.find((item2, index2) => index2 === index),
      };
    });
    return formatCodeContent;
  };

  const handleFilterPost = (code) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        [type]: code,
      }).toString(),
    });
  };

  return (
    <div className="p-4 rounded-md bg-white w-full">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      {!isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length &&
            content.map((item) => {
              return (
                <Link
                  to={convertToSlug(item.value)}
                  key={item.code}
                  className="flex gap-1 items-center cursor-pointer hover:text-orange-500 border-b border-gray-300 pb-1 border-dashed"
                >
                  <GrNext className="" size={10} color="#ccc" />
                  <p>{item.value}</p>
                </Link>
              );
            })}
        </div>
      )}
      {isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length &&
            formatCodesidebar(content).map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex items-center justify-around">
                    <div
                      onClick={() => handleFilterPost(item.left.code)}
                      className={`flex flex-1 gap-1 items-center cursor-pointer ${
                        item.left.code === currentCode
                          ? "text-orange-500"
                          : "hover:text-orange-500"
                      }  border-b border-gray-300 pb-1 border-dashed`}
                    >
                      <GrNext size={10} color="#ccc" />
                      <p>{item.left.value}</p>
                    </div>
                    <div
                      onClick={() => handleFilterPost(item.right.code)}
                      className={`flex flex-1 gap-1 items-center cursor-pointer ${
                        item.right.code === currentCode
                          ? "text-orange-500"
                          : "hover:text-orange-500"
                      }  border-b border-gray-300 pb-1 border-dashed`}
                    >
                      <GrNext size={10} color="#ccc" />
                      <p>{item.right.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default memo(ItemSidebar);

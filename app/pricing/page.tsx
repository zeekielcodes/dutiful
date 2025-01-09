import React from "react";
import pricing from "@/constants/pricing.json";
import features from "@/constants/features.json";
import { formatMoney } from "@/utils/format-money";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";

export default function page() {
  return (
    <div className="bg-[#FCFAFF]">
      <div className="min-h-[200px] bg-white px-4 py-6 md:py-8 md:px-8 lg:px-20 flex justify-center items-center">
        <div className="w-full md:max-w-[888px] text-center">
          <h1 className="font-recoleta-alt text-[30px] lg:text-[36px] text-[#1E1E4B]">
            Plans to Suit Your Business Budget
          </h1>
          <p className="text-small md:text-base text-[#656565]">
            Our fully organized plans deliver valuable content that showcases
            your services and skills, drives Lead, covers all features, and
            gives customers a clear idea to be able to choose your services.
          </p>
        </div>
      </div>
      <div className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {pricing.map((tier, index) => (
            <div key={index} className="bg-white p-4">
              <p className="text-base md:text-[22px] font-[500]">{tier.name}</p>

              <h2 className="font-recoleta-alt text-[32px] md:text-[48px] font-semibold">
                {tier.price ? <sup className="text-small">NGN</sup> : null}
                {tier.price < 1 ? "Free" : formatMoney(tier.price.toString())}
                {tier.price ? <sub className="text-base">/year</sub> : null}
              </h2>
              <button className="h-[78px] w-full rounded bg-main text-white text-[18px] shadow-xl my-4 md:my-6 lg:my-8">
                Get started
              </button>
              <ul className="flex flex-col gap-3">
                {tier.features.map((feat, index) => (
                  <li
                    key={index}
                    className="text-small md:text-base text-[#656565] flex gap-2 items-center"
                  >
                    <IoCheckmark />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>{" "}
        <h3
          className="text-[28px] md:text-[32px] my-4 md:my-8 lg:my-12"
          id="features"
        >
          Features Overview
        </h3>
        <div className="overflow-x-scroll scroll w-full">
          <table className="w-[250%] md:w-full features overflow-hidden">
            <thead>
              <td className="text-[#656565] text-base md:text-[24px] p-3">
                Features & Services
              </td>
              <td className="p-3">
                <div>
                  <p className="text-[18px] md:text-[22px] font-[500] mb-6">
                    Basic
                  </p>
                  <button className="w-full h-[51px] bg-main text-white rounded shadow-xl">
                    Get started
                  </button>
                </div>
              </td>
              <td className="p-3">
                <div>
                  <p className="text-[18px] md:text-[22px] font-[500] mb-6">
                    Standard
                  </p>
                  <button className="w-full h-[51px] bg-main text-white rounded shadow-xl">
                    Get started
                  </button>
                </div>
              </td>
              <td className="p-3">
                <div>
                  <p className="text-[18px] md:text-[22px] font-[500] mb-6">
                    Premium
                  </p>
                  <button className="w-full h-[51px] bg-main text-white rounded shadow-xl">
                    Get started
                  </button>
                </div>
              </td>
            </thead>
            <tbody>
              {features.map((feat, index) => (
                <tr key={index} className="text-small md:text-base">
                  <td className="text-[#656565] font-[450] p-3">
                    {feat.feature}
                  </td>
                  <td className="p-3">
                    <div className="w-full flex justify-center items-center">
                      {typeof feat.basic === "boolean" ? (
                        feat.basic ? (
                          <IoMdCheckmark className="text-[#AC64CE]" />
                        ) : (
                          <RxCross2 className="text-[#9E9E9E]" />
                        )
                      ) : (
                        feat.basic
                      )}
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="w-full flex justify-center items-center">
                      {typeof feat.standard === "boolean" ? (
                        feat.standard ? (
                          <IoMdCheckmark className="text-[#AC64CE]" />
                        ) : (
                          <RxCross2 className="text-[#9E9E9E]" />
                        )
                      ) : (
                        feat.standard
                      )}
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="w-full flex justify-center items-center">
                      {typeof feat.premium === "boolean" ? (
                        feat.premium ? (
                          <IoMdCheckmark className="text-[#AC64CE]" />
                        ) : (
                          <RxCross2 className="text-[#9E9E9E]" />
                        )
                      ) : (
                        feat.premium
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

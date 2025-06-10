import CountUp from "react-countup";
import { data } from "./data";
import { data2025 } from "./data-2025";
import logo from "../public/ess.png";
import React from "react";

export default function Stats({ year }) {
  const yearData = year === "2025" ? data2025 : data;

  function calculateTotalAmount() {
    let total = 0;
    for (let i = 0; i < yearData.length; i++) {
      total += yearData[i].amount;
    }
    return total;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              حصيلة المساهمات
            </dt>
            <dd className="rtl-direction order-first tabular-nums text-slate-900 text-5xl font-extrabold  sm:text-5xl">
              <CountUp end={calculateTotalAmount()} />
              <span className="text-lg">دينار</span>
            </dd>
          </div>
          <img className="mx-auto max-w-xs" src={logo} />
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">عدد المساهمين</dt>
            <dd className="order-first tabular-nums text-slate-900 text-5xl font-extrabold  sm:text-5xl">
              <CountUp end={yearData.length} enableScrollSpy scrollSpyOnce />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

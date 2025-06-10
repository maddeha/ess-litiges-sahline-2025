import "./App.css";
import Contact from "./Contact";
import List from "./List";
import Stats from "./Stats";
import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("2025");

  return (
    <div class="">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pt-10">
        حملة مساهمات أحباء النجم الساحلي بالساحلين
      </h2>
      <div className="w-full max-w-md mx-auto mt-10">
        {/* Tab Headers */}
        <div className="flex border-b border-gray-300">
          <button
            className={`flex-1 py-2 text-center font-medium ${
              activeTab === "2025"
                ? "border-2 border-blue-500 text-blue-500"
                : "border-gray-300 text-gray-500"
            }`}
            onClick={() => setActiveTab("2025")}
          >
            2025
          </button>
          <button
            className={`flex-1 py-2 text-center font-medium ${
              activeTab === "2024"
                ? "border-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("2024")}
          >
            2024
          </button>
        </div>
      </div>
      <Stats year={activeTab} />
      <h4 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl text-center pb-3">
        للمساهمة يمكنكم الإتّصال بكلّ من
      </h4>
      <Contact year={activeTab} />
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pb-10">
        قائمة المساهمين
      </h2>
      <List year={activeTab} />
    </div>
  );
}

export default App;

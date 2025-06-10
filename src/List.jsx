import React, { useState } from "react";
import { data } from "./data";
import { data2025 } from "./data-2025";
import user from "../public/user.png";

const hideEmail = (email) => email.replace(/(?<=.{6})[^@](?=[^@]*@)/g, "*");

export default function List({ year }) {
  const [searchQuery, setSearchQuery] = useState("");

  const yearData = year === "2025" ? data2025 : data;

  const sortedData = yearData
    .slice()
    .sort((a, b) => b.amount - a.amount)
    .filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
      <form class="max-w-md mx-auto px-1">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
        </div>
      </form>
      <ul
        role="list"
        className="max-w-md mx-auto divide-y divide-gray-100 px-1"
      >
        {sortedData.map((person) => (
          <li className="flex justify-between gap-x-6 py-5 items-center">
            <div className="flex min-w-0 gap-x-4 items-center">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={user}
                alt=""
              />
              <div class="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                  {hideEmail(person.email)}
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {person.amount} Dinars
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

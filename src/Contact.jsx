import user from "../public/user.png";

const contactList = [
  {
    name: "كريم ماني (الكعلي)",
    location: "حانوت الحجام بير الشامخ",
    number: "53903566",
  },
  {
    name: "حسام الحناشي (ولد نزهة)",
    location: "بوتيك الدبش بريقاد ستور",
    number: "98684844",
  },
  {
    name: "صدام المزوغي",
    location: "بوتيك الدبش في سيدي مصباح",
    number: "22206926",
  },
  {
    name: "خالد برقاش",
    location: "",
    number: "23832270",
  },
];

const contact2025List = [
  {
    name: "بشير ماني",
    location: "Drugstore Bechir Mani",
    number: "25953619",
  },
  {
    name: "كريم ماني (الكعلي)",
    location: "حانوت الحجام بير الشامخ",
    number: "53903566",
  },
  {
    name: "حسام الحناشي (ولد نزهة)",
    location: "بوتيك الدبش بريقاد ستور",
    number: "98684844",
  },
  {
    name: "L'Etoile Shop عزيز الصحراوي",
    location: "مغازة النجم",
    number: "27082787",
  },
  {
    name: "مجدي ولد الصايغي",
    location: "Bijouterie Abdessatar",
    number: "52433751",
  },
];

export default function Contact({ year }) {
  const yearContantList = year === "2025" ? contact2025List : contactList;

  return (
    <ul role="list" className="max-w-md mx-auto divide-y divide-gray-100 px-1">
      {yearContantList.map((person) => (
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
                {person.location}
              </p>
            </div>
          </div>
          <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.number}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

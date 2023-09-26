"use client";

export default function Categories() {

  const dataCategories = [
    {
      id: 1,
      name: "All",
      first: true,
    },
    {
      id: 2,
      name: "Comedy",
      first: false,
    },
    {
      id: 3,
      name: "Formula",
      first: false,
    },
    {
      id: 4,
      name: "Gaming",
      first: false,
    },
    {
      id: 5,
      name: "Music",
      first: false,
    },
    {
      id: 6,
      name: "News",
      first: false,
    },
    {
      id: 7,
      name: "Sports",
      first: false,
    },
    {
      id: 8,
      name: "Live",
      first: false,
    },
    {
      id: 9,
      name: "Fashion",
      first: false,
    },
    {
      id: 10,
      name: "Learning",
      first: false,
    },
    {
      id: 11,
      name: "Recommended",
      first: false,
    },
    {
      id: 12,
      name: "Recent",
    },
    {
      id: 13,
      name: "Home",
    },
    {
      id: 14,
      name: "Action-adventure games",
    },
    {
      id: 15,
      name: "Simulation Video Games",
    },

  ];

  return (
    <div className="flex top-14 bg-backgrounStartRgb z-10 fixed w-full overflow-x-auto overflow-hidden">
      {dataCategories.map((category) => (
        <div className="my-3">
          <p
            className={`flex flex-wrap whitespace-nowrap text-sm cursor-pointer mr-3 py-1.5 px-3 rounded-lg transition-all ease-in-out duration-200 ${
              category.first
                ? "bg-baseYoutube text-black"
                : "bg-secondaireRgb text-baseYoutube hover:bg-youtube2"
            }`}
            key={category.id}>
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function SortVideos() {
  const [sort, setSort] = useState("Latest");
  let { replace } = useRouter();
  let pathname = usePathname();

  const handleSort = (term: string) => {
    setSort(term);
    let params = new URLSearchParams(window.location.search);
    if (term) {
      params.set("sort", term);
    } else {
      params.delete("sort");
    }
    params.delete("page");
    replace(`${pathname}?${params.toString().toLowerCase()}`);
  };

  const dataCategories = [
    {
      id: 1,
      name: "Latest",
    },
    {
      id: 2,
      name: "Popular",
    },
    {
      id: 3,
      name: "Oldest",
    },
  ];

  return (
    <div className="flex mb-4 bg-backgrounStartRgb z-10">
      {dataCategories.map((category) => (
        <div key={category.id} onClick={() => handleSort(category.name)}>
          <p
            className={`flex flex-wrap font-semibold whitespace-nowrap text-sm cursor-pointer mr-3 py-1.5 px-3 rounded-lg transition-all ease-in-out duration-200 ${
              category.name === sort
                ? "bg-baseYoutube text-black"
                : "bg-secondaireRgb text-baseYoutube hover:bg-youtube2"
            }`}>
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
}

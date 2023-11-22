"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function CategoryCard({ category }: any) {
  const [active, setActive] = useState("1");
  let { replace } = useRouter();
  let pathname = usePathname();

  const handleSort = (term: string) => {
    setActive(term);
    let params = new URLSearchParams(window.location.search);
    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString().toLowerCase()}`);
  };
  return (
    <div
      className="my-3"
      key={category.id}
      onClick={() => handleSort(category.id)}>
      <p
        className={`flex flex-wrap whitespace-nowrap text-sm cursor-pointer mr-3 py-1.5 px-3 rounded-lg transition-all ease-in-out duration-200 ${
          active === category.snippet.title
            ? "bg-baseYoutube text-black"
            : "bg-secondaireRgb text-baseYoutube hover:bg-youtube2"
        }`}>
        {category.snippet.title}
      </p>
    </div>
  );
}

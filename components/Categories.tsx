"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Categories({ categories }: any) {
  const [active, setActive] = useState<string | null>(null);
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSort = (term: string) => {
    setActive(term);
    const params = new URLSearchParams(window.location.search);
    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    setActive(null);
    const params = new URLSearchParams(window.location.search);
    params.delete("category");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex">
      <div className="my-3" key="all" onClick={handleClear}>
        <p
          className={`flex flex-wrap whitespace-nowrap text-sm cursor-pointer mr-3 py-1.5 px-3 rounded-lg transition-all ease-in-out duration-200 ${
            active === null
              ? "bg-baseYoutube text-black"
              : "bg-secondaireRgb text-baseYoutube hover:bg-youtube2"
          }`}>
          All
        </p>
      </div>
      {categories.items.map((category: any) => (
        <div
          className="my-3"
          key={category.id}
          onClick={() => handleSort(category.id)}>
          <p
            className={`flex flex-wrap whitespace-nowrap text-sm cursor-pointer mr-3 py-1.5 px-3 rounded-lg transition-all ease-in-out duration-200 ${
              active === category.id
                ? "bg-baseYoutube text-black"
                : "bg-secondaireRgb text-baseYoutube hover:bg-youtube2"
            }`}>
            {category.snippet.title}
          </p>
        </div>
      ))}
    </div>
  );
}

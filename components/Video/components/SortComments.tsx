"use client";

import { AlignLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

export default function SortComments() {
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState("Top comments");
  const moreRef = useRef<HTMLDivElement | null>(null);

  let { replace } = useRouter();
  let pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const handleSort = (term: string) => {
    setSort(term);
    let params = new URLSearchParams(window.location.search);
    if (term) {
      params.set("sort", term);
    } else {
      params.delete("sort");
    }
    params.delete("page");
    startTransition(() => {
      replace(`${pathname}?${params.toString().toLowerCase()}`);
    });
  };


  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const dataCategories = [
    {
      id: 1,
      name: "Top comments",
      sort: "relevance",
    },
    {
      id: 2,
      name: "Newest first",
      sort: "date",
    },
  ];

  return (
    <div className="flex items-center ml-4 relative" ref={moreRef}>
      <div className="group">
        <div
          className="flex gap-2 items-center cursor-pointer p-0.5 rounded-md active:bg-detailsYoutube/20"
          onClick={handleShow}>
          <AlignLeft width={20} height={20} />
          <h4 className="text-sm ml-1 font-semibold">Sort by</h4>
        </div>
        <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none top-14 absolute p-2 rounded-md bg-neutral-600/95">
          <h4 className="text-xs">Sort comments</h4>
        </div>
      </div>
      <div
        className={`whitespace-nowrap text-sm ease-in duration-100 top-10 absolute py-2 rounded-lg bg-neutral-800 ${
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}>
        {dataCategories.map((category) => (
          <h4
            className={`p-4 cursor-pointer ${
              category.sort === sort ? "bg-neutral-500" : "hover:bg-neutral-600"
            }`}
            key={category.id}
            onClick={() => handleSort(category.sort)}>
            {category.name}
          </h4>
        ))}
      </div>
    </div>
  );
}

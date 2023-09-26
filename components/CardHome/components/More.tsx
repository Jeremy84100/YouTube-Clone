"use client";

import { useState, useEffect, useRef } from "react";
import { MoreVertical } from "lucide-react";

export default function More() {
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setShowMore(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);



  const dataMore = [
    {
      id: "1",
      name: "Add to queue",
      icon: (
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          fill="white">
          <path d="M21 16h-7v-1h7v1zm0-5H9v1h12v-1zm0-4H3v1h18V7zm-11 8-7-4v8l7-4z"></path>
        </svg>
      ),
    },
    {
      id: "2",
      name: "Share",
      icon: (
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          fill="white">
          <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative z-50 bottom-1 left-2" ref={moreRef}>
      <div
        className="cursor-pointer opacity-0 group-hover:opacity-100 p-3 rounded-full active:bg-youtube2/80"
        onClick={() => setShowMore(!showMore)}>
        <MoreVertical size={20} />
      </div>
      <div
        className={`${
          showMore ? "absolute" : "hidden"
        } top-11 flex flex-col cursor-default whitespace-nowrap bg-youtube2 py-2 rounded-xl`}>
        {dataMore.map((data) => (
          <div
            className="flex items-center w-full py-1 pl-3 pr-4 hover:bg-baseYoutube/20 active:bg-baseYoutube/30 cursor-pointer"
            key={data.id}>
            <div>{data.icon}</div>
            <h4 className="ml-3 text-sm font-semibold">{data.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

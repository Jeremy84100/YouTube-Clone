"use client";

import { Menu, UserCircle2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/app/redux/features/counterSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const value = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const handleToggle = () => {
    dispatch(toggle());
  };

  const dataLinks = [
    [
      {
        title: false,
        name: "Home",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
          </svg>
        ),
        first: true,
        paragraph: false,
        button: false,
      },
      {
        title: false,
        name: "Shorts",
        icon: (
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
          </svg>
        ),
        first: false,
        paragraph: false,
        button: false,
      },
      {
        title: false,
        name: "Subscriptions",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
          </svg>
        ),
        first: false,
        paragraph: false,
        button: false,
      },
    ],
    [
      {
        title: false,
        name: "Library",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="white"
            focusable="false">
            <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
          </svg>
        ),
        first: false,
        paragraph: false,
        button: false,
      },
      {
        title: false,
        name: "History",
        icon: (
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <g>
              <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
            </g>
          </svg>
        ),
        first: false,
        paragraph: false,
        button: false,
      },
    ],
    [
      {
        title: false,
        name: false,
        icon: false,
        paragraph: "Sign in to like videos, comment, and subscribe.",
        button: (
          <div className="flex mt-3 pr-4 pl-3 items-center cursor-pointer text-signInColor border border-youtube2 hover:border-signInColorBg hover:bg-signInColorBg rounded-full py-1.5 px-2">
            <UserCircle2 size={24} />
            <h4 className="ml-1.5 text-sm font-semibold">Sign</h4>
            <h4 className="ml-1 text-sm font-semibold">in</h4>
          </div>
        ),
        first: false,
      },
    ],
    [
      {
        title: "Explore",
        name: "Trending",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Music",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Movies & TV",
        icon: (
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Live",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <g>
              <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
            </g>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Gaming",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "News",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Sports",
        icon: (
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Learning",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M16 21h-2.28c-.35.6-.98 1-1.72 1s-1.38-.4-1.72-1H8v-1h8v1zm4-11c0 2.96-1.61 5.54-4 6.92V19H8v-2.08C5.61 15.54 4 12.96 4 10c0-4.42 3.58-8 8-8s8 3.58 8 8zm-5 8v-1.66l.5-.29C17.66 14.8 19 12.48 19 10c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.48 1.34 4.8 3.5 6.06l.5.28V18h6z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Fashion & Beauty",
        icon: (
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12 12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
    ],
    [
      {
        title: false,
        name: "Browse channels",
        icon: (
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
    ],
    [
      {
        title: "More from YouTube",
        name: "YouTube Premium",
        icon: (
          <svg viewBox="0 0 97 20" focusable="false" width="24">
            <svg
              viewBox="0 0 97 20"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M27.9704 3.12324C27.6411 1.89323 26.6745 0.926623 25.4445 0.597366C23.2173 2.24288e-07 14.2827 0 14.2827 0C14.2827 0 5.34807 2.24288e-07 3.12088 0.597366C1.89323 0.926623 0.924271 1.89323 0.595014 3.12324C-2.8036e-07 5.35042 0 10 0 10C0 10 -1.57002e-06 14.6496 0.597364 16.8768C0.926621 18.1068 1.89323 19.0734 3.12324 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6769 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9704 3.12324Z"
                  fill="#FF0000"></path>
                <path
                  d="M11.4275 14.2854L18.8475 10.0004L11.4275 5.71533V14.2854Z"
                  fill="white"></path>
              </g>
              <g>
                <path
                  fill="white"
                  d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z"></path>
                <path
                  fill="white"
                  d="M46.5336 5.8345L46.3901 9.08238C45.2259 8.83779 44.264 9.02123 43.836 9.77382V18.5579H41.1196V6.0391H43.2857L43.5303 8.75312H43.6337C43.9183 6.77288 44.8379 5.771 46.0232 5.771C46.1949 5.7757 46.3666 5.79687 46.5336 5.8345Z"></path>
                <path
                  fill="white"
                  d="M49.6567 13.2456V13.8782C49.6567 16.0842 49.779 16.8415 50.7198 16.8415C51.6182 16.8415 51.8228 16.1501 51.8439 14.7178L54.2734 14.8613C54.4568 17.5565 53.0481 18.763 50.6586 18.763C47.7588 18.763 46.9004 16.8627 46.9004 13.4126V11.223C46.9004 7.58707 47.8599 5.80908 50.7409 5.80908C53.6407 5.80908 54.3769 7.32131 54.3769 11.0984V13.2456H49.6567ZM49.6567 10.6703V11.5687H51.7193V10.675C51.7193 8.37258 51.5547 7.71172 50.6821 7.71172C49.8096 7.71172 49.6567 8.38669 49.6567 10.675V10.6703Z"></path>
                <path
                  fill="white"
                  d="M68.4103 9.09902V18.5557H65.5928V9.30834C65.5928 8.28764 65.327 7.77729 64.7132 7.77729C64.2216 7.77729 63.7724 8.06186 63.4667 8.59338C63.4832 8.76271 63.4902 8.93439 63.4879 9.10373V18.5605H60.668V9.30834C60.668 8.28764 60.4022 7.77729 59.7884 7.77729C59.2969 7.77729 58.8665 8.06186 58.5631 8.57456V18.5628H55.7456V6.03929H57.9728L58.2221 7.63383H58.2621C58.8947 6.42969 59.9178 5.77588 61.1219 5.77588C62.3072 5.77588 62.9799 6.36854 63.288 7.43157C63.9418 6.34973 64.9225 5.77588 66.0443 5.77588C67.7564 5.77588 68.4103 7.00119 68.4103 9.09902Z"></path>
                <path
                  fill="white"
                  d="M69.8191 2.8338C69.8191 1.4862 70.3106 1.09814 71.3501 1.09814C72.4132 1.09814 72.8812 1.54734 72.8812 2.8338C72.8812 4.22373 72.4108 4.57181 71.3501 4.57181C70.3106 4.56945 69.8191 4.22138 69.8191 2.8338ZM69.9837 6.03935H72.6789V18.5629H69.9837V6.03935Z"></path>
                <path
                  fill="white"
                  d="M81.891 6.03955V18.5631H79.6849L79.4403 17.032H79.3792C78.7466 18.2573 77.827 18.7677 76.684 18.7677C75.0095 18.7677 74.2522 17.7046 74.2522 15.3975V6.0419H77.0697V15.2352C77.0697 16.3382 77.3002 16.7874 77.867 16.7874C78.3844 16.7663 78.8477 16.4582 79.0688 15.9902V6.0419H81.891V6.03955Z"></path>
                <path
                  fill="white"
                  d="M96.1901 9.09893V18.5557H93.3726V9.30825C93.3726 8.28755 93.1068 7.7772 92.493 7.7772C92.0015 7.7772 91.5523 8.06177 91.2465 8.59329C91.263 8.76027 91.2701 8.9296 91.2677 9.09893V18.5557H88.4502V9.30825C88.4502 8.28755 88.1845 7.7772 87.5706 7.7772C87.0791 7.7772 86.6487 8.06177 86.3453 8.57447V18.5627H83.5278V6.0392H85.7527L85.9973 7.63139H86.0372C86.6699 6.42725 87.6929 5.77344 88.8971 5.77344C90.0824 5.77344 90.755 6.3661 91.0631 7.42913C91.7169 6.34729 92.6976 5.77344 93.8194 5.77344C95.541 5.77579 96.1901 7.0011 96.1901 9.09893Z"></path>
                <path
                  fill="white"
                  d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z"></path>
              </g>
            </svg>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "YouTube Music",
        icon: (
          <svg viewBox="0 0 24 24" focusable="false" width="24">
            <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
            <polygon fill="#FFFFFF" points="10,14.65 10,9.35 15,12 "></polygon>
            <path
              fill="#FFFFFF"
              d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "YouTube Kids",
        icon: (
          <svg viewBox="0 0 24 24" focusable="false" width="24">
            <path
              fill="#FF0000"
              d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"></path>
            <path
              fill="#000"
              d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"></path>
            <path
              fill="#000"
              d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"></path>
            <path
              fill="#FFF"
              d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
    ],
    [
      {
        title: false,
        name: "Settings",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Report history",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Help",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
      {
        title: false,
        name: "Send feedback",
        icon: (
          <svg
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white">
            <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
          </svg>
        ),
        paragraph: false,
        button: false,
        first: false,
      },
    ],
  ];

  const dataLinksClose = [
    {
      id: 1,
      name: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          fill="white">
          <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      name: "Shorts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          fill="white">
          <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.20-3.72-1.14-.71-1.34-.20-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.20 3.72 1.14.71 1.34.20-3.01-1.14-3.72l-1.8-.74c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          fill="white">
          <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
        </svg>
      ),
    },
    {
      id: 4,
      name: "Library",
      icon: (
        <svg
          enableBackground="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="white"
          focusable="false">
          <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
        </svg>
      ),
    },
    {
      id: 5,
      name: "History",
      icon: (
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          fill="white">
          <g>
            <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
          </g>
        </svg>
      ),
    },
  ];
  const dataFooter = [
    [
      {
        id: "1",
        title: "About",
      },
      {
        id: "2",
        title: "Press",
      },
      {
        id: "3",
        title: "Copyright",
      },
      {
        id: "4",
        title: "Contact us",
      },
      {
        id: "5",
        title: "Creators",
      },
      {
        id: "6",
        title: "Advertise",
      },
      {
        id: "7",
        title: "Developers",
      },
    ],
    [
      {
        id: "1",
        title: "Terms",
      },
      {
        id: "2",
        title: "Privacy",
      },
      {
        id: "3",
        title: "Policy & Safety",
      },
      {
        id: "4",
        title: "How YouTube works",
      },
      {
        id: "5",
        title: "Test new features",
      },
    ],
  ];

  const isVideoPage = pathname.startsWith("/video/");

  return (
    <div
      className={`absolute ${
        isVideoPage ? "z-100" : "md:static z-100 md:z-50"
      } ${value ? "block ml-60" : "ml-18"}`}>
      <div
        className={`h-full md:bg-transparent ${
          isVideoPage
            ? ""
            : value
            ? "md:mt-10 w-full md:w-60"
            : "md:mt-10 pointer-events-none	md:pointer-events-auto bg-transparent"
        }  fixed left-0 overflow-y-auto`}>
        <div
          onClick={handleToggle}
          className={`fixed bg-black/50 ${
            isVideoPage
              ? value
                ? "w-full h-full"
                : "w-0 h-full"
              : value
              ? "md:w-0 md:h-0 w-full h-full"
              : "w-0 h-full"
          }`}
        />
        <div
          className={`w-60 bg-backgrounStartRgb h-screen fixed ${
            isVideoPage ? "" : "md:top-14 md:pb-14"
          } top-0 left-0 overflow-y-auto overflow-hidden pb-0  ${
            value ? "block" : "hidden"
          }`}>
          <div className="flex items-center md:mt-0 mt-2">
            <div
              onClick={handleToggle}
              className={`p-2 ${
                isVideoPage ? "" : "md:hidden"
              } relative left-4 flex items-center cursor-pointer hover:bg-secondaireRgb active:bg-youtube2 rounded-full`}>
              <Menu />
            </div>
            <Link
              href="/"
              className={`${
                isVideoPage ? "" : "md:hidden"
              } flex relative items-center ml-4`}>
              <div className="h-5 mx-4 flex">
                <svg viewBox="0 0 90 20" focusable="false">
                  <svg
                    viewBox="0 0 90 20"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                        fill="#FF0000"></path>
                      <path
                        d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                        fill="white"></path>
                    </g>
                    <g>
                      <g>
                        <path
                          fill="white"
                          d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
                        <path
                          fill="white"
                          d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
                        <path
                          fill="white"
                          d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
                        <path
                          fill="white"
                          d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
                        <path
                          fill="white"
                          d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
                        <path
                          fill="white"
                          d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
                        <path
                          fill="white"
                          d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
                      </g>
                    </g>
                  </svg>
                </svg>
              </div>
            </Link>
          </div>
          {dataLinks.map((links, index) => (
            <ul
              key={index}
              className="p-3 pr-2 border-b border-iconsBorderColor mr-2">
              {links.map((link, subIndex) => (
                <div key={subIndex}>
                  {link.title && <h4 className="px-3 pb-1">{link.title}</h4>}
                  <li
                    className={`flex px-3 rounded-icons ${
                      link.name
                        ? link.first
                          ? "py-2 cursor-pointer bg-iconsColor"
                          : "py-2 cursor-pointer hover:bg-iconsColor"
                        : "py-1"
                    }`}>
                    {link.icon}
                    {link.name && <h4 className="ml-6 text-sm">{link.name}</h4>}
                    {link.paragraph && (
                      <div className="flex flex-col pl-2">
                        <p className="text-sm">{link.paragraph}</p>
                        <div className="pr-20">{link.button}</div>
                      </div>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          ))}
          {dataFooter.map((links, index) => (
            <ul key={index} className="flex flex-wrap	 pt-4 px-6">
              {links.map((link, subIndex) => (
                <li className="mr-2 cursor-pointer" key={subIndex}>
                  <h4 className="text-xs font-semibold text-detailsYoutube">
                    {link.title}
                  </h4>
                </li>
              ))}
            </ul>
          ))}
          <footer className="py-4 px-6">
            <p className="text-xs text-zinc-400 font-light text">
              © 2023 Google LLC
            </p>
          </footer>
        </div>
        <div
          className={`${isVideoPage ? "hidden" : "relative hidden md:block"}`}>
          <div
            className={`w-18 h-screen bg-backgrounStartRgb fixed z-100 left-0 overflow-y-auto scrollbar mt-5 ${
              value ? "hidden" : "block"
            }`}>
            {dataLinksClose.map((link) => (
              <ul className="px-1" key={link.id}>
                <li className="flex pt-4 pb-3.5 flex-col items-center rounded-icons cursor-pointer hover:bg-iconsColor">
                  <div>{link.icon}</div>
                  {link.name && (
                    <h4 className="pt-1.5 text-xxs">{link.name}</h4>
                  )}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

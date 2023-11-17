import parse from "html-react-parser";
import React from "react";

export function parseJsonText(jsonText: string) {
  const parsedJson = parse(jsonText);

  const replaceUrlsWithLinks = (element: string | React.ReactElement) => {
    if (React.isValidElement(element)) {
      return element;
    }
    if (typeof element === "string") {
      const parts = element.split(/(https?:\/\/\S+)/g);
      return parts.map((part, index) => {
        if (part.match(/https?:\/\/\S+/)) {
          const shortenedLink = part.length > 30 ? part.substring(0, 20) + "..." : part;
          return (
            <a
              key={index}
              style={{ color: "#3ea6ff" }}
              className="oneLine overflow-hidden"
              href={part}
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortenedLink}
            </a>
          );
        } else {
          return part;
        }
      });
    }
    return element;
  };

  const reactElements = React.Children.map(parsedJson, (child) => {
    return replaceUrlsWithLinks(child);
  });

  return reactElements;
}

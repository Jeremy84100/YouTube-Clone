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
          return (
            <a
              key={index}
              style={{ color: "#3ea6ff" }}
              href={part}
              target="_blank"
              rel="noopener noreferrer">
              {part}
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

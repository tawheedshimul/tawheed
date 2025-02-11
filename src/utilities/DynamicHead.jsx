import React, { useEffect } from "react";

const DynamicHead = ({ title, faviconUrl }) => {
  useEffect(() => {
    // Update the document title
    document.title = title;

    // Update the favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = faviconUrl;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [title, faviconUrl]);

  return null; // This component doesn't render anything
};

export default DynamicHead;
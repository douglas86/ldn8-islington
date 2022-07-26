import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";

import { quillModules } from "../atom/quill-modules";

import "quill/dist/quill.snow.css";

const RichText = ({ content, setContent, initialValue }) => {
  const [value, setValue] = useState(true);
  const { quill, quillRef } = useQuill({ modules: quillModules });

  useEffect(() => {
    if (quill) {
      if (initialValue !== "" && value) {
        quill.clipboard.dangerouslyPasteHTML(initialValue);
        setValue(false);
      } else {
        quill.on("text-change", () => {
          setContent(quillRef.current.firstChild.innerHTML);
        });
      }
    }
  }, [content, initialValue, quill, quillRef, setContent, value]);

  return (
    <div
      style={{
        width: "100%",
        height: 200,
        margin: "1px",
        color: "black",
      }}
    >
      <div ref={quillRef} />
    </div>
  );
};

export default RichText;

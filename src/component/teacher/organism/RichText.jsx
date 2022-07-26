import { useEffect } from "react";
import { useQuill } from "react-quilljs";

import { quillModules } from "../atom/quill-modules";

import "quill/dist/quill.snow.css";

const RichText = ({ content, setContent }) => {
  const { quill, quillRef } = useQuill({ modules: quillModules });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setContent(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [content, quill, quillRef, setContent]);

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

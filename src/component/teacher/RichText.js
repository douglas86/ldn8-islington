import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import { quillModules } from "./atom/quill-modules";
import "quill/dist/quill.snow.css";

const Rich = ({ content, setContent }) => {
  const { quill, quillRef } = useQuill({ modules: quillModules });

  useEffect(() => {
    if (quill) {
      if (content !== undefined) {
        quill.clipboard.dangerouslyPasteHTML(content);
      } else {
        quill.on("text-change", (delta, oldDelta, source) => {
          setContent(quillRef.current.firstChild.innerHTML);
        });
      }
    }
  }, [content, setContent, quill, quillRef]);
 // console.log("content", content);

  return (
    <div style={{ width: "100%", height: 200, margin: "1px" }}>
      <div ref={quillRef} />
    </div>
  );
};

export default Rich;

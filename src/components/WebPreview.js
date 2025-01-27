import React, { useEffect, useRef } from "react";

const WebPreview = ({ code }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head><title>Preview</title></head>
      <body>
        <div id="root"></div>
        <script type="text/javascript">
          try {
            ${code}
          } catch (err) {
            console.error(err);
          }
        </script>
      </body>
      </html>
    `);
    iframe.contentWindow.document.close();
  }, [code]);

  return <iframe ref={iframeRef} className="web-preview" />;
};

export default WebPreview;

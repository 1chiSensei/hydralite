import React from "react";

const SvgComponent: React.FC<React.HTMLAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M12 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0-9C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 2.1c.3-.1.7-.1 1-.1s.7 0 1 .1V5c0 .6-.4 1-1 1s-1-.4-1-1v-.9zM5 13h-.9c-.1-.3-.1-.7-.1-1s0-.7.1-1H5c.6 0 1 .4 1 1s-.4 1-1 1zm8 6.9c-.3 0-.7.1-1 .1s-.7 0-1-.1V19c0-.6.4-1 1-1s1 .4 1 1v.9zm3.4-11l-2.1 4.9c-.1.2-.3.4-.5.5l-4.9 2.1c-.2.1-.3.1-.4.1-.6 0-1-.4-1-1 0-.1 0-.3.1-.4l2.1-4.9c.1-.2.3-.4.5-.5l4.9-2.1c.5-.2 1.1 0 1.3.5.1.3.1.5 0 .8zM19 13c-.6 0-1-.4-1-1s.4-1 1-1h.9c0 .3.1.7.1 1s0 .7-.1 1H19z" />
  </svg>
);

export default SvgComponent;

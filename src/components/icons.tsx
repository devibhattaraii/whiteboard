//
// All icons are imported from https://fontawesome.com/icons?d=gallery
// Icons are under the license https://fontawesome.com/license
//

// Note: when adding new icons, review https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/RTL_Guidelines
// to determine whether or not the icons should be mirrored in right-to-left languages.

import React from "react";

import oc from "open-color";
import clsx from "clsx";

const activeElementColor = (theme: "light" | "dark") =>
  theme === "light" ? oc.orange[4] : oc.orange[9];
const iconFillColor = (theme: "light" | "dark") =>
  theme === "light" ? oc.black : oc.gray[4];
const handlerColor = (theme: "light" | "dark") =>
  theme === "light" ? oc.white : "#1e1e1e";

type Opts = {
  width?: number;
  height?: number;
  mirror?: true;
} & React.SVGProps<SVGSVGElement>;

export const createIcon = (
  d: string | React.ReactNode,
  opts: number | Opts = 512,
) => {
  const { width = 512, height = width, mirror, style } =
    typeof opts === "number" ? ({ width: opts } as Opts) : opts;
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox={`0 0 ${width} ${height}`}
      className={clsx({ "rtl-mirror": mirror })}
      style={style}
    >
      {typeof d === "string" ? <path fill="currentColor" d={d} /> : d}
    </svg>
  );
};

export const checkIcon = createIcon(
  <polyline fill="none" stroke="currentColor" points="20 6 9 17 4 12" />,
  {
    width: 24,
    height: 24,
  },
);

export const link = createIcon(
  "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z",
  { mirror: true },
);

export const save = createIcon(
  "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z",
  { width: 448, height: 512 },
);

export const saveAs = createIcon(
  "M252 54L203 8a28 27 0 00-20-8H28C12 0 0 12 0 27v195c0 15 12 26 28 26h204c15 0 28-11 28-26V73a28 27 0 00-8-19zM130 213c-21 0-37-16-37-36 0-19 16-35 37-35 20 0 37 16 37 35 0 20-17 36-37 36zm56-169v56c0 4-4 6-7 6H44c-4 0-7-2-7-6V42c0-4 3-7 7-7h133l4 2 3 2a7 7 0 012 5z M296 201l87 95-188 205-78 9c-10 1-19-8-18-20l9-84zm141-14l-41-44a31 31 0 00-46 0l-38 41 87 95 38-42c13-14 13-36 0-50z",
  { width: 448, height: 512 },
);

export const load = createIcon(
  // eslint-disable-next-line react/style-prop-object
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 122.88 95.21"
  >
    <g>
      <path d="M61.44,31.38c7.44,0,14.18,3.02,19.06,7.89c4.88,4.88,7.89,11.61,7.89,19.06c0,7.44-3.02,14.18-7.89,19.06 c-4.88,4.88-11.61,7.89-19.06,7.89c-7.44,0-14.18-3.02-19.05-7.89c-4.88-4.88-7.89-11.61-7.89-19.06c0-7.44,3.02-14.18,7.89-19.06 C47.26,34.4,54,31.38,61.44,31.38L61.44,31.38z M61.44,42.16l4.68,11.44l12.32,0.92l-9.43,7.99l2.94,12L61.44,68l-10.51,6.5 l2.94-12l-9.43-7.99l12.32-0.92L61.44,42.16L61.44,42.16z M2.48,20.74h4.5v-9.86c0-1.37,1.11-2.48,2.48-2.48h4.41V2.48 c0-1.37,1.11-2.48,2.48-2.48h40.26c1.37,0,2.48,1.11,2.48,2.48V8.4h54.3c1.37,0,2.48,1.11,2.48,2.48v9.86h4.53 c1.37,0,2.48,1.11,2.48,2.48c0,0.18-0.02,0.36-0.06,0.52l-8.68,63.81c-0.28,2.08-1.19,4.01-2.59,5.41 c-1.38,1.38-3.21,2.24-5.36,2.24H14.7c-2.16,0-4.03-0.87-5.43-2.26c-1.41-1.41-2.31-3.35-2.54-5.46l-6.72-64 c-0.14-1.36,0.85-2.58,2.21-2.72C2.31,20.75,2.39,20.75,2.48,20.74L2.48,20.74L2.48,20.74L2.48,20.74z M9.46,25.71H5.23l6.44,61.27 c0.1,0.98,0.5,1.85,1.1,2.46c0.5,0.5,1.17,0.81,1.93,0.81h91.5c0.75,0,1.38-0.3,1.87-0.79c0.62-0.62,1.03-1.53,1.17-2.55 l8.32-61.19L9.46,25.71L9.46,25.71L9.46,25.71z M11.94,13.37v7.36l98.97-1.05v-6.31h-54.3c-1.37,0-2.48-1.11-2.48-2.48V4.97h-35.3 v5.92c0,1.37-1.11,2.48-2.48,2.48L11.94,13.37L11.94,13.37L11.94,13.37z M77.15,42.61c-4.02-4.02-9.58-6.51-15.71-6.51 c-6.14,0-11.69,2.49-15.71,6.51c-4.02,4.02-6.51,9.58-6.51,15.71c0,6.14,2.49,11.69,6.51,15.71c4.02,4.02,9.58,6.51,15.71,6.51 c6.14,0,11.69-2.49,15.71-6.51c4.02-4.02,6.51-9.58,6.51-15.71C83.66,52.19,81.18,46.63,77.15,42.61L77.15,42.61z" />
    </g>
  </svg>,
  { width: 122.88, height: 95.21, mirror: true },
);

export const clipboard = createIcon(
  "M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z",
  { width: 384, height: 512 },
);

export const trash = createIcon(
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 110.61 122.88"
  >
    <title>trash</title>
    <path d="M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z" />
  </svg>,
  { width: 110.61, height: 122.88 },
);

export const palette = createIcon(
  "M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",
);

export const exportFile = createIcon(
  "M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z",
  { width: 576, height: 512, mirror: true },
);

export const exportImage = createIcon(
  <>
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 120.89"
    >
      <title>download-file</title>
      <path d="M84.58,47a7.71,7.71,0,1,1,10.8,11L66.09,86.88a7.72,7.72,0,0,1-10.82,0L26.4,58.37a7.71,7.71,0,1,1,10.81-11L53.1,63.12l.16-55.47a7.72,7.72,0,0,1,15.43.13l-.15,55L84.58,47ZM0,113.48.1,83.3a7.72,7.72,0,1,1,15.43.14l-.07,22q46,.09,91.91,0l.07-22.12a7.72,7.72,0,1,1,15.44.14l-.1,30h-.09a7.71,7.71,0,0,1-7.64,7.36q-53.73.1-107.38,0A7.7,7.7,0,0,1,0,113.48Z" />
    </svg>{" "}
  </>,
  { width: 576, height: 512, mirror: true },
);

export const exportToFileIcon = createIcon(
  "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
  { width: 512, height: 512 },
);

export const zoomIn = createIcon(
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 119.8"
  >
    <title>plus-sign</title>
    <path d="M23.59,0h75.7a23.63,23.63,0,0,1,23.59,23.59V96.21A23.64,23.64,0,0,1,99.29,119.8H23.59a23.53,23.53,0,0,1-16.67-6.93l-.38-.42A23.49,23.49,0,0,1,0,96.21V23.59A23.63,23.63,0,0,1,23.59,0ZM55.06,38.05a6.38,6.38,0,1,1,12.76,0V53.51H83.29a6.39,6.39,0,1,1,0,12.77H67.82V81.75a6.38,6.38,0,0,1-12.76,0V66.28H39.59a6.39,6.39,0,1,1,0-12.77H55.06V38.05ZM99.29,12.77H23.59A10.86,10.86,0,0,0,12.77,23.59V96.21a10.77,10.77,0,0,0,2.9,7.37l.28.26A10.76,10.76,0,0,0,23.59,107h75.7a10.87,10.87,0,0,0,10.82-10.82V23.59A10.86,10.86,0,0,0,99.29,12.77Z" />
  </svg>,
  { width: 122.88, height: 119.8 },
);

export const zoomOut = createIcon(
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 119.8"
  >
    <title>minus-sign</title>
    <path d="M23.59,0h75.7a23.63,23.63,0,0,1,23.59,23.59V96.21A23.64,23.64,0,0,1,99.29,119.8H23.59a23.53,23.53,0,0,1-16.67-6.93l-.38-.42A23.49,23.49,0,0,1,0,96.21V23.59A23.63,23.63,0,0,1,23.59,0Zm59.7,53.51a6.39,6.39,0,1,1,0,12.77H39.59a6.39,6.39,0,1,1,0-12.77Zm16-40.74H23.59A10.86,10.86,0,0,0,12.77,23.59V96.21a10.77,10.77,0,0,0,2.9,7.37l.28.26A10.76,10.76,0,0,0,23.59,107h75.7a10.87,10.87,0,0,0,10.82-10.82V23.59A10.86,10.86,0,0,0,99.29,12.77Z" />
  </svg>,
  { width: 122.88, height: 119.8 },
);

export const done = createIcon(
  "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
);

export const menu = createIcon(
  "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
);

export const undo = createIcon(
  "M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z",
  { mirror: true },
);

export const redo = createIcon(
  "M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z",
  { mirror: true },
);

export const questionCircle = createIcon(
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120.47 122.88"
  >
    <defs>
      <style></style>
    </defs>
    <title>how-to</title>
    <path
      className="cls-1"
      d="M17.2,0H79.49a17.24,17.24,0,0,1,17.2,17.2V55.55a17.24,17.24,0,0,1-17.2,17.2H46.92L20.81,95.2A2.9,2.9,0,0,1,16,92.81l1.39-20.07H17.2A17.24,17.24,0,0,1,0,55.55V17.2A17.24,17.24,0,0,1,17.2,0ZM52.6,44.65H41.29v-.46a13.89,13.89,0,0,1,.65-4.69,10.39,10.39,0,0,1,2-3.29A59.46,59.46,0,0,1,49.72,31q2.41-2,2.41-3.6a3.35,3.35,0,0,0-1-2.55,4.19,4.19,0,0,0-2.94-.91,4.67,4.67,0,0,0-3.49,1.41c-.93.92-1.52,2.56-1.77,4.87L31.4,28.75A15.81,15.81,0,0,1,36,18.49q4-3.88,12.39-3.88c4.33,0,7.81.9,10.48,2.7a11.3,11.3,0,0,1,5.42,9.77A9.36,9.36,0,0,1,62.9,32a23.65,23.65,0,0,1-5.71,5.75,15.44,15.44,0,0,0-3.8,3.83,5.57,5.57,0,0,0-.79,3.1ZM40.9,48.32H53V57H40.9V48.32ZM106.79,28a16.92,16.92,0,0,1,13.68,16.55V82.88a16.9,16.9,0,0,1-16.85,16.85H103l1.42,20.44a2.54,2.54,0,0,1-4.18,2.1L74,99.07H39.49l17-17.3h36a14.34,14.34,0,0,0,14.3-14.3V29.11c0-.38,0-.76,0-1.13ZM79.48,5.8H17.2A11.44,11.44,0,0,0,5.8,17.2V55.55A11.44,11.44,0,0,0,17.2,67h3.53a2.9,2.9,0,0,1,2.69,3.08L22.29,86.31,43.83,67.79a2.87,2.87,0,0,1,2-.84H79.48a11.44,11.44,0,0,0,11.4-11.4V17.2A11.44,11.44,0,0,0,79.48,5.8Z"
    />
  </svg>,
  { mirror: true },
);

export const share = createIcon(
  "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
  { width: 24, height: 24 },
);

export const shareIOS = createIcon(
  "M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z",
  { width: 24, height: 24 },
);

export const shareWindows = createIcon(
  <>
    <path
      stroke="currentColor"
      fill="currentColor"
      d="M40 5.6v6.1l-4.1.7c-8.9 1.4-16.5 6.9-20.6 15C13 32 10.9 43 12.4 43c.4 0 2.4-1.3 4.4-3 5-3.9 12.1-7 18.2-7.7l5-.6v12.8l11.2-11.3L62.5 22 51.2 10.8 40-.5v6.1zm10.2 22.6L44 34.5v-6.8l-6.9.6c-3.9.3-9.8 1.7-13.2 3.1-3.5 1.4-6.5 2.4-6.7 2.2-.9-1 3-7.5 6.4-10.8C28 18.6 34.4 16 40.1 16c3.7 0 3.9-.1 3.9-3.2V9.5l6.2 6.3 6.3 6.2-6.3 6.2z"
    />
    <path
      stroke="currentColor"
      fill="currentColor"
      d="M0 36v20h48v-6.2c0-6 0-6.1-2-4.3-1.1 1-2 2.9-2 4.2V52H4V34c0-17.3-.1-18-2-18s-2 .7-2 20z"
    />
  </>,
  { width: 64, height: 64 },
);

// Icon imported form Storybook
// Storybook is licensed under MIT https://github.com/storybookjs/storybook/blob/next/LICENSE
export const resetZoom = createIcon(
  <path
    stroke="currentColor"
    strokeWidth="40"
    fill="currentColor"
    d="M148 560a318 318 0 0 0 522 110 316 316 0 0 0 0-450 316 316 0 0 0-450 0c-11 11-21 22-30 34v4h47c25 0 46 21 46 46s-21 45-46 45H90c-13 0-25-6-33-14-9-9-14-20-14-33V156c0-25 20-45 45-45s45 20 45 45v32l1 1a401 401 0 0 1 623 509l212 212a42 42 0 0 1-59 59L698 757A401 401 0 0 1 65 570a42 42 0 0 1 83-10z"
  />,
  { width: 1024 },
);

export const BringForwardIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M22 9.556C22 8.696 21.303 8 20.444 8H16v8H8v4.444C8 21.304 8.697 22 9.556 22h10.888c.86 0 1.556-.697 1.556-1.556V9.556z"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
        />
        <path
          d="M16 3.556C16 2.696 15.303 2 14.444 2H3.556C2.696 2 2 2.697 2 3.556v10.888C2 15.304 2.697 16 3.556 16h10.888c.86 0 1.556-.697 1.556-1.556V3.556z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24, mirror: true },
    ),
);

export const SendBackwardIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M16 3.556C16 2.696 15.303 2 14.444 2H3.556C2.696 2 2 2.697 2 3.556v10.888C2 15.304 2.697 16 3.556 16h10.888c.86 0 1.556-.697 1.556-1.556V3.556z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
        <path
          d="M22 9.556C22 8.696 21.303 8 20.444 8H9.556C8.696 8 8 8.697 8 9.556v10.888C8 21.304 8.697 22 9.556 22h10.888c.86 0 1.556-.697 1.556-1.556V9.556z"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24, mirror: true },
    ),
);

export const BringToFrontIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M13 21a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-3v5h-5v3zM11 3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h3V6h5V3z"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
        />
        <path
          d="M18 7.333C18 6.597 17.403 6 16.667 6H7.333C6.597 6 6 6.597 6 7.333v9.334C6 17.403 6.597 18 7.333 18h9.334c.736 0 1.333-.597 1.333-1.333V7.333z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24, mirror: true },
    ),
);

export const SendToBackIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M18 7.333C18 6.597 17.403 6 16.667 6H7.333C6.597 6 6 6.597 6 7.333v9.334C6 17.403 6.597 18 7.333 18h9.334c.736 0 1.333-.597 1.333-1.333V7.333z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
        <path
          d="M11 3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h8V3zM22 14a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1h8v-8z"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24, mirror: true },
    ),
);

//
// Align action icons created from scratch to match those of z-index actions
// Note: vertical align icons are flipped so the larger item is always the
// first one the user sees. Horizontal align icons should not be flipped since
// that would make them lie about their function.
//
export const AlignTopIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M 2,5 H 22"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 6,7 C 5.446,7 5,7.446 5,8 v 9.999992 c 0,0.554 0.446,1 1,1 h 3.0000001 c 0.554,0 0.9999999,-0.446 0.9999999,-1 V 8 C 10,7.446 9.5540001,7 9.0000001,7 Z m 9,0 c -0.554,0 -1,0.446 -1,1 v 5.999992 c 0,0.554 0.446,1 1,1 h 3 c 0.554,0 1,-0.446 1,-1 V 8 C 19,7.446 18.554,7 18,7 Z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24, mirror: true },
    ),
);

export const AlignBottomIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M 2,19 H 22"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m 6,16.999992 c -0.554,0 -1,-0.446 -1,-1 V 6 C 5,5.446 5.446,5 6,5 H 9.0000001 C 9.5540001,5 10,5.446 10,6 v 9.999992 c 0,0.554 -0.4459999,1 -0.9999999,1 z m 9,0 c -0.554,0 -1,-0.446 -1,-1 V 10 c 0,-0.554 0.446,-1 1,-1 h 3 c 0.554,0 1,0.446 1,1 v 5.999992 c 0,0.554 -0.446,1 -1,1 z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24, mirror: true },
    ),
);

export const AlignLeftIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M 5,2 V 22"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m 7.000004,5.999996 c 0,-0.554 0.446,-1 1,-1 h 9.999992 c 0.554,0 1,0.446 1,1 v 3.0000001 c 0,0.554 -0.446,0.9999999 -1,0.9999999 H 8.000004 c -0.554,0 -1,-0.4459999 -1,-0.9999999 z m 0,9 c 0,-0.554 0.446,-1 1,-1 h 5.999992 c 0.554,0 1,0.446 1,1 v 3 c 0,0.554 -0.446,1 -1,1 H 8.000004 c -0.554,0 -1,-0.446 -1,-1 z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24 },
    ),
);

export const AlignRightIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M 19,2 V 22"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m 16.999996,5.999996 c 0,-0.554 -0.446,-1 -1,-1 H 6.000004 c -0.554,0 -1,0.446 -1,1 v 3.0000001 c 0,0.554 0.446,0.9999999 1,0.9999999 h 9.999992 c 0.554,0 1,-0.4459999 1,-0.9999999 z m 0,9 c 0,-0.554 -0.446,-1 -1,-1 h -5.999992 c -0.554,0 -1,0.446 -1,1 v 3 c 0,0.554 0.446,1 1,1 h 5.999992 c 0.554,0 1,-0.446 1,-1 z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24 },
    ),
);

export const DistributeHorizontallyIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M19 5V19M5 5V19"
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 9C15.554 9 16 9.446 16 10V14C16 14.554 15.554 15 15 15H9C8.446 15 8 14.554 8 14V10C8 9.446 8.446 9 9 9H15Z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24 },
    ),
);

export const DistributeVerticallyIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M5 5L19 5M5 19H19"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 9C15.554 9 16 9.446 16 10V14C16 14.554 15.554 15 15 15H9C8.446 15 8 14.554 8 14V10C8 9.446 8.446 9 9 9H15Z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24 },
    ),
);

export const CenterVerticallyIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="m 5.000004,16.999996 c 0,0.554 0.446,1 1,1 h 3 c 0.554,0 1,-0.446 1,-1 v -10 c 0,-0.554 -0.446,-1 -1,-1 h -3 c -0.554,0 -1,0.446 -1,1 z m 9,-2 c 0,0.554 0.446,1 1,1 h 3 c 0.554,0 1,-0.446 1,-1 v -6 c 0,-0.554 -0.446,-1 -1,-1 h -3 c -0.554,0 -1,0.446 -1,1 z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
        <path
          d="M 2,12 H 22"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeDasharray="1, 2.8"
          strokeLinecap="round"
        />
      </>,
      { width: 24, mirror: true },
    ),
);

export const CenterHorizontallyIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          d="M 7 5 C 6.446 5 6 5.446 6 6 L 6 9 C 6 9.554 6.446 10 7 10 L 17 10 C 17.554 10 18 9.554 18 9 L 18 6 C 18 5.446 17.554 5 17 5 L 7 5 z M 9 14 C 8.446 14 8 14.446 8 15 L 8 18 C 8 18.554 8.446 19 9 19 L 15 19 C 15.554 19 16 18.554 16 18 L 16 15 C 16 14.446 15.554 14 15 14 L 9 14 z "
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
        <path
          d="M 12,2 V 22"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeDasharray="1, 2.8"
          strokeLinecap="round"
        />
      </>,
      { width: 24 },
    ),
);

export const users = createIcon(
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 122.88 93.83"
  >
    <g>
      <path d="M98.24,1.06c5.29,0,9.58,4.29,9.58,9.58c0,5.29-4.29,9.58-9.58,9.58c-1.89,0-3.66-0.55-5.15-1.5 c-0.06,0.08-0.13,0.16-0.21,0.23l-7.11,6.85c4.74,5.3,7.75,12.18,8.13,19.75h9.94c0.75-4.54,4.7-8,9.45-8 c5.29,0,9.58,4.29,9.58,9.58c0,5.29-4.29,9.58-9.58,9.58c-4.49,0-8.26-3.09-9.3-7.27c-0.05,0-0.1,0.01-0.15,0.01h-9.99 c-0.53,7.47-3.61,14.23-8.38,19.41l7.53,7c0.07,0.07,0.14,0.14,0.2,0.22c1.46-0.9,3.18-1.42,5.03-1.42c5.29,0,9.58,4.29,9.58,9.58 c0,5.29-4.29,9.58-9.58,9.58s-9.58-4.29-9.58-9.58c0-2.04,0.64-3.93,1.73-5.49l-0.03-0.03l-7.69-7.14 c-5.59,4.76-12.84,7.63-20.75,7.63c-8.18,0-15.64-3.06-21.3-8.1l-7.76,7.56l-0.01,0.01c1.06,1.54,1.67,3.4,1.67,5.41 c0,5.29-4.29,9.58-9.58,9.58s-9.58-4.29-9.58-9.58c0-5.29,4.29-9.58,9.58-9.58c1.87,0,3.62,0.54,5.1,1.47 c0.03-0.04,0.06-0.07,0.1-0.1l7.73-7.53c-4.55-5.17-7.46-11.81-7.92-19.13l-10.9,0.11l-0.06,0c-0.88,4.39-4.75,7.7-9.4,7.7 C4.29,57.03,0,52.74,0,47.45c0-5.29,4.29-9.58,9.58-9.58c4.6,0,8.45,3.24,9.37,7.57l0.05,0l10.92-0.11 c0.42-7.39,3.35-14.1,7.94-19.32l-8.13-7.77c-0.06-0.06-0.12-0.12-0.17-0.19c-1.33,0.71-2.86,1.1-4.47,1.1 c-5.29,0-9.58-4.29-9.58-9.58C15.51,4.29,19.8,0,25.09,0c5.29,0,9.58,4.29,9.58,9.58c0,2.26-0.78,4.34-2.1,5.98l8.04,7.68 c5.66-5.04,13.12-8.1,21.29-8.1c8.08,0,15.46,2.99,21.1,7.93l7.18-6.92c0.04-0.04,0.09-0.08,0.14-0.12 c-1.05-1.54-1.66-3.39-1.66-5.39C88.66,5.35,92.95,1.06,98.24,1.06L98.24,1.06z M57.41,50.48l2.67,7.85l1.34-4.66l-0.66-0.72 c-0.3-0.43-0.36-0.81-0.2-1.14c0.36-0.71,1.09-0.57,1.78-0.57c0.72,0,1.61-0.14,1.84,0.77c0.08,0.3-0.02,0.62-0.23,0.94l-0.66,0.72 l1.34,4.66l2.42-7.85c1.74,1.57,6.91,1.88,8.83,2.96c0.61,0.34,1.16,0.77,1.6,1.35c0.67,0.88,1.08,2.04,1.19,3.5l0.4,3.89 c-0.1,1.04-0.69,1.64-1.84,1.72H62.37H47.24c-1.16-0.09-1.75-0.69-1.84-1.72l0.4-3.89c0.11-1.47,0.52-2.62,1.19-3.5 c0.44-0.58,0.99-1.01,1.6-1.35C50.51,52.36,55.67,52.05,57.41,50.48L57.41,50.48z M56.69,38.61c0.03,0.06,0.04,0.12,0.04,0.19 c0,0.03,0,0.06-0.01,0.1l0.05,0.37c-0.13,0.03-0.25,0.03-0.37,0.03c-0.05,0.02-0.11,0.03-0.16,0.03c-0.33,0.01-0.57,0.07-0.73,0.18 c-0.08,0.06-0.15,0.13-0.18,0.21c-0.05,0.1-0.07,0.22-0.06,0.36c0.01,0.44,0.25,1.01,0.7,1.68l0.01,0.01l0,0l1.49,2.37 c0.6,0.95,1.22,1.91,1.99,2.62c0.73,0.67,1.63,1.13,2.8,1.13c1.28,0,2.21-0.47,2.97-1.18c0.8-0.74,1.43-1.77,2.05-2.8l1.68-2.76 c0.34-0.77,0.44-1.24,0.33-1.46c-0.07-0.15-0.37-0.18-0.87-0.14c-0.15,0.01-0.3-0.04-0.4-0.14c-0.04,0-0.08,0-0.12-0.01l0.02-0.12 c-0.03-0.06-0.05-0.12-0.06-0.19c-0.02-0.17,0.06-0.33,0.18-0.44l0.35-1.77c-3.07-0.04-5.17-0.57-7.66-2.16 c-0.82-0.52-1.06-1.12-1.88-1.06c-0.62,0.12-1.14,0.4-1.55,0.84c-0.4,0.43-0.69,1.01-0.89,1.75L56.69,38.61L56.69,38.61z M69.4,38.62c0.36,0.11,0.62,0.31,0.78,0.63c0.25,0.51,0.15,1.27-0.32,2.35l0,0c-0.01,0.02-0.02,0.04-0.03,0.06l-1.7,2.8 c-0.66,1.08-1.33,2.17-2.22,3.01c-0.93,0.88-2.09,1.46-3.66,1.45c-1.47,0-2.58-0.57-3.49-1.4c-0.87-0.8-1.54-1.82-2.17-2.82 l-1.49-2.37c-0.56-0.83-0.84-1.59-0.86-2.21c-0.01-0.3,0.04-0.58,0.15-0.82c0.12-0.25,0.3-0.47,0.54-0.63 c0.12-0.08,0.25-0.15,0.4-0.2c-0.09-1.27-0.12-2.85-0.06-4.17c0.03-0.32,0.09-0.64,0.18-0.97c0.38-1.36,1.34-2.46,2.52-3.21 c0.42-0.27,0.87-0.49,1.36-0.66c2.87-1.04,6.66-0.47,8.7,1.73c0.83,0.9,1.35,2.08,1.46,3.66L69.4,38.62L69.4,38.62z M81.78,27.27 c-0.06-0.05-0.11-0.1-0.16-0.15c-0.03-0.03-0.05-0.06-0.08-0.09c-5.07-4.94-11.99-7.98-19.62-7.98c-7.65,0-14.58,3.05-19.65,8 c-0.06,0.09-0.13,0.17-0.2,0.25c-0.1,0.1-0.2,0.19-0.32,0.27c-4.92,5.07-7.96,11.98-7.96,19.6c0,7.77,3.15,14.8,8.24,19.89 c5.09,5.09,12.12,8.24,19.89,8.24c7.77,0,14.8-3.15,19.89-8.24c5.09-5.09,8.24-12.12,8.24-19.89c0-7.77-3.15-14.8-8.24-19.89 L81.78,27.27L81.78,27.27z" />
    </g>
  </svg>,
  { width: 122.88, height: 93.83, mirror: true },
);

// not mirrored because it's inspired by a playback control, which is always RTL
export const start = createIcon(
  "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z",
);

export const stop = createIcon(
  "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z",
);

export const close = createIcon(
  "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
  { width: 352, height: 512 },
);

export const back = createIcon(
  "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
  { width: 320, height: 512, style: { marginLeft: "-0.2rem" }, mirror: true },
);

export const clone = createIcon(
  "M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z",
  { mirror: true },
);

// modified https://feathericons.com/?query=shield
export const shield = createIcon(
  "M11.553 22.894a.998.998 0 00.894 0s3.037-1.516 5.465-4.097C19.616 16.987 21 14.663 21 12V5a1 1 0 00-.649-.936l-8-3a.998.998 0 00-.702 0l-8 3A1 1 0 003 5v7c0 2.663 1.384 4.987 3.088 6.797 2.428 2.581 5.465 4.097 5.465 4.097zm-1.303-8.481l6.644-6.644a.856.856 0 111.212 1.212l-7.25 7.25a.856.856 0 01-1.212 0l-3.75-3.75a.856.856 0 111.212-1.212l3.144 3.144z",
  { width: 24 },
);

export const file = createIcon(
  "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z",
  { width: 384, height: 512 },
);

export const GroupIcon = React.memo(({ theme }: { theme: "light" | "dark" }) =>
  createIcon(
    <>
      <path d="M25 26H111V111H25" fill={iconFillColor(theme)} />
      <path
        d="M25 111C25 80.2068 25 49.4135 25 26M25 26C48.6174 26 72.2348 26 111 26H25ZM25 26C53.3671 26 81.7343 26 111 26H25ZM111 26C111 52.303 111 78.606 111 111V26ZM111 26C111 51.2947 111 76.5893 111 111V26ZM111 111C87.0792 111 63.1585 111 25 111H111ZM111 111C87.4646 111 63.9293 111 25 111H111ZM25 111C25 81.1514 25 51.3028 25 26V111Z"
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
      <path d="M100 100H160V160H100" fill={iconFillColor(theme)} />
      <path
        d="M100 160C100 144.106 100 128.211 100 100M100 100C117.706 100 135.412 100 160 100H100ZM100 100C114.214 100 128.428 100 160 100H100ZM160 100C160 120.184 160 140.369 160 160V100ZM160 100C160 113.219 160 126.437 160 160V100ZM160 160C145.534 160 131.068 160 100 160H160ZM160 160C143.467 160 126.934 160 100 160H160ZM100 160C100 143.661 100 127.321 100 100V160Z"
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
      <g
        fill={handlerColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="6"
      >
        <rect x="2.5" y="2.5" width="30" height="30" />
        <rect x="2.5" y="149.5" width="30" height="30" />
        <rect x="147.5" y="149.5" width="30" height="30" />
        <rect x="147.5" y="2.5" width="30" height="30" />
      </g>
    </>,
    { width: 182, height: 182, mirror: true },
  ),
);

export const UngroupIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path d="M25 26H111V111H25" fill={iconFillColor(theme)} />
        <path
          d="M25 111C25 80.2068 25 49.4135 25 26M25 26C48.6174 26 72.2348 26 111 26H25ZM25 26C53.3671 26 81.7343 26 111 26H25ZM111 26C111 52.303 111 78.606 111 111V26ZM111 26C111 51.2947 111 76.5893 111 111V26ZM111 111C87.0792 111 63.1585 111 25 111H111ZM111 111C87.4646 111 63.9293 111 25 111H111ZM25 111C25 81.1514 25 51.3028 25 26V111Z"
          stroke={iconFillColor(theme)}
          strokeWidth="2"
        />
        <path d="M100 100H160V160H100" fill={iconFillColor(theme)} />
        <path
          d="M100 160C100 144.106 100 128.211 100 100M100 100C117.706 100 135.412 100 160 100H100ZM100 100C114.214 100 128.428 100 160 100H100ZM160 100C160 120.184 160 140.369 160 160V100ZM160 100C160 113.219 160 126.437 160 160V100ZM160 160C145.534 160 131.068 160 100 160H160ZM160 160C143.467 160 126.934 160 100 160H160ZM100 160C100 143.661 100 127.321 100 100V160Z"
          stroke={iconFillColor(theme)}
          strokeWidth="2"
        />
        <g
          fill={handlerColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="6"
        >
          <rect x="2.5" y="2.5" width="30" height="30" />
          <rect x="78.5" y="149.5" width="30" height="30" />
          <rect x="147.5" y="149.5" width="30" height="30" />
          <rect x="147.5" y="78.5" width="30" height="30" />
          <rect x="105.5" y="2.5" width="30" height="30" />
          <rect x="2.5" y="102.5" width="30" height="30" />
        </g>
      </>,
      { width: 182, height: 182, mirror: true },
    ),
);

export const FillHachureIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.101 16H28.0934L36 8.95989V4H33.5779L20.101 16ZM30.5704 4L17.0935 16H9.10101L22.5779 4H30.5704ZM19.5704 4L6.09349 16H4V10.7475L11.5779 4H19.5704ZM8.57036 4H4V8.06952L8.57036 4ZM36 11.6378L31.101 16H36V11.6378ZM2 2V18H38V2H2Z"
        fill={iconFillColor(theme)}
      />,
      { width: 40, height: 20 },
    ),
);

export const FillCrossHatchIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <g fill={iconFillColor(theme)} fillRule="evenodd" clipRule="evenodd">
        <path d="M20.101 16H28.0934L36 8.95989V4H33.5779L20.101 16ZM30.5704 4L17.0935 16H9.10101L22.5779 4H30.5704ZM19.5704 4L6.09349 16H4V10.7475L11.5779 4H19.5704ZM8.57036 4H4V8.06952L8.57036 4ZM36 11.6378L31.101 16H36V11.6378ZM2 2V18H38V2H2Z" />
        <path d="M14.0001 18L3.00006 4.00002L4.5727 2.76438L15.5727 16.7644L14.0001 18ZM25.0001 18L14.0001 4.00002L15.5727 2.76438L26.5727 16.7644L25.0001 18ZM36.0001 18L25.0001 4.00002L26.5727 2.76438L37.5727 16.7644L36.0001 18Z" />
      </g>,
      { width: 40, height: 20 },
    ),
);

export const FillSolidIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(<path d="M2 2H38V18H2V2Z" fill={iconFillColor(theme)} />, {
      width: 40,
      height: 20,
    }),
);

export const StrokeWidthIcon = React.memo(
  ({ theme, strokeWidth }: { theme: "light" | "dark"; strokeWidth: number }) =>
    createIcon(
      <path
        d="M6 10H32"
        stroke={iconFillColor(theme)}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />,
      { width: 40, height: 20 },
    ),
);

export const StrokeStyleSolidIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M6 10H34"
        stroke={iconFillColor(theme)}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
      />,
      {
        width: 40,
        height: 20,
      },
    ),
);

export const StrokeStyleDashedIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M6 10H34"
        stroke={iconFillColor(theme)}
        strokeWidth={2.5}
        strokeDasharray={"10, 8"}
        fill="none"
        strokeLinecap="round"
      />,
      { width: 40, height: 20 },
    ),
);

export const StrokeStyleDottedIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M6 10H36"
        stroke={iconFillColor(theme)}
        strokeWidth={2.5}
        strokeDasharray={"2, 4.5"}
        fill="none"
        strokeLinecap="round"
      />,
      { width: 40, height: 20 },
    ),
);

export const SloppinessArchitectIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M3.00098 16.1691C6.28774 13.9744 19.6399 2.8905 22.7215 3.00082C25.8041 3.11113 19.1158 15.5488 21.4962 16.8309C23.8757 18.1131 34.4155 11.7148 37.0001 10.6919"
        stroke={iconFillColor(theme)}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />,
      { width: 40, height: 20, mirror: true },
    ),
);

export const SloppinessArtistIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M3 17C6.68158 14.8752 16.1296 9.09849 22.0648 6.54922C28 3.99995 22.2896 13.3209 25 14C27.7104 14.6791 36.3757 9.6471 36.3757 9.6471M6.40706 15C13 11.1918 20.0468 1.51045 23.0234 3.0052C26 4.49995 20.457 12.8659 22.7285 16.4329C25 20 36.3757 13 36.3757 13"
        stroke={iconFillColor(theme)}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />,
      { width: 40, height: 20, mirror: true },
    ),
);

export const SloppinessCartoonistIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M3 15.6468C6.93692 13.5378 22.5544 2.81528 26.6206 3.00242C30.6877 3.18956 25.6708 15.3346 27.4009 16.7705C29.1309 18.2055 35.4001 12.4762 37 11.6177M3.97143 10.4917C6.61158 9.24563 16.3706 2.61886 19.8104 3.01724C23.2522 3.41472 22.0773 12.2013 24.6181 12.8783C27.1598 13.5536 33.3179 8.04068 35.0571 7.07244"
        stroke={iconFillColor(theme)}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />,
      { width: 40, height: 20, mirror: true },
    ),
);

export const EdgeSharpIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M10 17L10 5L35 5"
        stroke={iconFillColor(theme)}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />,
      { width: 40, height: 20, mirror: true },
    ),
);

export const EdgeRoundIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M10 17V15C10 8 13 5 21 5L33.5 5"
        stroke={iconFillColor(theme)}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />,
      { width: 40, height: 20, mirror: true },
    ),
);

export const ArrowheadNoneIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M6 10H34"
        stroke={iconFillColor(theme)}
        strokeWidth={2}
        fill="none"
      />,
      {
        width: 40,
        height: 20,
      },
    ),
);

export const ArrowheadArrowIcon = React.memo(
  ({ theme, flip = false }: { theme: "light" | "dark"; flip?: boolean }) =>
    createIcon(
      <g
        transform={flip ? "translate(40, 0) scale(-1, 1)" : ""}
        stroke={iconFillColor(theme)}
        strokeWidth={2}
        fill="none"
      >
        <path d="M34 10H6M34 10L27 5M34 10L27 15" />
        <path d="M27.5 5L34.5 10L27.5 15" />
      </g>,
      { width: 40, height: 20 },
    ),
);

export const ArrowheadDotIcon = React.memo(
  ({ theme, flip = false }: { theme: "light" | "dark"; flip?: boolean }) =>
    createIcon(
      <g
        stroke={iconFillColor(theme)}
        fill={iconFillColor(theme)}
        transform={flip ? "translate(40, 0) scale(-1, 1)" : ""}
      >
        <path d="M32 10L6 10" strokeWidth={2} />
        <circle r="4" transform="matrix(-1 0 0 1 30 10)" />
      </g>,
      { width: 40, height: 20 },
    ),
);

export const ArrowheadBarIcon = React.memo(
  ({ theme, flip = false }: { theme: "light" | "dark"; flip?: boolean }) =>
    createIcon(
      <g transform={flip ? "translate(40, 0) scale(-1, 1)" : ""}>
        <path
          d="M34 10H5.99996M34 10L34 5M34 10L34 15"
          stroke={iconFillColor(theme)}
          strokeWidth={2}
          fill="none"
        />
      </g>,
      { width: 40, height: 20 },
    ),
);

export const FontSizeSmallIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        fill={iconFillColor(theme)}
        d="M 0 69.092 L 0 55.03 A 124.24 124.24 0 0 0 4.706 57.02 Q 6.826 57.863 8.708 58.5 A 53.466 53.466 0 0 0 12.231 59.571 Q 17.236 60.889 21.387 60.889 A 20.909 20.909 0 0 0 24.265 60.704 Q 25.719 60.502 26.903 60.077 A 8.649 8.649 0 0 0 29.028 58.985 Q 31.689 57.08 31.689 53.321 Q 31.689 51.221 30.518 49.585 A 10.126 10.126 0 0 0 29.282 48.177 Q 28.352 47.287 27.075 46.436 A 23.719 23.719 0 0 0 25.752 45.627 Q 23.774 44.492 20.176 42.735 A 254.44 254.44 0 0 0 17.822 41.602 Q 11.503 38.631 8.236 35.888 A 19.742 19.742 0 0 1 8.008 35.694 A 22.18 22.18 0 0 1 2.783 29.102 Q 0.83 25.342 0.83 20.313 A 22.471 22.471 0 0 1 1.733 13.778 A 17.283 17.283 0 0 1 7.251 5.42 A 21.486 21.486 0 0 1 15.177 1.272 Q 18.361 0.338 22.166 0.09 A 43.573 43.573 0 0 1 25 0 A 42.399 42.399 0 0 1 34.349 1.01 A 39.075 39.075 0 0 1 35.62 1.319 A 67.407 67.407 0 0 1 42.108 3.382 A 83.357 83.357 0 0 1 46.191 5.03 L 41.309 16.797 Q 35.596 14.453 31.86 13.526 A 30.762 30.762 0 0 0 25.417 12.612 A 28.337 28.337 0 0 0 24.512 12.598 A 14.846 14.846 0 0 0 22.022 12.793 Q 19.498 13.224 17.92 14.6 Q 15.625 16.602 15.625 19.824 Q 15.625 21.826 16.553 23.316 Q 17.48 24.805 19.507 26.197 A 18.343 18.343 0 0 0 20.659 26.912 Q 22.596 28.035 26.516 29.953 A 299.99 299.99 0 0 0 29.102 31.201 Q 37.91 35.412 41.841 39.642 A 16.553 16.553 0 0 1 42.822 40.796 A 17.675 17.675 0 0 1 46.301 49.233 A 23.517 23.517 0 0 1 46.533 52.588 A 21.581 21.581 0 0 1 45.471 59.515 A 17.733 17.733 0 0 1 39.575 67.823 Q 33.745 72.486 24.094 73.243 A 49.683 49.683 0 0 1 20.215 73.389 A 51.712 51.712 0 0 1 9.448 72.315 A 40.672 40.672 0 0 1 0 69.092 Z"
      />,
      { width: 47, height: 77 },
    ),
);

export const FontSizeMediumIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        fill={iconFillColor(theme)}
        d="M 44.092 71.387 L 30.225 71.387 L 13.037 15.381 L 12.598 15.381 A 1505.093 1505.093 0 0 1 12.959 22.313 Q 13.426 31.715 13.508 36.4 A 102.991 102.991 0 0 1 13.525 38.184 L 13.525 71.387 L 0 71.387 L 0 0 L 20.605 0 L 37.5 54.59 L 37.793 54.59 L 55.713 0 L 76.318 0 L 76.318 71.387 L 62.207 71.387 L 62.207 37.598 Q 62.207 35.205 62.28 32.08 A 160.703 160.703 0 0 1 62.326 30.544 Q 62.452 26.754 62.866 17.168 A 5390.536 5390.536 0 0 1 62.939 15.479 L 62.5 15.479 L 44.092 71.387 Z"
      />,
      { width: 77, height: 75 },
    ),
);

export const FontSizeLargeIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        fill={iconFillColor(theme)}
        d="M 44.092 71.387 L 0 71.387 L 0 0 L 15.137 0 L 15.137 58.887 L 44.092 58.887 L 44.092 71.387 Z"
      />,
      { width: 45, height: 75 },
    ),
);

export const FontSizeExtraLargeIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        fill={iconFillColor(theme)}
        d="M 42.578 35.4 L 66.699 71.387 L 49.414 71.387 L 32.813 44.385 L 16.211 71.387 L 0 71.387 L 23.682 34.57 L 1.514 0 L 18.213 0 L 33.594 25.684 L 48.682 0 L 64.99 0 L 42.578 35.4 Z M 119.775 71.387 L 75.684 71.387 L 75.684 0 L 90.82 0 L 90.82 58.887 L 119.775 58.887 L 119.775 71.387 Z"
      />,
      { width: 120, height: 75 },
    ),
);

export const FontFamilyHandDrawnIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        fill={iconFillColor(theme)}
        d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
      />,
      { width: 448, height: 512 },
    ),
);

export const FontFamilyNormalIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          fill={iconFillColor(theme)}
          d="M 63.818 71.68 L 54.492 71.68 L 45.898 49.561 L 17.578 49.561 L 9.082 71.68 L 0 71.68 L 27.881 0 L 35.986 0 L 63.818 71.68 Z M 20.605 41.602 L 43.213 41.602 L 35.205 19.971 L 31.787 9.277 Q 30.322 15.137 28.711 19.971 L 20.605 41.602 Z"
        />
        <path
          fill={iconFillColor(theme)}
          d="M 68.994 71.68 L 52.686 71.68 L 47.51 54.688 L 21.484 54.688 L 16.309 71.68 L 0 71.68 L 25.195 0 L 43.701 0 L 68.994 71.68 Z M 25.293 41.992 L 43.896 41.992 A 27590.463 27590.463 0 0 1 42.2 36.532 Q 36.965 19.676 35.937 16.273 A 120.932 120.932 0 0 1 35.815 15.869 A 131.65 131.65 0 0 1 35.396 14.435 Q 34.951 12.879 34.675 11.741 A 34.866 34.866 0 0 1 34.521 11.084 A 141.762 141.762 0 0 1 33.706 14.075 Q 31.482 21.957 25.293 41.992 Z"
        />
      </>,
      { width: 70, height: 78 },
    ),
);

export const FontFamilyCodeIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <>
        <path
          fill={iconFillColor(theme)}
          d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
        />
      </>,
      { width: 640, height: 512 },
    ),
);

export const TextAlignLeftIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M12.83 352h262.34A12.82 12.82 0 00288 339.17v-38.34A12.82 12.82 0 00275.17 288H12.83A12.82 12.82 0 000 300.83v38.34A12.82 12.82 0 0012.83 352zm0-256h262.34A12.82 12.82 0 00288 83.17V44.83A12.82 12.82 0 00275.17 32H12.83A12.82 12.82 0 000 44.83v38.34A12.82 12.82 0 0012.83 96zM432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        fill={iconFillColor(theme)}
        strokeLinecap="round"
      />,
      { width: 448, height: 512 },
    ),
);

export const TextAlignCenterIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zM108.1 96h231.81A12.09 12.09 0 00352 83.9V44.09A12.09 12.09 0 00339.91 32H108.1A12.09 12.09 0 0096 44.09V83.9A12.1 12.1 0 00108.1 96zm231.81 256A12.09 12.09 0 00352 339.9v-39.81A12.09 12.09 0 00339.91 288H108.1A12.09 12.09 0 0096 300.09v39.81a12.1 12.1 0 0012.1 12.1z"
        fill={iconFillColor(theme)}
      />,
      { width: 448, height: 512 },
    ),
);

export const TextAlignRightIcon = React.memo(
  ({ theme }: { theme: "light" | "dark" }) =>
    createIcon(
      <path
        d="M16 224h416a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16zm416 192H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-384H172.83A12.82 12.82 0 00160 44.83v38.34A12.82 12.82 0 00172.83 96h262.34A12.82 12.82 0 00448 83.17V44.83A12.82 12.82 0 00435.17 32zm0 256H172.83A12.82 12.82 0 00160 300.83v38.34A12.82 12.82 0 00172.83 352h262.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288z"
        fill={iconFillColor(theme)}
        strokeLinecap="round"
      />,
      { width: 448, height: 512 },
    ),
);

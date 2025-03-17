import local from "next/font/local";

export const satoshi = local({
  src: [
    {
      path: "./satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

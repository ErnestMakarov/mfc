export default function MerchIcon({ name = "arrow", ...props }) {
  const paths = {
    arrow: "M4 12h16m-6-6 6 6-6 6",
    back: "M20 12H4m6-6-6 6 6 6",
    check: "m5 12 4 4L19 6",
    bag: "M5 7h14l1 14H4L5 7Zm3 0V6a4 4 0 0 1 8 0v1",
    close: "m6 6 12 12M6 18 18 6",
    zoom: "m16 16 5 5M7 10h6m-3-3v6",
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {name === "zoom" && <circle cx="10" cy="10" r="7" />}
    <path d={paths[name] || paths.arrow} />
  </svg>;
}

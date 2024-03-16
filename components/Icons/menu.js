export const Menu = ({ color = "black" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path
        d="M3 16h18v2H3v-2Zm0-5h18v2H3v-2Zm0-5h18v2H3V6Z"
        fillRule="evenodd"
      />
    </svg>
  );
};

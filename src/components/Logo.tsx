export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 8L20 4L32 8L28 36H12L8 8Z"
        fill="white"
      />
      <path
        d="M14 12L20 10L26 12L24 30H16L14 12Z"
        fill="#0a0a0a"
      />
      <circle cx="20" cy="20" r="3" fill="white" />
      <text
        x="42"
        y="28"
        fill="white"
        fontFamily="'PT Serif', serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="1"
      >
        FILM
      </text>
      <text
        x="96"
        y="28"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        opacity="0.5"
        letterSpacing="2"
      >
        PRO
      </text>
    </svg>
  );
};

export default Logo;

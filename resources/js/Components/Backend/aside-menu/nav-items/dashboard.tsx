import NavItem from "../nav-item";

export default function Dashboard() {
  return (
    <NavItem
      to="/"
      svg={
        <svg
          className="home"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2501 8.18844C20.3258 9.06897 20.8338 10.4687 20.5723 11.8338L19.4752 17.5596C19.1335 19.3449 17.5713 20.6363 15.7532 20.6363H8.24588C6.42786 20.6363 4.86663 19.3449 4.52394 17.5596L3.42771 11.8338C3.16627 10.4687 3.67329 9.06897 4.74897 8.18844L9.59888 4.21906C10.9957 3.07615 13.0042 3.07615 14.4003 4.21906L16.8251 6.20375"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.49878 16.9812C9.49878 15.6002 10.6183 14.4806 11.9994 14.4806C13.3804 14.4806 14.5 15.6002 14.5 16.9812"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    >
      Dashboard
    </NavItem>
  );
}

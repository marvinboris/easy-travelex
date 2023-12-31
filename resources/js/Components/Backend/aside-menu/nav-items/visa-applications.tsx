import NavItem from "../nav-item";

export default function VisaApplications() {
  return (
    <NavItem
      to="/visas"
      svg={
        <svg
          className="notebook-check"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0283 3C19.0813 3.0827 20.6993 4.77956 20.6847 6.83545V17.1635C20.7295 19.236 19.0871 20.9533 17.0147 20.999L8.62572 21C6.5854 21.0078 4.91384 19.3819 4.86519 17.3426V6.83545C4.81946 4.76302 6.46281 3.04573 8.53524 3.00097C8.55266 3.00041 11.3826 3.00017 13.7707 3.00007"
            stroke="#4A5568"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1543 15.9361H17.0128M15.852 12.2305H17.0127"
            stroke="#4A5568"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.90234 10.3371L11.6206 12.0554L15.9367 7.73828"
            stroke="#4A5568"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.31445 16.697H6.64007M3.31445 11.9984H6.64007M3.31445 7.30078H6.64007"
            stroke="#4A5568"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    >
      Visa applications
    </NavItem>
  );
}

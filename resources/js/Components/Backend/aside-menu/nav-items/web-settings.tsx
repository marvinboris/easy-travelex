import NavItem from "../nav-item";

export default function WebSettings() {
  return (
    <NavItem
      to="/web-settings"
      svg={
        <svg
          className="computer-code"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7595 3.63187H6.98698C4.85173 3.63187 3.12 5.36361 3.12 7.49979V12.738C3.12 14.8741 4.85173 16.6059 6.98698 16.6059H16.5321C18.6682 16.6059 20.4 14.8741 20.4 12.738V7.49979C20.4 5.36361 18.6682 3.63187 16.5321 3.63187H15.8501"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.86422 8.0175L7.78503 10.0977L9.86422 12.1768"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.6556 8.0175L15.7358 10.0977L13.6556 12.1768"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.01343 20.3681H16.5062"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.72902 16.6068L9.11719 20.3674"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.791 16.6068L14.4028 20.3674"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    >
      Web settings
    </NavItem>
  );
}

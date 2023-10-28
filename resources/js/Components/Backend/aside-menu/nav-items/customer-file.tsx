import NavItem from "../nav-item";

export default function CustomerFile() {
  return (
    <NavItem
      to="/customer-file"
      svg={
        <svg
          className="user-board"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6581 19.7441H17.0218C19.7857 19.7441 21.5044 17.794 21.5044 15.0343V11.8294"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5044 8.62381C21.5044 5.86411 19.7857 3.915 17.0229 3.915H9.51497C7.54718 3.915 6.1035 4.91032 5.44031 6.48787"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.4793 16.5075H15.2344"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.30432 20.0843C2.30432 18.7579 3.35153 17.1057 6.36757 17.1057C9.38465 17.1057 10.4308 18.7454 10.4308 20.0729"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.77197 12.054C3.77197 13.4873 4.93438 14.6498 6.36768 14.6498C7.80097 14.6498 8.96338 13.4873 8.96338 12.054C8.96338 10.6208 7.80097 9.45938 6.36768 9.45938C5.84181 9.45938 5.3524 9.61572 4.94349 9.88446"
            stroke="#4A5568"
            strokeWidth="1.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    >
      Customer file
    </NavItem>
  );
}

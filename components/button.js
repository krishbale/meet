// components/BeautifulButton.js

import Link from 'next/link';

const BeautifulButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <p className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        {text}
      </p>
    </Link>
  );
};

export default BeautifulButton;

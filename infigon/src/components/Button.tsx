import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void; // Ensure that onClick is a function that takes no parameters
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <a
      href="#"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {title}
    </a>
  );
};

export default Button;
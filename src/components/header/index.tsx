import {headerTitles} from "./consts";

export const Header = () => {
  return (
    <header className='flex justify-center mt-5 font-medium text-xl'>
      {headerTitles.map(title => (
        <a className='mr-10 hover:opacity-60 cursor-pointer'>{title}</a>
      ))}
    </header>
  );
};

export default Header;

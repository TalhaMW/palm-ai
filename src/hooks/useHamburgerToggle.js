import { logDOM } from '@testing-library/react';
import { useState } from 'react';

const useHamburgerToggle = () => {
  const [isOpen, setOpen] = useState(false);
  console.log({ isOpen });
  return {
    isOpen,
    setOpen,
  };
};
export default useHamburgerToggle;

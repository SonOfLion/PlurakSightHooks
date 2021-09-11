import React, { useState ,useEffect } from 'react';

const Syntaxys = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  useEffect(() => {
    console.log('in useEffect');

    return () => {
      console.log('in useEffect ClenUp')
    }
  }, [checkBoxValue]);

  return (
    <div>1</div>
  );
};

export default Syntaxys;
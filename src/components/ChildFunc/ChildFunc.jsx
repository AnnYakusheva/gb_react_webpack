import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { Button } from '../Button/Button';

export const ChildFunc = (props) => {
  const [number, setNumber] = useState(0);

  const someFunction = useCallback(() => {
    console.log('memo', number);
  }, []);

  useEffect(() => {
    console.log('did mount');
    return () => {
      console.log('will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('update number', number);
  }, [number]);

  const handleClick = () => {
    setNumber(number + 1);
    someFunction();
  };

  console.log('always start 2');
  return (
    <>
      {/* <p>{this.count}</p>
            <Button></Button> */}
      <button onClick={() => handleClick()}>Click-click-click</button>
    </>
  );
};

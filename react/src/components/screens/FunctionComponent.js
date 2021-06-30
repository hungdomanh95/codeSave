import React, { useEffect, useState } from 'react';

function FunctionComponent() {
  console.log('FunctionComponent: ');

  const [state, setstate] = useState()
  const [userName, setUserName] = useState("Hung")

  useEffect(() => {
    console.log("didmount");
  }, [])

  useEffect(() => {
    console.log("didupdate");
  }, [state])
  useEffect(() => {
    console.log("didupdate 2");
  }, [userName])

  return (
    <div>

    </div>
  )
}

export default FunctionComponent

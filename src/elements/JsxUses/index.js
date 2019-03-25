import * as React from 'react';


const Foot = (props) => {
    const uno = <p>{props.msg}</p>
    return uno;
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const composition = (
    <>
    <h1>
      Hola, {formatName(user)}!
    </h1>
    <Foot msg={"Pie de página"}/>
    </>
  );

  export default composition;
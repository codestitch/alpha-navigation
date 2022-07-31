import React from 'react';

const Toolbar: React.FunctionComponent<{ title: string }> = ({ title }) => {
   return <header className='mt-1'>
      <h1>{ title }</h1>
   </header>
}

export default Toolbar;
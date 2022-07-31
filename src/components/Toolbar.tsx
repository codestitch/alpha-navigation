import React from 'react';

import type { ToolbarComponent } from 'alpha-shared';

const Toolbar: ToolbarComponent = ({ title }) => {
   return <header className='mt-1'>
      <h1>{ title }</h1>
   </header>
}

export default Toolbar;
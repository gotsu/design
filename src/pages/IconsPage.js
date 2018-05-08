import React from 'react';
import Header from 'components/Header';
import IconBox from 'components/IconBox';
import * as icons from 'react-gotsu-icons';

const IconsPage = () => {
  const gotsuIcons = Object.keys(icons).map((v, index) => <IconBox key={index} icon={React.createElement(icons[v], { fill: 'white' })} name={v} />)
  return (
    <div>
      <Header />
      <section style={{ overflow: 'hidden' }}>
        <p style={{ textAlign: 'left', padding: '1rem 2.5rem' }}>All {gotsuIcons.length} Gotsu Icons</p>
        {gotsuIcons}
      </section>
    </div>
  );
};

export default IconsPage;
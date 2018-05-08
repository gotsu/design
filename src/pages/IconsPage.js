import React from 'react';
import Header from 'components/Header';
import IconBox from 'components/IconBox';
import { IconBookmark, IconPencil, IconBookmark2, IconSearch, IconChat } from 'react-gotsu-icons';

const IconsPage = () => {
  return (
    <div>
      <Header />
      <section style={{ overflow: 'hidden' }}>
        <h2 style={{ padding: '2rem 0' }}>
          We are developing this place...
        </h2>
        <IconBox icon={(<IconBookmark fill="white" />)} name="IconBookmark" />
        <IconBox icon={(<IconPencil fill="white" />)} name="IconPencil" />
        <IconBox icon={(<IconBookmark2 fill="white" />)} name="IconBookmark2" />
        <IconBox icon={(<IconSearch fill="white" />)} name="IconSearch" />
        <IconBox icon={(<IconChat fill="white" />)} name="IconChat" />
      </section>
    </div>
  );
};

export default IconsPage;
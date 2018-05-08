import React from 'react';
import Header from 'components/Header';
import IconBox from 'components/IconBox';
import * as icons from 'react-gotsu-icons';

const MainPage = () => {

  let test = () => {
    console.log(icons);
    let str = '';
    for (let item in icons) {
      console.log(item)
      str += <IconBox icon={(<item fill="white" />)} name={item} />
    }
    return str;
  }
  test()
  return (
    <div>
      <Header />
      <section>
        <h2 onClick={test} style={{ padding: '2rem 0' }}>
          We are developing this place...
        </h2>
      </section>
    </div>
  );
};

export default MainPage;
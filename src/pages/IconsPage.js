import React from 'react';
import Header from 'components/Header';
import IconBox from 'components/IconBox';
import {
  IconBookmark, IconPencil, IconBookmark2, IconSearch, IconChat, IconAlignLeft, IconAlignCenter, IconAlignRight,
  IconAngleLeft, IconAngleRight, IconAngleTop, IconAngleBottom, IconArrowLeft, IconArrowRight, IconArrowTop, IconArrowBottom,
  IconInstagram, IconFacebook, IconKakaoTalk, IconBookAdd, IconBookCheck, IconCross, IconX, IconHome, IconExport, IconHamburger,
  IconPaperP, IconPicture, IconShare, IconTrashcan, IconTwitter, IconUser, IconSiren, IconMore
} from 'react-gotsu-icons';

const IconsPage = () => {
  return (
    <div>
      <Header />
      <section style={{ overflow: 'hidden' }}>
        <h2 style={{ padding: '2rem 0' }}>
          React Gotsu Icons
        </h2>
        <a href="https://github.com/gotsu/icons" rel="noopener noreferrer" target="_blank" style={{ margin: '0.5rem', display: 'block', color: 'blue' }}>https://github.com/gotsu/icons</a><br />
        <IconBox icon={(<IconAlignLeft fill="white" />)} name="IconAlignLeft" />
        <IconBox icon={(<IconAlignCenter fill="white" />)} name="IconAlignCenter" />
        <IconBox icon={(<IconAlignRight fill="white" />)} name="IconAlignRight" />
        <IconBox icon={(<IconAngleLeft fill="white" />)} name="IconAngleLeft" />
        <IconBox icon={(<IconAngleRight fill="white" />)} name="IconAngleRight" />
        <IconBox icon={(<IconAngleTop fill="white" />)} name="IconAngleTop" />
        <IconBox icon={(<IconAngleBottom fill="white" />)} name="IconAngleBottom" />
        <IconBox icon={(<IconArrowLeft fill="white" />)} name="IconArrowLeft" />
        <IconBox icon={(<IconArrowRight fill="white" />)} name="IconArrowRight" />
        <IconBox icon={(<IconArrowTop fill="white" />)} name="IconArrowTop" />
        <IconBox icon={(<IconArrowBottom fill="white" />)} name="IconArrowBottom" />
        <IconBox icon={(<IconBookAdd fill="white" />)} name="IconBookAdd" />
        <IconBox icon={(<IconBookCheck fill="white" />)} name="IconBookCheck" />
        <IconBox icon={(<IconBookmark fill="white" />)} name="IconBookmark" />
        <IconBox icon={(<IconBookmark2 fill="white" />)} name="IconBookmark2" />
        <IconBox icon={(<IconPencil fill="white" />)} name="IconPencil" />
        <IconBox icon={(<IconSearch fill="white" />)} name="IconSearch" />
        <IconBox icon={(<IconChat fill="white" />)} name="IconChat" />
        <IconBox icon={(<IconX fill="white" />)} name="IconX" />
        <IconBox icon={(<IconCross fill="white" />)} name="IconCross" />
        <IconBox icon={(<IconPaperP fill="white" />)} name="IconPaperP" />
        <IconBox icon={(<IconPicture fill="white" />)} name="IconPicture" />
        <IconBox icon={(<IconShare fill="white" />)} name="IconShare" />
        <IconBox icon={(<IconHome fill="white" />)} name="IconHome" />
        <IconBox icon={(<IconExport fill="white" />)} name="IconExport" />
        <IconBox icon={(<IconHamburger fill="white" />)} name="IconHamburger" />
        <IconBox icon={(<IconTrashcan fill="white" />)} name="IconTrashcan" />
        <IconBox icon={(<IconUser fill="white" />)} name="IconUser" />
        <IconBox icon={(<IconSiren fill="white" />)} name="IconSiren" />
        <IconBox icon={(<IconMore fill="white" />)} name="IconMore" />
        <IconBox icon={(<IconTwitter fill="white" />)} name="IconTwitter" />
        <IconBox icon={(<IconKakaoTalk fill="white" />)} name="IconKakaoTalk" />
        <IconBox icon={(<IconFacebook fill="white" />)} name="IconFacebook" />
        <IconBox icon={(<IconInstagram fill="white" />)} name="IconInstagram" />

      </section>
    </div>
  );
};

export default IconsPage;
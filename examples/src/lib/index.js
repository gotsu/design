export { default as IconBookmark } from './IconBookmark'
export { default as IconPencil } from './IconPencil'
export { default as IconBookmark2 } from './IconBookmark2'
export { default as IconChat } from './IconChat'
export { default as IconHome } from './IconHome'
export { default as IconSearch } from './IconSearch'
export { default as IconUser } from './IconUser'
export { default as IconShare } from './IconShare'
export { default as IconClock } from './IconClock'
export { default as IconCross } from './IconCross'
export { default as IconX } from './IconX'
export { default as IconHamburger } from './IconHamburger'
export { default as IconMore } from './IconMore'
export { default as IconExport } from './IconExport'
export { default as IconTrashcan } from './IconTrashcan'
export { default as IconSiren } from './IconSiren'
export { default as IconAngleLeft } from './IconAngleLeft'
export { default as IconAngleRight } from './IconAngleRight'
export { default as IconAngleTop } from './IconAngleTop'
export { default as IconAngleBottom } from './IconAngleBottom'
export { default as IconArrowLeft } from './IconArrowLeft'
export { default as IconArrowRight } from './IconArrowRight'
export { default as IconArrowTop } from './IconArrowTop'
export { default as IconArrowBottom } from './IconArrowBottom'
export { default as IconBookCheck } from './IconBookCheck'
export { default as IconBookAdd } from './IconBookAdd'
export { default as IconPaperP } from './IconPaperP'
export { default as IconAlignRight } from './IconAlignRight'
export { default as IconAlignCenter } from './IconAlignCenter'
export { default as IconAlignLeft } from './IconAlignLeft'
export { default as IconInstagram } from './IconInstagram'
export { default as IconFacebook } from './IconFacebook'
export { default as IconTwitter } from './IconTwitter'
export { default as IconKakaoTalk } from './IconKakaoTalk'
export { default as IconPicture } from './IconPicture'
export { default as IconLink } from './IconLink'


// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
const req = require.context('.', true, /\.\/.\.js$/)

req.keys().forEach((key) => {
  const componentName = key.replace(/\.\/.\.js$/, '$1')
  module.exports[componentName] = req(key).default
})
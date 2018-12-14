import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* project id 853327 */
  src: url('//at.alicdn.com/t/font_853327_xnst31the3h.eot');
  src: url('//at.alicdn.com/t/font_853327_xnst31the3h.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_853327_xnst31the3h.woff') format('woff'),
  url('//at.alicdn.com/t/font_853327_xnst31the3h.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_853327_xnst31the3h.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shang:before { content: "\e620"; }

.icon-xia:before { content: "\e634"; }

.icon-you:before { content: "\e626"; }

.icon-finish:before { content: "\e659"; }

.icon-quxiao1:before { content: "\e61f"; }

.icon-quxiao:before { content: "\e625"; }

.icon-jia:before { content: "\e61b"; }

.icon-aa:before { content: "\e602"; }

.icon-bianji:before { content: "\e754"; }

.icon-fangdajing-copy:before { content: "\e606"; }

.icon-spinner:before { content: "\e746"; }


`;


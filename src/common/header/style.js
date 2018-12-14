import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
    height: 56px;
    width: 100%;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;
export const Logo = styled.a`
    position: absolute;
    left: 0;
    right: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${LogoPic});
    background-size: contain;
`;


export const Nav = styled.div`
    height: 100%;
    width: 960px;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        height: 56px;
        float: right;
        color: #969696;
    }

    &.active {
        color: #ea6f5a;
    }
    .iconfont {
        font-size: 24px;
    }
`;
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
   
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 4px;
        width:30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        font-size: 20px;
        color: #969696;
        cursor: pointer;
        &.focused {
            background: #999;
            color: #fff;
        }
    }

`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .3s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .3s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;


export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-radius: 4px;
    background: #fff;
`;
export const SearchInfoTitle = styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.span`
    display: inline-block;
    float: right;
    font-size: 13px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        color: #666;
    }

    .iconfont {
        display: inline-block;
        font-size: 12px;
        width: 20px;
        height: 20px;
        text-align: center;
        box-sizing: border-box;
        transition: transform .2s ease-in;
        transform-origin: center center;
        &:hover {
            text-decoration: none !important;
        }
    }
`;
export const SearchInfoList = styled.ul`
    overflow: hidden;
`;
export const SearchInfoItem = styled.li`
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin: 0 10px 15px 0;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        color: #666;
        border: 1px solid #999;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    cursor: pointer;
    &.reg {
        color:#ec6149; 
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;


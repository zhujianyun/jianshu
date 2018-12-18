import styled from 'styled-components';
export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;
export const BackTop = styled.div`
    position: fixed;
    bottom: 50px;
    right: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;  
    border: 1px solid #dcdcdc;
    cursor: pointer;
`;
export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
   width: 280px;
   float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListWrapper = styled.div`
    .list-item {
        overflow: hidden;
        padding: 20px 0;
        border-bottom: 1px solid #dcdcdc;
        .list-pic {
            display: block;
            float: right;
            width: 125px;
            height: 100px;
            border-radius: 10px;
        }
        .list-info {
            width: 500px;
            float: left;
            .article-title {
                line-height: 27px;
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .article-content {
                line-height: 24px;
                font-size: 13px;
                color: #999;
            }
        }
    }
`;

export const MoreList = styled.div`
    width: 100%;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    box-sizing: border-box;
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgurl});
    background-size: contain;
    margin-bottom: 6px;
`;

export const WritterWrapper = styled.div`
    width: 280px;
    .title {
        width: 100%;
        overflow: hidden;
        color: #969696;
        font-size: 14px;
        .left {
            float: left;
        }
        .right {
            float: right;
        }
    }
    .more-writter {
        padding: 7px 7px 7px 12px;
        width: 100%;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
    }
`;

export const QRCode = styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
    .qrcode-pic {
        width: 60px;
        height: 60px;
        opacity: .85;
        display: block;
        float: left;
        margin-right: 10px;
    }
    .qrcode-p1 {
        float: left;
        font-size: 15px;
        color: #333;
        line-height: 20px;
        margin-top: 6px;
    }
    .qrcode-p2 {
        float: left;
        margin-top: 4px;
        font-size: 13px;
        color: #999;
        line-height: 20px;
    }
`;

export const WritterList = styled.div`
    width: 100%;
    margin: 0 0 20px;
    text-align: left;

`;  

export const WritterItem = styled.div`
    margin-top: 15px;
    line-height: 20px;
    .header-pic {
        display: block;
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        cursor: pointer;
        color: #333;
    }
    .desc {
        font-size: 12px;
        color: #969696;
        margin: 0 0 10px;
        margin-top: 2px;

    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        cursor: pointer;
        .iconfont {
            position: inherit;
            width: inherit;
            height: inherit;
            font-size: 13px;
        }
    }
    .following {
      color: #969696;
      .one {
          display: inline;
      }
      .cancel {
          display: none;
      }
      &:hover {
            .cancle {
                display: inline;
            }
            .one {
                display: none;
            }
      }
    }
`;





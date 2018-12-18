import styled from 'styled-components';

export const DetailWrapper = styled.div`
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
    width: 620px;
    .title {
        margin: 20px 0 0;
        font-size: 34px;
        font-weight: 700;
        line-height: 1.3;
    }
`;

export const AuthorInfo = styled.div`
    width: 100%;
    margin: 30px 0 40px;
    .pic {
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .right {
        vertical-align: middle;
        display: inline-block;
        margin-left: 8px;
        .name {
            margin-right: 3px;
            font-size: 16px;
            vertical-align: middle;
        }
        .follow {
            padding: 2px 7px 2px 5px;
            margin-left: 5px;
            font-size: 12px;
            border-color: #42c02e;
            border-radius: 40px;
            color: #fff;
            background-color: #42c02e;
            .iconfont {
                font-size: 12px;
                margin: 0 2px;
            }
        }
        .info {
            margin-top: 10px;
            font-size: 12px;
            color: #969696;
        }
    }
`;
export const Content = styled.div`
    color: #2f2f2f;
    width: 100%;
    p {
        font-size: 16px;
        line-height: 1.7;
        margin: 0 0 25px;
    }
    img {
        width: 100%;
        margin: 0 0 25px;
    }
    h2 {
        margin: 0 0 15px;
        font-size: 24px;
        font-weight: 700;
        line-height: 1.7;
    }
    
`;
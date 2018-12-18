import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 
import { action } from './store';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends PureComponent {
    render() {
        const { loginState, handleLogin } = this.props;
        if(!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' type='text' ref={ input => {this.account = input}}/>
                        <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/' />
        }
    }
}
const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
});
const mapDispatch = (dispatch) => ({
    handleLogin(accountElem, passwordElem) {
        dispatch(action.login(accountElem.value, passwordElem.value));
    }
});

export default connect(mapState, mapDispatch)(Login);
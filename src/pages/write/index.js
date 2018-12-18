import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 

class Login extends PureComponent {
    render() {
        const { loginState } = this.props;
        if(loginState) {
            return (
                <div>赶紧来发表属于自己的文章吧~~~</div>
            )
        }else {
            return <Redirect to='/login' />
        }
    }
}
const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Login);
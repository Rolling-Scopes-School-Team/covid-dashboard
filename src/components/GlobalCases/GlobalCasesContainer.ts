import { connect } from 'react-redux';

import LogIn from '../components/main/section/logIn/LogIn';
import { authorization } from '../redux/apiActionCreators/authorizationAC';

const mapStateToProps = state => ({
  globalCases: state.globalCases,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch(authorization('http://localhost:3002/auth/authUser', data));
  },
});

const GlobalCasesContainer = connect(mapStateToProps, mapDispatchToProps)(LogIn);

export default GlobalCasesContainer;

import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import HomePage from './home_page';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => ({
  currentUser: users[session.id]
});

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

export default connect(
  mapStateToProps,
  null
)(HomePage);

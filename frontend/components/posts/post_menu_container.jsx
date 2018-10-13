import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import PostMenu from './post_menu';

const mapStateToProps = ({ entities: { users, posts }, session, ui: { modalArgs } }) => ({
  postId: modalArgs[0]
});

const mapDispatchToProps = dispatch => ({
  deletePost: (postId) => dispatch( deletePost(postId) ),
  openModal: (modal, postId) => dispatch( openModal(modal, postId) )
});

export default connect( mapStateToProps, mapDispatchToProps )(PostMenu);

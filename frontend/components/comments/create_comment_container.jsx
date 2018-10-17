import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

class CreateCommentContainer extends React.Component {

  render() { 
    const { comment, currentUser, submitAction } = this.props; 
    return (
      <div className="create-comment">
        <div>
          <img className="comment-profile-icon" src={currentUser.profile_photo} />
        </div>
        <div>
          <CommentForm comment={comment} submitAction={submitAction} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( { session, entities: { users } }, ownProps ) => {
  const { postId, parentId } = ownProps; 
  return {
    comment: {  author_id: session.id,
      body: "",
      post_id: postId ,
      parent_id: parentId  },
    currentUser: users[session.id],
    formType: "create"
  };
}

const mapDispatchToProps = dispatch => ({
  submitAction: (comment) => dispatch(createComment(comment))
});

export default connect( mapStateToProps, mapDispatchToProps )( CreateCommentContainer );

import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.post.page_id !== this.props.post.page_id ) {
      this.setState(nextProps.post);
    }
  }

  handleSubmit(e) {
    if ( e ) {
      e.preventDefault();
    }
    const post = Object.assign({}, this.state);
    this.setState({ body: ""},
      () => {
        this.props.submitAction(post);
      }
    );
  }

  checkSubmit(e) {
    if ( e.which === 13 && !e.shiftKey ) {
      this.handleSubmit();
      return false;
    }
  }


  update(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div>
          <img className="post-profile-icon" src={ this.props.currentUser.profile_photo } />
          <textarea
            onChange={ this.update("body")}
            onKeyPress={ this.checkSubmit }
            value={this.state.body}
            placeholder={this.props.placeholderText}></textarea>
        </div>
        <input type="submit" value="Save"/>
      </form>
    )
  }
}

export default PostForm;

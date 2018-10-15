import React from 'react';

import Intro from './intro';
import SignupFormContainer from '../session/signup_form_container';
import PostIndexContainer from '../posts/post_index_container';
import ProfileContainer from '../profile/profile_container';
import FriendIndexContainer from '../friends/friend_index_container';

import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const HomePage = ({ currentUser }) => {
  const loggedOut = () => (
    <div className="homepage">
      <Intro />
      <SignupFormContainer />
    </div>
  );

  const loggedIn = () => (
    <div className="user-homepage">
      <ProtectedRoute exact path="/:userId" component={ProfileContainer} />
      <ProtectedRoute exact path="/:userId" component={FriendIndexContainer}/>
      <PostIndexContainer />
    </div>
  )

  return currentUser ? loggedIn() : loggedOut();
};

export default HomePage;

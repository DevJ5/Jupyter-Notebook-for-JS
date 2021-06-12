import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => {
  // return async (dispatch, getState) => {
  //   const response = await jsonPlaceholder.get('/posts');
  //   dispatch({
  //     type: 'FETCH_POSTS',
  //     payload: response.data,
  //   });
  // };

  return (dispatch, getState) => {
    jsonPlaceholder.get('/posts').then((response) => {
      dispatch({
        type: 'FETCH_POSTS',
        payload: response.data,
      });
    });
  };
};

// export const fetchUser = (id) => async (dispatch, getState) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   console.log(response.data);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// };

export const fetchUser = (id) => (dispatch, getState) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
});

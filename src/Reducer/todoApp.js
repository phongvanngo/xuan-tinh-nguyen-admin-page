import { combineReducers } from 'redux';
import posts from './posts';
import isDisplayPostForm from './isDisplayPostForm';
import isPostEditing from './isPostEditing';
import users from './Users';
import isDisplayForm from './showForm';
import modal from './modal';
import products from './Product';
import productSelected from './ProductSelected';
import isAuthenticated from './authenticated';
import loginUser from './login';

const todoApp = combineReducers({
  posts,
  isDisplayPostForm,
  isPostEditing,
  users,
  isDisplayForm,
  modal,
  products,
  productSelected,
  isAuthenticated,
  loginUser
})

export default todoApp;
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
import currentPage from './CurrentPage';
import menus from './menus';
import bill from './bill';

import teams from './TeamManagerReducer/Teams';
import members from './TeamManagerReducer/Members';
import membersList from './TeamManagerReducer/MemberList';
import isTeamsListViewing from './TeamManagerReducer/isTeamsListViewing';
import isMembersListViewing from './TeamManagerReducer/isMembersListViewing';
import isMemberFormViewing from './TeamManagerReducer/isMemberFormViewing';
import membersListCurrent from './TeamManagerReducer/MembersListCurrent';
import teamNameCurrent from './TeamManagerReducer/TeamNameCurrent';
import isMemberEditing from './TeamManagerReducer/isMemberEditing';
import feedback from './feedback';
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
	loginUser,
	currentPage,
	menus,
	bill,
	members,
	membersList,
	isMembersListViewing,
	isTeamsListViewing,
	isMemberFormViewing,
	teams,
	membersListCurrent,
	teamNameCurrent,
  isMemberEditing,
  feedback
});

export default todoApp;

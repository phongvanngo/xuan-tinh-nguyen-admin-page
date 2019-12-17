import * as types from './../Constants/ActionTypes';

var initialState = JSON.parse(localStorage.getItem("menus"));

const todoApp = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_MENUS:
            state = [];
            if (action.menus.productPermis){
                state.push({
                    url: '/product',
                    name: 'Quản lý sản phẩm'
                });
            }
            if (action.menus.clientPermis){
                state.push({
                    url: '/client',
                    name: 'Quản lý khách hàng'
                });
            }
            if (action.menus.userPermis){
                state.push({
                    url: '/account',
                    name: 'Quản lý tài khoản'
                });
            }
            if (action.menus.postPermis){
                state.push({
                    url: '/post',
                    name: 'Quản lý bài viết'
                });
            }
            if (action.menus.teamPermis){
                state.push({
                    url: '/team',
                    name: 'Quản lý đội hình'
                });
            }
            if (action.menus.billPermis){
                state.push({
                    url: '/bill',
                    name: 'Quản lý chi tiết hoá đơn'
                });
            }
            if (action.menus.feedbackPermis){
                state.push({
                    url: '/feedback',
                    name: 'Hộp thư góp ý'
                });
            }
            localStorage.setItem("menus", JSON.stringify(state));
           return state;
        default: return state;
    }
}

export default todoApp;
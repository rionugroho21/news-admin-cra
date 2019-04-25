import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';

//import axios from "axios";
//import mockAxios from 'jest-mock-axios';
//import MockAdapter from 'axios-mock-adapter';
//import chatbot from './chatbot';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({});

//Component
import App from './App';
//Layout
import Aside from './component/layout/Aside';
import Breadcrumbs from './component/layout/Breadcrumbs';
import Header from './component/layout/Header';
//Dashboard
import Dashboard from './component/dashboard/Dashboard';
//News
import News from './component/news/News';
import NewsItem from './component/news/NewsItem';
import NewsAdd from './component/news/NewsAdd';
import NewsEdit from './component/news/NewsEdit';
//Member
import Member from './component/member/Member';
import MemberAdd from './component/member/MemberAdd';
import MemberEdit from './component/member/MemberEdit';
//Photo
import Photo from './component/photo/Photo';
//Comment
import Comment from './component/comment/Comment';

import * as types from './redux/types';
//Action
import * as newsActions from './redux/actions/newsActions';
import * as memberActions from './redux/actions/memberActions';
import * as categoryActions from './redux/actions/categoryActions';
import * as commentActions from './redux/actions/commentActions';
import * as photoActions from './redux/actions/photoActions';

//Reducer
import photoReducer from './redux/reducers/photoReducers';
import commentReducer from './redux/reducers/commentReducers';
import categoryReducer from './redux/reducers/categoryReducers';
import newsReducer from './redux/reducers/newsReducers';
import memberReducer from './redux/reducers/memberReducers';

describe('<App />', () => {
  it('renders App without crashing', () => {
    shallow(<App />);
  });
});

describe('<Aside />', () => {
  const wrapper = shallow(<Aside />);
  it('renders <Aside />', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders <Aside /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('Should has #left-panel ID', () => {
    expect(wrapper.find('#left-panel').length).toEqual(1);
  })
  it('should has .navbar-toggler class', () => {
    const search = wrapper.find('button');
    expect(search.hasClass('navbar-toggler')).toBe(true);
  });
  it('should render 5 list menu anchor', () => {
    expect(wrapper.find('li').find('Link').length).toEqual(5);
  })
})

describe('<Breadcrumbs />', () => {
  const wrapper = shallow(<Breadcrumbs />);
  it('renders <Breadcrumbs />', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders <Breadcrumbs /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('Check h1 text should be "Admin"', () => {
    expect(wrapper.find('h1').text()).toBe('Admin');
  })
  it('Check list active should be "Data"', () => {
    expect(wrapper.find('li.active').text()).toBe('Data');
  });
  it('Check ol li', () => {
    expect(wrapper.find('ol').childAt(0).type()).toBe('li');
  })
})

describe('<Header />', () => {
  const wrapper = shallow(<Header />);
  it('renders <Header />', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders <Header /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('List menu should be 2', () => {
    expect(wrapper.find('.add').length).toEqual(2);
  });
  it('Link hasClass add-trigger', () => {
    expect(wrapper.find('.add-trigger').length).toEqual(2);
  });
  it('#menuToggle with tag p and class menutoggle', () => {
    expect(wrapper.find('#menuToggle').hasClass('menutoggle')).toBe(true);
  })
})

describe('<Dashboard />', () => {
  const wrapper = shallow(<Dashboard />);
  it('renders <Dashboard />', () => {
    expect(wrapper.exists()).toBe(true);
  });
})

describe('<News />', () => {
  const wrapper = shallow(<News />);
  it('renders <News />', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<NewsItem />', () => {
  const wrapper = shallow(<NewsItem />);
  it('renders <NewsItem />', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<NewsAdd />', () => {
  const wrapper = shallow(<NewsAdd />);
  it('renders <NewsAdd />', () => {
    expect(wrapper.exists()).toBe(true);
  });
  // it('should render without throwing an error', () => {
  //   //expect(wrapper.html()).toEqual('<div></div>');
  //   expect(
  //     shallow(
  //         <Provider store={store}>
  //             <NewsAdd />
  //         </Provider>
  //     ).html()).toEqual('<div></div>');
  // });
});

describe('<NewsEdit />', () => {
  const wrapper = shallow(<NewsEdit />);
  it('renders <NewsEdit />', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<News /> Actions', () => {
  it('Actions loadNews should return type LOAD_NEWS and same datas', () => {
    let news = [];
    const expectedAction = {
      type: types.LOAD_NEWS,
      news
    }
    expect(newsActions.loadDatas(news)).toEqual(expectedAction);
  })
  it('Áctions addNews should return type ADD_NEWS and same datas', () => {
    let post = [];
    const expectedAction = {
      type: types.ADD_NEWS,
      post
    }
    expect(newsActions.addPost(post)).toEqual(expectedAction);
  })
  it('Áctions editNews should return type EDIT_NEWS and same datas', () => {
    let post = [];
    const expectedAction = {
      type: types.EDIT_NEWS,
      post
    }
    expect(newsActions.editPost(post)).toEqual(expectedAction);
  })
  it('Áctions removeNews should return type REMOVE_NEWS and same datas', () => {
    let index = [];
    const expectedAction = {
      type: types.REMOVE_NEWS,
      index
    }
    expect(newsActions.removePost(index)).toEqual(expectedAction);
  })
})

describe('<News /> Reducer', () => {
  it('Should return default state', () => {
    const newState = newsReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('Should return new state if receiving type LOAD_NEWS', () => {
    const news = [];
    const newState = newsReducer(undefined, {
      type: types.LOAD_NEWS,
      news 
    });
    expect(newState).toEqual(news); 
  });
  it('Should return new state if receiving type ADD_NEWS', () => {
    const post = [];
    const newState = newsReducer(undefined, {
      type: types.ADD_NEWS,
      post 
    });
    expect(newState).toEqual([post]); 
  });
  it('Should return new state if receiving type EDIT_NEWS', () => {
    const post = [];
    const newState = newsReducer(undefined, {
      type: types.EDIT_NEWS,
      post 
    });
    expect(newState).toEqual([post]); 
  });
  it('Should return new state if receiving type REMOVE_NEWS', () => {
    const index = [];
    const newState = newsReducer(undefined, {
      type: types.REMOVE_NEWS,
      index 
    });
    expect(newState).toEqual(index); 
  });
});

describe('<Member />', () => {
  const wrapper = shallow(<Member />);
  it('renders <Member />', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<MemberAdd />', () => {
  const wrapper = shallow(<MemberAdd />);
  it('renders <MemberAdd />', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<MemberEdit />', () => {
  const wrapper = shallow(<MemberEdit />);
  it('renders <MemberEdit />', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<Member /> Actions', () => {
  it('Actions loadMember should return type LOAD_MEMBER and same datas', () => {
    let datas = [];
    const expectedAction = {
      type: types.LOAD_MEMBER,
      datas
    }
    expect(memberActions.loadMember(datas)).toEqual(expectedAction);
  })
  it('Áctions addMember should return type ADD_MEMBER and same datas', () => {
    let post = [];
    const expectedAction = {
      type: types.ADD_MEMBER,
      post
    }
    expect(memberActions.addMember(post)).toEqual(expectedAction);
  })
  it('Áctions editMember should return type EDIT_MEMBER and same datas', () => {
    let post = [];
    const expectedAction = {
      type: types.EDIT_MEMBER,
      post
    }
    expect(memberActions.editMember(post)).toEqual(expectedAction);
  })
  it('Áctions removeMember should return type REMOVE_MEMBER and same datas', () => {
    let index = [];
    const expectedAction = {
      type: types.REMOVE_MEMBER,
      index
    }
    expect(memberActions.removeMember(index)).toEqual(expectedAction);
  })
})

describe('<Member /> Reducer', () => {
  it('Should return default state', () => {
    const newState = memberReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('Should return new state if receiving type LOAD_MEMBER', () => {
    const datas = [];
    const newState = memberReducer(undefined, {
      type: types.LOAD_MEMBER,
      datas 
    });
    expect(newState).toEqual(datas); 
  });
  it('Should return new state if receiving type ADD_MEMBER', () => {
    const post = [];
    const newState = memberReducer(undefined, {
      type: types.ADD_MEMBER,
      post 
    });
    expect(newState).toEqual([post]); 
  });
  it('Should return new state if receiving type EDIT_MEMBER', () => {
    const post = [];
    const newState = memberReducer(undefined, {
      type: types.EDIT_MEMBER,
      post 
    });
    expect(newState).toEqual([post]); 
  });
  it('Should return new state if receiving type REMOVE_MEMBER', () => {
    const index = [];
    const newState = memberReducer(undefined, {
      type: types.REMOVE_MEMBER,
      index 
    });
    expect(newState).toEqual(index); 
  });
});

describe('<Photo />', () => {
  const wrapper = shallow(<Photo />);
  const photo = {
    loading: false, 
    photo: undefined
  };
  const storeWrapper = shallow(<Provider store={store}><Photo {...photo}/></Provider>);
  it('renders <Photo />', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should render without throwing an error', () => {
    expect(storeWrapper).toMatchSnapshot();
  });
});

describe('<Photo /> Actions', () => {
  it('Actions should return type LOAD_PHOTO and same datas', () => {
    let datas = [{
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952'
    }];
    const expectedAction = {
      type: types.LOAD_PHOTO,
      datas
    }
    expect(photoActions.loadPhoto(datas)).toEqual(expectedAction);
  })
  it('Actions should return type PHOTO_LOADING', () => {

    expect(photoActions.setPhotoLoading()).toEqual({"type": "PHOTO_LOADING"});
  });
})

describe('startLoadPhoto Actions', () => {
  beforeEach(function () {
    moxios.install();
  });
  afterEach(function () {
    moxios.uninstall();
  });
  it('creates LOAD_PHOTO after successfuly fetching data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {photo: [], loading: false},
      });
    });
    const expectedActions = [
      {
        type: types.PHOTO_LOADING
      },
      {
        datas: {
          photo: [], 
          loading: false
        }, 
        type: types.LOAD_PHOTO
      }
    ];
    const store = mockStore({ datas: {} })
    return store.dispatch(photoActions.startLoadPhoto(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('<Photo /> Reducer', () => {
  it('Should return default state', () => {
    const newState = photoReducer(undefined, {});
    expect(newState).toEqual({"loading": false, "photo": []});
  });
  it('Should return new state if receiving type LOAD_PHOTO', () => {
    const initialState = {
      photo: [],
      loading: false
    }
    let state = {};
    const posts = {
      loading: false, 
      photo: undefined
    };
    const newState = photoReducer(state = initialState, {
      type: types.LOAD_PHOTO,
      posts 
    });
    expect(newState).toEqual(posts); 
  });
  it('Should return new state if receiving type PHOTO_LOADING', () => {
    const initialState = {
      photo: [],
      loading: false
    }
    let state = {};
    const posts = {
      loading: true, 
      photo: []
    };
    const newState = photoReducer(state = initialState, {
      type: types.PHOTO_LOADING,
      posts 
    });
    expect(newState).toEqual(posts); 
  });
});

describe('<Comment />', () => {
  const wrapper = shallow(<Comment />);
  const comment = {
    loading: false, 
    comment: undefined
  };
  const storeWrapper = shallow(<Provider store={store}><Comment {...comment}/></Provider>);
  it('renders <Comment />', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should render without throwing an error', () => {
    expect(storeWrapper).toMatchSnapshot();
  });
});

describe('<Comment /> Actions', () => {
  it('Actions should return type LOAD_COMMENT and same datas', () => {
    let datas = [{
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    }];
    const expectedAction = {
      type: types.LOAD_COMMENT,
      datas
    }
    expect(commentActions.loadComment(datas)).toEqual(expectedAction);
  })
  it('Actions should return type COMMENT_LOADING', () => {

    expect(commentActions.setCommentLoading()).toEqual({"type": "COMMENT_LOADING"});
  })
})

describe('startLoadComment Actions', () => {
  beforeEach(function () {
    moxios.install();
  });
  afterEach(function () {
    moxios.uninstall();
  });
  it('creates LOAD_COMMENT after successfuly fetching data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {comment: [], loading: false},
      });
    });
    const expectedActions = [
      {
        type: types.COMMENT_LOADING
      },
      {
        datas: {
          comment: [], 
          loading: false
        }, 
        type: types.LOAD_COMMENT
      }
    ];
    const store = mockStore({ datas: {} })
    return store.dispatch(commentActions.startLoadComment()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('<Comment /> Reducer', () => {
  it('Should return default state', () => {
    const newState = commentReducer(undefined, {});
    expect(newState).toEqual({"loading": false, "comment": []});
  });
  it('Should return new state if receiving type LOAD_COMMENT', () => {
    const posts = {
      loading: false, 
      comment: undefined
    };
    const newState = commentReducer(undefined, {
      type: types.LOAD_COMMENT,
      posts 
    });
    expect(newState).toEqual(posts); 
  });
  it('Should return new state if receiving type COMMENT_LOADING', () => {
    const posts = {
      loading: true, 
      comment: []
    };
    const newState = commentReducer(undefined, {
      type: types.COMMENT_LOADING,
      posts 
    });
    expect(newState).toEqual(posts); 
  });
});

describe('Category actions', () => {
  it('Actions should return same value if receiving type LOAD_CATEGORY', () => {
    let data = ['Technology', 'Sport', 'Business', 'Auto'];
    const expectedAction = {
      type: types.LOAD_CATEGORY,
      data
    }
    expect(categoryActions.loadCategory(data)).toEqual(expectedAction);
  });
});

describe('Category Reducer', () => {
  it('Should return default state', () => {
    const newState = categoryReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('Should return new state if receiving type LOAD_CATEGORY', () => {
    const posts = [];
    const newState = categoryReducer(undefined, {
      type: types.LOAD_CATEGORY,
      posts 
    });
    expect(newState).toEqual(undefined); 
  });
});
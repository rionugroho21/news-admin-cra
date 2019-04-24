import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import axios from 'axios';

const mockStore = configureMockStore();
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

import { LOAD_MEMBER, ADD_MEMBER, EDIT_MEMBER, REMOVE_MEMBER, LOAD_NEWS, ADD_NEWS, EDIT_NEWS, REMOVE_NEWS, LOAD_PHOTO, PHOTO_LOADING, LOAD_COMMENT, COMMENT_LOADING, LOAD_CATEGORY, LOAD_RATES } from './redux/types';
//Action
import { loadDatas, addPost, editPost, removePost } from './redux/actions/newsActions';
import { loadMember, addMember, editMember, removeMember } from './redux/actions/memberActions';
import { loadCategory } from './redux/actions/categoryActions';
import { loadComment, setCommentLoading } from './redux/actions/commentActions';
import { loadPhoto, setPhotoLoading } from './redux/actions/photoActions';
//import { loadRates, startLoadingRates } from './redux/actions/countryActions';

//Reducer
import photoReducer from './redux/reducers/photoReducers';
import commentReducer from './redux/reducers/commentReducers';
import categoryReducer from './redux/reducers/categoryReducers';
import newsReducer from './redux/reducers/newsReducers';
import memberReducer from './redux/reducers/memberReducers';
//import countryReducer from './redux/reducers/countryReducers';

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
      type: LOAD_NEWS,
      news
    }
    expect(loadDatas(news)).toEqual(expectedAction);
  })
  it('Áctions addNews', () => {
    let post = [];
    const expectedAction = {
      type: ADD_NEWS,
      post
    }
    expect(addPost(post)).toEqual(expectedAction);
  })
  it('Áctions editNews', () => {
    let post = [];
    const expectedAction = {
      type: EDIT_NEWS,
      post
    }
    expect(editPost(post)).toEqual(expectedAction);
  })
  it('Áctions removeNews', () => {
    let index = [];
    const expectedAction = {
      type: REMOVE_NEWS,
      index
    }
    expect(removePost(index)).toEqual(expectedAction);
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
      type: LOAD_NEWS,
      news 
    });
    expect(newState).toEqual(news); 
  });
  it('Should return new state if receiving type ADD_NEWS', () => {
    const post = [];
    const newState = newsReducer(undefined, {
      type: ADD_NEWS,
      post 
    });
    expect(newState).toEqual([post]); 
  });
  it('Should return new state if receiving type EDIT_NEWS', () => {
    const post = [];
    const newState = newsReducer(undefined, {
      type: EDIT_NEWS,
      post 
    });
    expect(newState).toEqual([post]); 
  });
  it('Should return new state if receiving type REMOVE_NEWS', () => {
    const index = [];
    const newState = newsReducer(undefined, {
      type: REMOVE_NEWS,
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
      type: LOAD_MEMBER,
      datas
    }
    expect(loadMember(datas)).toEqual(expectedAction);
  })
  it('Áctions addMember', () => {
    let post = [];
    const expectedAction = {
      type: ADD_MEMBER,
      post
    }
    expect(addMember(post)).toEqual(expectedAction);
  })
  it('Áctions editMember', () => {
    let post = [];
    const expectedAction = {
      type: EDIT_MEMBER,
      post
    }
    expect(editMember(post)).toEqual(expectedAction);
  })
  it('Áctions removeMember', () => {
    let index = [];
    const expectedAction = {
      type: REMOVE_MEMBER,
      index
    }
    expect(removeMember(index)).toEqual(expectedAction);
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
      type: LOAD_MEMBER,
      datas 
    });
    expect(newState).toEqual(datas); 
  });
  it('Should return new state if receiving type ADD_MEMBER', () => {
    const post = [];
    const newState = memberReducer(undefined, {
      type: ADD_MEMBER,
      post 
    });
    expect(newState).toEqual([post]); 
  });
  it('Should return new state if receiving type EDIT_MEMBER', () => {
    const post = [];
    const newState = memberReducer(undefined, {
      type: EDIT_MEMBER,
      post 
    });
    expect(newState).toEqual([post]); 
  });
  it('Should return new state if receiving type REMOVE_MEMBER', () => {
    const index = [];
    const newState = memberReducer(undefined, {
      type: REMOVE_MEMBER,
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
      type: LOAD_PHOTO,
      datas
    }
    expect(loadPhoto(datas)).toEqual(expectedAction);
  })
  it('Actions should return type PHOTO_LOADING', () => {

    expect(setPhotoLoading()).toEqual({"type": "PHOTO_LOADING"});
  })
})

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
      type: LOAD_PHOTO,
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
      type: PHOTO_LOADING,
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
      type: LOAD_COMMENT,
      datas
    }
    expect(loadComment(datas)).toEqual(expectedAction);
  })
  it('Actions should return type COMMENT_LOADING', () => {

    expect(setCommentLoading()).toEqual({"type": "COMMENT_LOADING"});
  })
})

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
      type: LOAD_COMMENT,
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
      type: COMMENT_LOADING,
      posts 
    });
    expect(newState).toEqual(posts); 
  });
});

describe('Category actions', () => {
  it('Actions should return same value if receiving type LOAD_CATEGORY', () => {
    let data = ['Technology', 'Sport', 'Business', 'Auto'];
    const expectedAction = {
      type: LOAD_CATEGORY,
      data
    }
    expect(loadCategory(data)).toEqual(expectedAction);
  })
})

describe('Category Reducer', () => {
  it('Should return default state', () => {
    const newState = categoryReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('Should return new state if receiving type LOAD_CATEGORY', () => {
    const posts = [];
    const newState = categoryReducer(undefined, {
      type: LOAD_CATEGORY,
      posts 
    });
    expect(newState).toEqual(undefined); 
  });
});

// describe('Country Reducer', () => {
//   it('Should return default state', () => {
//     const newState = countryReducer(undefined, {});
//     expect(newState).toEqual([]);
//   });
//   it('Should return new state if receiving type LOAD_RATES', () => {
//     const posts = [];
//     const newState = countryReducer(undefined, {
//       type: LOAD_RATES,
//       posts 
//     });
//     expect(newState).toEqual(undefined); 
//   });
// });
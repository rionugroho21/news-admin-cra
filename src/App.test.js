import React from 'react';
import {shallow, mount, render} from 'enzyme';

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

import { LOAD_PHOTO, PHOTO_LOADING, LOAD_COMMENT, COMMENT_LOADING } from './redux/types';
//Action
import { startLoadingNews } from './redux/actions/newsActions';
//Reducer
import photoReducer from './redux/reducers/photoReducers';
import commentReducer from './redux/reducers/commentReducers';
import categoryReducer from './redux/reducers/categoryReducers';
import countryReducer from './redux/reducers/countryReducers';
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
});

describe('<NewsEdit />', () => {
  const wrapper = shallow(<NewsEdit />);
  it('renders <NewsEdit />', () => {
    expect(wrapper.exists()).toBe(true);
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

describe('<Photo />', () => {
  const wrapper = shallow(<Photo />);
  it('renders <Photo />', () => {
    expect(wrapper.exists()).toBe(true);
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
  it('renders <Comment />', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<Comment /> Reducer', () => {
  it('Should return default state', () => {
    const newState = commentReducer(undefined, {});
    expect(newState).toEqual({"loading": false, "comment": []});
  });
  it('Should return new state if receiving type LOAD_COMMENT', () => {
    const initialState = {
      comment: [],
      loading: false
    }
    let state = {};
    const posts = {
      loading: false, 
      comment: undefined
    };
    const newState = commentReducer(state = initialState, {
      type: LOAD_COMMENT,
      posts 
    });
    expect(newState).toEqual(posts); 
  });
  it('Should return new state if receiving type COMMENT_LOADING', () => {
    const initialState = {
      comment: [],
      loading: false
    }
    let state = {};
    const posts = {
      loading: true, 
      comment: []
    };
    const newState = commentReducer(state = initialState, {
      type: COMMENT_LOADING,
      posts 
    });
    expect(newState).toEqual(posts); 
  });
});
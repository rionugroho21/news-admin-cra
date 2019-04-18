import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
Enzyme.configure({adapter: new Adapter()});

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

//Action
import { startLoadingNews } from './redux/actions/newsActions';

describe('<App />', () => {
  it('renders App without crashing', () => {
    shallow(<App />);
  });
});

describe('<Aside />', () => {
  const wrapper = shallow(<Aside />);
  it('should has .navbar-toggler class', () => {
    const search = wrapper.find('button');
    expect(search.hasClass('navbar-toggler')).toBe(true);
  });
  it('renders <Aside />', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('should render 5 list menu anchor', () => {
    expect(wrapper.find('li').find('Link').length).toEqual(5);
  })
})

describe('<Breadcrumbs />', () => {
  const wrapper = shallow(<Breadcrumbs />);
  it('renders <Breadcrumbs />', () => {
    expect(wrapper.exists()).toBe(true);
  });
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
  it('List menu should be 2', () => {
    expect(wrapper.find('.add').length).toEqual(2);
  })
  it('Link hasClass add-trigger', () => {
    expect(wrapper.find('.add-trigger').length).toEqual(2);
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

describe('<NewsAdd />', () => {
  const wrapper = shallow(<NewsAdd />);
  it('renders <NewsAdd />', () => {
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

describe('<Photo />', () => {
  const wrapper = shallow(<Photo />);
  it('renders <Photo />', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<Comment />', () => {
  const wrapper = shallow(<Comment />);
  it('renders <Comment />', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
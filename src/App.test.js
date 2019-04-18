import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

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

Enzyme.configure({adapter: new Adapter()});

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
  it('should render list 5 anchor', () => {
    expect(wrapper.find('li').find('Link').length).toEqual(5);
  })
})

describe('<Breadcrumbs />', () => {
  const wrapper = shallow(<Breadcrumbs />);
  it('renders <Breadcrumbs />', () => {
    expect(wrapper.exists()).toBe(true);
  });
})

describe('<Header />', () => {
  const wrapper = shallow(<Header />);
  it('renders <Header />', () => {
    expect(wrapper.exists()).toBe(true);
  });
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
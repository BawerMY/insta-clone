import { useRef, useState } from 'react';

import './App.css';
import Icon from './components/Icon'
import Avatar from './components/Avatar'
import UserProfileData from './components/UserProfileData';
import SavedIGStories from './components/SavedIGStories';
import StoryTray from './components/StoryTray';
import UserHeader from './components/UserHeader';
import Post from './components/Post';
import TapNaviBar from './components/TabNaviBar';
import PromoBanner from './components/PromoBanner'
import NavigationBarTopHome from './components/NavigationBarTopHome';
import NavigationBarTopProfile from './components/NavigationBarTopProfile';
import NavigationBarTopSelfProfile from './components/NavigationBarTopSelfProfile';
import NavigationBarBottom from './components/NavigationBarBottom';
import ButtonGroup from './components/ButtonGroup';
import UserProfile from './components/UserProfile';

function App() {
  const data = require('./data.json')
  const [dark, useDark] = useState(true)
  const [page, setPage] = useState(0)
  function Story(props) {
    return (
      <div className="flex flex-col gap-1 items-center min-w-[72px] pt-[3px]">
        <div className="rounded-full"><Avatar type='feed' size={72} prop='on' /></div>
        <div>{props.username}</div>
      </div>
    )
}
var stories = data.stories.map(story => <Story username={story.username} key={story.username} />)

  return (
    <div className={"text-[14px] min-h-screen w-screen overflow-x-hidden max-w-[640px] mb-12 " + (dark ? 'bg-black text-white' : 'bg-white text-black')} >
      {page===0&&//home navbar
      <div className='w-full flex justify-between items-center text-[22px] px-3 py-[5px]'>
        <div className="flex gap-2">
            <div className="instafont">Clonegram</div>
            <Icon name='Arrow Down' state='default' dark={dark ?'yes':'no'} />
        </div>
        <div className="flex items-center gap-6">
            <Icon name='Like' state='default' dark={dark ?'yes':'no'} />
            <Icon name='Messenger' state='default' dark={dark ?'yes':'no'} />
            <Icon name='Add' state='default' dark={dark ?'yes':'no'} />
        </div>
      </div>
      }
      {page===0&&//home
      <>
        <div className="flex overflow-auto pt-1 gap-3">
          <div className="flex flex-col gap-1 items-center min-w-[72px] pt-[3px]">
            <Avatar type='story' size={72} prop='on' />
            <div>me</div>
          </div>
          {stories}
        </div>
        {data.posts.map((post) => <Post key={post.id} username={data.user.username} post={post} prop='on' dark={dark} />)}
      </>
      }
      {page===4&&//selfProfile
        <UserProfile
        user={data.user}
        dark={dark}
        self={true}
        following={false}
        promo={{url:'google.com', title:'Go to shop'}}
        />
      }


      <div className={"w-screen flex px-[15px] justify-between py-3 fixed bottom-0 " + (dark?'bg-black':'bg-white border-[1px] border-[#0000000a]')}>
        <div onClick={() => setPage(0)}><Icon name='Home' state={page===0?'selected':'default'} dark={dark ?'yes':'no'} /></div>
        <div onClick={() => setPage(1)}><Icon name='Search' state={page===1?'selected':'default'} dark={dark ?'yes':'no'} /></div>
        <div onClick={() => setPage(2)}><Icon name='Reels' state={page===2?'selected':'default'} dark={dark ?'yes':'no'} /></div>
        <div onClick={() => setPage(3)}><Icon name='Shop' state={page===3?'selected':'default'} dark={dark ?'yes':'no'} /></div>
        <div onClick={() => setPage(4)}><Avatar type={page===4?'selected':'default'} prop={data.app.multiAccount?'on':'off'} size={24} /></div>
      </div>
    </div>
  );
}

export default App;
//posts or probably reels and homepage and everywhere goes under nav bar bottom fix it maybe put a div whit h(nav bar bottoms h) up to nav bar bottom
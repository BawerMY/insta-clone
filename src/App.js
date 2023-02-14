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
  // if(window.innerWidth > 640) window.resizeTo(640,1000)
  const [dark, useDark] = useState(true)
  const [page, setPage] = useState(1)
  var data = {
    app:{
      multiAccount: false,
    },
    user:{
      username: 'bawer_my',
      verified: true,
      profileImage: 'img url',
      bio:'hi i am bawer :>',
      tags:['frontend', 'developer', 'gaming'],
      followers: ['follower1', 'follower2'],
      followings: ['following1', 'following2'],
      links:['//www.google.com', '//www.google.com'],
      reels:[{r:'reel'}],
      posts: [
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
      ],
      taggedPosts: [
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
        {
          images:['img1', 'img2', 'img3', 'img4', ' img5'],
          username:'bawer_my',
          likes:100,
          comments:[{username:'bawer_my', comment:'hi'}],
          emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
          dateTime:new Date('2023-02-12T02:50:00-00:00'),
          cta:false,
          dark:dark,
          description:'Username Lorem ipsum dolor sit ametddssssssssss',
          sponsored:true
        },
      ],
      stories: [
        {s:'staor'},
        {s:'staor'},
        {s:'staor'},
        {s:'staor'},
        {s:'staor'},
        {s:'staor'},
        {s:'staor'},
      ],
      savedStories:[
        {
          title:'my story',
          stories:{s:'story'},
        },
        {
          title:'my story1',
          stories:{s:'story'},
        },
        {
          title:'my story2',
          stories:{s:'story'},
        },
        {
          title:'my story3',
          stories:{s:'story'},
        },
        {
          title:'my story4',
          stories:{s:'story'},
        },
        {
          title:'my story5',
          stories:{s:'story'},
        },
        {
          title:'my story :}',
          stories:{s:'story'},
        },
      ],
      notifications:['welcome', 'notification1'],
    },
    stories:[
      {username:'bawer_my'},
      {username:'bawer_my2'},
      {username:'bawer_my3'},
      {username:'bawer_my4'},
      {username:'bawer_my5'},
      {username:'bawer_my6'},
      {username:'bawer_my7'},
    ],
    posts:[
      {
        images:['img1', 'img2', 'img3', 'img4', ' img5'],
        username:'bawer_my',
        likes:100,
        comments:[{username:'bawer_my', comment:'hi'}],
        emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
        dateTime:new Date('2023-02-12T02:50:00-00:00'),
        cta:false,
        dark:dark,
        description:'Username Lorem ipsum dolor sit ametddssssssssss',
        sponsored:true
      },
      {
        id:0,
        images:['img1', 'img2', 'img3', 'img4', ' img5'],
        username:'bawer_my',
        likes:100,
        comments:[{username:'bawer_my', comment:'hi'}],
        emojis:[{name:'100', quantity:10},{name:'Fear', quantity:25},],
        dateTime:new Date('2023-02-12T02:50:00-00:00'),
        cta:false,
        dark:dark,
        description:'Username Lorem ipsum dolor sit ametddssssssssss'
      }
  ]
  }


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
    <div className={"text-[14px] min-h-screen w-screen overflow-x-hidden " + (dark ? 'bg-black text-white' : 'bg-white text-black')} >
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
        {data.posts.map((post) => <Post key={post.id} sponsored={post.sponsored} prop='on' images={post.images} username={post.username} likes={post.likes} comments={post.comments} emojis={post.emojis} dateTime={post.dateTime} cta={post.cta} dark={dark} description={post.description} />)}
      </>
      }
      {page===4&&//selfProfile
        <UserProfile
        dark={dark}
        username={data.user.username}
        verified={data.user.verified}
        self={true}
        notifications={data.user.notifications}
        savedStories={data.user.savedStories}
        posts={data.user.posts}
        followers={data.user.followers}
        followings={data.user.followings}
        bio={data.user.bio}
        tags={data.user.tags}
        following={false}
        links={data.user.links}
        reels={data.user.reels}
        taggedPosts={data.user.taggedPosts}
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

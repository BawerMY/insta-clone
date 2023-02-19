// <Post images={['img1', 'img2', 'img3', 'img4', ' img5']} username='bawer_my' likes={100} comments={[{username:'bawer_my', comment:'hi'}]} emojis={[{name:'100', quantity:10},{name:'Fear', quantity:25},]} dateTime={new Date('2023-02-12T02:50:00-00:00')} cta={false} dark={dark} description='Username Lorem ipsum dolor sit ametddssssssssssss, consectetur adipiscing elit, sed do eiusmod tempor incididunt' />

import { useState } from "react";

import Icon from "./Icon";
import Avatar from "./Avatar";
import Emoji from "./Emoji";
import UserHeader from "./UserHeader";

function PostEmoji(props) {
  const [hover, setHover] = useState(false)
  return <div onMouseEnter={setHover(true)} className='w-[14px] h-[14px]' onMouseExit={setHover(false)} key={props.name}><Emoji name={props.name} size='14' /></div>
}

export default function Post(props) {
  const [liked, setLiked] = useState(props.post.likers.includes(props.username))
  const [bookmark, setBookmark] = useState(false)
  const [imgIndex, setImgIndex] = useState(4)
  const [open, setOpen] = useState(false)
  
  const balls = function () {
    var balls = []
    // if imgIndex == 0 or last will be 3 big balls
    // dont working
    for(var i in props.post.images) {
      if(i === imgIndex) {balls.push(<div onClick={() => setImgIndex(i)} key={i} className="bg-[#32B5FF] w-2 h-2 rounded-full"></div>)}
      else if(i === imgIndex-1 || i === imgIndex+1) {balls.push(<div onClick={() => setImgIndex(i)} key={i} className="bg-[#C4C4C4] w-2 h-2 rounded-full"></div>)}
      else if(i === imgIndex-2 || i === imgIndex+2) {balls.push(<div onClick={() => setImgIndex(i)} key={i} className="bg-[#C4C4C4] w-[5px] h-[5px] rounded-full"></div>)}
      else if(i === imgIndex-3 || i === imgIndex+3) {balls.push(<div onClick={() => setImgIndex(i)} key={i} className="bg-[#C4C4C4] w-[3px] h-[3px] rounded-full"></div>)}
    }
    return balls
  }()

  const timeDifference = function () {
    const now = new Date()
    const postDate = props.post.dateTime
    var td = []    
    if(now-postDate > 31540000000) td = [((now-postDate)/31540000000).toPrecision(1), ' year']
    else if(now-postDate > 2628333333.333333) td = [Math.floor((now-postDate)/2628333333.333333), ' month']
    else if(now-postDate > 86410958.904109959) td = [Math.floor((now-postDate)/86410958.904109959), ' day']
    else if(now-postDate > 3600456.621004566) td = [Math.floor((now-postDate)/3600456.621004566), ' hour']
    else if(now-postDate > 60007.6103500761) td = [Math.floor((now-postDate)/60007.6103500761), ' minutes']
    else return 'now'
    return td[0] + td[1]+(td[0] > 1 ? 's':'')    
  }()

  const description = function () {
    if(props.post.description.length < 100) return props.post.description
    else return <>{props.post.description.slice(0, 100)}... <span className="text-[#6E6E6E]">more</span></>
  }()
    return (
      <>
        <UserHeader username={props.post.username} dark={props.post.dark} sponsored={props.post.sponsored} prop={props.prop} />
        <div className="w-screen pb-6">
          <div onDoubleClick={() => {setLiked(true)}} className="w-screen max-w-[640px] h-[100vw] max-h-[640px] bg-slate-700"></div>
          {props.post.cta && <div className="w-screen bg-[#1FA1FF] px-3 py-3 flex justify-between"><span>CTA copy here</span><Icon name='Arrow Right' state='default' dark='yes' /></div>}
          <div className="flex w-screen px-3 py-[10px] items-center">
            <div className="flex-1 flex gap-3">
              <div id="like" onClick={() => setLiked(!liked)}><Icon name={liked ? 'Like Heart' : 'Like'} state='default' dark={liked ? 'no' : (props.dark ? 'yes' : 'no')} /></div>
              <Icon name='Comment' state='default' dark={props.dark ? 'yes' : 'no'} />
              <Icon name='Share' state='default' dark={props.dark ? 'yes' : 'no'} />
            </div>
            {props.post.images.length > 1 && <div className="flex gap-[6px] items-center">{balls}</div>}
            <div className="flex-1">
              <div className="float-right"><div id="like" onClick={() => setBookmark(!bookmark)}><Icon name='Bookmark' state={bookmark ? 'selected' : 'default'} dark={props.dark ? 'yes' : 'no'} /></div></div>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] px-3">
              <div className="font-bold">{props.post.likers.length + (liked?1:0)} Likes</div>
              <div onClick={() => setOpen(!open)}>
                <span className="font-bold">{props.post.username}</span> {open ? props.post.description : description}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Avatar type='default' size={24} prop='off' />
                  <input type="text" className={"placeholder:text-[#6E6E6E] flex-auto focus:outline-none py-2 bg-" + (props.dark ? 'black':'white')} placeholder="Add a comment..." />
                </div>
                <div className="flex gap-[14px] items-center">
                  {props.post.emojis.map((e) => <div className='w-[14px] h-[14px]' key={props.post.emojis.indexOf(e)}><Emoji name={e.name} size='14' /></div>)}
                  <img src={process.env.PUBLIC_URL + "/images/other/Name=Add Reaction, State=default, Dark=no.svg"} alt="add reaction" />
                </div>
            </div>
            <div className="text-[#6E6E6E]">{timeDifference} ago</div>
          </div>
        </div>
      </>
    );
  }

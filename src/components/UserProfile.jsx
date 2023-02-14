import NavigationBarTopProfile from "./NavigationBarTopProfile";
import NavigationBarTopSelfProfile from "./NavigationBarTopSelfProfile";
import Icon from "./Icon";
import Avatar from "./Avatar";
import { useState } from "react";

export default function UserProfile(props) {
    function nr(nr) {
        var newNr = ''
        nr = nr.toString()
        for(var i in nr) {
            newNr += nr[i]
            if((nr.length-i-1)%3 === 0 && (nr.length-i-1)!==0) newNr+=',' 
        }
        return newNr
    }
    const [tab, setTab] = useState(0)
    return (
        <>
            {props.self?//navbartop
            <div className='w-full flex justify-between items-center p-3'>
            <div className="flex gap-2 items-center">
                <b className="text-[22px]">{props.username}</b>
                {props.verified && <img src={process.env.PUBLIC_URL + 'images/other/verified.svg'} alt="verified" />}
                {props.notifications.length > 0 && <div className="bg-[#FE0135] text-white rounded-[10px] text-[12px] px-1">{props.notifications.length <= 10 ?props.notifications.length:'10+'}</div>}
            </div>
            <div className="flex items-center gap-6">
                <Icon name='Add' state='default' dark={props.dark ?'yes':'no'} />
                <Icon name='Burger Menu' state='default' dark={props.dark ?'yes':'no'} />{/*will animate*/}
            </div>
          </div>
          :
        <div className='w-full flex justify-between items-center p-3'>
        <div className="w-[100px]"><Icon name='Arrow Left' state='default' dark={props.dark ?'yes':'no'} /></div>
        <div className="flex gap-2 items-center">
            <b className="text-[22px]">{props.username}</b>
            {props.verified && <img src={process.env.PUBLIC_URL + 'images/other/verified.svg'} alt="verified" />}
        </div>
        <div className="flex items-center gap-6 w-[100px] justify-end">
            <Icon name='Notifications' state='default' dark={props.dark ?'yes':'no'} />
            <Icon name='More' state='default' dark={props.dark ?'yes':'no'} />
        </div>
        </div>
          }

        <div className="w-screen flex items-center pl-[5vw]" >
            <Avatar type='feed' prop='on' size={90} />
            <div className="flex justify-evenly flex-auto" >
                <div className="text-center">
                    <div className="font-bold">{nr(props.posts.length)}</div>
                    <div>posts</div>
                </div>
                <div className='text-center'>
                    <div className="font-bold">{nr(props.followers.length)}</div>
                    <div>followers</div>
                </div>
                <div className='text-center'>
                    <div className="font-bold">{nr(props.followings.length)}</div>
                    <div>following</div>
                </div>
            </div>
        </div>
        <div className="gap-4 flex flex-col my-[12px]">
            <div className="px-3 mt-1.5 text-[13px] flex flex-col gap-[6px]">
                <div className="font-bold">{props.username}</div>
                <div>
                    {props.bio}
                    <span className="text-[#004C8B]">{props.tags.map((tag) => ' #' + tag)}</span>
                    <div className="text-[#004C8B]">{props.links.map((link) =><a href={link}>{link.slice(2)} </a>)}</div>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex ml-3">
                    <div className="z-20"><Avatar type='selected' prop='off' size={26} /></div>
                    <div className="z-10 -translate-x-1/2"><Avatar type='selected' prop='off' size={26} /></div>
                    <div className="z-0 -translate-x-full"><Avatar type='selected' prop='off' size={26} /></div>
                </div>
                <div className="-translate-x-[26px]">
                    <div>followed by <b>{props.followers[0]}{props.followers.length>2?',':' and'} {props.followers[1]}</b></div>
                    {props.followers.length>2&&<div>and other <b>{props.followers.length-2} others</b></div>}
                </div>
            </div>
            <div className="w-[94%] mx-auto gap-[9px] text-[13px] font-bold flex flex-col">
                {props.following&&!props.self&&<div className="bg-[#1FA1FF] leading-4 w-full rounded-[3px] text-center text-white py-[7px]">Follow</div>}
                <div className="flex gap-[6px]">
                <div className={(!props.dark?'bg-white text-black':'bg-[#EFEFEF14] text-white') + " leading-4 h-[30px] flex-auto font-bold rounded-[3px] text-center py-[7px]"}>{props.following&&!props.self?"Message":(props.following?<div className="flex gap-1 justify-center items-center" >Following<div className="border-black border-b-[1.5px] rounded-[1px] border-r-[1.5px] w-[4.95px] h-[4.95px] rotate-45"></div></div>:'Edit Profile')}</div>{/*to fix the down arrows "spessita'" and all self*/}
                {!props.self && <div className={(!props.dark?'bg-white text-black':'bg-[#EFEFEF14] text-white') + " flex-auto leading-4 font-bold rounded-[3px] text-center py-[7px]"}>{props.type === 'not following'?"Subscribe":'Message'}</div>}
                {props.following&&!props.self&& <div className={(!props.dark?'bg-white text-black':'bg-[#EFEFEF14] text-white') + " flex-auto leading-4 font-bold rounded-[3px] text-center py-[7px]"}>Contact</div>}
                <div className={(!props.dark?'bg-white':'bg-[#EFEFEF14]') + " rounded-[3px] w-8 h-[30px] flex justify-center items-center"}>
                    <img src={process.env.PUBLIC_URL + "/images/other/+pearson"+(!props.dark?'Black':'White')+".svg"} alt="+ pearson" />
                </div>
                </div>
            </div>
        </div>
        <div className="flex overflow-auto">
            {props.savedStories.map((story) =>
            <div key={story.title} className="flex flex-col gap-1 items-center min-w-[20vw] pt-[3px]">
                <div className="outline outline-[#C4C4C4] outline-offset-2 outline-1 rounded-full"><Avatar type='default' size={52} prop='off' /></div>
                <div>{story.title}</div>
            </div>
                )}
        </div>
        <div className="flex pt-[18px]">
            <div onClick={() => setTab(0)} className={"border-" + (props.dark?'white':'black') + " py-[8px] flex justify-center flex-auto " + (tab===0&&' border-b-[1px]')}><Icon name='Grid' state={tab===0?'default':'unselected'} dark={props.dark&&tab===0?'yes':'no'} /></div>
                {props.reels && <div onClick={() => setTab(1)} className={"border-" + (props.dark?'white':'black') + " flex py-[8px] justify-center flex-auto " + (tab===1&&' border-b-[1px]')}><Icon name='Reels' state={tab===1?'default':'unselected'} dark={props.dark&&tab===1?'yes':'no'} /></div>}
            <div onClick={() => setTab(2)} className={"border-" + (props.dark?'white':'black') + " flex py-[8px] justify-center flex-auto " + (tab===2&&' border-b-[1px]')}><Icon name='Mentions' state={tab===2?'default':'unselected'} dark={props.dark&&tab===2?'yes':'no'} /></div>
        </div>
        <div className="flex flex-wrap gap-px">
            {tab===0&&props.posts.map((post) => function(post){
                return (
                    <div className="w-[calc((100vw-4px)/3)] h-[calc((100vw-4px)/3)] bg-slate-600"></div>
                )
            }())}
            {tab===1&&props.reels.map((post) => function(post){
                return (
                    <div className="w-[calc((100vw-4px)/3)] h-[calc(60vw)] bg-slate-600"></div>//h-... only for now
                )
            }())}
            {tab===2&&props.posts.map((post) => function(post){
                return (
                    <div className="w-[calc((100vw-4px)/3)] h-[calc((100vw-4px)/3)] bg-slate-600"></div>
                )
            }())}
        </div>



        </>
    )
}
//adatta i post a <Post />(post come componente react) e aggiungi i simboli in alto a destra per indicare se il post e' (piu foto), video o se esiste altro
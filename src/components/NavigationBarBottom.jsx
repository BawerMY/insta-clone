import Icon from "./Icon";
import Avatar from "./Avatar";
import { useState } from "react";

export default function NavigationBarBottom(props) {
    const [tag, setTag] = useState(0)    
    return (
      <div className="w-screen flex px-[15px] justify-between py-3 fixed bottom-0">
        <div onClick={() => setTag(0)}><Icon name='Home' state={tag===0?'selected':'default'} dark={props.dark ?'yes':'no'} /></div>
        <div onClick={() => setTag(1)}><Icon name='Search' state={tag===1?'selected':'default'} dark={props.dark ?'yes':'no'} /></div>
        <div onClick={() => setTag(2)}><Icon name='Reels' state={tag===2?'selected':'default'} dark={props.dark ?'yes':'no'} /></div>
        <div onClick={() => setTag(3)}><Icon name='Shop' state={tag===3?'selected':'default'} dark={props.dark ?'yes':'no'} /></div>
        <div onClick={() => setTag(4)}><Avatar type={tag===4?'selected':'default'} prop='on' size={24} /></div>
      </div>
    );
  }
  
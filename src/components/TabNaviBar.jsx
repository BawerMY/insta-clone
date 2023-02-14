import Icon from "./Icon";

import { useState } from "react";

export default function TapNaviBar(props) {
    const [tab, setTab] = useState(0)
  return (
    <div className="flex">
        <div onClick={() => setTab(0)} className={"border-" + (props.dark?'[#C4C4C4]':'black') + " py-[8px] flex justify-center flex-auto " + (tab===0&&' border-b-[1px]')}><Icon name='Grid' state={props.dark?'unselected':'default'} dark='no' /></div>
        {props.reels && <div onClick={() => setTab(1)} className={"border-" + (props.dark?'[#C4C4C4]':'black') + " flex py-[8px] justify-center flex-auto " + (tab===1&&' border-b-[1px]')}><Icon name='Reels' state={props.dark?'unselected':'default'} dark='no' /></div>}
        <div onClick={() => setTab(2)} className={"border-" + (props.dark?'[#C4C4C4]':'black') + " flex py-[8px] justify-center flex-auto " + (tab===2&&' border-b-[1px]')}><Icon name='Mentions' state={props.dark?'unselected':'default'} dark='no' /></div>
    </div>
  );
}
/// WILL TRANSFER ON PROFILE PAGE
import Icon from "./Icon";

export default function ButtonGroup(props) {
    return (
        <div className="w-[94%] mx-auto gap-[9px] text-[13px] font-bold flex flex-col">
            {props.type==='not following'&&<div className="bg-[#1FA1FF] leading-4 w-full rounded-[3px] text-center text-white py-[7px]">Follow</div>}
            <div className="flex gap-[6px]">
            <div className={(props.dark?'bg-white text-black':'bg-[#EFEFEF14] text-white') + " leading-4 h-[30px] flex-auto font-bold rounded-[3px] text-center py-[7px]"}>{props.type === 'not following'?"Message":(props.type === 'following'?<div className="flex gap-1 justify-center items-center" >Following<div className="border-black border-b-[1.5px] rounded-[1px] border-r-[1.5px] w-[4.95px] h-[4.95px] rotate-45"></div></div>:'Edit Profile')}</div>{/*to fix the down arrows "spessita'" and all self*/}
            {props.type!=='self' && <div className={(props.dark?'bg-white text-black':'bg-[#EFEFEF14] text-white') + " flex-auto leading-4 font-bold rounded-[3px] text-center py-[7px]"}>{props.type === 'not following'?"Subscribe":'Message'}</div>}
            {props.type==='not following' && <div className={(props.dark?'bg-white text-black':'bg-[#EFEFEF14] text-white') + " flex-auto leading-4 font-bold rounded-[3px] text-center py-[7px]"}>Contact</div>}
            <div className={(props.dark?'bg-white':'bg-[#EFEFEF14]') + " rounded-[3px] w-8 h-[30px] flex justify-center items-center"}>
                <img src={process.env.PUBLIC_URL + "/images/other/+pearson"+(props.dark?'Black':'White')+".svg"} alt="+ pearson" />
            </div>

            </div>
        </div>
    )
}
  
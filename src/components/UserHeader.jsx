import Avatar from "./Avatar";

export default function UserHeader(props) {
  const points = () => {
    return [0, 1, 2].map(point => <div key={point} className={"w-[3px] h-[3px] rounded-full " + (props.dark ? 'bg-white' : 'bg-black')}></div>)
  }
    return (
      <div className="flex w-screen px-3 py-4 items-center gap-2">
        <Avatar prop={props.prop} size={36} type='feed' />
        <div>
          <div className="text-[12px] font-bold">{props.username}</div>
          {props.sponsored && <div className="text-[11px]">Sponsored</div>}
        </div>
        <div className="ml-auto flex gap-[2.5px] mr-[5px]">
          {points()}
        </div>
      </div>
    );
  }
  
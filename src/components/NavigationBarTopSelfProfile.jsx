import Icon from "./Icon";

export default function NavigationBarTopProfile(props) {
    return (
      <div className='w-full flex justify-between items-center p-3'>
        <div className="flex gap-2 items-center">
            <b className="text-[16px]">{props.username}</b>
            {props.verified && <img src={process.env.PUBLIC_URL + 'images/other/verified.svg'} alt="verified" />}
            {props.notifications.length > 0 && <div className="bg-[#FE0135] text-white rounded-[10px] text-[12px] px-1">{props.notifications.length <= 10 ?props.notifications.length:'10+'}</div>}
        </div>
        <div className="flex items-center gap-6">
            <Icon name='Add' state='default' dark={props.dark ?'yes':'no'} />
            <Icon name='Burger Menu' state='default' dark={props.dark ?'yes':'no'} />{/*will animate*/}
        </div>
      </div>
    );
  }
  
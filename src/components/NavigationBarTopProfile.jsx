import Icon from "./Icon";

export default function NavigationBarTopProfile(props) {
    return (
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
    );
  }
  
import Icon from "./Icon";

export default function NavigationBarTopHome(props) {
    return (
      <div className='w-full flex justify-between items-center text-[22px] px-3 py-[5px]'>
        <div className="flex gap-2">
            <div className="instafont">Clonegram</div>
            <Icon name='Arrow Down' state='default' dark={props.dark ?'yes':'no'} />
        </div>
        <div className="flex items-center gap-6">
            <Icon name='Like' state='default' dark={props.dark ?'yes':'no'} />
            <Icon name='Messenger' state='default' dark={props.dark ?'yes':'no'} />
            <Icon name='Add' state='default' dark={props.dark ?'yes':'no'} />
        </div>
      </div>
    );
  }
  
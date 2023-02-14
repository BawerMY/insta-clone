export default function Avatar(props) {
    return (
      <div className={'relative flex flex-col justify-center gap-1 items-center w-[' +props.size+ 'px] h-[' +((props.type!=='default' || props.type!=='selected') && props.on==='on' && props.size)+ 'px]'} >
        {props.type === 'feed' && props.prop === 'on' && <img className={"absolute w-[" +props.size+ "px] h-[" +props.size+ "px]"} src={process.env.PUBLIC_URL + "/images/avatar pieces/circle.svg"} alt='story ring' />}
        <div className={'relative bg-gray-500 rounded-full ' + ((props.type === 'feed' || props.type === 'story') ? 'w-[' +props.size*0.8421+ 'px] h-[' +props.size*0.8421+ 'px] border-[0.5px] border-[#DDDDDD] ' : 'w-[' +props.size+ 'px] h-[' +props.size+ 'px] ') + (props.type === 'selected' && ' border-[1px] border-black' )}>
            {props.type === 'story' && <img className={"absolute -right-["+props.size/30+"px] -bottom-["+props.size/30+"px] w-["+props.size/3+"px] h-["+props.size/3+"px]"} src={process.env.PUBLIC_URL + "/images/avatar pieces/plus.svg"} alt='+' />}
        </div>
        {(props.type === 'selected' || props.type === 'default') && props.prop === 'on' && <div className={"bg-[#FE0135] w-["+props.size/6+"px] h-["+props.size/6+"px] rounded-full"}></div>}
      </div>
    );
  }
  
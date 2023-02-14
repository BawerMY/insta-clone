// <Icon name='Shop' state='default' dark={props.dark ?'yes':'no'} />

export default function Icon(props) {
  return (
    <div className="w-[24px] h-[24px] flex justify-center items-center" >
        <img src={process.env.PUBLIC_URL + "/images/icons/Name="+props.name+", State="+props.state+", Dark="+props.dark+".svg"} className="w-[20px] h-[20px]" />
    </div>
  );
}

export default function Emoji(props) {
    return <img src={process.env.PUBLIC_URL + "/images/emojis/Emoji type="+props.name+".svg"} className={"w-["+props.size+"px] h-["+props.size+"px]"} />
}
  
//<PromoBanner title='Shop now' url='google.com' img='img' />
import Icon from "./Icon"

export default function PromoBanner(props) {
    return (
        <div onClick={() => window.open('//'+props.url, '_blank').focus()} className="bg-[#B8CCB5] p-2 rounded-lg w-[90%] mx-auto h-[48px] flex items-center gap-3">
            <img className="w-[33px] h-[33px] rounded-[4px] bg-slate-500" src="img" alt="img" />
            <div className="flex gap-[3px] flex-auto flex-col text-[12px] leading-[14px]">
                <b>{props.title}</b>
                <span>Go to {props.url}</span>
            </div>
            <Icon name='Arrow Right' state='default' dark='no' />
        </div>
    )
}

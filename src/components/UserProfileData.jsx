import Avatar from "./Avatar";

export default function UserProfileData(props) {
    function nr(nr) {
        var newNr = ''
        nr = nr.toString()
        for(var i in nr) {
            newNr += nr[i]
            if((nr.length-i-1)%3 === 0 && (nr.length-i-1)!==0) newNr+=',' 
        }
        return newNr
    }
    return (
      <div className="w-screen flex items-center pl-[5vw]" >
        <Avatar type='feed' prop='on' size={90} />
        <div className="flex justify-evenly flex-auto" >
            <div className="text-center">
                <div className="font-bold">{nr(props.posts)}</div>
                <div>posts</div>
            </div>
            <div className='text-center'>
                <div className="font-bold">{nr(props.followers)}</div>
                <div>followers</div>
            </div>
            <div className='text-center'>
                <div className="font-bold">{nr(props.following)}</div>
                <div>following</div>
            </div>
        </div>
      </div>
    );
  }
  
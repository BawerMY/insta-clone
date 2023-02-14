import Avatar from "./Avatar";

export default function StoryTray(props) {
    function Story(props) {
        return (
          <div className="flex flex-col gap-1 items-center min-w-[21.5vw] pt-[3px]">
            <div className="outline outline-[#C4C4C4] outline-offset-2 outline-1 rounded-full"><Avatar type='feed' size={72} prop='on' /></div>
            <div>{props.username}</div>
          </div>
        )
    }
    const stories = props.stories.map(story => <Story username={story.username} key={story.username} />)

    return (
      <div className="flex overflow-auto">
        <div className="flex flex-col gap-1 items-center min-w-[21.5vw] pt-[3px]">
            <Avatar type='story' size={72} prop='on' />
            <div>me</div>
          </div>
        {stories}
      </div>
    );
  }
  
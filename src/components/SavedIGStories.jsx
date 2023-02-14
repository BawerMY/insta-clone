import Avatar from "./Avatar";

export default function SavedIGStories(props) {
    function SavedStory(props) {
        return (
          <div className="flex flex-col gap-1 items-center min-w-[20vw] pt-[3px]">
            <div className="outline outline-[#C4C4C4] outline-offset-2 outline-1 rounded-full"><Avatar type='default' size={52} prop='off' /></div>
            <div>{props.username}</div>
          </div>
        )
    }
    const stories = props.stories.map(story => <SavedStory username={story.username} key={story.username} />)

    return (
      <div className="flex overflow-auto">
        {stories}
      </div>
    );
  }
  
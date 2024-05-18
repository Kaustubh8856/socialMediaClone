import "./stories.scss";

const stories = [
  {
    id: 1,
    name: "KSW",
    img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    name: "KSW",
    img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    name: "KSW",
    img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    name: "KSW",
    img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];
const Stories = () => {
  return <div className="stories">
    {stories.map(story => ( <div className="story">
        <img src={story.img} alt="" />
        <span>{story.name}</span>
    </div> ))}
  </div>;
};

export default Stories;

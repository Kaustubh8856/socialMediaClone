import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <span>KSW</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <span>KSW</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <p>
                <span>KSW</span> changed their cover picture.
              </p>
            </div>
            <span>1min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <p>
                <span>KSW</span> liked your photo.
              </p>
            </div>
            <span>5min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <p>
                <span>KSW</span> commented on your post.
              </p>
            </div>
            <span> 35min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <p>
                <span>KSW</span> replied to you.
              </p>
            </div>
            <span>1hr ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <div className="online"></div>
              <p>
                <span>KSW</span>
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <div className="online"></div>
              <p>
                <span>KSW</span>
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <div className="online"></div>
              <p>
                <span>KSW</span>
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
              />
              <div className="online"></div>
              <p>
                <span>KSW</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RightBar;

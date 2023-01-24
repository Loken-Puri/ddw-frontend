import React from 'react'

function FriendCard() {

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="friend-box-div">
            <div className="friend-photo-div">
              <img src="http://api.randomuser.me/portraits/men/49.jpg" alt="Scott Stevens" className="friend-photo" />
            </div>
            <div className="friend-description">
                <span className="friend-name">Lucas Pfister</span><br/>
                <span className="friend-title">Germany</span><br/>
                <span className="other-thing">Other Thing</span><br/>
                <span className="another-thing">Another Thing</span><br/>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="friend-box-div">
            <div className="friend-photo-div">
              <img src="http://api.randomuser.me/portraits/men/49.jpg" alt="Scott Stevens" className="friend-photo" />
            </div>
            <div className="friend-description">
                <span className="friend-name">Lokendra Puri</span><br/>
                <span className="friend-title">Nepal</span><br/>
                <span className="other-thing">Other Thing</span><br/>
                <span className="another-thing">Another Thing</span><br/>
            </div>
          </div>
        </li>
      </ul> 
    </div>
  )
}

export default FriendCard
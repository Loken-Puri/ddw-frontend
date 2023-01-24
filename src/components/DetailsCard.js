import React from 'react'

function DetailsCard() {
  return (
    <div className='details-card-page-div'>
        <div className='details-card-div'>
            <div className='details-card-title-div'>
                <h1>... Sharkfeeding in South Africa</h1>
            </div>
            <div className='details-card-photo-div'>
                <img className='details-card-photo' src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3300&q=80"/>
            </div>
            <div className='details-card-info-div'>
                <p className='details-card-info-location'>South Africa</p>
                <p className='details-card-info-description'>An activity similar to extreme sports when it is performed as part of a dive, it allows people to get close to these large predators and generates strong sensations.</p>
            </div>
            <div className='details-card-comments-div'>
                <p className='details-card-text-comment'>Lorem Ipsum</p>
                
            </div>
            <div className='details-card-btns-div'>
                <button className="update-experience-btn" to="/" >
                  Edit
                </button>
                <button className="delete-experience-btn" to="/" >
                  Delete
                </button>
            </div>
            
        </div>
      
    </div>
  )
}

export default DetailsCard
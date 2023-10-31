import moment from "moment"
import "./HeroSection.css"


const HeroSection = ({name,profilePhoto,postDate,postText,PostImage}) => {


       
  return (
    
    <div className="Posts">
      <div className="Posts-Details">
        <div className="Profile">
        {
            (profilePhoto)?
            <img src={profilePhoto} alt="no Profile Photo"/>
            :
            null
        }
        </div>
 <br/>
 <div className="Name">
        <b>{name}</b>
        </div>
      
        <div className="Date">
        {moment(postDate).fromNow()}
        </div>
       
        <div className="Text">
        <p>{postText}</p>
        </div>
    
        <div className="Image">
        {
            (PostImage)?
            <img src={PostImage}/>
            :
            null
        }
        </div>
        </div>
    </div>
  )
}

export default HeroSection

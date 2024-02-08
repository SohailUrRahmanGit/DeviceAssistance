function ProfileCardComponent({desc, handle,image}) {
    return(
    <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
            <img src={image} alt="pda Logo" /> 
            </figure>
        </div>
     <div className="card-content">
        <div className="media-content">
         <div className="title is -4"> {desc} </div>
         <div className="subtitle is -6"> {handle} </div>
        </div>
     </div>
    </div>
    );
}

export default ProfileCardComponent;
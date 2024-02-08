function ProfileCardComponent({desc, handle,image,descText}) {
    return(
    <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
            <img src={image} alt="pda Logo" /> 
            </figure>
        </div>
     <div className="card-content">
        <div className="media-content">
         <div className="title is -4"> Title is {desc} </div>
         <div className="subtitle is -6"> handle is {handle} </div>
         <div className="subtitle is -6"> {descText} </div>

        </div>
     </div>
</div>
    );
}

export default ProfileCardComponent;
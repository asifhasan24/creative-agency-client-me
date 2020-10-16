import React from 'react';
import classes from './singleFeedback.module.css'
const SingleFeedback = (props) => {
    
    const {reviewer, designation, feedback, reviewerImg} = props.reviewInfo
   
    let imageLink;
    
    return (
        <div className={classes.singleFeedbackContainer}>
            <div className={classes.clientInfo}>
                <img style={{borderRadius: '50%'}} src={imageLink} alt="client"/>
                <br/>
                <p>{reviewer}<br/> <small>{designation}</small></p>
            </div>
            <div className={classes.clientFeedback}>
                <p>
                    {feedback}
                </p>
            </div>
        </div>
    );
};

export default SingleFeedback;
import React, { useState } from 'react';
import './FeedbackForm.css'; // Assuming you will create this CSS file

function FeedbackForm() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0); // For hover state of stars
    const [detail, setDetail] = useState('');

    const handleDetailChange = (e) => {
        setDetail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Rating: ${rating}, Detail: ${detail}`);
        // Add your submit logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
            <div>
                <label>
                    Detail:
                    <textarea 
                        value={detail} 
                        onChange={handleDetailChange}
                    />
                </label>
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    );
}

export default FeedbackForm;

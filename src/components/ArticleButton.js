import React from 'react'

function ArticleButton({counter, className, addItem, removeItem, gif} ) {
    return (
        <div className={className} id="articleButton">
            {gif}{className}
            <button type="button" onClick={removeItem}>-</button>
            <div>{counter}</div>
            <button type="button" onClick={addItem}>+</button>
        </div>
);
}

export default ArticleButton;
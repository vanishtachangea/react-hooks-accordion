import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
        console.log('titlc clieced', index);
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >


                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )

    })
    //return <h1>Accordion Items Length: {items.length}</h1>
    return (<div className="ui styled accordion">{renderedItems}

    </div>)
}
export default Accordion;
import React, {useState} from "react";

export const ReadMore = ({text, len}) => {

    let txt = ''

    const [showMore, setShowMore] = useState(false);

    const onReadMoreClicked = () => {
        console.log('onReadMoreClicked');
        setShowMore(!showMore);
    }

    return(
        <div>
            <p>{showMore ? text : text.substr(0,len)} <span onClick={()=>{onReadMoreClicked()}} style={{ display: len > text.length ? 'none' : 'block', color: 'blue'}}>Read more</span></p>
        </div>
    );

}
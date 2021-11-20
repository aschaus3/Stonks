import react from 'react';
import reactDom from 'react-dom';
import './header.css'

function Header()    {
    return(
        <div className={ "header-container" }>
          <img src={"https://pbs.twimg.com/profile_images/1280883056979726339/9YesHxc2_400x400.jpg"} className={"img-icon"} />
            Hello
        </div>
    );
}


export default Header;

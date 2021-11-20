import react from 'react';
import reactDom from 'react-dom';
import './header.css'

function Header()    {
    return(
        <div className={ "header-container" }>
          <img src={"https://pbs.twimg.com/profile_images/1280883056979726339/9YesHxc2_400x400.jpg"} className={"img-icon"} />
          <h4>
          Stonks
          </h4>
        <div>
            <i className={"fa fa-search icons"}></i>
            <input placeholder={"Search"} className="search-bar" />
          </div>
        </div>
    );
}


export default Header;

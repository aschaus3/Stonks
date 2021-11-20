import react from 'react';
import reactDom from 'react-dom';
import './footer.css'

function Footer()    {
    return(
          <div className={ "header-container" }>
            <img src={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/723/506/datas/original.png"} className={"img-icon"} />
            <h4>
              Stonks
            </h4>
            <button placeholder={"Help"} className="help-button" />
        </div>
    );
}


export default Footer;
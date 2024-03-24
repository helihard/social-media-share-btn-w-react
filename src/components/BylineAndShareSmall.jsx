import { useState } from "react"

import avatarMichelle from "../images/avatar-michelle.jpg"
import iconShare from "../images/icon-share.svg"
import iconFacebook from "../images/icon-facebook.svg"
import iconPinterest from "../images/icon-pinterest.svg"
import iconTwitter from "../images/icon-twitter.svg"
import iconShareLight from "../images/icon-share-light.svg"

function BylineAndShareSmall() {
  const [displayShareDiv, setDisplayShareDiv] = useState(false)

  function toggleShareOptions() {
    setDisplayShareDiv((displayShareDiv) => !displayShareDiv)
  }

  return (
    <>
      {displayShareDiv ? (
        <div id="social-media-container">
          <span>share</span>
          <img src={iconFacebook} alt="Share on Facebook" />
          <img src={iconTwitter} alt="Share on Twitter" />
          <img src={iconPinterest} alt="Share on Pinterest" />
          <div id="share-img-container-dark" onClick={toggleShareOptions}>
            <img src={iconShareLight} alt="Share on social media" />
          </div>
        </div>
      ) : (
        <div id="byline-container">
          <img src={avatarMichelle} id="michelle" alt="Michelle Appleton" />
          <p>
            <strong>Michelle Appleton</strong>
            <br />
            28 Jun 2020
          </p>
          <div id="share-img-container" onClick={toggleShareOptions}>
            <img src={iconShare} alt="Share on social media" />
          </div>
        </div>
      )}
    </>
  )
}

export default BylineAndShareSmall

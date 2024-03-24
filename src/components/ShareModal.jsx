import iconFacebook from "../images/icon-facebook.svg"
import iconPinterest from "../images/icon-pinterest.svg"
import iconTwitter from "../images/icon-twitter.svg"

function ShareModal() {
  return (
    <div id="share-modal">
      <span>share</span>
      <img src={iconFacebook} alt="Share on Facebook" />
      <img src={iconTwitter} alt="Share on Twitter" />
      <img src={iconPinterest} alt="Share on Pinterest" />
    </div>
  )
}

export default ShareModal

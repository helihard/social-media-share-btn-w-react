import { useState, useEffect } from "react"
import ShareModal from "./ShareModal"

import avatarMichelle from "../images/avatar-michelle.jpg"
import iconShare from "../images/icon-share.svg"

function BylineAndShareLarge() {
  const [displayModal, setDisplayModal] = useState(false)

  function toggleShareOptions() {
    setDisplayModal((displayModal) => !displayModal)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 850) {
        setDisplayModal(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <div id="byline-container">
      <img src={avatarMichelle} id="michelle" alt="Michelle Appleton" />
      <p>
        <strong>Michelle Appleton</strong>
        <br />
        28 Jun 2020
      </p>
      {displayModal && <ShareModal />}
      <div id="share-img-container" onClick={toggleShareOptions}>
        <img src={iconShare} alt="Share on social media" />
      </div>
    </div>
  )
}

export default BylineAndShareLarge

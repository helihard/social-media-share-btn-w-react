import { useState, useEffect } from "react"
import MainImageContainer from "./components/MainImageContainer"
import TextContainer from "./components/TextContainer"
import BylineAndShareLarge from "./components/BylineAndShareLarge"
import BylineAndShareSmall from "./components/BylineAndShareSmall"
import Attribution from "./components/Attribution"

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <>
      <div id="container">
        <MainImageContainer />
        <TextContainer />
        {windowWidth > 849 ? <BylineAndShareLarge /> : <BylineAndShareSmall />}
      </div>
      <Attribution />
    </>
  )
}

export default App

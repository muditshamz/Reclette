import React from "react"
import { Link } from "gatsby"
function HeroSection() {
  return (
    <>
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>I design and code iOS (SwiftUI) apps</h1>
      <p>
        The place for some amazing design techniques for Swift UI and indepth
        hands-on experience on all the walkthroughs of the tutorials on your
        system!
      </p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </>
  )
}
export default HeroSection

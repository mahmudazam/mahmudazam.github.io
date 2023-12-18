
import _basicPage from '../Common/BasicPage.module.css'
const {main : basicPage} = _basicPage

function Home() {
  return (
  <div className={basicPage}>
  <p>
  I am a PhD student under Dr. Steven Rayan
  at the University of Saskatchewan.
  My most recent research is at the intersection of moduli stacks and homotopy
  theory. In particular, I am exploring homotopical reformulations of well known
  moduli stacks such as those of vector bundles and Higgs bundles. I am
  interested in versions of geometric invariant theory or, more generally,
  stability stratifications for infinity stacks arising in these contexts. Some
  long-term goals are to unify these ideas with the theme
  of <a href="https://ncatlab.org/nlab/show/higher+geometry">
    homotopical or higher geometry
  </a>.
  </p>

  <p>
  Before this I researched infinity operads, as part of my master's under
  Dr. Alexander Kupers at the University of Toronto. Still before that, as part
  of my undergraduate research with Dr. Steven Rayan at the Univerity of
  Saskatchewan, I developed the basics of a framework for quantum computing in
  terms of topological quantum field theories, using parallel transport.
  </p>

  <p>
  Outside of mathematics, I try to play jazz piano and Indian "classical"
  music. I am also interested archery, parkour and rock climbing, even though
  I don't get to dedicate as much time to these.
  </p>
  </div>
  )
}

export default Home

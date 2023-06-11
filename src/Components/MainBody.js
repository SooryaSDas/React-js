import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Rowpost from './RowPost/Rowpost'
import { originals, actions, comedy, Drama, Romance, Fantacy, Thriller } from "../urls";


const MainBody = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title="Netflix Originals"/>
      <Rowpost url={actions} title="Action Movies"  isSmall/>
      <Rowpost url={Romance} title="Romantic Movies" isSmall/>
      <Rowpost url={comedy} title="Comedy Movies" isSmall/>
      <Rowpost url={Drama} title="Drama" isSmall/>
      <Rowpost url={Fantacy} title="Fantacy" isSmall/>
      <Rowpost url={Thriller} title="Thriller" isSmall/>
    </div>
  )
}

export default MainBody
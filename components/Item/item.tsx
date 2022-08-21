import React from 'react'
import Navbar from '../Navbar/Navbar'
import { GetStaticProps } from "next";


interface Props {
    items: TProduct[];
  }

function Item(  ) {
    console.log(items)
  return (
    <div>
   
        
    </div>
  )
}

export default Item

//N requests -> se ejecuta 1 vez en build time (o para refrescar la pagina)

import type { GetStaticProps, NextPage } from 'next'
import Navbar from '../components/Navbar/Navbar'
import Item from '../components/Item/item'
import { useEffect, useState } from 'react';





const Home = () => {
  const [productList,setproductList]= useState<TProduct[]>([])

  useEffect(() => {
    window // ventana del navegador
    .fetch('http://localhost:3000/api/avo')
    .then(response => response.json())
    // .then(console.log)

    // {} objects destructuring 
    .then(({data}) =>{
      setproductList(data)
      console.log(data)
    })
  }, [])
  return (
    <div >
      <Navbar />
      <main >
      {productList.map(product => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}
      </main>
    </div>
  )
}

export default Home

// export async function getStaticProps(){
  
//   const response= await fetch("http://localhost:3000/api/avo")
//   const{allentries} = await response.json()
//   console.log(allentries)

//   return{
//     props:{
//       allentries
//     }
//   }
// }
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@components/Footer/Footer';


export const getServerSideProps =async () => {
// ventana del navegador
     const responde = await fetch('http://localhost:3000/api/avo')
     const {data : productList} : TAPIAvoResponse = await responde.json()
    return {
      props: {
        productList,
      },
    }
}


const Home = ({productList}: {productList: TProduct[]}) => {
 
  return (
    <div className='w-full h-full '>
      <Navbar />
      {/* prducts */}
      <main className='max-w-7xl mx-auto ' >
        {/* div contenedor de los items */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3  md:gap-6 lg:p-6 content-center ml-8 mr-8 mt-5 mb-5'>
        {productList.map((product)=> 
          <Link key={product.id} href={`/avo/${product.id}`}>     
              <div className=' flex flex-col justify-center items-center border-[1.50px] rounded-lg mr-2 mt-2 ml-2 p-1'>
                <Image
                src={product.image} height={140} width={140} alt={`Avocado ${product.name}`}
                />
                <p className='text-lg text-center'>{product.name}</p>
                <p className='grid text-lg text-center'>${product.price}</p>
              </div>
          </Link>
        )}
        </div>
      </main>
    <Footer/>
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
import Head from 'next/head';
import Image from 'next/image';
import avocado from '../../assets/img/avocado.png'
import React from 'react'
import Link from 'next/link';

function Navbar({title="🥑Store - Home"}) {
  return (
    
    <header className=" shadow flex justify-between items-center  max-w-7xl mx-auto ">
      {/* Titulo dinamico */}
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* lado izquierdo */}
      <div className="ml-10 py-2 hover:cursor-pointer">
        <Link href="/">
          <Image src={avocado} width={54} height={54}  alt="avocado store logo"/>
        </Link>
      </div>

      {/* lado derecho */}
      <ul className="flex space-x-10 hover:cursor-pointer mr-10">
        <li>
          <Link href="/"> 
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/Store">
            <a>Store</a>
          </Link>
        </li>
        <li>
          <Link href="/Store">
            <a>Canasta🧺</a>
          </Link>
        </li>

      </ul>
    </header>
  );
}

export default Navbar
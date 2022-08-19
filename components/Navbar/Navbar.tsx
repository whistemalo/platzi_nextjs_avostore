import Head from 'next/head';
import Image from 'next/image';
import avocado from "../../assets/img/avocado.png";
import React from 'react'
import Link from 'next/link';

function Navbar({title="🥑Store - Home"}) {
  return (
    
    <header className="flex justify-between px-5 max-w-7xl mx-auto items-center ">
      {/* Titulo dinamico */}
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* lado derecho */}
      <div className="p-5 hover:cursor-pointer">
        <Image src={avocado} width={54} height={54}  alt="avocado store logo"/>
      </div>

      {/* lado izquierdo */}
      <ul className="flex space-x-10 hover:cursor-pointer">
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
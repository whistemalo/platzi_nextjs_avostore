import Navbar from "@components/Navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Details() {
  const router = useRouter();
  const [item, setitem] = useState<TProduct>();
  useEffect(() => {
    window
      .fetch(`/api/avo/${router.query.id}`)
      .then((res) => res.json())
      .then((data) => setitem(data));
  });

  return (
    <div className="items-center max-w-7xl mx-auto">
      <Navbar />
      <div className="border py-5 mt-10">
        {/* mitad de arriba */}
        <div>
          {/* grid de item / order */}
          <div className="flex">
            <Image
              src={item?.image}
              width={200}
              height={200}
              alt={`Image of ${item?.name}`}
            />

            <div className="flex-col ">

              <div>
                <p className="p-1  text-xl font-semibold">{item?.name}</p>
                <p className="p-1  text ">${item?.price}</p>
                <p className="px-6 p-1 text-xs bg-gray-300 rounded text-center">
                  SKU: {item?.sku}
                </p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

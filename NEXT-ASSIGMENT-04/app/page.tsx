'use client'
import { useState } from "react"

interface Name {
  name: string;
}

const names: Name[] = [
  { name: "Ali" },
  { name: "Hamza" },
  { name: "Ahmad" },
  { name: "Akbar" },
  { name: "Asghar" },
  { name: "Haroon" },
  { name: "Bakar" },
];
export default function Home() {
  const [index, setIndex] = useState(0)
  const nextName = () => setIndex(index + 1)
  const prevName = () => setIndex(index - 1)
  return (
    <>
    <h1 className="mt-6 text-7xl text-red-800 text-center"> Name using useState </h1>
    <div className="text-center justify-center py-24">

      <button
        onClick={prevName}
        disabled={index === 0}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${index === names.length - names.length ? "opacity-50 cursor-not-allowed" : ""
          }`}>
        Previous Name
      </button>
<p className="text-bold text-4xl m-4 text-green-900">{names[index].name}</p>
      
      <button
        onClick={nextName}
        disabled={index === names.length - 1}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${index === names.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
      >
        Next Name
      </button>

    </div>
    </>
  )
}



export default function Home() {
  return (
    <main>
<section className="text-gray-600 body-font px-5 flex justify-center lg:w-1/2 mx-auto my-5">

    <div className=" bg-gray-100 rounded-lg p-8  md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-3xl font-bold title-font mb-5">Contact Form</h2>
      <div className=" mb-4">
        <label for="fullName" className="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="fullName" name="fullName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label for="fatherName" className="leading-7 text-sm text-gray-600">Father Name</label>
        <input type="text" id="fatherName" name="fatherName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label for="city" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label for="phoneNumber" className="leading-7 text-sm text-gray-600">Phone Number</label>
        <input type="number" id="phoneNumber" name="phoneNumber" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label for="cnic" className="leading-7 text-sm text-gray-600">CNIC </label>
        <input type="number" id="cnic" name="cnic" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label for="age" className="leading-7 text-sm text-gray-600">Age </label>
        <input type="number" id="age" name="age" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    
    
      <div className=" mb-4">
        <label for="description" className="leading-7 text-sm text-gray-600">Description</label>
        <textarea  id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
     </div>
  
</section>
    </main>
  )
}

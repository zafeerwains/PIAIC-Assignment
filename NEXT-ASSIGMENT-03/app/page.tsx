import Link from "next/link";
import blogsData from "../BlogsData.json"
export default function Home() {
  
  return (
    <main>
      <h1 className="text-center text-[#91c] font-bold text-[48px] p-10  underline">Blogs</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-18 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogsData.map((blog, index) => {
              return (
                < div key={index} className="p-4 w-[90%] md:w-1/3  mx-auto " >
                  <div className="h-full border-2  border-[#91c] border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.fileURL} alt={blog.description} />
                    <div className="p-6">
                      <h1 className="title-font text-2xl font-medium text-[#91c] mb-3">{blog.title}</h1>
                      <p className="leading-relaxed mb-3 text-[#91c]">
                        {(() => {
                          const modifiedDescription = blog.description && blog.description.replace(/\\/g, " ");
                          return modifiedDescription && modifiedDescription.length > 50
                            ? `${modifiedDescription.slice(0, 75)}...`
                            : modifiedDescription;
                        })()}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Link href={`/${blog.blogId}`} className="text-indigo-500 inline-flex contactUSEffect items-center md:mb-2 lg:mb-0">
                          Read More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>)
            })
            }
          </div>
        </div>
      </section >

    </main >
  )
}

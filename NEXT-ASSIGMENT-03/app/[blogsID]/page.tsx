import blogsData from "../../BlogsData.json"

export default function page({ params: { blogsID } }: { params: { blogsID: string } }) {
    const blog: {
        blogId: number;
        description: string;
        fileURL: string;
        title: string;
    } |undefined = blogsData.find(blog => blog.blogId === Number(blogsID));
    
    console.log(blog);

    return (
        <div>
            <div className=" text-[#91c]">
                <h1 className="text-[45px] underline text-center italic ">{blog.title} </h1>
                <img src={blog.fileURL} className="md:h-[60vh] mx-auto mt-7 " alt="" />
                <h1 className="text-[35px] underline text-center italic ">Description </h1>
                <p className="text-[#91c] mt-2 px-4 md:px-20 sm:px-20 text-[20px] ">
                    {blog.description && blog.description.split(/\\/).map((part, index) => (
                        <span key={index}>
                            {part}
                            {index !== blog.description.split(/\\/).length - 1 && <br />}
                        </span>
                    ))}
                </p>

            </div>
        </div>
    )
}

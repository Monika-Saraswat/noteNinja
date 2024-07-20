import React,{useState} from 'react'

const NewNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await notein(title,content);
      }

  return (
    
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
           
            <form onSubmit={handleSubmit}>
              <div>
                <label className='label p-2'>
                  <span className='label-text text-base'>Title</span>
                </label>
                <input type="text" placeholder="Enter Username" className="input input-bordered input-info w-full max-w-xs" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
              </div>
              <div>
                <label className='label p-2'>
                  <span className='label-text text-base'>Content</span>
                </label>
                <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full max-w-xs" value={content} onChange={(e)=>{setContent(e.target.value)}}/>
              </div>
              
              <div>
                <button className='btn btn-block btn-sm max-w-xs mt-5' disabled={loading}>
                  {loading?<span className='loading loading-spinner'></span>:"Submit"}
                </button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default NewNote

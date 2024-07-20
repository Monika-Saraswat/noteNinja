import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useNotein = () => {

    const [loading, setLoading] = useState();
    

    const notein = async(title,content)=>{

        const success = handleInputErrors({title,content});
        if(!success) return;

        setLoading(true);
        try {

            const res = await fetch('/api/noteform',{
                method:"POST",
                headers: {"Content-type":"application/json"},
                body:JSON.stringify({title,content})
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
           
            
        } 
        catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return {loading, notein};

}

export default useNotein;

const handleInputErrors = ({title,content})=>{
    if(!title || !content){
        toast.error("Please fill all the feilds.");
        return false;
    }
    
    return true;

}
import {react,createContext,useContext,axios} from "react";

const AdminContext = createContext();

export const useAdmin = useContext(AdminContext);
export const AdminProvider=({children})=>{
    const [admin,setAdmin] =useState(null);
    const [loading,setLoading] =useState(true);

    useEffect(()=>{
        const checkAuth=async()=>{
            try {
                const response=await axios.get(`${import.meta.env.VITE_API_URL}/admin/profile`,{
                    withCredentials:true
                })
                setAdmin(response.data);
                
            } catch {
                setAdmin(null)
            }finally{
                setLoading(false);
            }
        }
        checkAuth();

    },[])

    const login =async({email,password})=>{
         await axios.post(`${import.meta.env.VITE_API_URL}/admin/login`,
            {email,password},
            {withCredentials:true}
         )

         await checkAuth();
    }

    const logout =async()=>{
        await axios.post(`${import.meta.env.VITE_API_URL}/admin/logout`,
            {withCredentials:true}
        )
        setAdmin(null);
    }

    return(
        <AdminContext.Provider value={{admin,setAdmin,loading,setLoading,login,logout}}>
            {children}
        </AdminContext.Provider>
    )

}
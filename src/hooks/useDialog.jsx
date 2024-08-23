import { useEffect, useRef } from 'react'

function useDialog({children}) {
  
    const dialogRef = useRef(null)
    const openModalFunc = () => {
        dialogRef.current.showModal() 
    }
    const closeModalFunc = () => {
        dialogRef.current.close();
    }
   
    useEffect(()=>{
      function closeModalOnBackClickFuncfunction(event) {
        if (dialogRef.current && dialogRef.current.open) {
             closeModalFunc()
        }
      }
      window.addEventListener('popstate', closeModalOnBackClickFuncfunction);
      return ()=>window.removeEventListener('popstate',closeModalOnBackClickFuncfunction) 
    },[])
   

  return (
    [openModalFunc,<dialog key={1} ref={dialogRef}  >{children} <button  onClick={closeModalFunc}>close</button></dialog>]
  )
}

export default useDialog

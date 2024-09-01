import { useRef } from 'react'

function useDialog(Child) {
  
    const dialogRef = useRef(null)
    const openModalFunc = () => {
        dialogRef.current.showModal() 
    }
    const closeModalFunc = () => {
        dialogRef.current.close();
    } 
   

  return (
    [openModalFunc,closeModalFunc,<dialog style={{border:"0px green solid", position:"relative", minWidth:"380px", borderRadius:"10px", backgroundColor:"#13181c",outline:"0px red solid", boxShadow:"0px 0px 200px rgba(0, 0, 0, 0.5)", padding:"0px"}} key={1} ref={dialogRef}  ><Child/> <button style={{color:"white", cursor:"pointer", position:"absolute", top: 50, right: 70, border:"solid 1px red", borderRadius:"5px", padding:"5px 8px", fontWeight:100, fontSize:"13px"}} onClick={closeModalFunc}>esc</button> </dialog>]
  )
}

export default useDialog

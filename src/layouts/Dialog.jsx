import { useEffect, useRef } from "react"


export default function Dialog({children}) {

  const dialogRef = useRef(null)
  // useEffect(()=>{dialogRef && dialogRef.current.showModal()},[dialogRef])
  const openDialog = () => {
    dialogRef.current.showModal(); // Open the dialog as a modal
  };

  useEffect(()=>{openDialog()},[])

  const closeDialog = () => {
    dialogRef.current.close(); // Close the dialog
  };

  return (
    <dialog ref={dialogRef}  >{children} <button onClick={closeDialog}>close</button></dialog>
  )
}

import { useState } from "react"

const Modal = ({modalText}) =>{
    const [isOpen, setIsOpen] = useState(true)

    const handleClose = () =>{
        setIsOpen(false)
    }
    
    const blockerStyle ={      
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',  
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '100%',
            overflow: 'auto',
            zIndex: '1',
            padding: '20px',
            boxSizing: 'border-box',
            backgroundColor:' rgba(0,0,0,0.75)',
            textAlign: 'center',        
    }
    const modalStyle ={
        verticalAlign: 'middle',
        position: 'relative',
        zIndex: '2',
        maxWidth: '500px',
        boxSizing: 'border-box',
        width: '90%',
        background: '#fff',
        padding: '15px 30px',
        borderRadius: '8px',
        boxShadow: '0 0 10px #000',
        textAlign: 'left',
    }
    const closeModalStyle ={
        position: 'absolute',
        top: '-12.5px',
        right: '-12.5px',
        display: 'block',
        width: '30px',
        height: '30px',
        textIndent: '-9999px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA3hJREFUaAXlm8+K00Acx7MiCIJH/yw+gA9g25O49SL4AO3Bp1jw5NvktC+wF88qevK4BU97EmzxUBCEolK/n5gp3W6TTJPfpNPNF37MNsl85/vN/DaTmU6PknC4K+pniqeKJ3k8UnkvDxXJzzy+q/yaxxeVHxW/FNHjgRSeKt4rFoplzaAuHHDBGR2eS9G54reirsmienDCTRt7xwsp+KAoEmt9nLaGitZxrBbPFNaGfPloGw2t4JVamSt8xYW6Dg1oCYo3Yv+rCGViV160oMkcd8SYKnYV1Nb1aEOjCe6L5ZOiLfF120EjWhuBu3YIZt1NQmujnk5F4MgOpURzLfAwOBSTmzp3fpDxuI/pabxpqOoz2r2HLAb0GMbZKlNV5/Hg9XJypguryA7lPF5KMdTZQzHjqxNPhWhzIuAruOl1eNqKEx1tSh5rfbxdw7mOxCq4qS68ZTjKS1YVvilu559vWvFHhh4rZrdyZ69Vmpgdj8fJbDZLJpNJ0uv1cnr/gjrUhQMuI+ANjyuwftQ0bbL6Erp0mM/ny8Fg4M3LtdRxgMtKl3jwmIHVxYXChFy94/Rmpa/pTbNUhstKV+4Rr8lLQ9KlUvJKLyG8yvQ2s9SBy1Jb7jV5a0yapfF6apaZLjLLcWtd4sNrmJUMHyM+1xibTjH82Zh01TNlhsrOhdKTe00uAzZQmN6+KW+sDa/JD2PSVQ873m29yf+1Q9VDzfEYlHi1G5LKBBWZbtEsHbFwb1oYDwr1ZiF/2bnCSg1OBE/pfr9/bWx26UxJL3ONPISOLKUvQza0LZUxSKyjpdTGa/vDEr25rddbMM0Q3O6Lx3rqFvU+x6UrRKQY7tyrZecmD9FODy8uLizTmilwNj0kraNcAJhOp5aGVwsAGD5VmJBrWWbJSgWT9zrzWepQF47RaGSiKfeGx6Szi3gzmX/HHbihwBser4B9UJYpFBNX4R6vTn3VQnez0SymnrHQMsRYGTr1dSk34ljRqS/EMd2pLQ8YBp3a1PLfcqCpo8gtHkZFHKkTX6fs3MY0blKnth66rKCnU0VRGu37ONrQaA4eZDFtWAu2fXj9zjFkxTBOo8F7t926gTp/83Kyzzcy2kZD6xiqxTYnHLRFm3vHiRSwNSjkz3hoIzo8lCKWUlg/YtGs7tObunDAZfpDLbfEI15zsEIY3U/x/gHHc/G1zltnAgAAAABJRU5ErkJggg==)',
    }
    return(
        <>
            {isOpen?
                <div style={blockerStyle}>
                    <div id="confirmation" style={modalStyle}>
                        {modalText}
                        <a href="#close-modal" rel="modal:close" style={closeModalStyle} onClick={handleClose}>Close</a>
                    </div>
                </div>   
            :
                <div></div>
            }                     
        </>
    )
}
export default Modal
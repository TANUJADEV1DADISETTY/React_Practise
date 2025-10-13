import react from "react"
import Confetti from 'react-confetti'

const Confit = () => {
    return (
        <>
        <Confetti 
            numberOfPieces={1000}
            wind={0.1}
            gravity={2}/>
        </>
    )
}
export default Confit
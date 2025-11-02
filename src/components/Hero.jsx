import { useNavigate } from "react-router-dom"

export default function Hero(){
    const navigate = useNavigate();

    return (
        <section className="relative w-full h-[80vh] mt-12">
       <img
       src="https://i.pinimg.com/originals/f6/15/50/f61550c942a8c483bd920371effa2865.gif"
       alt="puma banner"
       className="w-full h-full object-cover rounded "
       />
        </section>
    )
}
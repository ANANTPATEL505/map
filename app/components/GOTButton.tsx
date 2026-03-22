export default function GOTButton({text}){

  return(

    <button className="
      px-8 py-3
      border border-yellow-500
      text-yellow-400
      tracking-widest
      hover:bg-yellow-500
      hover:text-black
      transition
      uppercase
    ">
      {text}
    </button>

  )
}
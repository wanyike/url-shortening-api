import {useState} from "react";
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";

export default function Shortener() {
  const [value, setValue] = useState("");
  // const [text, setText] = useState("");
  const handleSubmit = () => {
    setValue("New Value");
    return <button onClick={handleSubmit}>Submit</button>;
  };
  const [links, setLinks] = useState([]);

  // const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!state) {
      alert("Please enter a valid URL.");
    }
    else {
      
      const shortenLink = async () => {
        const res = await fetch(`https://domain.com/target/url=${state}`)
        const data = await res.json()
        console.log(data)
      }

      Shortener()
  } 
    
  
  
  return <div>{
 
    <>
      <section className="max-width shortener relative">
        <div className="">
        <picture className="">
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img className="" src={bgMobile} alt="" />
          </picture>
          
   <div className="shortener-inner">
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-4">
                <input className="w-full py-3 px-5 mb-2 md:mb-0 rounded-lg" type="url" placeholder="Shorten a link here"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <button className="shorten-btn py-3 rounded-lg  md:w-40 md:ml-5"
                  onClick={handleSubmit}
                  type="submit">
              Shorten it!
            </button>
          </div>
          </form>
          </div>

          <div className="flex items-center md:flex-row md:justify-between flex-col bg-white justify-center">
            <article>
              <h6 className="mb-7 md:mb-0">{links.original_link}</h6>
            </article>
            <article>
              <ul className="">
                <li className="">
                  <button className="text-cyan-500">{links.full_short_link}</button>
                </li>

                <li className="">
                <button className="shorten-btn text-sm">copy</button>
                  </li>
              </ul>
            </article>
          </div>

          </div>
      </section>
    </>
    
  }</div>;
}

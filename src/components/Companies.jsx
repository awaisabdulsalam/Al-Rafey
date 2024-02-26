import comp1 from "../assets/comp1.png";
import comp2 from "../assets/comp2.png";


const Companies = () => {
  return (
        <section className="companies md:flex justify-center items-center my-5 py-10">
           <img src={comp1} className="company_one h-10" alt="" srcSet="" />
           <img src={comp2} className="h-10" alt="" srcSet="" />
        </section>
  )
}

export default Companies
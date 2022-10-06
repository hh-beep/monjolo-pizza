/* Style */
import SloganIcon_Style from "./SloganIcon_Style";

/* Image */
import Teacher from "../../../../Images/Icons/teacher.svg"





const style = SloganIcon_Style();





const SloganIcon = () => {
  return (
    <section className={  style.Container  }>
      <img 
        className={  style.ContainerIcon  }
        src={  Teacher  }
        alt="chapeu de formatura"
      />
    </section>
  )
}

export default SloganIcon;
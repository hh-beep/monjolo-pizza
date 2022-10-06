/* Style */
import Slogan_Style from "./Slogan_Style";

/* Components */
import SloganIcon from "./SloganIcon/SloganIcon"
import SloganText from "./SloganText/SloganText"





const style = Slogan_Style();





const Slogan = () => {
  return (
    <section className={  style.Container  }>
      <section className={  style.ContainerSection  }>



        <SloganIcon />

        <SloganText />



      </section>
    </section>
  )
}

export default Slogan;
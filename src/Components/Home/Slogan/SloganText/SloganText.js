/* Style */
import SloganText_Style from "./SloganText_Style";





const style = SloganText_Style();





const SloganText = () => {
  return (
    <section className={  style.Container  }>
      <h2 className={  style.ContainerText  }>
        Ajude o 9° a realizar a formatura no final do ano comprando uma pizza
      </h2>
    </section>
  )
}

export default SloganText;
/* Style */
import BannerName_Style from "./BannerName_Style";





const style = BannerName_Style();





const BannerName = () => {
  return (
    <section className={  style.Container  }>
      <h1 className={  style.ContainerTittle  }>Monjolo Pizza</h1>
    </section>
  )
} 

export default BannerName;
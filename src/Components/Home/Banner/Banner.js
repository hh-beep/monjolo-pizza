/* Components */
import BannerLogo from "./BannerLogo/BannerLogo";
import BannerName from "./BannerName/BannerName";

/* Style */
import Banner_Style from "./Banner_Style";





const style = Banner_Style();





const Banner = () => {
  return (
    <section className={  style.Container  }>
      <section className={  style.ContainerSection  }>


        <BannerLogo />

        <BannerName />


      </section>
    </section>
  )  
}

export default Banner;
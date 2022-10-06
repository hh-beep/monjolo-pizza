/* Image */
import Logo from "../../../../Images/Logo.svg"

/* Style */
import BannerLogo_Style from "./BannerLogo_Style"





const style = BannerLogo_Style();





const BannerLogo = () => {
  return (
    <figure className={  style.Container  }>


      <img
        className={  style.ContainerImage  }
        src={  Logo  }
        alt="Monjolo Pizza Logo"
      />


    </figure>
  )
} 

export default BannerLogo;
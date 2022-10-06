const sm = {
  Container: " h-5/6 ",
  ContainerImage: "",
}
const md = {
  Container: " md:h-4/6 ",
  ContainerImage: "",
}





function BannerLogo_Style() {
  return {
    Container: 
      "  " + 
        sm.Container +
        md.Container ,


        
    ContainerImage: 
      " w-full h-full " +
        sm.ContainerImage +
        md.ContainerImage,
  } 
}

export default BannerLogo_Style;
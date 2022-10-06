const sm = {
  Container: " w-11/12 ",
  ContainerText: " text-5xl text-center leading-relaxed ",
}
const md = {
  Container: " md:w-3/6 ",
  ContainerText: " md:text-4xl md:text-start md:leading-loose ",
}
const lg = {
  Container: " lg:w-2/5 ",
  ContainerText: "",
}





function SloganText_Style() {
  return {
    Container: 
      "  " +
        sm.Container +
        md.Container +
        lg.Container,



    ContainerText: 
      " text-white " +
        sm.ContainerText +
        md.ContainerText +
        lg.ContainerText,
  }
}

export default SloganText_Style;
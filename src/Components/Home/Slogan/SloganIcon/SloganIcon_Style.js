const sm = {
  Container: " hidden ",
  ContainerIcon: "",
}
const md = {
  Container: " md:w-2/6 md:flex ",
  ContainerIcon: "",
}
const lg = {
  Container: " lg:w-2/5 ",
  ContainerIcon: "",
}





function SloganIcon_Style() {
  return {
    Container: 
      "  " +
        sm.Container +
        md.Container +
        lg.Container ,



    ContainerIcon: 
      "  " +
        sm.ContainerIcon +
        md.ContainerIcon +
        lg.ContainerIcon ,
  }
}

export default SloganIcon_Style;
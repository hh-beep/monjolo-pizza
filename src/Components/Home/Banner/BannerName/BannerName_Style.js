const sm = {
  Container: " h-1/6 ",
  ContainerTittle: " text-6xl ",
}
const md = {
  Container: " h-2/6 ",
  ContainerTittle: " md:text-5xl ",
}





function BannerName_Style() { 
  return {
    Container: 
      " flex flex-col justify-around items-center " + 
        sm.Container +
        md.Container ,


    ContainerTittle: 
      " text-yellow font-medium text-center " +
        sm.ContainerTittle +
        md.ContainerTittle ,
  }
}

export default BannerName_Style;
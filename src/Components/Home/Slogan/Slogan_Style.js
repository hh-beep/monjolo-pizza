const sm = " w-full h-full flex-col justify-around "
const md = " md:w-11/12 md:h-5/6 md:flex-row "





function Slogan_Style() {
  return {
    Container: 
      " overflow-x-hidden bg-black w-screen h-screen flex flex-col justify-around items-center ",



    ContainerSection: 
      " flex items-center justify-around " +
        sm +
        md ,
  }
}

export default Slogan_Style;
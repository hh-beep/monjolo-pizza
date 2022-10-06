const sm = " w-11/12 h-full "
const md = " md:w-10/12 md:h-5/6 "
const lg = " lg:w-9/12 "





function Banner_Style() {
  return {
    Container: 
      " overflow-x-hidden bg-black h-screen w-screen flex flex-col justify-around items-center ",


    ContainerSection: 
      " flex justify-around items-center flex-col " +
        sm +
        md +
        lg ,
  }
}

export default Banner_Style;
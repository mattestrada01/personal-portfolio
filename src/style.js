const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-10 px-6 sm:py-16 py-10",
    navLink: "relative transition-all duration-300",
    navLinkHover: `
    hover:text-white 
    after:content-[''] 
    after:absolute 
    after:w-full 
    after:h-[2px] 
    after:bg-white 
    after:bottom-[-2px] 
    after:left-0 
    after:scale-x-0 
    after:origin-center 
    hover:after:scale-x-100 
    after:transition-transform 
    after:duration-300 
  `,

    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-[#00FFFF] uppercase tracking-wider",
  };
  
  export { styles };
  
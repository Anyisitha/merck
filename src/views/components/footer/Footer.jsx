import { StyledContent } from "./Footer.styles";

export default function Footer() {
  return (
    <StyledContent>
      <img className="house-of" src="/images/home/house-of-em.png" alt="logo" width={34} height={34} />
      <p className="text-center w-[85%] text-[8px] font-light text-small">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat.
      </p>
      <img className="merck h-[18px]" src="/images/home/merk-icono.webp" alt="logo" width={115} height={10} />
    </StyledContent>
  );
}

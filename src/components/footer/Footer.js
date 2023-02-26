import Logo from "../../logo/Logo";

export default function Footer() {
  return (
    <div className="w-min-full min-h-screen  ">
      <div className="flex justify-center items-center flex-row ">
        <div className="w-1/3 min-h-screen bg-unstop_footer_2">
          <Logo />
          <p>Built with ❤️ for India</p>
        </div>
        <div className="w-2/3 min-h-screen bg-unstop_footer_1">
          our products
        </div>
      </div>
      <div className="px-40"></div>
    </div>
  );
}

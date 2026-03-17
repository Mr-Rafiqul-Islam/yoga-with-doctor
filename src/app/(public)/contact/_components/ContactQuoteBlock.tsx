import Image from "next/image";

const QUOTE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBz778XUtICHjXgFMObWvblAAN6IA5D0x0bmCH58YIfSWnTVIpjlq5qZlSj4F9UEnlFPZ-V2sfvhoImOSE-eKe31Y7WHTITp7hrDUulV5OjXtfDKIiR9YcubF5T1L6aIKSxVzkM-WUR1MjQczEOL2Ia-TKbPIEsq006Gnlh_iFzDaStZ4aOqarj-UacMYSeG1CL0fyLtI5gfk7xTg_Y6vHcK0m9AHQl-YhKAnwrInCZQoY1x18ZIVmML_kQRIZf419b2tMJuP89zA";

export function ContactQuoteBlock() {
  return (
    <div className="group relative mt-auto h-64 w-full overflow-hidden rounded-3xl shadow-sm lg:h-72">
      <Image
        src={QUOTE_IMAGE}
        alt="Serene yoga wellness abstract composition with sage green tones"
        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        width={1000}
        height={1000}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
      <div className="absolute bottom-6 left-6 z-20">
        <p className="font-display text-lg italic tracking-wide text-white lg:text-xl">
          &ldquo;Healing begins with a single connection.&rdquo;
        </p>
      </div>
    </div>
  );
}

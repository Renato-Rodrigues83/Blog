import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial">
      <Image
        src="/logo.svg"
        alt="Logo site"
        width={116}
        height={33}
        className="h-auto"
      />
    </Link>
  );
};

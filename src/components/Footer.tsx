import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] mt-16">
      <div className="container-page py-10 text-sm text-[#BDBDBD] flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Brotherhood Elite. All rights reserved.</div>
        <div className="flex gap-4">
          <Link className="hover:text-white" href="/tryouts">Tryouts</Link>
          <Link className="hover:text-white" href="/programs">Programs</Link>
          <Link className="hover:text-white" href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

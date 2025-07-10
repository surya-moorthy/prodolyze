import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-48 border-t bg-neutral-100">
      <h3 className="font-semibold text-xl tracking-tight">
        done by Surya Moorthy (alpha dev)
      </h3>
      <div className="flex items-center gap-4 mt-6">
        <span className="text-lg font-semibold">Contacts</span>
        <Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <Image src="/github.png" width={28} height={28} alt="GitHub" />
        </Link>
        <Link href="https://x.com/your-handle" target="_blank" rel="noopener noreferrer">
          <Image src="/X.png" width={25} height={25} alt="X" />
        </Link>
        <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" width={25} height={25} alt="LinkedIn" />
        </Link>
      </div>
    </footer>
  );
}

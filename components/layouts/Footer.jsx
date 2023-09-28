import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer () {
  return (
    <footer className="w-full h-40 bg-teal-400 flex justify-center items-center">
      <div>
        <div className="flex gap-3 justify-center">
          <Link href="https://github.com/ohnishijet999" target="_blank">
            <Image src="/images/github-mark.svg" width={40} height={40} alt="GitHub" className="hover:opacity-70"/>
          </Link>
          <Link href="mailto:onishi.kaoru.1999@gmail.com" target="_blank">
            <Image src="/images/mail.svg" width={40} height={40} alt="メールアドレス" className="hover:opacity-70"/>
          </Link>
        </div>
        <p className="text-white mt-3">Copyright © 2023 K.O. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
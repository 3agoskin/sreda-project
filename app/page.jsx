import Image from "next/image";
import style from "./page.module.scss";
import Link from "next/link";
import { AtSign } from "@/components";


export default function Home() {
  return (
    <main>
      <div className="main-banner">
        <span>скоро здесь будет медиа</span>
      </div>
      <div className="links">
        <div>
          <Link className={style.link} href={"https://t.me/SredaMediaChannel"}>
            <AtSign className={style.atSign}/>
            <span className={style.span}>SredaMediaChannel</span>
          </Link>
        </div>
        <div>
          <Link className={style.link} href={"https://instagram.com/sreda_media/"}>
            <AtSign className={style.atSign} />
            <span className={style.span}>sreda_media</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

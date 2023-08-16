import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="main-banner">
        <span>скоро здесь будет медиа</span>
      </div>
      <div className="links">
          <div>
            <Link href={"https://t.me/SredaMediaChannel"}>
              Телеграм
              </Link>
          </div>
          <div>
            <Link href={"https://instagram.com/sreda_media/"}>
              Соцсеть с&nbsp;картинками
            </Link>
          </div>
      </div>
    </main>
  );
}

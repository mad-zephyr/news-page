import { AditionalList, Heronews, SideNews } from "@/modules";
import styles from "./page.module.sass";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | News homepage",
  description: "Developed by Mad Zephyr",
  openGraph: {
    type: "website",
    description: "Developed by Mad Zephyr",
    images: "https://i.ibb.co/FmKXDQw/og.jpg",
    title: "Frontend Mentor: Dive Deep, Geek's Info Epicenter!",
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Heronews />
        <SideNews />
      </div>
      <AditionalList />
    </main>
  );
}

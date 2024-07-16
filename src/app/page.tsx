import Image from "next/image";
import styles from "./page.module.css";
import superAxios from "@/utils /Axios";

async function getData() {
  const res = superAxios.get('/hello')
  const data = (await res).data.message

  return data
}
export default function Home() {

  return (
    <main className={styles.main}>

      <h1>Subhmoharat dev</h1>

      message:{
        getData()
      }

    </main>
  );
}

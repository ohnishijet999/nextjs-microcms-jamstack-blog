import React from "react";
import styles from "../../styles/components/layouts/Header.module.scss"

export function Header () {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>フロントエンドブログ</h1>
    </header>
  )
}
import React from 'react'
import Link from 'next/link';
// import styles from './Nav.module.css';

const MenuLabel = (props) => {
  return <p>{props.text}</p>
}

export default function Nav
() {
  return (
    <div>
      {/* sidebar */}


      <MenuLabel text="ONSEN"/>

      <p>ONSEN</p>

      <div>
        <p>MAIN</p>
          <Link href="/html/">
            Dashboard
          </Link>

        <p>LISTS</p>
          <Link href="/css/">
            Clients
          </Link>
          <Link href="/css/">
            Onsens
          </Link>
          <Link href="/css/">
            Orders
          </Link>

        <p>USER INTERFACE</p>
          <Link href="/js/">
            JavaScript
          </Link>|
          <Link href="/js/">
            JavaScript
          </Link>|
      </div>
    </div>
  )
}

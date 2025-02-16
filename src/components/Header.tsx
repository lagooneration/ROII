'use client'

import Link from 'next/link'
import React from 'react'
import { Logo } from './Logo'
import { NAVIGATION } from '@/constants/navigation'
import { ButtonLink } from './ButtonLink'
export function Header() {
  return (
    <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
        <Link href="/" className="justify-self-start">
            <Logo className="text-brand-purple ~h-12/20"/>
        </Link>
        <nav aria-label="Main" className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
            <ul className="flex flex-wrap items-center justify-center gap-8">
                {NAVIGATION.map((item) => (
                    <li key={item.text}>
                        <Link 
                          href={item.url} 
                          className="~text-lg/xl hover:text-brand-purple transition-colors"
                        >
                          {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="justify-self-end">
            <ButtonLink href="/some-path" theme="purple" size="md" icon="whatsapp">
                Reach Out
            </ButtonLink>
        </div>
      </div>
    </header>
  )
}
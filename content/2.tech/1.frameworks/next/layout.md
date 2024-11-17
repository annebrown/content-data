---
title: Layout
description: Next.js Layout
---

## Description

{{ description }} Files

- `layout.tsx`
- Comprise the structure and elements shared across multiple pages:

    - Requred HTML Elements (`<DOCTYPE><html><header>...`)
    - Headers, Footers, Navi
    - Content placement

- Provide page consistency

## `/app/layout.tsx` 

- Initial, default, page content frame 
- Structure and elements rqd for app default pages
- Initial `/app/layout.tsx`:

```tsx
/*******************************************************************************
 File: /app/layout.tsx
 Purpose: Frame for default app pages  
 ******************************************************************************/ 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Some Title",
  description: "Some Site Descr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```






import React from 'react'
import type { MetaFunction } from '@remix-run/react';


export const meta: MetaFunction = () => {
  return [
    { title: "Agri Ka?" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (<div>Home</div>
  )
}


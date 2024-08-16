"use client"

import Customers from "@/components/Customers"
import { Suspense } from "react"
import Loading from "@/components/Loading"

export default function CustomersPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Customers />
    </Suspense>
  )
}
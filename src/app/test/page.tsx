'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestPage() {
  const [status, setStatus] = useState('Testing...')

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from('products').select('count')
      if (error) {
        setStatus(`❌ Database Error: ${error.message}`)
      } else {
        setStatus('✅ Database Connected!')
      }
    }
    testConnection()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Connection Test</h1>
      <p className="mt-4">{status}</p>
    </div>
  )
}
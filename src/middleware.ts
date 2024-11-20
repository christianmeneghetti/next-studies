import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set(
    'Cache-Control',
    'public, s-maxage=300, stale-while-revalidate=600'
  )
  return response
}

export const config = {
  matcher: ['/server-side/:path*', '/client-side/:path*', '/pre-render/:path*']
}

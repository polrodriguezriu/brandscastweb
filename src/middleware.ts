import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const EU_COUNTRIES = [
  'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR',
  'DE','GR','HU','IE','IT','LV','LT','LU','MT','NL',
  'PL','PT','RO','SK','SI','ES','SE'
];

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') ?? '';
  const currency = EU_COUNTRIES.includes(country) ? 'EUR' : 'USD';

  const response = NextResponse.next();
  response.cookies.set('currency', currency, {
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
    sameSite: 'lax',
  });
  return response;
}

export const config = {
  matcher: '/((?!_next|favicon|assets|.*\\..*).*)' ,
};

import type { Metadata } from 'next'

// Styles
import './globals.css'

// Fonts
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Dark mode
import { ThemeProvider } from '@/components/DarkMode'

// Authentication
import { ClerkProvider } from '@clerk/nextjs'

// Components
import { Navbar } from '@/layouts/dashboard/Navbar'
import { Container } from '@/components/Container'

// Metadata
export const metadata: Metadata = {
	title: 'StaySavvy',
	description: 'Book a hotel of your choice',
	icons: { icon: '/logo.svg' }
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={inter.className}>
				<ClerkProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<main className='min-h-screen bg-secondary'>
							<Navbar />
							<Container>{children}</Container>
						</main>
					</ThemeProvider>
				</ClerkProvider>
			</body>
		</html>
	)
}

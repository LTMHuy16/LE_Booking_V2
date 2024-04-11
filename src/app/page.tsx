// Dark mode
import { ThemeProvider } from '@/components/DarkMode'

// Components
import { Button } from '@/components/UI/button'
import { Navbar } from '@/layouts/dashboard/Navbar'

export default function Home() {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			<main className='min-h-screen bg-secondary'>
				<Navbar />
				<Button variant={'ghost'}>Home page</Button>
			</main>
		</ThemeProvider>
	)
}

'use client'

import Image from 'next/image'

// Routing
import { useRouter } from 'next/navigation'

// Hooks
import { UserButton, useAuth } from '@clerk/nextjs'

// UI Components
import { Container } from '@/components/Container'
import { Button } from '@/components/UI'
import { ThemeToggle } from '@/components/DarkMode'

// Components
import { SearchInput } from './SearchInput'
import { NavMenu } from './NavMenu'

export const Navbar = () => {
	const router = useRouter()
	const { userId } = useAuth()

	return (
		<div className='sticky top-0 border-b-primary/10 bg-secondary'>
			<Container>
				<div className='flex items-center justify-between'>
					<div
						className='flex cursor-pointer items-center gap-1'
						onClick={() => router.push('')}
					>
						<Image src='/logo.svg' width='30' height='30' alt='Logo' />
						<span className='text-xl font-bold'>Stay Savvy</span>
					</div>
					<SearchInput />
					<div className='flex items-center gap-3'>
						<div>
							<ThemeToggle />
							<NavMenu />
						</div>
						<UserButton afterSignOutUrl='/' />
						{!userId && (
							<>
								<Button
									onClick={() => router.push('/sign-in')}
									variant='outline'
									size='sm'
								>
									Sign in
								</Button>
								<Button onClick={() => router.push('/sign-in')} size='sm'>
									Sign up
								</Button>
							</>
						)}
					</div>
				</div>
			</Container>
		</div>
	)
}

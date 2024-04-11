'use client'

// Routing
import { useRouter } from 'next/navigation'

// UI Components
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/UI'

// Icons
import { BookOpenCheck, ChevronsUpDown, Hotel, Plus } from 'lucide-react'

export function NavMenu() {
	const router = useRouter()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button variant='outline' size='icon'>
					<ChevronsUpDown />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					className='flex cursor-pointer gap-2'
					onClick={() => router.push('/hotel/new')}
				>
					<Plus size={15} />
					<span>Add hotel</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					className='flex cursor-pointer gap-2'
					onClick={() => router.push('/my-hotels')}
				>
					<Hotel size={15} />
					<span>My hotels</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					className='flex cursor-pointer gap-2'
					onClick={() => router.push('/my-bookings')}
				>
					<BookOpenCheck size={15} />
					<span>My bookings</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

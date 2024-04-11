// Components
import { Input } from '@/components/UI'

// Icons
import { Search } from 'lucide-react'

export const SearchInput = () => {
	return (
		<div className='relative hidden sm:block'>
			<Search className='absolute left-4 top-3 h-4 text-muted-foreground' />
			<Input placeholder='Search' className='bg-primary/10 pl-10' />
		</div>
	)
}

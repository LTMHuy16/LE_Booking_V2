'use client'

// Components
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/UI/form'

// Hooks
import { useForm } from 'react-hook-form'

// Validation
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddHotelFormSchema } from './validation/AddHotelForm.schema'

// Interfaces
import { HotelWithRooms } from '@/types/hotel'
import { Button, Checkbox, Input, Textarea } from '@/components/UI'

// Props
export type Props = {
	hotel: HotelWithRooms | null
}

export const AddHotelForm = ({ hotel }: Props) => {
	const form = useForm<z.infer<typeof AddHotelFormSchema>>({
		resolver: zodResolver(AddHotelFormSchema),
		defaultValues: {
			title: '',
			description: '',
			image: '',
			country: '',
			state: '',
			city: '',
			locationDescription: '',
			gym: false,
			spa: false,
			bar: false,
			laundry: false,
			restaurant: false,
			shopping: false,
			freeParking: false,
			bikeRental: false,
			freeWifi: false,
			movieNights: false,
			swimmingPoll: false,
			coffeeShop: false
		}
	})

	function onSubmit(values: z.infer<typeof AddHotelFormSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
				<h3>{hotel ? 'Update our hotel' : 'Create a new hotel'}</h3>
				<div className='flex flex-col gap-6 md:flex-row'>
					<div className='flex flex-1 flex-col gap-6'>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input placeholder='Beach hotel' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea placeholder='Description' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div>
							<FormLabel>Choose amenities</FormLabel>
							<FormDescription>
								Choose amenities popular in your hotel
							</FormDescription>
							<div className='mt-2 grid grid-cols-2 gap-4'>
								<FormField
									control={form.control}
									name='description'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Checkbox {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<Button type='submit'>Submit</Button>
					</div>
					<div></div>
				</div>
			</form>
		</Form>
	)
}

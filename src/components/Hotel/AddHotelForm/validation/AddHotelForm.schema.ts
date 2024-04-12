import { z } from 'zod'

export const AddHotelFormSchema = z.object({
	title: z
		.string()
		.min(3, { message: 'Title must be at least 3 characters long.' }),
	description: z
		.string()
		.min(10, { message: 'Description must be at least 10 characters long.' }),
	image: z.string().min(1, { message: 'Image is required.' }),
	country: z.string().min(1, { message: 'Country is required.' }),
	city: z.string().optional(),
	state: z.string().optional(),
	locationDescription: z.string().min(1, { message: 'Location is required.' }),
	gym: z.boolean().optional(),
	spa: z.boolean().optional(),
	bar: z.boolean().optional(),
	laundry: z.boolean().optional(),
	restaurant: z.boolean().optional(),
	shopping: z.boolean().optional(),
	freeParking: z.boolean().optional(),
	bikeRental: z.boolean().optional(),
	freeWifi: z.boolean().optional(),
	movieNights: z.boolean().optional(),
	swimmingPoll: z.boolean().optional(),
	coffeeShop: z.boolean().optional()
})

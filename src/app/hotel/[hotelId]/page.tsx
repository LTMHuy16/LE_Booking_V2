// Services
import { getHotelById } from '@/services/hotelApis'
import { auth } from '@clerk/nextjs'

// Components
import { AddHotelForm } from '@/components/Hotel'

// Interfaces
type Props = {
	params: {
		hotelId: string
	}
}

const HotelDetail = async ({ params }: Props) => {
	const hotel = await getHotelById(params.hotelId)
	const { userId } = auth()

	if (!userId) return <div>Not authenticated...</div>

	if (hotel && hotel.user_id !== userId) return <div>Access denied...</div>

	return (
		<div>
			<AddHotelForm hotel={hotel} />
		</div>
	)
}

export default HotelDetail

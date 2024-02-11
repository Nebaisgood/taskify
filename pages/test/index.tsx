import { useState } from 'react';

import CardDetails from '@/src/components/ui/Modal/CardDetails';
import TodoModal from '@/src/components/ui/Modal/TodoModal';

export default function Page() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		console.log('open');
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<button onClick={handleOpen}>click</button>
			{open && (
				<TodoModal
					onClose={handleClose}
					handleSubmit={() => {
						console.log('submit');
					}}
					mode='생성'
					postData={{
						assigneeUserId: 765,
						dashboardId: 3226,
						columnId: 10771,
						title: '',
						description: '',
						dueDate: '',
						tags: [],
						imageUrl: '',
					}}
				/>
			)}
		</div>
	);
}

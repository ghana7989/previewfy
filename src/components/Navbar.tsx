import React from 'react';

export default function Navbar() {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='text-xl normal-case btn btn-ghost'>PreviewFy</a>
			</div>
			<div className='flex-none'>
				<a
					target='_blank'
					href='https://github.com/ghana7989/previewfy'
					className='text-xl normal-case btn btn-ghost'>
					github ↗
				</a>
				<label className='btn btn-ghost btn-circle avatar'>
					<div className='w-10 rounded-full'>
						<img src='https://avatars.githubusercontent.com/u/65382745?s=400&u=911cf66d6732a7b582283e2171191f6052f0b595&v=4' />
					</div>
				</label>
			</div>
		</div>
	);
}

import React from 'react';

import { IProxyResponse } from '../types/response.types';
import { truncate } from '../utils/truncate';

interface ILinkPreviewProps extends IProxyResponse {}
export default function LinkPreview({images, meta, og}: ILinkPreviewProps) {
	const isVideo = og.type?.includes('video');
	return (
		<div>
			<div className='card w-96 bg-accent-content bg-opacity-50 shadow-xl'>
				<figure className='outline-dashed outline-zinc-500'>
					<img
						src={
							og.image ||
							'https://cdn2.iconfinder.com/data/icons/pittogrammi/142/95-512.png'
						}
						alt='preview'
						className={`${
							isVideo ? 'aspect-video' : 'aspect-square w-60 py-2 bg-white'
						}`}
					/>
					<div className='badge badge-info absolute top-2 right-2 '>
						<a href={og.url} target='_blank'>
							{truncate(og.site_name || meta.title || '', 20)}
						</a>
					</div>
				</figure>
				<div className='card-body justify-end'>
					<h2 className='card-title w-full text-white'>
						{og.title || meta.title}
					</h2>
					<span className='w-full text-gray-500'>
						<p>{truncate(og.description || meta.description || '')}</p>
					</span>
					{/* {og.type?.includes('video') ? 'Watch' : 'Visit'} */}
				</div>
			</div>
		</div>
	);
}

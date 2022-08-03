import React from 'react';

import { IProxyResponse } from '../types/response.types';
import { truncate } from '../utils/truncate';

interface ILinkPreviewProps extends IProxyResponse {}
export default function LinkPreview({meta, og}: ILinkPreviewProps) {
	const isVideo = og.type?.includes('video');
	return (
		<div className='bg-opacity-50 shadow-xl card w-96 bg-accent-content'>
			<figure className='outline-dashed outline-zinc-500'>
				<img
					src={
						og.image ||
						'https://cdn2.iconfinder.com/data/icons/pittogrammi/142/95-512.png'
					}
					alt='preview'
					className={`${
						isVideo ? 'aspect-video' : 'aspect-auto w-full py-2 bg-white'
					}`}
				/>
				<div className='absolute badge badge-info top-2 right-2 '>
					<a href={og.url} target='_blank'>
						{truncate(og.site_name || meta.title || '', 20)}
					</a>
				</div>
			</figure>
			<div className='justify-end card-body'>
				<h2 className='w-full text-white card-title'>
					{og.title || meta.title}
				</h2>
				<span className='w-full text-gray-500'>
					<p>{truncate(og.description || meta.description || '')}</p>
				</span>
				{/* {og.type?.includes('video') ? 'Watch' : 'Visit'} */}
			</div>
		</div>
	);
}

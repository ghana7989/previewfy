import axios from 'axios';
import React, { FormEvent, FormEventHandler, useEffect, useRef, useState } from 'react';

import LinkPreview from './components/LinkPreview';
import { IProxyResponse } from './types/response.types';
import { isObjectDefined } from './utils/isObjectDefined';
import { withHttp } from './utils/withHttp';

function App() {
	const [url, setUrl] = useState('');
	const [proxyResponse, setProxyResponse] = useState({} as IProxyResponse);
	const [clipboardUrl, setClipboardUrl] = useState('');
	const handleOnClick: FormEventHandler<HTMLButtonElement> = async () => {
		const {data}: {data: IProxyResponse} = await axios.post(
			'http://localhost:8080/proxy/get-meta',
			{
				url: withHttp(url),
			},
		);
		setProxyResponse(data);
	};
	useEffect(() => {
		(async function () {
			const something = await navigator.clipboard.readText();
			console.log('🚀 ---------------------------------------------------🚀');
			console.log('🚀 ~ file: App.tsx ~ line 25 ~ something', something);
			console.log('🚀 ---------------------------------------------------🚀');
		})();
	}, []);
	return (
		<div className='flex items-center justify-center w-full h-screen'>
			<div className='flex flex-col items-center justify-center border p-10 rounded-lg border-slate-500 '>
				<div className='flex w-full'>
					<input
						value={url}
						onChange={e => setUrl(e.target.value)}
						type='text'
						placeholder='Paste URL'
						className='input input-primary rounded-none w-full max-w-xs mx-auto'
					/>
					<button
						onClick={handleOnClick}
						className='btn btn-primary rounded-none'>
						Get Preview
					</button>
				</div>
				<div className='h-3' />
				{isObjectDefined(proxyResponse) ? (
					<LinkPreview
						images={proxyResponse.images || []}
						meta={proxyResponse.meta || {}}
						og={proxyResponse.og || {}}
					/>
				) : (
					<h1>Paste a link</h1>
				)}
			</div>
		</div>
	);
}

export default App;

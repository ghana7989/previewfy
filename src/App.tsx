import axios from 'axios';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import LinkPreview from './components/LinkPreview';
import { IProxyResponse } from './types/response.types';
import { isObjectDefined } from './utils/isObjectDefined';
import { isUrl } from './utils/isUrl';
import { withHttp } from './utils/withHttp';

function App() {
	const [proxyResponse, setProxyResponse] = useState({} as IProxyResponse);
	const [url, setUrl] = useState('');
	const handleOnClick: FormEventHandler<HTMLButtonElement> = async () => {
		const {data}: {data: IProxyResponse} = await axios.post(
			'http://localhost:8080/proxy/get-meta',
			{
				url: withHttp(url),
			},
		);
		setProxyResponse(data);
	};
	const countRef = useRef<number>(0);

	// This useEffect id for clipboard functionality
	useEffect(() => {
		// This is to make sure it only runs once
		if (url || countRef.current > 0) return;
		(async function () {
			countRef.current++;
			const clipboardString = await navigator.clipboard.readText();
			const validUrl = isUrl(clipboardString);
			if (validUrl && !url) {
				setUrl(clipboardString);
				toast.success('pasted the link from clipboard');
			}
		})();
	}, []);

	return (
		<div className='flex items-center justify-center w-full h-screen'>
			<div className='flex flex-col items-center justify-center p-10 border rounded-lg border-slate-500 '>
				<div className='flex w-full'>
					<input
						value={url}
						onChange={e => setUrl(e.target.value)}
						type='text'
						placeholder='Paste URL'
						className='w-full max-w-xs mx-auto rounded-none input input-primary'
					/>
					<button
						onClick={handleOnClick}
						className='rounded-none btn btn-primary'>
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
					<h1>{!url ? 'Paste a link' : 'Press Get Preview'}</h1>
				)}
				<Toaster />
			</div>
		</div>
	);
}

export default App;

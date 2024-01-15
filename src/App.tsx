import { useState } from 'react';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { NavBar } from './components/NavBar';
import { LinkPreview } from './components/LinkPreview';
import { LinksForm } from './components/LinksForm';
import { ProfileForm } from './components/ProfileForm';

export type Inputs = {
	firstName: string;
	lastName: string;
	email: string;
	avatar: Blob | MediaSource;
};

export default function App() {
	const methods = useForm<Inputs>({
		defaultValues: {
			firstName: '',
		},
	});

	const [previewImage, setPreviewImage] = useState<string | null>(null);

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	const [page, setPage] = useState('links');

	const handlePageChange = (page: string) => {
		setPage(page);
	};

	return (
		<FormProvider {...methods}>
			<div className="container mx-auto bg-slate-100 h-screen text-gray-800">
				<NavBar page={page} handlePageChange={handlePageChange} />

				<div className="mt-5 flex justify-center">
					<LinkPreview previewImage={previewImage} />

					<div className="bg-white rounded p-8">
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<LinksForm page={page} />
							<ProfileForm page={page} setPreviewImage={setPreviewImage} />

							<div className="flex justify-end mt-5 border-t">
								<button
									type="submit"
									className="text-gray-50 px-5 py-1 mt-5 rounded bg-indigo-600 font-medium"
								>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</FormProvider>
	);
}

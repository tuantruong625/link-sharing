import {  useFormContext } from 'react-hook-form';
import { FormHeader } from './FormHeader';
import { Inputs } from '../App';

interface ProfileFormProps {
	page: string;
	setPreviewImage: (previewImage: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ page, setPreviewImage }) => {
	const { register } = useFormContext<Inputs>();

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (e.target) {
					setPreviewImage(e.target.result as string);
				}
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	return (
		<>
			{page === 'profile' ? (
				<>
					<FormHeader
						title="Profile Details"
						body="Add details to create a personal touch to your profile."
					/>
					<div className="flex flex-col gap-5 bg-slate-50 p-4 rounded">
						<label
							htmlFor="avatar"
							className="flex items-center justify-between"
						>
							Profile Picture
							<div className="flex items-center justify-center w-full">
								<label
									htmlFor="dropzone-file"
									className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
								>
									<div className="flex flex-col items-center justify-center pt-5 pb-6">
										<svg
											className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 20 16"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
											/>
										</svg>
										<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
											<span className="font-semibold">Click to upload</span>
										</p>
										<p className="text-xs text-gray-500 dark:text-gray-400">
											SVG, PNG, JPG. (MAX. 800x400px)
										</p>
									</div>
									<input
										id="dropzone-file"
										type="file"
										{...register('avatar')}
										onChange={handleImageChange}
										className="hidden"
									/>
								</label>
							</div>
						</label>
						<label
							htmlFor="firstName"
							className="flex items-center justify-between"
						>
							First Name
							<input
								className="border p-2 rounded"
								{...register('firstName')}
							/>
						</label>
						<label
							htmlFor="lastName"
							className="flex items-center justify-between"
						>
							Last Name
							<input
								type="text"
								className="border p-2 rounded"
								{...register('lastName')}
							/>
						</label>

						<label
							htmlFor="email"
							className="flex items-center justify-between"
						>
							Email
							<input
								type="text"
								className="border p-2 rounded"
								{...register('email')}
							/>
						</label>
					</div>
				</>
			) : null}
		</>
	);
};

export { ProfileForm };

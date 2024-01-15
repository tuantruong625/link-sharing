
import { LinkIcon, UserCircleIcon, } from '@heroicons/react/24/solid';

interface NavBarProps { 
  page: string;
  handlePageChange: (page: string) => void;
}

const NavBar = ({ page, handlePageChange }: NavBarProps) => {
  return (
    <nav className="flex justify-between items-center p-4 mt-5 bg-white rounded">
				<h1 className="font-bold text-xl">🔗 devlinks</h1>
				<div className="flex items-center ">
					<button
						className={`text-base flex items-center px-4 py-2 text-gray-500 rounded 
						${page === 'links' ? 'bg-indigo-100 text-indigo-700' : ''}`}
						onClick={() => handlePageChange('links')}
					>
						<LinkIcon className="h-4 w-4 mr-1" />
						Links
					</button>

					<button
						className={`text-base flex items-center px-4 py-2 text-gray-500 rounded 
						${page === 'profile' ? 'bg-indigo-100 text-indigo-700' : ''}`}
						onClick={() => handlePageChange('profile')}
					>
						<UserCircleIcon className="h-4 w-4 mr-1" />
						Profile Details
					</button>
				</div>
				<button className="border border-indigo-600 px-5 py-1 rounded text-indigo-600 font-medium">
					Preview
				</button>
			</nav>
  );
}

export { NavBar }
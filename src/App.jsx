const App = () => {
	return (
		<div className='bg-gray-900'>
			<div className='container mx-auto bg-gray-650'>
				<div className='content'>
					<div className='flex justify-between pt-12'>
						<div className='flex justify-between gap-64'>
							<i className='fab fa-apple text-5xl text-white'></i>
							<div className=''>
								<ul className='flex items-center gap-12 '>
									<li className='text-xl text-white'>
										<a href=''>Store</a>
									</li>
									<li className='text-xl text-white'>
										<a href=''>Mac</a>
									</li>
									<li className='text-xl text-white'>
										<a href=''>iPad</a>
									</li>
									<li className='text-xl text-white'>
										<a href=''>iPhone</a>
									</li>
									<li className='text-xl text-white'>
										<a href=''>Watch</a>
									</li>
									<li className='text-xl text-white'>
										<a href=''>Vision</a>
									</li>
									<li className='text-xl text-white'>
										<a href=''>AirPods</a>
									</li>
									<li className='text-xl text-white'>
										<a href=''> Home</a>
									</li>
									<li className='text-xl text-white'>
										<a href=''>Entertainment</a>
									</li>
									<li className='text-xl text-white'>
										<a href=''>Accessories</a>
									</li>
									<div className='flex gap-12'>
										<i className='fas fa-search text-xl text-purple-500'></i>
										<i className='fas fa-shopping-bag text-xl text-purple-500'></i>
									</div>
								</ul>
							</div>
						</div>
					</div>
					<div className='container mx-auto'>
						<div className='flex justify-between pt-8'>
							<h1 className='pt-6 text-3xl text-gray-700'>Apple Vision Pro</h1>
							<div className=''>
								<ul className='flex gap-12 pt-4'>
									<li className='pt-3 text-xl text-white'>Overview</li>
									<li className='pt-3 text-xl text-white'>Guided Tour</li>
									<li className='pt-3 text-xl text-white'>Tour Tech Specs</li>
									<div className='flex justify-between gap-8'>
										<button className='rounded-xl border p-2 px-4 text-xl  text-white hover:bg-gray-700'>Book a demo</button>
										<button className='rounded-xl bg-red-900 p-2 px-4 text-lg text-white'>Buy</button>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

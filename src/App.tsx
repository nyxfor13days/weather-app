import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
	return (
		<div className='flex h-screen w-screen bg-zinc-900 text-zinc-300'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;


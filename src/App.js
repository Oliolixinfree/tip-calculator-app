import './App.css';
import Logo from './components/Logo';
import Main from './components/Main';

function App() {

	return (
    <div className="App">
		<div className='wrapper'>
			<div className='container'>
				<Logo />
				<Main />
			</div>
		</div>
    </div>
	);
}

export default App;

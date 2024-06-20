import { useEffect, useState } from 'react';
import { SigneMoins, SignePlus, Wrapper } from './container.css';

function Container() {
	const [password, setPassword] = useState('');
	const [length, setLength] = useState(8);
	const [majuscule, setMajuscule] = useState(true);
	const [minuscule, setMinuscule] = useState(true);
	const [nombre, setNombre] = useState(true);
	const [special, setSpecial] = useState(true);

	function handleChange(e) {
		setLength(e.target.value);
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(password);
		const el = document.getElementById('copy-button');
		el.innerText = 'Copié !';
		const timeout = setTimeout(() => {
			el.innerText = 'Copier';
		}, 1000);
		return () => clearTimeout(timeout);
	}

	useEffect(() => {
		const generatePassword = () => {
			const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			const lower = 'abcdefghijklmnopqrstuvwxyz';
			const numbers = '0123456789';
			const symbols = '!@#$%^&*()_+=';

			let characters = '';
			if (majuscule) characters += upper;
			if (minuscule) characters += lower;
			if (nombre) characters += numbers;
			if (special) characters += symbols;

			let password = '';
			for (let i = 0; i < length; i++) {
				password += characters.charAt(
					Math.floor(Math.random() * characters.length)
				);
			}
			setPassword(password);
		};
		generatePassword();
	}, [length, majuscule, minuscule, nombre, special]);

	return (
		<Wrapper>
			<h1>Générateur de mots de passe : </h1>
			<section>
				<input type='text' disabled value={password} />
				<div
					id='copy-button'
					className='copy'
					onClick={copyToClipboard}
				>
					Copier
				</div>
			</section>
			<section className='range'>
				<label>Longueur mot de passe : </label>
				<span>{` ${length}`}</span>
				<SigneMoins
					onClick={() => length > 8 && setLength(length - 1)}
				/>
				<input
					type='range'
					min='8'
					max='18'
					value={length}
					onChange={handleChange}
				/>
				<SignePlus
					onClick={() => length < 18 && setLength(length + 1)}
				/>
			</section>
			<section>
				<label>Types de caractères : </label>
				<input
					id='majuscule'
					type='checkbox'
					checked={majuscule}
					onChange={() => setMajuscule(!majuscule)}
				/>
				<label htmlFor='majuscule'>ABC</label>
				<input
					id='minuscule'
					type='checkbox'
					checked={minuscule}
					onChange={() => setMinuscule(!minuscule)}
				/>
				<label htmlFor='minuscule'>abc</label>
				<input
					id='nombre'
					type='checkbox'
					checked={nombre}
					onChange={() => setNombre(!nombre)}
				/>
				<label htmlFor='nombre'>123</label>
				<input
					id='special'
					type='checkbox'
					checked={special}
					onChange={() => setSpecial(!special)}
				/>
				<label htmlFor='special'>#$&</label>
			</section>
		</Wrapper>
	);
}

export default Container;

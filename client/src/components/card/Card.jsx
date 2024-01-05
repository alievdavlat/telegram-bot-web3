import React from 'react';
import Button from '../button/button';
import './card.css';

const Card = ({title, id, price , Image, onAddItem, onRemoveItem}) => {
	const [count, setCount] = React.useState(0);

	const handleIncrement = () => {
		setCount(prev => prev + 1);
		onAddItem(course);
	};

	const handleDecrement = () => {
		setCount(prev => prev - 1);
		onRemoveItem(course);
	};

	return (
		<div className='card'>
			<span
				className={`${
					count !== 0 ? 'card__badge' : 'card__badge-hidden'
				}`}
			>
				{count}
			</span>

			<div className='image__container'>
				<img
					src={Image}
					alt={title}
					width={'100%'}
					height={'230px'}
				/>
			</div>

			<div className='card__body'>
				<h2 className='card__title'>{title}</h2>
				<div className='card__price'>
					{price.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</div>
			</div>

			<div className='hr'></div>

			<div className='btn__container'>
				<Button title={'+'} onClick={handleIncrement} type={'add'} />
				{count !== 0 && (
					<Button
						title={'-'}
						type={'remove'}
						onClick={handleDecrement}
					/>
				)}
			</div>
		</div>
	);
};

export default Card;

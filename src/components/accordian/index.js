import React, { useContext } from 'react';
import {
	Inner,
	Container,
	Frame,
	Item,
	Header,
	Body,
	Title,
} from './styles/Accordian';
import NetflexContext from '../../store/Netflex-context';
import { ContextProvider } from '../../store/Netflex-context';

export default function Accordian({ children, ...rest }) {
	return (
		<Container>
			<Inner {...rest}>{children}</Inner>
		</Container>
	);
}
Accordian.Title = function AccordianTitle({
	children,
	...rest
}) {
	return <Title {...rest}>{children}</Title>;
};
Accordian.Item = function AccordianItem({
	children,
	...rest
}) {
	return (
		<ContextProvider>
			<Item {...rest}>{children}</Item>
		</ContextProvider>
	);
};
Accordian.Frame = function AccordianFrame({
	children,
	...rest
}) {
	return <Frame {...rest}>{children}</Frame>;
};
Accordian.Header = function AccordianHeader({
	children,
	...rest
}) {
	const { toggleItem, toggleFunc } =
		useContext(NetflexContext);
	return (
		<Header onClick={() => toggleFunc()} {...rest}>
			{children}
			{toggleItem ? (
				<img
					src='/images/icons/close-slim.png'
					alt='Close'
				/>
			) : (
				<img src='/images/icons/add.png' alt='Open' />
			)}
		</Header>
	);
};

Accordian.Body = function AccordianBody({
	children,
	...rest
}) {
	const { toggleItem } = useContext(NetflexContext);

	return (
		<Body
			className={toggleItem ? 'open' : 'closed'}
			{...rest}>
			<span>{children}</span>
		</Body>
	);
};

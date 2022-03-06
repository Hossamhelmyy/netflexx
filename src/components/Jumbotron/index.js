import React from 'react';
import {
	Inner,
	Container,
	Title,
	SubTitle,
	Image,
	Item,
	Pane,
} from './styles/jumbotron';

export default function Jombotron({
	children,
	direction = 'row',
	...restProps
}) {
	return (
		<Item>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
}

Jombotron.Container = function JumbotronContainer({
	children,
	...restProps
}) {
	return <Container {...restProps}>{children}</Container>;
};

Jombotron.Pane = function JumbotronPane({
	children,
	...restProps
}) {
	return <Pane {...restProps}>{children}</Pane>;
};
Jombotron.Title = function JumbotronTitle({
	children,
	...restProps
}) {
	return <Title {...restProps}>{children}</Title>;
};
Jombotron.SubTitle = function JumbotronSubTitle({
	children,
	...restProps
}) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jombotron.Image = function JumbotronImage({
	...restProps
}) {
	return <Image {...restProps}></Image>;
};

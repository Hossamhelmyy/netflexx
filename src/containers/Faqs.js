import React from 'react';
import faqsData from '../fixtures/faqs.json';
import Accordian from '../components/accordian/index';
import { OptFormContainer } from './optFormContainer';
export const FaqsContainer = () => {
	return (
		<Accordian>
			<Accordian.Title>
				Frequently Asked Questions
			</Accordian.Title>
			<Accordian.Frame>
				{faqsData.map((item) => (
					<Accordian.Item key={item.id}>
						<Accordian.Header>
							{item.header}
						</Accordian.Header>
						<Accordian.Body>{item.body}</Accordian.Body>
					</Accordian.Item>
				))}
			</Accordian.Frame>
			<OptFormContainer />
		</Accordian>
	);
};

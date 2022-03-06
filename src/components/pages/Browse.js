import React from 'react';
import { useContent } from '../../hooks/useContent';
import { selectionFilter } from '../../utilites/SelectionFilter';
import { BrowserContainer } from '../../containers/Browser';

export function Browse({ children, ...rest }) {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });

  return <BrowserContainer slides={slides} />;
}

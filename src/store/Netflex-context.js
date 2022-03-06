import React, { useState } from 'react';

const NetflexContext = React.createContext({
	toggleItem: false,
	toggleFunc: () => {},
});

export const ContextProvider = (props) => {
	const [itemState, setItemState] = useState(false);
	const toggleItem = () => {
		setItemState(!itemState);
	};

	return (
		<NetflexContext.Provider
			value={{
				toggleItem: itemState,
				toggleFunc: toggleItem,
			}}>
			{props.children}
		</NetflexContext.Provider>
	);
};
export default NetflexContext;

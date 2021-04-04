import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Repeater from '@enact/ui/Repeater';
import Scroller from '@enact/sandstone/Scroller';
import {Cell,Row} from '@enact/ui/Layout';
import MovieCard from '../components/MovieCard';

const ListBase = kind({
	name: 'List',

	propTypes: {
		children: PropTypes.array,
		onSelectKitten: PropTypes.func
	},

	render: ({children, onSelectKitten, ...rest}) => {
		return(
		<Panel {...rest}  >
			 <Header noCloseButton={true}>
 	<title>Movie Cards</title>
 	<titleBelow>The Adventure Continues</titleBelow>
 </Header>
				<Scroller focusableScrollbar={true}>
				<div>
			
			<Repeater wrap={true} component={Row} childComponent={MovieCard} indexProp="index" itemProps={{onSelect: onSelectKitten}}>
			
				{children}
				
			</Repeater>
			</div>
			</Scroller>
		</Panel>
	)}
});

export default ListBase;
export {ListBase as List, ListBase};

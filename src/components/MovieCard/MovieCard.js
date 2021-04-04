import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Spottable from '@enact/spotlight/Spottable';

import css from './MovieCard.module.less';
import Layout,{Cell,Row} from '@enact/ui/Layout';
const MovieCardBase = kind({
	name: 'MovieCard',

	propTypes: {
		index: PropTypes.number,
		onSelect: PropTypes.func,
	},


	styles: {
		css,
		className: 'MovieCard'

	},

	handlers: {
		onSelect: (ev, {index, onSelect}) => {
			if (onSelect) {
				onSelect({index});
			}
		}
	},

	render: ({children, onSelect, url,data,css ,...rest}) => {
		delete rest.size;
		delete rest.index;
		return (
			<Cell  {...rest} size={280}>
			<div className={css.custom_cell_class}  onClick={onSelect}>
				<img src={data.video_thumbnails[`3x4`][`320`]} />
				<div className={css.video_name}>{data.video_name}</div>
			</div>
			</Cell>
		);
	}
});

const MovieCard = (MovieCardBase);

export default MovieCard;
export {MovieCard, MovieCardBase};

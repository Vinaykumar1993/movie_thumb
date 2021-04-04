import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import {Cell,Row} from '@enact/ui/Layout';
import css from './Details.module.less';
import Scroller from '@enact/sandstone/Scroller';
const genders = {
	m: 'Male',
	f: 'Female'
};

const DetailBase = kind({
	name: 'Detail',

	propTypes: {
		color: PropTypes.string,
		gender: PropTypes.string,
		name: PropTypes.string,
		weight: PropTypes.number
	},
	styles:{
		css,
		className:"details_movie"
	},
	defaultProps: {
		gender: 'm',
		color: 'Tabby',
		weight: 9
	},

	render: ({color, gender, weight,details, ...rest}) => (
		<Panel {...rest}>
		 <Header noCloseButton={true} title={details.data.video_name}/>
		 <Scroller focusableScrollbar={true}>
				<div>
			<Row wrap>
				<Cell className={css.image_cell} size={320} >
				<img src={details.data.video_thumbnails[`3x4`][`640`]}/>
				</Cell>
				<Cell  className={css.image_cell2}>
				<p>{details.data.video_description}</p>
				</Cell>
			</Row>
			</div>
			</Scroller>
		</Panel>
	)
});

export default DetailBase;
export {DetailBase as Detail, DetailBase};

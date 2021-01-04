import React from 'react';
import SearchBar from '../components/SearchBar';

export default {
    title: 'Components',
    component: SearchBar
};

const Template = (args) => <SearchBar {...args} />

export const Bar = Template.bind({});

Bar.args = {
    onSearchSubmit: (e) => console.log(e.target)
};


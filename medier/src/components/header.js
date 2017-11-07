//import libararies for making component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = () => {
	const { textStyle, viewStyle} = styles;

	return (
		<View style={viewStyle}>
		<Text style={textStyle}>MIDIER</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 670,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2
	},
	textStyle: {
		fontSize: 20
	}
};

//make the component available for other parts of the app
export default Header;

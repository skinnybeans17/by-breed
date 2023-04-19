import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Stars from "./Stars";

export default function Item({ item }) {
	return (
		<View style={styles.item}>
			<View style={styles.item}>
			<Text style={styles.breed}>{item.breed}</Text>
			<Stars rating={5}/>
		</View>
		<ScrollView style={styles.traitsList}>
			{Object.keys(item).map((key) => {
				if (key !== "breed") {
					return (
						<View key={key} style={styles.traitItem}>
							<Text>{key}: </Text>
							<Stars rating={item[key]} />
						</View>
					);
				}
			})}
		</ScrollView>
	</View>
	)
}

const styles = StyleSheet.create({
	item: {
		marginTop: 20,
		backgroundColor: 'beige',
		borderWidth: 1,
		padding: 5,
		borderColor: 'red',
		display: "flex",
		flexDirection: "column",
		width: "100%",
	},
	traitItem: {
		justifyContent: "space-between",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
	},
	traitsList: {
		paddingTop: 5,
		paddingLeft: 30,
	},
	itemName: {
		gap: 8,
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		width: "100%",
	}
});
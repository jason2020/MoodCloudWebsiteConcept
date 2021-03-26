import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Icon, Button, Text } from 'native-base';
const GoalTree = () => {
   return (
        <View style={styles.goalTree}>
            <View style={styles.goal}>
                <View style={styles.progressButtons}>
                    <Button small style={styles.upvote}><Icon name="caret-up-outline"/></Button>
                    <Button small style={styles.downvote}><Icon name="caret-down-outline"/></Button>
                </View>
                
                <View style={styles.goalName}>
                    <Text>Drink Water</Text>
                </View>
            </View>
            <View style={styles.goal}>
                <View style={styles.progressButtons}>
                    <Button small style={styles.upvote}><Icon name="caret-up-outline"/></Button>
                    <Button small style={styles.downvote}><Icon name="caret-down-outline"/></Button>
        
                </View>
                
                <View style={styles.goalName}>
                    <Text>Exercise</Text>
                </View>
            </View>
            <View style={styles.goal}>
                <View style={styles.progressButtons}>
                    <Button small style={styles.upvote}><Icon name="caret-up-outline"/></Button>
                    <Button small style={styles.downvote}><Icon name="caret-down-outline"/></Button>
        
                </View>
                
                <View style={styles.goalName}>
                    <Text>End Homelessness</Text>
                </View>
            </View>
            <View style={styles.goal}>
                <View style={styles.progressButtons}>
                    <Button small style={styles.upvote}><Icon name="caret-up-outline"/></Button>
                    <Button small style={styles.downvote}><Icon name="caret-down-outline"/></Button>
                </View>
                
                <View style={styles.goalName}>
                    <Text>Cure Cancer</Text>
                </View>
            </View>
        </View>
   );
   
}

const styles = StyleSheet.create({
    goal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10, 
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 1,
        width: Dimensions.get("window").width - 50,
        // backgroundColor: "#4DAD49"
    },

    upvote: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    }, 

    downvote: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0
    },

    goalTree: {
        flexDirection: 'column',
    },

    goalName: {
        marginLeft: 20,
        flexWrap: 'wrap',
    }
});
export default GoalTree;

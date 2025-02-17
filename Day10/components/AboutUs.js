import { useState } from 'react';
import { Platform } from 'react-native';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { PaperProvider, Text, Divider, TextInput, Button } from 'react-native-paper';

export default function AboutUs(){
    return(
        <>
         <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text variant="headlineLarge">Headline Large</Text>
                    <Divider />
                    <Text variant="bodyMedium" style={styles.body}>
                    <View >
                        <Image source={require('../assets/UOV.png')}/>
                    </View>
                    <h1>History</h1>

 
 The Northern Province Affiliated University College (NPAUC) was established in 1991. Subsequently, by an order made under Section 22 of the Universities Act No. 16 of 1978, the Vavuniya Campus of the University of Jaffna was established on 1st April 1997 with two faculties, namely the Faculty of Applied Science and the Faculty of Business Studies. In 2020, by the Extraordinary Gazette No. 2160/43 dated 30.01.2020, the Faculty of Technological Studies was also established. All three faculties offer twelve degree programs of three and four year duration at present.
 
 The Vavuniya Campus of the University of Jaffna has been elevated to a separate state University and established as the “University of Vavuniya, Sri Lanka” by the extraordinary gazette issued on 08th June 2021. Accordingly, the University of Vavuniya became the 17th state university in Sri Lanka effective from 01st August 2021. The University of Vavuniya expects to increase the student intake through introducing new study programs along with the establishment of the proposed faculties, namely, Faculty of Medicine, Faculty of Tourism and Hotel Management, Faculty of Health Sciences, Faculty of Aquaculture, Fisheries and Marine Studies, Faculty of  Environmental Science, Faculty of Livestock, Faculty of Humanities and Social Sciences, and Faculty of Graduate Studies.
 
 The permanent site of the University of Vavuniya is located about ten kilometers away from Vavuniya town along the Vavuniya Mannar Road at Sopalapuliyankulam, Pampaimadu. The university owns one hundred and ninety five (195) acres of land, and it is a residential university. The university maintains a forest pocket and two minor tanks within this land area. The iconic landscape contributes to the university’s signature to keep generations connected to the University of Vavuniya. It paves the way to get a new collegiate experience for our existing and prospective students.
 
  
                    </Text>

                    <Button icon="camera" mode="outlined" onPress={() => navigation.navigate('contact')}>
                        Home
                    </Button>
                </View>
            </ScrollView>
        </PaperProvider>
        
        
        </>
    );

    
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffff',
        justifyContent: 'space-between',
        padding: 10,
        color:'#0000'
    },
    body: {
        padding: 8,
        textAlign: 'justify',
        
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
});
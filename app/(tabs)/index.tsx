import { useState } from 'react'; 
import { View, StyleSheet } from 'react-native';

//screens
import { BooksScreen } from '@/screens/BooksScreen';
import { ReviewsScreen } from '@/screens/ReviewsScreen';
import { ListsScreen } from '@/screens/ListsScreen';


type TabType = "books" | "reviews" | "lists"; 

//components
import { CustomTab } from '@/component/home/custom-tab';

export default function Index() {

  const [activeTab, setActiveTab] = useState<TabType>("books");

  const handleTabPress = (tab: TabType) => {
    setActiveTab(tab); 
  }

  const renderScreen = () => {
    switch(activeTab) {
      case "books": 
        return <BooksScreen />; 
      case "reviews":
        return <ReviewsScreen />; 
      case "lists": 
        return <ListsScreen />; 
    }
  }


  return (
    <View style={styles.container}>

      <View> 
        <CustomTab activeTab={activeTab} handleTabPress={handleTabPress}/>
     
        <View> { renderScreen() } </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});
 
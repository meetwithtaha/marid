import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import HomeHeader from '../../components/common/Header';
import LinearGradient from 'react-native-linear-gradient';
import { colors, commonStyles } from '../../utils';
import { ChooseEvents, Spacer } from '../../components';
import { widgetPadding } from '../../utils/constants';
import { getHomeData } from '../../network/requests';

const Home = () => {
  const [homeData, setHomeData] = React.useState([]);

  useEffect(() => {
    // Fetch home data from the API and set it to state
    getHomeData().then(data => {
      if (data) setHomeData(data);
    });
  }, []);

  return (
    <LinearGradient
      start={{ x: 0.1, y: 1 }}
      end={{ x: 0, y: 1 }}
      colors={colors.mainContainer}
      style={commonStyles.mainContainer}
    >
      <HomeHeader
        searchBarPlaceHolder={'Search by Item'}
        searchBar
        showFilter
      />
      <ChooseEvents data={homeData} />
    </LinearGradient>
  );
};

export default Home;

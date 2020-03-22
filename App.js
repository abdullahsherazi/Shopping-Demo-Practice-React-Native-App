import React from "react";
import StackNavigator from "./src/screen/StackNavigator"
import FirstSplashScreen from "./src/screen/FirstSplashScreen"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1500
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {

    if (this.state.isLoading) {
      return <FirstSplashScreen />
    }

    return (
      <StackNavigator />
    )
  }
}




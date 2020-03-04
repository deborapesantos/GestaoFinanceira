
  let UserPreferences = {
    searchByEvent : true,
    recentAccessedEvents: [],
    recentAccessedEventAddresses: [],
  }

  let onChangeFnArr = [];

  function load() {
    ///função que carregara as informacoes do usuário
    //ainda será implementada
    return new Promise((data) => {

    })
  }

  function get() {
    return UserPreferences;
  }
  function onChange(fn){
      onChangeFnArr.push(fn)
  }

  function set(userPreferences) {
    UserPreferences = Object.assign(UserPreferences, userPreferences)
    onChangeFnArr.forEach(fn => {
        fn(userPreferences)
    })
  }

  export default UserPreferencesService = {
    get: get,
    set: set,
    load: load,
    onChange : onChange
  }




// let obj = JSON.stringify(initialConfig);
//           AsyncStorage.setItem('INITIAL_CONFIG', obj);
//           this.props.navigation.navigate('PublicIntro');
//           }
import { AsyncStorage } from 'react-native';

const store = {
    
    get(key) {
        if(!Array.isArray(key)) {
            return AsyncStorage.getItem(key).then(value => {
                return JSON.parse(value);
            });
        } else {
            return AsyncStorage.multiGet(key).then(values => {
                return values.map(value => {
                    return JSON.parse(value[1]);
                });
            });
        }
    },

    
    save(key, value) {
        if(!Array.isArray(key)) {
            return AsyncStorage.setItem(key, JSON.stringify(value));
        } else {
            var pairs = key.map(function(pair) {
                return [pair[0], JSON.stringify(pair[1])];
            });
            return AsyncStorage.multiSet(pairs);
        }
    },
    saveMulti(arrays) {
            var pairs = arrays.map(function(pair) {
                return [pair[0], JSON.stringify(pair[1])];
            });
            return AsyncStorage.multiSet(pairs);
        
    },

   
    delete(key) {
        if (Array.isArray(key)) {
            return AsyncStorage.multiRemove(key);
        } else {
            return AsyncStorage.removeItem(key);
        }
    },

   
    keys() {
        return AsyncStorage.getAllKeys();
    },

   
    
};

export default store;

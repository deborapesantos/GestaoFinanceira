import colors from './../constants/Colors';
import layout from './../constants/Layout';
const React = require("react-native");
const { Platform } = React;


export default {
    container:{
        backgroundColor:"#f7f7f7"
    },
    body:{
        fontSize:layout.fontSize        
    },
    // *** row *** //
    layout: {
        marginLeft: 20,
        marginRight: 20,
    },
    layoutInner: {
        width: '100%',
    },
    layoutCenter: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    layoutStart: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    layoutEnd: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listView: {
        width: '100%',
    },

    row1: {
        flexDirection: 'row'
    },

    // *** status and action bar *** //

    navigation: {
        shadowOpacity: 0,
        elevation: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        backgroundColor: 'transparent',
        width: '100%',
        borderBottomWidth: 0,
        borderColor: colors.tintColor,
        backgroundColor: colors.tintColor,
        color:colors.tintColor
    },
    navigationTransparent: {
        backgroundColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        backgroundColor: 'transparent',
        width: '100%',
        borderBottomWidth: 0,
    },
    

    roundSmall:{
        borderRadius:5
    },
    // *** row *** //
    row: {
        marginLeft: -5,
        marginRight: -5,
        flexDirection: 'row'
    },
    row1: {
        flexDirection: 'row'
    },

    // *** grid *** //
    col1: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    col2: {
        flex: 2,
        marginLeft: 10,
        marginRight: 10
    },
    col3: {
        flex: 3,
        marginLeft: 10,
        marginRight: 10
    },
    col4: {
        flex: 4,
        marginLeft: 10,
        marginRight: 10
    },

    // *** text alignment *** //
    textLeft: {
        textAlign: 'left'
    },
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right'
    },

    // *** space ***//
    spaceTint: {
        height: 8,
    },
    spaceSmall: {
        height: 12,
    },
    spaceMedium: {
        height: 16,
    },
    spaceLarge: {
        height: 24,
    },
    spaceExtraLarge: {
        height: 36,
    },

    // *** font size *** //
    textTint: {
        fontSize: 8,
    },
    textSmall: {
        fontSize: 12,
    },
    textCenter:{
        textAlign:'center'
    },
    textMedium: {
        fontSize: 16,
    },
    textMediumg: {
        fontSize: 18,
    },
    textLarge: {
        fontSize: 24,
    },
    textExtraLarge: {
        fontSize: 36,
    },

    // *** position *** //
    positionLeft: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    positionCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    positionRight: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },


    // *** button *** //
    btnPrimary: {
        backgroundColor: colors.tintColor,
        color: '#FFF',
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        minWidth: '60%',
        alignItems: 'center',
        textAlign: 'center',
    },
     BtnAction: {
        padding: 1       
    },
    btnPink: {
        backgroundColor: '#b78fc3',
        color: '#FFF',
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        textAlign: 'center',
    },
    btnCancel: {
        backgroundColor: '#CCC',
        color: '#999',
        borderWidth: 0,
        borderRadius: 5,
    },
    btnTransparent: {
        backgroundColor: 'transparent',
        color: '#666',
    },
    btnFacebook: {
        backgroundColor: '#26497f',
        color: '#FFF',
        marginBottom: 50,
        paddingLeft: 30,
        paddingRight: 30,
    },


    // *** background colors *** //

    bgMainIntro: {
        backgroundColor: '#ee3a37',
    },
    bgMain: {
        backgroundColor: '#FFF',
    },
    bgWhite: {
        backgroundColor: '#fceae5',
    },
    bgBlack: {
        backgroundColor: '#433c3a',
    },
    bgGreen: {
        backgroundColor: '#006837',
    },
    bgYellow: {
        backgroundColor: '#F7941E',
    },
    bgYellowDark: {
        backgroundColor: '#e4932a',
    },
    bgPink: {
        backgroundColor: '#EC87C0',
    },
    bgPinkLight: {
        backgroundColor: '#EE3D48',
        color: '#FFF',
    },
    bgBlueLight: {
        backgroundColor: '#00BBD3',
        color: '#FFF',
    },
    bgFacebook:{
        backgroundColor:'#27508E',
        color:'#FFF',
    },
    bgGoogle:{
        backgroundColor:'#FB3800',
        color:'#FFF',
    },
    bgBot: {
        backgroundColor: '#FFF',
        borderTopWidth: 0.5,
        borderColor: '#DDD',
    },
    bgFilter: {
        backgroundColor: '#FFF',
        borderWidth:1,
        borderColor: '#ccc',
        flexDirection: 'row',
    },
    bgOrange:{
        backgroundColor: '#DF3A62',
        color: '#FFF',
    },
    bgGray:{
        backgroundColor: '#e7e7e7',
        color: '#FFF',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    shadowEffect:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.00,
        
        elevation: 0.3,
    },
    // *** text colors *** //
    textWhite: {
        color: '#FFFFFF',
       // fontFamily: "Montserrat-Regular",
    },
    textBlack: {
        color: '#3f3b38',
        //fontFamily: "Montserrat-Regular",
    },
    textGreyLight: {
        color: '#999',
     //   fontFamily: "Montserrat-Regular",
    },
    textGrey: {
        color: '#666',
       // fontFamily: "Montserrat-Regular",
    },
    textGreyDark: {
        color: '#333',
        //fontFamily: "Montserrat-Regular",
    },
    textYellow: {
        color: '#F7941E',
        //fontFamily: "Montserrat-Regular",
    },
    textBlue: {
        color: colors.colorBlue,
        //fontFamily: "Montserrat-Regular",
    },
   
    textRed: {
        color: colors.colorRed,
        //fontFamily: "Montserrat-Regular",
    },
    textActive: {
        ...Platform.select({
            ios: {
                color: colors.tintColor,
                backgroundColor: 'transparent',
                fontSize: 24,
            },
            android: {
                backgroundColor: colors.tintColor,
                color: '#FFF',
                fontSize: 18,
                borderRadius: 30,
                paddingVertical: 10,
                paddingHorizontal: 13,

            },
        }),
    },

    // *** flex *** //
    flex1: {
        flex: 1,
    },

    // *** row *** //
    logo: {
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
    },

    // *** text header *** //
    actionBarLeft: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 2,
    },
    actionBarMiddle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 6,
    },
    actionBarRight: {
        justifyContent: 'center',
        flex: 2,
        alignItems: 'flex-end',
    },
    actionBarText: {
        color: '#FFFFFF',
        //fontFamily: "Montserrat-Regular",
        fontSize: 14,
        textAlign: 'center',
    },
    actionBarBtn: {
        alignSelf: 'flex-start',
        marginLeft: -10,
    },
    actionMenu: {
        marginLeft: 10,
    },
    actionBtn: {
        alignSelf: 'center',
    },
    actionIcon: {
        fontSize: 18,
        color: '#FFF',
    },
    actionBtnRight: {
        alignSelf: 'flex-end'
    },
    actionBarIn: {
        ...Platform.select({
            ios: {
                marginTop: 20,
            },
        }),
    },

    textHeader: {
        fontSize: 24,
        color: '#FFF'
    },
    textDesc: {
        fontSize: 16,
        color: '#FFF'
    },

    // *** inputText *** //
    inputText: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderRadius: 0,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5,
        //fontFamily: 'Roboto',
        color: '#FFF',
        borderBottomWidth: 0,
        borderColor: '#746f76',
        fontSize: 14,
        placeholderTextColor: '#FFF'
    },
    input: {
        paddingBottom:10,
        borderBottomColor:'#f2f2f2',
        borderBottomWidth:2
    },
    textarea: {
        textAlignVertical: 'top',
    },

    // *** line *** //
    blueTopLine: {
        borderTopWidth: 1,
        borderColor: '#2A3C54'
    },
    greyBottomLine: {
        borderTopWidth: 0.5,
        borderColor: '#DDD',
        marginLeft: 0,
    },
    borderWhite: {
        borderBottomColor: '#FFF',
    },
    textButton:{
        alignSelf:"center",
        textAlign:"center",
        width:'80%',
        paddingHorizontal:30
    },
   //fhefghgfsfehfgsf

   sectionGrey: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'transparent',
},
headerBg: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 20,
},
sHeader: {
    color: '#333',
    marginLeft: 3,
    fontSize: 14,
    marginTop: 5,
},
flatList: {
    paddingLeft: 10,
},
boxInfo:{
    backgroundColor: '#fff',
    marginTop:5,
    borderRadius:10,
    padding:10,
    borderWidth:0,
    elevation: 5,
    shadowOffset: {
        width: 5,
        height: 5
    },
    borderColor:colors.borderColor
},
boxInfoflatList: {
    
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
        width: 5,
        height: 5
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    margin: 10,
    marginBottom: 20,
    padding:10,
    width: 250,
    height: 150,
},
boxInfoflatListTitle:{
    color:"#000000",
    
},
boxInfoflatListFooter:{
    width:'100%',
    borderTopWidth:0,
    borderTopColor:'#ccc',
    height:1,
    paddingVertical:10,
    marginTop:20
    
},
boxInfoflatListValue:{
    color:"#008fb5",
    
}

}
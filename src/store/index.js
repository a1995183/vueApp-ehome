import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
    userInfo:{
    address:"sdgvsdgsdg",
    age:18,
    birthday:"--",
    branchId:"",
    count:0,
    disabled:0,
    education:"",
    header:""
    ,hometown:""
    ,id:2,idCard:"",
    jobRank:"",
    joinPartyTime:"",
    lastPayTime:"",
    leadPerson:"",
    nation:"",
    partyStatus:1,
    password:"",
    phone:"",
    qqNum:"",
    salary:'',
    sex:1,
    special:"",
    totalScore:'',
    username:"",
    wxNum:"",
        },
        token:''
    },
    mutations:{
        'CHANGE_userInfo'(state,payload){
            state.userInfo=payload
        },
        'CHANGE_token'(state,payload){
            state.token=payload
        }
    },
    actions:{
    },
    plugins:[createPersistedState({
        storage:{
            getItem:key=>sessionStorage.getItem(key),
            setItem:(key,value)=>
                sessionStorage.setItem(key,value),
                removeItem:key=>sessionStorage.removeItem(key),
        }
    })]
})
export default store
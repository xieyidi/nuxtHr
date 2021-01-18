export const state = () =>{
    return {
        showserverwindow: false,
        windowtabs:{},
        inwindow:false,
        generalsearchtabs:[
            {
                title:"个人信息",
                iconUrl:"/carditem/generalsearch/icon1.png",
                path:"/"
            },
            {
                title:"我的工资单",
                iconUrl:"/carditem/generalsearch/icon2.png",
                path:"/"
            },
            {
                title:"个人绩效",
                iconUrl:"/carditem/generalsearch/icon3.png",
                path:"/"
            },
            {
                title:"我要应聘",
                iconUrl:"/carditem/generalsearch/icon4.png",
                path:"/"
            }
        ],
        generalapplytabs:[
            {
                title:"假期申请",
                iconUrl:"/carditem/generalsearch/icon5.png",
                path:"/"
            },
            {
                title:"申请证明",
                iconUrl:"/carditem/generalsearch/icon6.png",
                path:"/"
            }
        ]
    }
}
export const mutations = {
    openserverwindow(state, windowtabs){
        state.showserverwindow = true
        state.windowtabs = windowtabs
        console.log('mutaion')
    },
    closeserverwindow(state){
        if(state.inwindow) return
        state.showserverwindow = false
        state.windowtabs = ''
    },
    enterwindow(state){
        state.inwindow = true
    },
    leavewindow(state){
        state.inwindow = false
    }
}
var list = [
    {
        title:"Hericium's Dream(猴头菇的梦境)",
        background:"#08C",
        audio:[
            {id:"BGM",url:"./assets/audio/BGM/default.mp3",type:"audio/mpeg",volume:0.1}
        ],
        opera:[
            {type:"audio",id:"BGM"},
            {type:"own",profile:"./assets/img/Hericium/1.png",name:"菇",chat:"（惊醒）"},
            // {type:"script",script:()=>{
            //     alert("test");
            //     return 1;
            // }},
            {type:"own",profile:"./assets/img/Hericium/1.png",name:"菇",chat:"嗯？（拿起闹钟一看）"},
            {type:"own",profile:"./assets/img/Hericium/1.png",name:"菇",chat:"完了完了，怎么已经7:40了呀（手忙脚乱）"},
            {type:"narration",inner:"叮铃铃，上课时间到了"},
            {type:"own",profile:"./assets/img/Hericium/1.png",name:"菇",chat:"砰（撞开教室门）"},
            {type:"own",profile:"./assets/img/Hericium/1.png",name:"菇",chat:"报...报告..."},
            {type:"other",profile:"./assets/img/Green.png",name:"老师",chat:"第一天就迟到...进来吧"},
            {type:"other",profile:"./assets/img/Green.png",name:"老师",chat:"咳咳"},
            {type:"other",profile:"./assets/img/Green.png",name:"老师",chat:"我接着刚刚的介绍"},
            {type:"other",profile:"./assets/img/Green.png",name:"格林",chat:"我叫格林"},
            {type:"other",profile:"./assets/img/Green.png",name:"格林",chat:"是你们的班主任"},
            {type:"other",profile:"./assets/img/Green.png",name:"格林",chat:"以后的三年我们将会一起度过"},
            {type:"other",profile:"./assets/img/Green.png",name:"格林",chat:"接下来请大家依次做自我介绍"},
            {type:"other",profile:"./assets/img/Ben.png",name:"本",chat:"嗨！大家好，我的名字叫本"},
            {type:"other",profile:"./assets/img/Andrew.png",name:"安德鲁",chat:"我叫安德鲁"},
            {type:"opt",opt:[{inner:"我...我的名字叫作菇..."},{inner:"我...我叫菇...",jmp:2}]},
        
            {type:"own",profile:"./assets/img/Hericium/1.png",name:"菇",chat:"我...我的名字叫作菇...",jmp:2},
            {type:"own",profile:"./assets/img/Hericium/1.png",name:"菇",chat:"我...我叫菇..."},
        
            {type:"other",profile:"./assets/img/Mides.png",name:"麦迪斯",chat:"麦迪斯(冷漠)"},
            {type:"other",profile:"./assets/img/people.png",name:"众人",chat:"(依次做自我介绍)"},
            {type:"other",profile:"./assets/img/Green.png",name:"格林",chat:"欢迎大家来到这个班级"},
            {type:"narration",inner:"叮，第一节下课时间到了"},
            {type:"other",profile:"./assets/img/Green.png",name:"格林",chat:"希望在今后的日子里我们都能和睦相处"}
        ]
    }
]
var main = list[0];
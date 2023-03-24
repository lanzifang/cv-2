let html=document.querySelector("#html")
let style=document.querySelector('#style')
let string=`/*你好，我叫小蓝
*接下来我要演示一下
*首先要准备一个div
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*然后我把这个div变成一个八卦图
*注意看
*先把div变成一个圆
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦图是阴阳的
*一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);  
}
/*加两个小圆*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
string2=''  //需要一个新字符串保存可以显示出来的部分，回车不显示

let n=0
let step=()=>{
    setTimeout(() => {
        if(string[n]==='\n'){  //如果n碰到回车，就给string2加<br>（HTML的回车）
            string2+='<br>'
        }else if(string[n]===' '){
            string2+='&nbsp'
        }else{
            string2+=string[n]  //如果n不是回车，就照搬进string2里
        }
        //string2+=(string[n]==='\n'?'<br>':string[n])  //等于上面那个if else
        html.innerHTML=string2  //再把这个string2写进HTML里
        style.innerHTML=string.substring(0,n)
        window.scrollTo(0,99999)  //页面滚动条往下滚
        html.scrollTo(0,99999)
        if(n<string.length-1){  //如果n不是最后一个，就+1
            n+=1
            step()
        }
    }, 50);
}
step()


//setTimeout(() => {
    //style.innerHTML=`
//body{
    //color:red;
//}
//`  
//}, 3000);









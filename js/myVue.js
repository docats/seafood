document.addEventListener('DOMContentLoaded',init);
function init(){
    nav=new Vue({
        el:"#nav",
        data:{
            toods:[
                {path:'./images/login.png',text:'會員登入'},
                {path:'./images/cart.png',text:'購物車'},
                {path:'./images/fb.png',text:'粉絲團'},
            ]
        }
    });

    menu=new Vue({
        el:"#menu",
        data:{
            toods_2:[
                {href:'index.html',text:'首頁'},
                {href:'aboutus.html',text:'關於我們'},
                {href:'news.html',text:'最新消息'},
                {href:'products.html',text:'產品一覽'},
                {href:'know.html',text:'四季魚類小知識'},
                {href:'contact.html',text:'聯絡我們'},
                {href:'faq.html',text:'常見問題'},
            ]
        }
    });

    new_info=new Vue({
        el:"#new_info",
        data:{
            message:"最新訊息"
        }
    });

    wrapper_list_bg=new Vue({
        el:"#wrapper_list_bg",
        data:{
            new_list:'./images/new_list.png'
        }
    });

   
}

var nav,menu,new_info,wrapper_list_bg;


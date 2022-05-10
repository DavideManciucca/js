const app = new Vue({
    el: '#app', 
    data:{
         slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
     imgIndex :0,
     autoScroll: null,
     
    },
    methods:{
        test2(slides){
            slides.image
        },
        test(){
            this.slides.forEach((slide, index)=>{
                console.log(index,slide);
            })
        },

        prossimaFoto(){
            this.imgIndex++
            if(this.imgIndex > this.slides.length -1){
                console.log('test +'),
                this.imgIndex = 0;
            }
        },
        fotoPrecedente(){
            this.imgIndex--
            if(this.imgIndex <0){
                console.log('test -');
                this.imgIndex =0;
            }
            
        },

        mouseOver(){
            
            console.log('test SOPRA')
            clearInterval(this.autoScroll);
            this.autoScroll=null;
        },
        mouseOut(){
            
            console.log('test FUORI'),
            this.startAutoscroll();
        },
        startAutoscroll(){
            this.autoScroll=setInterval(()=>{
                this.prossimaFoto();
            },1000)
        }
    },
    mounted(){this.startAutoscroll();
        // console.log('test'),
        // setInterval(()=>{
        //     this.prossimaFoto();
        // },1000);   
    },
    
    //adesso usiamo le proprietà del mouse per poter //interrompere lo slider automatico
});


var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Студия оплачивается отдельно'
    }
  })

  
  


var about = new Vue({
  el: '#about',
  data: {
      descriptions: ['Как правило, одна фотографирует общий план, а другой нравятся портреты, что помогает одновременно запечатлеть как детально кадр и эмоции человека, так и атмосферу вокруг.', 
      ' Кто-то из нас по необходимости может стать ассистентом, а значит не надо заморачиваться, куда поставить реквизит, чтобы он не повредился сам и не покалечил других ', 
      'Каждая видит кадр по-разному, поэтому мы фотографируем с различных ракурсов',
       'Фотографий получается в 2 раза больше']
  }
});


var price = new Vue({
  el: '#price',
  data: {
    photoshoots: [
              {src:'../img/price1.jpg',name:'Индивидуальная фотосъемка', cost:4000,condition1:'30-50 фото в цветокоррекции',condition2:'3-5 рабочих дней ',condition3:'помощь в подборе идеи и студии *',condition4:'Индивидуальный мудборд',condition5:'помощь в позинге ',condition6:'видео-бэкстейдж в подарок'}, 
              {src:'../img/price2.jpg',name:'Love Story/съемка 2-х людей', cost:6000,condition1:'30-70 фото в цветокоррекции',condition2:'3-5 рабочих дней ',condition3:'помощь в подборе идеи и студии *',condition4:'Индивидуальный мудборд',condition5:'помощь в позинге ',condition6:'видео-бэкстейдж в подарок'}, 
              {src:'../img/price3.jpg',name:'контент-съемка', cost:5000,condition1:'20-40 фото в цветокоррекции',condition2:'3-5 рабочих дней ',condition3:'помощь в подборе идеи и студии *',condition4:'Индивидуальный мудборд',condition5:'помощь в позинге ',condition6:'видео-бэкстейдж в подарок'}, 
           
      ]
  }
});

 


$(document).ready(function(){
	$('.slider-multi').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: true,
      arrows:true
  });
});
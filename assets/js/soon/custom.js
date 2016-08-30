/******************************************************************************************************************************
COMMING SOON PAGE
*******************************************************************************************************************************/
(function($) {
    /**
    * Set your date here  (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
    * according to the GMT+0 Timezone
    **/
    var launch = new Date(2016, 08, 30, 23, 00);
    /**
    * The script
    **/
    var message = $('#message');
    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');
    
    setDate();
    function setDate(){
        var now = new Date();
        if( launch < now ){
            days.html('<h1>0</H1><p>Dias</p>');
            hours.html('<h1>0</h1><p>Horas</p>');
            minutes.html('<h1>0</h1><p>Minutos</p>');
            seconds.html('<h1>0</h1><p>Segundos</p>');
            message.html('');
        }
        else{
            var s = -now.getTimezoneOffset()*60 + (launch.getTime() - now.getTime())/1000;
            var d = Math.floor(s/86400);
            days.html('<h1>'+d+'</h1><p>Dia'+(d>1?'s':''),'</p>');
            s -= d*86400;

            var h = Math.floor(s/3600);
            hours.html('<h1>'+h+'</h1><p>Hora'+(h>1?'s':''),'</p>');
            s -= h*3600;

            var m = Math.floor(s/60);
            minutes.html('<h1>'+m+'</h1><p>Minuto'+(m>1?'s':''),'</p>');

            s = Math.floor(s-m*60);
            seconds.html('<h1>'+s+'</h1><p>Segundo'+(s>1?'s':''),'</p>');
            setTimeout(setDate, 1000);

            message.html('<b>Dia 30 de setembro, &agrave;s 20h, publicaremos o site!</b><br><br>Voc&ecirc; poder&aacute; usar gratuitamente alguns recursos como cronometro, cadastro de disciplinas e metas. Mas, na vers&atilde;o paga, o Concufriends tamb&eacute;m trar&aacute; algumas inova&ccedil;&otilde;es em termos de aplicativos para concursos: voc&ecirc; pode criar um plano de estudo para se organizar, criar metas, acompanhar suas metas, criar cadernos de resumos, fazer quest&otilde;es, criar suas pr&oacute;prias quest&otilde;es, avaliar seu desempenho (estudo vs quest&otilde;es), fazer e criar simulados, postar e ler depoimentos, not&iacute;cias e mensagens motivacionais, postar d&uacute;vidas no f&oacute;rum, trocar ou vender livros no sebo do site, adicionar amigos em sua rede e, o melhor, ganhar pontos por tudo o que voc&ecirc; faz dentro do site! Estes pontos poder&atilde;o ser trocados por vantagens em empresas parceiras, trocados com outros usu&aacute;rios, trocados por cr&eacute;ditos dentro do pr&oacute;prio site para continuar usando os recursos pagos sem gastar nada, e muito mais!<br><br>Ap&oacute;s a publica&ccedil;&atilde;o, a vers&atilde;o paga custar&aacute; R$ 60/ano. Quem assinar at&eacute; o dia 30 de setembro, &agrave;s 20h, ganhar&aacute; um super desconto de lan&ccedil;amento! 75% a menos, por apenas R$ 15 por ano! Este valor n&atilde;o mudar&aacute; na fatura seguinte (como &eacute; de prache em outros servi&ccedil;os). Assinando por R$ 15, pagar&aacute; este valor em todas as anuidades seguintes. Assinando por R$ 60, tamb&eacute;m!<br><br>Para assinar, clique no bot&atilde;o abaixo e voc&ecirc; ser&aacute; direcionado para o site da empresa PagSeguro. <br><br><a href="https://pag.ae/bkcXwfw" target="_blank"><img src="img/assinapagseguro.gif"></a><br><br>Ou se preferir, pode usar o Paypal: <br><br><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SRXWZN788UQZJ" target="_blank"><img src="img/assinapaypal.gif"></a><br><br>Assim que recebermos a confirma&ccedil;&atilde;o da assinatura, entraremos em contato com os dados para voc&ecirc; acessar o sistema quando for lan&ccedil;ado.<br><br>Qualquer d&uacute;vida, voc&ecirc; pode entrar em contato atrav&ecirc;s dos dados abaixo: <br><br>e-mail <a href="mailto:tiagofloriano@gmail.com">tiagofloriano@gmail.com</a> &#183; whatsapp <a href="intent://send/5182412552#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">+555182412552</a> &#183; mais contatos em <a href="" target="_blank">tiagofloriano.github.io</a>');
        }
    }
})(jQuery);
/******************************************************************************************************************************
ANIMATIONS
*******************************************************************************************************************************/
(function($) {
    "use strict";
    var isMobile = false;
    if (navigator.userAgent.match(/Android/i) || 
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) || 
        navigator.userAgent.match(/iPad/i)|| 
        navigator.userAgent.match(/iPod/i) || 
        navigator.userAgent.match(/BlackBerry/i)) {                 
        isMobile = true;            
    }
    if (isMobile == true) {
        $('body').removeClass('nomobile');
        $('.animated').removeClass('animated');
    }
    $(function() {
        if (isMobile == false) {
            $('*[data-animated]').addClass('animated');
        }
        function animated_contents() {
            $(".animated:appeared").each(function (i) {
                var $this    = $(this),
                    animated = $(this).data('animated');

                setTimeout(function () {
                    $this.addClass(animated);
                }, 50 * i);
            });
        }
        animated_contents();
        $(window).scroll(function () {
            animated_contents();
        });
    });
})(jQuery);
/******************************************************************************************************************************
SLIDER
*******************************************************************************************************************************/
(function($) {
    "use strict";
    $("body.nomobile #slider").revolution(
    {
            delay:9000,
            startheight:450,
            startwidth:890,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:5,

            onHoverStop:"on",
            hideThumbs:200,
            navigationType:"bullet",
            navigationStyle:"round",
            navigationArrows:"none",

            touchenabled:"on",

            navOffsetHorizontal:0,
            navOffsetVertical:80,
            shadow:undefined,
            fullWidth:"on",
            fullScreen:"on"
    });
})(jQuery);
/******************************************************************************************************************************
BOOTSTRAP
*******************************************************************************************************************************/
(function($) {
    "use strict";
        $('[data-rel=tooltip]').tooltip();
        $(".alert").alert();
})(jQuery);
/******************************************************************************************************************************
PROGRESS BAR
*******************************************************************************************************************************/
(function($) {
    "use strict";
    $("a.btn-progress").click(function(){
        $('#bar-container').slideToggle(); 
    });
})(jQuery);

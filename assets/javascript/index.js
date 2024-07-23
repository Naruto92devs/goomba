// let style = document.createElement('style');
//     style.textContent = `
//     @media (max-width:600px) {
//         *{
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }
//         img{
//             width: 100%;
//         }
//         a{
//             text-decoration: none;
//         }
//         li{
//             list-style-type: disc;
//         }
    
//         /* -----------header-------
//         ----- */
//         header {
//             display: flex;
//             flex-direction: column;
//             /* flex-wrap: wrap; */
//             align-items: center;
//             justify-content: center;
//             background: #000;
//             padding: 2vw 5vw;
//             gap: 1vw;
//             position: relative;
//         }
    
//         header .logo {
//             margin-right: 0;
//         }
    
//         header .logo a img {
//             width: 10vw;
//         }
//         header a{
//             color: #FFF;
//             font-family: Nanum Pen Script;
//             font-size: 4.5vw;
//             font-style: normal;
//             font-weight: 400;
//             line-height: 60%; /* 120% */
//             letter-spacing: -0.75px;
//         }
//         header .socials {
//             display: flex;
//             align-items: center;
//             gap: 2.5vw;
//             margin-left: 0vw;
//             margin-right: 0vw;
//             position: relative;
//             /* order: 3; */
//         }
//         header .socials::after{
//             position: absolute;
//             content: "";
//             width: 2px;
//             height: 1vw;
//             background: rgba(255, 255, 255, 0.25);
//             left: 2.5vw;
//             display: none;
//         }
//         header .socials::before{
//             position: absolute;
//             content: "";
//             width: 2px;
//             height: 2.5vw;
//             background: rgba(255, 255, 255, 0.25);
//             left: 14.7vw;
//         }
//         header .socials a:nth-child(1){
//             margin-right: 4vw;
//         }
//         header .socials a img {
//             width: 4vw;
//             transition: all .3s;
//         }
//         header .socials a img:hover{
//             transform: translateY(-10px);
//         }
//         header .buy{
//             display: flex;
//             align-items: center;
//             gap: 2vw;
//             position: relative;
//             margin: 3vw 0;
//             margin-bottom: 0vw;
//         }
//         header .buy a:nth-child(1){
//             margin-right: 1vw;
//         }
//         header .buy a img{
//             width: 8vw;
//             position: relative;
//             top: 0;
//             transition: all .3s;
//         }
//         header .buy a img:hover{
//             filter: invert(100%);
//             transform: translateY(10px);
//         }
    
//         /* -----------hero-------
//     ----- */
    
//     .hero {
//         width: 100%;
//         height: 80vw;
//         background: url(../images/hero-bg.jpg) no-repeat;
//         background-size: cover;
//         background-position: bottom right;
//         text-align: center;
//         padding-top: 20vw;
//         position: relative;
//     }
    
//     .hero .heading {
//         width: 60vw;
//     }
    
//     .hero .hero1 {
//         width: 10vw;
//         position: absolute;
//         top: 40vw;
//         left: 17.5vw;
//     }
    
//     .hero .hero2 {
//         width: 10vw;
//         position: absolute;
//         bottom: 19.5vw;
//         left: 1vw;
//     }
    
//     .hero .hero3 {
//         width: 12vw;
//         position: absolute;
//         bottom: 19vw;
//         left: 45.5vw;
//     }
    
//     .hero .cloud1 {
//         width: 20vw;
//         position: absolute;
//         top: 8vw;
//         left: 0vw;
//         animation: cloud 60s infinite;
//     }
    
//     .hero .cloud2 {
//         width: 13vw;
//         position: absolute;
//         top: 8vw;
//         left: 0vw;
//         animation: cloud 40s reverse infinite;
//     }
    
//     .hero .cloud3 {
//         width: 13vw;
//         position: absolute;
//         top: 38vw;
//         left: 0vw;
//         animation: cloud 50s reverse infinite;
//     }
    
//     .hero .cloud4 {
//         width: 10vw;
//         position: absolute;
//         top: 28vw;
//         left: 0vw;
//         animation: cloud 50s infinite;
//     }
    
//     @keyframes cloud {
//         0% {
//             left: 0%;
//         }
//         50% {
//             left: 100%;
//         }
//         75% {
//             left: 0%;
//         }
//         100% {
//             left: 100%;
//         }
//     }
    
    
//     /* -----------about-------
//     ----- */
    
//     .about {
//         width: 100%;
//         background: #FDD100;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         text-align: center;
//         gap: 5vw;
//         padding: 7vw;
//         position: relative;
//         padding-bottom: 25vw;
//     }
    
//     .about .gif {
//         position: absolute;
//         width: 50vw;
//         top: -27vw;
//         right: 0vw;
//     }
    
//     .about .content {
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         gap: 5vw;
//         align-items: center;
//         justify-content: space-between;
//         margin-top: -5vw;
//     }
    
//     .about .content .left {
//         width: 80%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 4vw;
//     }
    
//     .about .content .left p {
//         font-size: 3.7vw;
//     }
    
    
//     .about .content .left .btn {
//         width: 25vw;
//     }
    
//     .about .content .left .btn img {
//         width: 100%;
//     }
    
//     .about .content .right {
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         gap: 5vw;
//         justify-content: space-between;
//     }
    
//     .about .content .right img:nth-child(1) {
//         width: 100%;
//     }
    
//     .about .content .right img:nth-child(2) {
//         width: 100%;
//     }
    
//     .about .cards {
//         width: 100%;
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-between;
//         row-gap: 4vw;
//     }
    
//     .about .cards .card {
//         width: 47.5%;
//         position: relative;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//     }
    
//     .about .cards .card img:nth-child(1) {
//         width: 100%;
//     }
    
//     .about .cards .card img:nth-child(2) {
//         width: 65%;
//         position: absolute;
//     }
    
//     /* -----------tokenomics-------
//     ----- */
    
//     .tokenomics {
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 2vw;
//         padding: 15vw 10vw;
//         padding-top: 20vw;
//         gap: 5vw;
//         background: url(../images/token_bg.png) no-repeat;
//         background-size: cover;
//         background-position: top center;
//         margin-top: -15vw;
//         position: relative;
//     }
    
//     .tokenomics h2 {
//         font-size: 7vw;
//     }
    
//     .tokenomics .token1 {
//         width: 35vw;
//         position: absolute;
//         bottom: 7vw;
//         right: 2vw;
//         z-index: 2;
//     }
    
//     .tokenomics .token2 {
//         width: 23vw;
//         top: -3vw;
//         left: 0;
//         position: absolute;
//     }
    
//     .tokenomics .content {
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         gap: 5vw;
//         align-items: center;
//         justify-content: space-between;
//     }
    
//     .tokenomics .content h3 {
//         font-family: mario;
//         font-size: 6vw;
//     }
//     .tokenomics .content p {
//         font-size: 4vw;
//     }
    
//     .tokenomics .content .card {
//         width: 55%;
//         height: 30vw;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         position: relative;
//         background: url(../images/tokencard_bg.png) no-repeat;
//         background-size: 100% 100%;
//     }
    
//     /* -----------map-------
//     ----- */
    
//     .map {
//         width: 100%;
//         height: 70vw;
//         padding-top: 4vw;
//         background: url(../images/map-bg.png) no-repeat;
//         background-size: cover;
//         background-position: top center;
//         margin-top: -7vw;
//         position: relative;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//     }
    
//     .map h2 {
//         position: relative;
//         top: 6vw;
//         font-size: 5vw;
//     }
    
//     .map h3 {
//         font-family: mario;
//         font-size: 3vw;
//         line-height: 120%;
//     }
    
//     .map li {
//         font-size: 3vw;
//     }
    
//     .map .p1 {
//         position: absolute;
//         width: 30vw;
//         left: 3vw;
//         top: 29vw;
//     }
    
//     .map .p2 {
//         position: absolute;
//         width: 38vw;
//         top: 35vw;
//         left: 50vw;
//     }
    
//     .map .p3 {
//         position: absolute;
//         width: 39vw;
//         top: 74vw;
//         left: 5vw;
//     }
    
//     .map .p4 {
//         position: absolute;
//         width: 20vw;
//         top: 78vw;
//         right: 15vw;
//     }
    
//     .map .c1 {
//         position: absolute;
//         width: 15vw;
//         top: 12vw;
//         animation: cloud 50s infinite;
//     }
    
//     .map .c2 {
//         position: absolute;
//         width: 8vw;
//         top: 0;
//         animation: cloud 60s reverse infinite;
//     }
    
//     .map .g1 {
//         position: absolute;
//         width: 10vw;
//         top: 28vw;
//         left: 32vw;
//     }
    
//     .map .g2 {
//         position: absolute;
//         width: 20vw;
//         top: 48vw;
//         right: 12vw;
//     }
    
//     .map .g3 {
//         position: absolute;
//         width: 13vw;
//         top: 17vw;
//         right: 2vw;
//     }
    
//     .map .g4 {
//         position: absolute;
//         width: 12vw;
//         top: 90vw;
//         right: 2vw;
//     }
    
//     .bottom {
//         width: 100%;
//         padding-top: 25vw;
//         background: #FA8200;
//     }
    
//     /* .headig {
//         width: 30%;
//         position: relative;
//     } */
    
//     .map .head {
//         width: 30vw;
//         position: absolute;
//         top: 109vw;
//         left: 35vw;
//     }
    
//     .map .f1 {
//         width: 20vw;
//         position: absolute;
//         top: 115vw;
//         left: 2vw;
//     }
    
//     .map .f2 {
//         width: 34vw;
//         position: absolute;
//         top: 115vw;
//         right: -2vw;
//     }
    
    
//     /* ------------footer--------- */
    
//     footer {
//         display: flex;
//         flex-direction: column-reverse;
//         align-items: flex-start;
//         justify-content: center;
//         gap: 3vw;
//         padding: 0 5vw;
//         padding-left: 25vw;
//         width: 100%;
//         z-index: 1000;
//         margin-top: -30vw;
//     }
    
//     footer .logo {
//         margin-right: auto;
//     }
    
//     footer .logo a img {
//         width: 5vw;
//         z-index: 1;
//     }
//     footer a{
//         color: #000000;
//         font-family: Nanum Pen Script;
//         font-size: 3vw;
//         font-style: normal;
//         font-weight: 400;
//         line-height: 60%; /* 120% */
//         letter-spacing: -0.75px;
//     }
//     footer .socials {
//         display: flex;
//         align-items: center;
//         gap: 1.5vw;
//         position: relative;
//     }
//     footer .socials::after{
//         position: absolute;
//         content: "";
//         width: 2px;
//         height: 1vw;
//         background: rgba(255, 255, 255, 0.25);
//         left: 6.5vw;
//     }
//     footer .socials::before{
//         position: absolute;
//         content: "";
//         width: 2px;
//         height: 1vw;
//         background: rgba(255, 255, 255, 0.25);
//         left: 15.5vw;
//     }
//     footer .socials a:nth-child(1){
//         margin-right: 1.5vw;
//     }
//     footer .socials a img {
//         width: 4vw;
//         transition: all .3s;
//         filter: invert(100%);
//     }
//     footer .socials a img:hover{
//         transform: translateY(-10px);
//     }
//     footer .buy{
//         display: flex;
//         align-items: center;
//         gap: .5vw;
//         position: relative;
//     }
//     footer .buy a:nth-child(1){
//         margin-right: 1vw;
//     }
//     footer .buy a img{
//         width: 8vw;
//         position: relative;
//         top: 0;
//         transition: all .3s;
//     }
//     footer .buy a img:hover{
//         filter: invert(100%);
//         transform: translateY(10px);
//     }
    
    
//     }
//     `;
//     document.head.appendChild(style);
//     console.log("Style applied");
<template >
<div style="width:100%;background-color: #fbffff;">
    <Navbar/>
    <div class="box-container">
        
        <div class="box-1">
                    <div    class="thank-you-text">
                        <div>
                            <p
                            style="font-family: ProximaNovaRgRegular; font-size: 60px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #000;"
                            >Thank you</p>
                            <p style="font-family: ProximaNovaThExtrabold;font-size: 60px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #2a2d62;" >For Downloading!</p>
                            <p style=" font-family: ProximaNovaSemibold;font-size: 18px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #000;">If the content doesn’t open automatically in a new tab, please 
                                click here to <a href="/pdf/cmms-evaluation-guide.pdf" style=" font-weight: 600;color: #ff3184;" >Download</a>.</p>
                               <div style="display:flex;align-items:center;margin-top:60px">
                               <img src="../static/images/thank-you/email.svg" style="transform:scale(0.8);"/>
                                <a :href="mailtoUrl"  style="font-family: ProximaNovaSemibold;text-decoration:underline;font-size: 17px;font-weight: 600;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #141b43;margin-left:10px">Email this guide to your team.</a>
                                </div>
                        </div>
                        
                    </div>
                    <div class="document-image">
                        <img src='../static/images/thank-you/doc_illus.png'/>
                    </div>
        </div>
        
        <div class="box-2">
                <div class="excel-banner">
                    <div class="copy-excel">
                            <p style="font-family: ProximaNovaSemibold;font-size: 28px;font-weight: bold;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #fff;">
                                To begin evaluating CMMS with your team, 
                                    make a copy of this worksheet today.</p>
                                    <a :href="excelUrl" ><button class="download-copy" >COPY THE EXCEL</button></a>
                    </div>
                    <div class="excel-image">
                        <img src="../static/images/thank-you/excel.png"/>
                    </div>
                </div>
                <div class="fr-text">
                    <p style=" font-family: ProximaNovabold;font-size: 32px;font-weight: bold;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #2a2d62;">Further Resources</p>
                </div>
                <div class="cards-container">
                        <div class="card card-one">
                                <div class="card-body">
                                        <h4 class="card-title">Report</h4>
                                        <p class="card-text">Frost & Sullivan 2021 Global IoT Solution for Building Operations</p>
                                   <div style="display:flex">
                                        <a
                                        href="https://facilio.in/resources/case-study/connected-skyscraper/"
                                        style=" font-family: 'ProximaNovaRgRegular';font-size: 18px;font-weight: 500;color: #ff3184;"
                                        >Learn More</a>
                                        <img src="../static/images/rightArrow.svg" class="arrow_right" style="margin-left:5px; padding-bottom:3px">
                                        </div>
                                </div>
                        </div>
                        <div class="card card-two">
                                <div class="card-body">
                                        <h4 class="card-title">Guide</h4>
                                         <p class="card-text">2022 Tech Resolutions for Operations 
                                        Professionals: Mobility, Integrations 
                                        and Automated Workflows</p>
                                    <div style="display:flex">
                                        <a
                                        href="https://facilio.in/resources/case-study/connected-skyscraper/"
                                        style=" font-family: 'ProximaNovaRgRegular';font-size: 18px;font-weight: 500;color: #ff3184;"
                                        >Learn More</a>
                                        <img src="../static/images/rightArrow.svg" class="arrow_right" style="margin-left:5px; padding-bottom:3px">
                                        </div>
                                </div>
                        </div>
                        <div class="card card-three">
                                <div class="card-body">
                                        <h4 class="card-title">Guide</h4>
                                         <p class="card-text">2022 Tech Resolutions for Operations 
                                        Professionals: Mobility, Integrations 
                                        and Automated Workflows</p>
                                        <div style="display:flex">
                                        <a
                                        href="https://facilio.in/resources/case-study/connected-skyscraper/"
                                        style=" font-family: 'ProximaNovaRgRegular';font-size: 18px;font-weight: 500;color: #ff3184;"
                                        >Learn More</a>
                                        <img src="../static/images/rightArrow.svg" class="arrow_right" style="margin-left:5px; padding-bottom:3px">
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
      
    </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
// import Footer from '../components/Footer.vue'
export default {
    components:{
        Navbar,
            },
    data(){
        return{
            mailtoUrl:"mailto:?BCC=connected-cmms@facilio.com&Subject=The%20C-Suite%20Guide%20to%20CMMS%20Evaluation&Body=Hi%21%0A%0AThis%20Connected%20CMMS%20evaluation%20guide%20is%20a%20powerful%20framework%20to%20help%20us%20decide%20on%20the%20right%20CMMS%20Solution.%20Check%20it%20out%20and%20hit%20download%20%0A%0A%20https%3A//facilio.com/cmms-evaluation-guide%0A%20%0A",
            excelUrl:"https://l.workplace.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1rS-oNmqWuC_eU5oVgPtRNXqcMrZ1yqnjJLW9zvB9PHw%2Fcopy%3Fusp%3Dsharing&h=AT0IhuJ6uf402jBtBpPVfOrHp7qoOwAfgydi3tu6v6_afb_YX5vOpZaDK57Qs5IjZOW3M2qp7eH217_ZwWHZ2KQ5SAWbUpj5XIFnOOAYjGhHN6sQQC2Lw3EJ7BDC4-7EzF4SnLNjRA"
       }
    }
}
</script>
<style >

    .box-container{
        height: 1220px;
        width: 1200px;
        /* border: 2px solid red; */
        margin: 0 auto;
    }
    .box-1{
        /* border: 2px solid black; */
        height: 40%;
        display: flex;
        justify-content: space-around;
        padding: 0 25px 0 25px;
    }
    .thank-you-text{
        height: 100%;
        /* border: 2px solid green ; */
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 160px;
    }
      .box-2{
        /* border: 2px solid black; */
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .document-image{
        height: 325px;
        width: 325px;
        margin-top: 80px;
    }
    .excel-banner{
        width:90%;
        height: 240px;
        /* border: 2px solid black; */
        background-image: url('../static/images/thank-you/bg-excel.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
    }
    .fr-text{
        display: flex;
        justify-content: start;
        width: 90%;
    }
       .cards-container{
        width:90%;
        height: 240px;
        /* border: 2px solid black; */
        display: flex;
        justify-content: space-between;
    }
    .card{
        height: 240px;
        width: 340px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .card-body{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .card-title{
        font-family: ProximaNovaSemibold;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #2a2d62;
    }
    .card-text{
        font-family: ProximaNovaSemibold;
        font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000;
    }
    .excel-image{
        width: 338px;
        height: 213px;
        margin-top: 20px;
    }
    .copy-excel{
        /* border: 2px solid white; */
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 40px 0 40px 0;
    }
    .download-copy{
        width: 311px;
        height: 54px;
        border-radius: 4px;
        background-color: #ff3184;
        font-family: ProximaNovaBold;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
        border: none;

    }
    @media screen and (max-width: 1000px){

        .box-container{
            height: auto;
            width: auto;
            margin-top: 100px;
        }
        div{
            width: auto;
        }
        .thank-you-text{
            width: auto;
            margin-right: 0;
        }
        .box-1{
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 30px;
        }
        .box-2{
            height: auto;
            justify-content: space-around;
            padding: 40px;
        }
        .excel-banner{
            background-image: none;
            background-color:#27368a;
            flex-direction: column;
            justify-content:center ;
            align-items: center;
            height: auto;
        }
        .copy-excel{
            width: 80%;;
        }
        .download-copy{
            width:auto
        }
        .fr-text{
            justify-content: center;
            margin: 20px 0 20px 0;
        }
        .cards-container{
            height: auto;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        .card{
            margin-top: 10px;
        }
        .document-image,.excel-image{
            height: auto;
            width: auto;
        }
        .excel-image{
            margin: 15px;
        }
    }
    @media screen and (max-width: 400px){
        .card{
            width: auto;
        }
        .thank-you-text{
            transform: scale(0.8);
        }
    }
</style>
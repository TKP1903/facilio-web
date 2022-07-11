<template>
    <div class="productPage btn-shade">
        <div id="productPage"></div>
        <div class="myPage covid-scroll" id="myPage">
            <div id="fc-header">
                <Navbar />
            </div>
            <section class="fc-covid-specific-banner">
                <svg xmlns="http://www.w3.org/2000/svg" width="111" height="250" viewBox="0 0 111 220" class="fc-top-left-dots hidden-xs">
    <path fill="#7862a4" fill-rule="evenodd" d="M3.5 216c1.933 0 3.5 1.567 3.5 3.5S5.433 223 3.5 223 0 221.433 0 219.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-104-27c1.933 0 3.5 1.567 3.5 3.5S5.433 196 3.5 196 0 194.433 0 192.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-104-27c1.933 0 3.5 1.567 3.5 3.5S5.433 169 3.5 169 0 167.433 0 165.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-104-27c1.933 0 3.5 1.567 3.5 3.5S5.433 142 3.5 142 0 140.433 0 138.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-26-27c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-78 0c1.933 0 3.5 1.567 3.5 3.5S5.433 115 3.5 115 0 113.433 0 111.5s1.567-3.5 3.5-3.5zm52 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm52 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-78 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm52-27c1.933 0 3.5 1.567 3.5 3.5S83.433 88 81.5 88 78 86.433 78 84.5s1.567-3.5 3.5-3.5zm-78 0C5.433 81 7 82.567 7 84.5S5.433 88 3.5 88 0 86.433 0 84.5 1.567 81 3.5 81zm52 0c1.933 0 3.5 1.567 3.5 3.5S57.433 88 55.5 88 52 86.433 52 84.5s1.567-3.5 3.5-3.5zm52 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-78 0c1.933 0 3.5 1.567 3.5 3.5S31.433 88 29.5 88 26 86.433 26 84.5s1.567-3.5 3.5-3.5zm26-27c1.933 0 3.5 1.567 3.5 3.5S57.433 61 55.5 61 52 59.433 52 57.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5S83.433 61 81.5 61 78 59.433 78 57.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-104 0C5.433 54 7 55.567 7 57.5S5.433 61 3.5 61 0 59.433 0 57.5 1.567 54 3.5 54zm26 0c1.933 0 3.5 1.567 3.5 3.5S31.433 61 29.5 61 26 59.433 26 57.5s1.567-3.5 3.5-3.5zm-26-27C5.433 27 7 28.567 7 30.5S5.433 34 3.5 34 0 32.433 0 30.5 1.567 27 3.5 27zm26 0c1.933 0 3.5 1.567 3.5 3.5S31.433 34 29.5 34 26 32.433 26 30.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5S57.433 34 55.5 34 52 32.433 52 30.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5S83.433 34 81.5 34 78 32.433 78 30.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zM3.5 0C5.433 0 7 1.567 7 3.5S5.433 7 3.5 7 0 5.433 0 3.5 1.567 0 3.5 0zm26 0C31.433 0 33 1.567 33 3.5S31.433 7 29.5 7 26 5.433 26 3.5 27.567 0 29.5 0zm26 0C57.433 0 59 1.567 59 3.5S57.433 7 55.5 7 52 5.433 52 3.5 53.567 0 55.5 0zm26 0C83.433 0 85 1.567 85 3.5S83.433 7 81.5 7 78 5.433 78 3.5 79.567 0 81.5 0zm26 0c1.933 0 3.5 1.567 3.5 3.5S109.433 7 107.5 7 104 5.433 104 3.5s1.567-3.5 3.5-3.5z"/>
</svg>
                <div class="container">
                    <h1>COVID-19: Short-term and Long-term Implications for the CRE community</h1>
                    <p>Answering the most important questions in the minds of property owners, managers, and 
the rest of the workforce in commercial real estate.</p>
                </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="111" height="250" viewBox="0 0 111 220" class="fc-bottom-right-dots hidden-xs">
    <path fill="#7862a4" fill-rule="evenodd" d="M3.5 216c1.933 0 3.5 1.567 3.5 3.5S5.433 223 3.5 223 0 221.433 0 219.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-104-27c1.933 0 3.5 1.567 3.5 3.5S5.433 196 3.5 196 0 194.433 0 192.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-104-27c1.933 0 3.5 1.567 3.5 3.5S5.433 169 3.5 169 0 167.433 0 165.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-104-27c1.933 0 3.5 1.567 3.5 3.5S5.433 142 3.5 142 0 140.433 0 138.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-26-27c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-78 0c1.933 0 3.5 1.567 3.5 3.5S5.433 115 3.5 115 0 113.433 0 111.5s1.567-3.5 3.5-3.5zm52 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm52 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-78 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm52-27c1.933 0 3.5 1.567 3.5 3.5S83.433 88 81.5 88 78 86.433 78 84.5s1.567-3.5 3.5-3.5zm-78 0C5.433 81 7 82.567 7 84.5S5.433 88 3.5 88 0 86.433 0 84.5 1.567 81 3.5 81zm52 0c1.933 0 3.5 1.567 3.5 3.5S57.433 88 55.5 88 52 86.433 52 84.5s1.567-3.5 3.5-3.5zm52 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-78 0c1.933 0 3.5 1.567 3.5 3.5S31.433 88 29.5 88 26 86.433 26 84.5s1.567-3.5 3.5-3.5zm26-27c1.933 0 3.5 1.567 3.5 3.5S57.433 61 55.5 61 52 59.433 52 57.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5S83.433 61 81.5 61 78 59.433 78 57.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm-104 0C5.433 54 7 55.567 7 57.5S5.433 61 3.5 61 0 59.433 0 57.5 1.567 54 3.5 54zm26 0c1.933 0 3.5 1.567 3.5 3.5S31.433 61 29.5 61 26 59.433 26 57.5s1.567-3.5 3.5-3.5zm-26-27C5.433 27 7 28.567 7 30.5S5.433 34 3.5 34 0 32.433 0 30.5 1.567 27 3.5 27zm26 0c1.933 0 3.5 1.567 3.5 3.5S31.433 34 29.5 34 26 32.433 26 30.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5S57.433 34 55.5 34 52 32.433 52 30.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5S83.433 34 81.5 34 78 32.433 78 30.5s1.567-3.5 3.5-3.5zm26 0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zM3.5 0C5.433 0 7 1.567 7 3.5S5.433 7 3.5 7 0 5.433 0 3.5 1.567 0 3.5 0zm26 0C31.433 0 33 1.567 33 3.5S31.433 7 29.5 7 26 5.433 26 3.5 27.567 0 29.5 0zm26 0C57.433 0 59 1.567 59 3.5S57.433 7 55.5 7 52 5.433 52 3.5 53.567 0 55.5 0zm26 0C83.433 0 85 1.567 85 3.5S83.433 7 81.5 7 78 5.433 78 3.5 79.567 0 81.5 0zm26 0c1.933 0 3.5 1.567 3.5 3.5S109.433 7 107.5 7 104 5.433 104 3.5s1.567-3.5 3.5-3.5z"/>
</svg>
            </section>
            <div class="fc-cta-bar-covid">
                <div class="fc-container">
                    <div class="fc-cta-txt-bar">
                        <ul><li><a href="#short-term">SHORT TERM IMPLICATIONS</a></li><li><a href="#long-term">Long TERM IMPLICATIONS</a></li></ul>
                    </div>
                </div>
            </div>
            <section class="fc-covid-19-template">
        
                <div class="fc-covid-txt">
                   When the covid-19 virus first broke out, our thoughts immediately went to how the property management community can get through the crisis and what is awaiting us on the other side of the tunnel. 
                </div>
                <div class="fc-covid-txt">
                   While there were countless resources on how people can tackle COVID-19, we couldn’t find any exhaustive sources on what the situation meant for the global commercial real estate and <a href="https://blog.facilio.com/preventive-measures-taken-by-property-operators-during-covid19/" target="_blank"> property management community  </a> in particular. </div>

                <div class="fc-covid-txt">
                   So we decided to bridge the gap by curating answers to questions in the minds of the <a href="https://blog.facilio.com/14-fm-experts-who-lead-the-digital-transformation-of-facility-management-uae/" target="_blank"> property management professionals.</a></div>

                <div class="fc-news-txt fc-covid-pad">
                  <span>Note:</span>  Below are some of the questions that we found being asked around in webinars, our posts, and to our team members. If you have queries that you think we can help out with, feel free to reach out to us, and we’ll be happy to consider adding that here. </div>
                 <div class="fc-news-txt">To make it easier for you to navigate, we’ve split the section into two:</div>
                 <div class="fc-news-txt">The first part focuses on the pressing questions that require your immediate attention - such as the safety measures to be taken, managing your buildings etc.
</div>
 <div class="fc-news-txt" id="short-term">
The second part focuses on the long-term implications of this crisis for the property management community - such as adopting new measures, new trends that might arise etc. 
</div>

      
                <div class="fc-covid-subhead">How can Property Management teams tackle COVID-19? </div>


                <div class="fc-covid-txt">
                  <span> 1. As a property owner, what should I do to prepare my tenants and residents for the outbreak? </span>
                </div>
                <div class="fc-covid-answer">
                            Here are some measures you can take as a property owner to ensure the safety of your <a href="https://blog.facilio.com/7-ways-for-improved-tenant-engagement/" target="_blank">occupants:</a>
                </div>
                <div class="fc-covid-txt">
                  <div class="fc-covid-subheadings">Adopt preventive hygiene routines</div>  
                  <ul class="fc-covid-features">
                      <li>Place hand sanitizers, liquid soaps in the common areas of buildings for the tenants to use.</li>
                      <li>Ensure heightened cleaning procedures, implemented at a much more frequent than usual frequency. Disinfecting frequent contact surfaces, such as door knobs, elevator buttons, public restroom fixtures, tables, handrails and work surfaces is a must.</li>
                      <li>If possible, procure masks for the occupants that will minimize the risk of  contracting the virus. </li>
                      </ul>  
                </div>
    
        
                     <div class="fc-covid-txt">
                  <div class="fc-covid-bold">Preparing the workforce and staff</div>  
                  <ul class="fc-covid-features">
                      <li>Consider creating a special task force or a team of staff who will stay up-to-date with the latest protocols, guidelines, and safety measures. </li>
                      <li>Ensure that your team is provided with proper accessories such as safety masks and protective suits.</li>
                      <li>Have a back-up staff ready should the need to take over arise, if one of your members falls sick.</li>
                       <li>The additional hours, tedious workload can take a mental toll on the staff. Assure them you are there for them in this critical situation. Facilitate counselling sessions if necessary.</li>
                      </ul>  
                </div>
 
        
                     <div class="fc-covid-txt">
                  <div class="fc-covid-bold">Facilitate transparency</div>  
                  <ul class="fc-covid-features">
                      <li>Proactively communicate with occupants, provide guidelines and share information   </li>
                      <li>Have a system in place to track visitors, request their travel information, and maintain a digital record which will be useful for authorities</li> 
                      </ul>  
                </div>


                <div class="fc-covid-txt">
                  <span> 2.  How can I equip my workforce and make them better prepared to handle sanitary protocols? </span>
                </div>
                <div class="fc-covid-txt">
                           Preventive measures are going to be the key to containing the COVID-19 outbreak, until (and even if) effective vaccines are developed in the near future. 
                </div>
                  <div class="fc-covid-txt">
                          This is where technology can play a major role in preventing the contagion - leverage technology to scale preventive maintenance for hygiene, cleaning, sanitization. 
                </div>
                <div class="fc-covid-txt">
                  <ul class="fc-covid-features">
                      <li>Real time transparency into all aspects of building operations and data-driven decision making will be crucial to ensuring that targeted intervention is possible, across portfolios. </li>
                      <li>Keep track of data relating to occupants, visitors, air quality, temperature, humidity can be very useful to execute strategies and measure the spread. </li>
                      <li>Historical data about cleaning routines, violations and their correlation with number of cases can also help property management teams gain visibility, so that they can prepare better and also respond effectively to unfolding challenges in real time. </li>
                      </ul>  
                </div>



                <div class="fc-covid-txt">
                  <span> 3. What are some resources/links to make available on our website for the latest information on covid-19?  </span>
                </div>
                <div class="fc-covid-txt">
                          At a time like this, it is important to rely on verified sources of information to stay updated. Here are a few links you can use to learn the COVID-19 developments in the coming weeks.
                </div>
                <div class="fc-covid-txt">
                  <ul class="fc-covid-features-links">
                      <li><a href="https://www.google.com/covid19/" target="_blank">COVID-19 Information & Resources</a> </li>
                      <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">WHO: Advice for public</a></li>
                      <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/about/index.html" target="_blank">About Coronavirus Disease 2019 (COVID-19) | CDC</a></li>
                        <li><a href="https://coronavirus.jhu.edu/map.html" target="_blank">John Hopkins: Coronavirus Resource Center</a></li>
                      </ul>  
                </div>



                <div class="fc-covid-txt">
                  <span>4. How to adopt a work from home policy for my property management team if it has never been done before?   </span>
                </div>
                <div class="fc-covid-txt">
                         This pandemic has led to adopting remote working at a scale never seen before.
                </div>
                     <div class="fc-covid-txt">
                        While it is true that their hands were forced into this work style, with the impending threats of physical presence and communal spread,  a lot of property owners will deem the experiment period a success. 
                </div>
                <div class="fc-covid-txt">
                   <ul class="fc-covid-features">
                      <li>Owners and property teams will realize the scope and value of having a central BMS/ BAS system that can be operated remotely.  </li>
                      <li>For instance, a large portion of the work spent on monitoring/ supervising teams for inspection and rounds to log equipment status can now be remotely done on the go by leveraging the right technology. </li>
                      <li id="long-term">Mobile apps and interactive interfaces that can give mobile access to real time updates will become key to keeping all stakeholders empowered and working towards common goals.</li>
                      </ul> 
                </div>
                
            

                <div class="fc-covid-subhead">What does the future look like for the Property Management Community? </div>


                <div class="fc-covid-txt">
                  <span> 1. What are the global trends/reactions witnessed across the real estate markets amidst the spread of Covid-19? </span>
                </div>
                      <div class="fc-covid-txt">
                  <ul class="fc-covid-features">
                      <li>The COVID-19 has thrown us all off our tracks - one telling change it has brought within the commercial real estate community is, property owners have realized the importance of effective facilities management, operations, and strategic property teams.  </li>
                      <li>Facilities and operations management, a function that is typically away from spotlight, has seen resurgence as an important strategic player in the wellbeing of building occupants and the continuity of business as such. </li>
                      </ul>  
                </div>


                       <div class="fc-covid-txt">
                  <span> 2. With a large amount of the workforce having adopted remote working, what do you think the future holds for property developers and owners? 
 </span>
                </div>
                      <div class="fc-covid-txt">
                  <ul class="fc-covid-features">
                      <li>Given how the work culture has unfolded in the past weeks, remote working might become a norm within the property management community. </li>
                      <li>This will have a cascading effect on the mindset of property owners who will be keen to adopt new methods of operations that will help them transition into the remote-working lifestyle. </li>
                      <li>An ideal model is where property owners and operators can access building performance and tenant experience data across portfolio in real-time, control BMS operations on-cloud.  </li>
                      <li>In the coming weeks measures will be taken to optimize field service teams to focus on critical maintenance rather than on redundant inspections which can be taken care of remotely using mobile applications. </li>
                      </ul>  
                </div>


                       <div class="fc-covid-txt">
                  <span> 3. What is the future of Building Operations post COVID-19? </span>
                </div>
                         <div class="fc-covid-txt">
                     Let us get this out there: This crisis is nothing like anything we’ve faced as a community. But when we look beyond the immediate uncertainty, there’s a silver lining: 
                </div>
                     <div class="fc-covid-txt">
                       Property management and <nuxt-link to="/solutions/facility-management-visibility">operations </nuxt-link>teams across the world have come together and put their best foot forward to keep us safe. 
                </div>
                        <div class="fc-covid-txt">
                     And when we are ready to move forward from this, the role of operations in buildings will see an evolution: 
                </div>
                      <div class="fc-covid-txt">
                  <ul class="fc-covid-features">
                      <li>Hygiene and sanitation will become a key influencer in tenant acquisition and retention. Clean measures will become just as important a factor as rent or location when occupants choose buildings. 
                          <div class="fc-covid-italic">
                              The market will get innovative: New products will come up limiting the need for physical proximity: 
                          </div>
                          <div class="fc-covid-italic">
                            BAS operations will move to remote cloud-based monitoring; 
Occupants will use mobile apps for touchless control over ambience and with elevators.

                          </div>
                           </li>
                      <li>Technology will become critical support to organize activities, provide proactive support - leveraging the right tech will give 3x value to owners, tenants and occupants. </li>
                      <li>The efforts of operations and facilities teams will be better recognized, laying the path for incentivised profiling and upskilling </li>
                      </ul>  
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>
<script>
    import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
    export default {

        components: {
            Navbar, Footer

        },
        head() {
            return {
                title: "COVID-19: Short-term and Long-term Implications for the CRE community",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Answering the most important questions in the minds of property owners, managers, and the rest of the workforce in commercial real estate."
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "COVID-19: Short-term and Long-term Implications for the CRE community"
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/covid-19.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "http://facilio.com/"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "COVID-19: Short-term and Long-term Implications for the CRE community"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Answering the most important questions in the minds of property owners, managers, and the rest of the workforce in commercial real estate."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/covid-19.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/covid-19-faq-for-property-managers"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/covid-19-faq-for-property-managers"
                }]

            };
        }
    };
</script>
<style type="text/css">
    body {
        font-family: Helvetica, 'Roboto', Arial, sans-serif !important;
    }


</style>
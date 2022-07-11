<template>
  <div class="productPage btn-shade">
    <div id="releaseNotesPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section class="fc-whats-new-banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="229"
          class="fc-vertical-small-dots hidden-xs"
        >
          <path
            fill="#DEDEF7"
            fill-rule="evenodd"
            d="M88.811 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 92.344a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 70.11a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 47.877a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 25.643a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0188.811.233 3.182 3.182 0 0192 3.41a3.182 3.182 0 01-3.189 3.176zM67.858 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233A3.182 3.182 0 0164.67 3.41 3.182 3.182 0 0167.858.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0145.994.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04 44.7a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04.233a3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 95.52a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234A3.182 3.182 0 01.899 70.11a3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176A3.182 3.182 0 014.088 44.7a3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233A3.182 3.182 0 01.899 3.41 3.182 3.182 0 014.088.233 3.182 3.182 0 017.276 3.41a3.182 3.182 0 01-3.188 3.176zM88.81 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 135.96a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zM67.858 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 228.07a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176z"
          />
        </svg>
        <div class="container">
          <h1>Release Notes</h1>
        </div>
      </section>
      <div class="fc-release-notes">
        <div v-for="(notes, index) in release" :key="index" class="container">
          <div class="release-notes-date">{{ notes.date }}</div>

          <div v-if="notes.features">
            <div class="release-notes-header">Features</div>
            <ul
              v-for="(items, index) in notes.features"
              :key="index"
              class="release-notes-content"
            >
              <li>
                {{ items.description }}
                <img
                  class="release-notes-image"
                  v-if="items.image"
                  :src="items.image"
                />
                <ul style="padding-top:5px;" v-for="(item, index) in items.subdesc"
              :key="index" v-if="items.subdesc" class="release-notes-content">
                <li>{{item.sd}}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div v-if="notes.updates">
            <div class="release-notes-header">Updates</div>
            <ul
              v-for="(items, index) in notes.updates"
              :key="index"
              class="release-notes-content"
            >
              <li>
                {{ items.description }}
                <img
                  class="release-notes-image"
                  v-if="items.image"
                  :src="items.image"
                />
                <ul style="padding-top:5px;" v-for="(item, index) in items.subdesc"
              :key="index" v-if="items.subdesc" class="release-notes-content">
                <li>{{item.sd}}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div v-if="notes.bugfixes">
            <div class="release-notes-header">Bug fixes</div>
            <ul
              v-for="(items, index) in notes.bugfixes"
              :key="index"
              class="release-notes-content"
            >
              <li>{{ items.description }}
              <img
                  class="release-notes-image"
                  v-if="items.image"
                  :src="items.image"
                />
              <ul style="padding-top:5px;" v-for="(item, index) in items.subdesc"
              :key="index" v-if="items.subdesc" class="release-notes-content">
                <li>{{item.sd}}</li>
                </ul>
                </li>
            </ul>
          </div>
          <hr class="release-notes-border" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default {
  data() {
    return {
      release: [
        {
          date: "April 25, 2022",

          bugfixes: [
            
            {
              description:
                "When a field in PPM is preset with a boolean value, that value was not getting displayed. It has been fixed, now the user will view the value while editing the PPM",
            },
            {
              description:
                "Booking summary page will hide all cost related information for facilities that are not-being charged for the usage.",
            },
            {
              description:
                "For custom module based dashboard elements, when the user selects ‘Edit Reports’, the user was not getting redirected to the reports of the custom module, this issue has been fixed.",
            },
            {
              description:
                "For multiselect fields, the user was not able to drilldown the reports, it has been fixed.",
            },
            {
              description:
                "Legends for the Report were not getting displayed at the correct position when asset filter was applied in the dashboard, this issue has been fixed.",
            },
            {
              description:
                "Users were not able to ‘Checkout’ using the Visitor Kiosk app, the issue has been fixed.",
            },
                  
          ],
          
            updates: [
            {
              description:
                '‘Created time’, ‘created by’, ‘modified time’ & ‘modified by’ fields are added in People modules (tenant contact, vendor contact, employee). This will allow users to know who & when a record was created/ modified.',
            },
            {
              description:
                'When the user tries to delete a space (site, building, space), the user will be prompted to delete all its associated asset/ accessible space/ PPM, only post deleting all associated records, the space can be deleted.',
            },
            {
              description:
                'When the user tries to delete an asset, the user will be prompted to delete all its associated PPMs showing the count of PPMs, only post deleting all associated records, the asset can be deleted.',
            },
            {
              description:
                'Workq app for Android supports drilldown feature in dashboard.',
            },
            {
              description:
                'Andriod apps will hide states & stateflow buttons for the module that has disabled stateflow.',
            },
            {
              description:
                'iOS app will display all the file fields in the summary page of a record.',
            },
             {
              description:
                'iOS app displays the description of items & tools along with the Item/ tool name when a user wants to add the item/tool to a workorder using the item/tool picker.',
            },
            {
              description:
                'Password security policy has been enhanced to the portal users. It was previously available only for main app users.',
            },
             
                            
          ],
          
        },
         {
          date: "April 18, 2022",

          bugfixes: [
            {
              description:
                'When the user is booking from the floor plan, the booking dialog box was not closing post booking. This defect has been fixed, user can now book and the dialog box closes automatically.',
            },
            {
              description:
                "Asset reading based reports couldn't utilise default filters from the dashboard. This has been fixed.",
            },
            {
              description:
                "KPI module was displaying wrong units for each metric, User will now view the correct unit for each metric based on the user definition.",
            },  
            {
              description:
                'Dashboard cards will now animate light, fan icons based on the user defined boolean values.',
            },
            {
              description:
                'Occupant Portal user was not able to view the details of a service request created by the user. The details were getting displayed only for the main app users, now even the portal users are able to view it.',
            },
            {
              description:
                "In Preventive maintenance module, when the user was trying to filter based on PM ID, the filter tag was not available, it has been added as a filter to the user.",
            },
            {
              description:
                'User can now create workorder leveraging “+” icon next to notifications bell icon in the header.',
            },
             
                  

          ],

            updates: [
            {
              description:
                'All new Orgs will leverage the new Preventive Maintenance schedules where user can create PM schedules for multiple sites (Multi site PM).',
            },
            {
              description:
                'Multi site PM schedules will be visible to users who have access to all the sites listed in the PM schedule. If a User has access to one or more but not all sites, then that user will not be able to view the PM schedule.',
            },
            {
              description:
                'Revamp of Item module in Inventory:',
            
              subdesc:[
                {
                  sd:
              "User will be able to leverage “Edit” button to update basic details of the Item in Item Module."
            },
            {
              sd:
              "“Stock Item” option has been provided in Items, Item types & Storeroom module for users to quickly add/stock items to a storeroom."
            },
              ],},
            
                 
            
             
          ],
        },
        {
          date: "April 11, 2022",

          bugfixes: [
            
            {
              description:
                "While managing inventory, the user will now be able to manually adjust items (addition or removal of item quantity) individually or bulk adjust for multiple items within a storeroom.",
            },
            {
              description:
                "User will be able to redirect from a child (dependant) workorder to parent workorder.",
            },
            {
              description:
                "“Created time” field in workorder will now display the same time in both main application and workq mobile application.",
            },
                  
          ],
          
            updates: [
            {
              description:
                'Description field in community module has been updated to handle longer description entered by the user.',
            },
            {
              description:
                'Users can view the details of the tenant address as part of the tenant summary in a separate address card.',
            },
            {
              description:
                'When a user wants to add inventory items & tools for a workorder, the user will be able to view the description along with the item name in the Item picker.',
            },
             
                            
          ],
          
        },
        {
          date: "April 4, 2022",

          bugfixes: [
            
            {
              description:
                "While adding attachments to the attachment fields in a Custom module form, when the user uploaded the attachment and then deleted it before submitting the form, the user wasn't able to reupload the attachment. This defect has been fixed.",
            },
                  
          ],
          
            updates: [
            {
              description:
                'Admins will have better UX for assigning Accessible Space to each user as part of User configuration settings.',
            },
            {
              description:
                'Announcement module supports new text formatting options as part of the rich text editor feature.',
            },
            {
              description:
                'Reports module supports multi select fields. For eg: If a workorder is assigned to multiple technicians, report for each technician will display the workorder associated with that technician.',
            },
            {
              description:
                'Android app supports confirmation dialog boxes defined in Stateflows.',
            },
            {
              description:
                'Android app Users will view 403 error message for unauthorized access.',
            },  
            {
              description:
                'If the User knows the ID of a PPM, the user can search for a particular PPM using that unique ID.',
            },  
            {
              description:
                'If the user is trying to perform an action for the record under a state that is locked (defined in Stateflow), then the user will view specific error messages.',
            },  
                            
          ],
          features: [
            {
              description:
                'Floor Plan Customization: Users will be able to add more value to the floor plan by enriching it with labelling elements in floor plan, managing the font size of the label and even differentiating the elements by color coding.',
            },
         ],
        },
        {
          date: "March 28, 2022",

          bugfixes: [
            {
              description:
                'In storeroom modules, users will be able to update the sites that a storeroom serves.',
            },
            {
              description:
                "Now Users will not be able to add duplicate field name.",
            },
                  
          ],
          
            updates: [
            {
              description:
                'Main app users will now have an option to request notifier in the comments sections for all the workorders created by Portal Users.',
            },
            {
              description:
                'Transfer request feature for transferring inventory items/tools from one storeroom to another will now be available as a role based permissioned feature (Roles Module) where permission for each role can be provided for create, read, update and delete actions.',
            },
            {
              description:
                'When a User wants to add tools to the workorder, the user will now have an option to view a widget for viewing all the tools along with its details.',
            },
            {
              description:
                'Introduction of role filter for audience of buildings & tenant units a role filter is introduce for audience with types - shared to building/tenant unit.',
            },
            {
              description:
                'When a site/building is deleted, all the associated space/floor will be deleted.',
            },  
            {
              description:
                'When user chooses to export data, the exported file will display all the multiple (multi-lookup) entries.',
            },  
            {
              description:
                'Service Request will now enable users to view all the notes and information through a separate “Notes & Information” tab.',
            },  
               
            
             
          ],
        },
        {
          date: "March 21, 2022",

          bugfixes: [
            {
              description:
                '“Email this report” feature in dashboard will mail the report to respective mail id.',
            },
            {
              description:
                "While displaying the cards in dashboards, the user will now be able to view the list based on the card, when the filter for showcasing the dashboard is “logged-in user”.",
            },
            {
              description:
                "User will now be able to add notes & attachments in receivables module without glitches.",
            },  
            {
              description:
                'User will not view any error anymore while adding first item or tool to the storeroom.',
            },
            {
              description:
                'Users need not provide Storeroom while creating a Purchase Request.',
            },
                  

          ],
          
            updates: [
            {
              description:
                'iOS supports duration field and Custom button action - “Open form” using the form id.',
            },
            {
              description:
                'iOS app displays the full name of the field in multiple lines for field names that are long.',
            },
            {
              description:
                'For multi-lookup fields, iOS app now displays a default value set during form rule definition.',
            },
            {
              description:
                'Advanced filters and criteria builder is added with date operating criteria feature. Now the user can choose to provide values based on hour of the day, day of the week, day of the month, week of year & month of year as a criteria or filter.',
            },
            {
              description:
                'Supports ‘feet per minute’ unit for speed based readings.',
            },  
            {
              description:
                'The site at which the storeroom is located is automatically considered as a site that is served by the storeroom.',
            },  
            {
              description:
                'Location field in Storeroom is now mapped to the site at which storeroom is located.',
            },  
            {
              description:
                'For a tenant unit, if there is just one contact, then that contact will be considered as a primary contact, the primary contact cannot be deleted manually. If the tenant unit has multiple contacts and if the primary contact has been deleted then one of the secondary contacts will be updated as primary contacts.',
            },    
            
             
          ],
        },
        {
          date: "March 14, 2022",

          bugfixes: [
            {
              description:
                'User will now be able to click the required Item Type in a particular storeroom and view the details of the Item type without glitches.',
            },
            {
              description:
                "While adding items required for workorder, users will be able to view all the rotating items in the “Add Items” section in workorder (item picker in workorder).",
            },
            {
              description:
                "User will be able to “Add Tools” in android app.",
            },  
            {
              description:
                'Dashboards can be enabled and disabled seamlessly.',
            },
                  

          ],
          features: [
            {
              description:
                'Users can now leverage live translations in workorder summary page to their preferred languages. This live translation is powered by google translate.',
            },
         ],
            updates: [
            {
              description:
                'Improved UI update for Tenant unit module.',
            },
            {
              description:
                'In Storeroom module summary & list page, user can view all sites that a storeroom serves.',
            },
            {
              description:
                'Android & iOS app supports Custom buttons.',
            },
            {
              description:
                'Rules can now be defined on the responses given in Inspection and Induction modules.',
            },
            {
              description:
                'Android app supports form rules for a lookup field where multiple values can be selected (multi select lookup field).',
            },  
            {
              description:
                'Android app displays the description of item along with the item name in the item picker of workorder.',
            },  
            {
              description:
                'Form rules can now be configured for Subforms in templates.',
            },     
            
             
          ],
        },
        {
          date: "March 7, 2022",

          bugfixes: [
            {
              description:
                'In Android mobile app, workorder task/item can now be viewed without the app getting crash.',
            },
            {
              description:
                "In Android mobile app, the site field will show a blank value, when a particular site had been made default but deleted later.",
            },
            {
              description:
                "Timeline filter can now be added for Baseline card in dashboard.",
            },  
            {
              description:
                'When the password is reset from the mobile app, a success/ error message will be displayed.',
            },
            {
              description:
                'Role permission definition for Inventory has been fixed. Now users of a role will have Inventory module access permission based on the definition.',
            },
            {
              description:
                "Service Request module will now work without the dependency on “payment type” field.",
            },
            {
              description:
                'Inventory list for all items will be displayed without throwing an error even if an Item has cost type as “LIFO”.',
            },
             {
              description:
                "When an “audience” was created by a user in main app, and that user got deleted in the app, now the name of the user who created that “audience” will be displayed instead of blank value.",
            },
                  

          ],

            updates: [
            {
              description:
                'Storeroom module supports addition of Custom fields to its template.',
            },
            {
              description:
                'In Workorder module’s Items & Tools section, while a user is trying to “Add Items”, there have been multiple updates.',
            
              subdesc:[
             {   sd:
                
              "Display screen will now show the description along with the name of the item where search can be through both item name and description."
            },
            {
              sd:
              "Items will be displayed in pages."
            },
            {
              sd:
              "Items without any quantity will also be displayed but cannot be utilized in the workorder."
            },
              ],
              },
            {
              description:
                'Tenant contacts list and summary page has been updated to display all its fields.',
            },
            {
              description:
                'Improved UX for Portal app summary pages.',
            },
            {
              description:
                'Form rules can be defined for Preventive Maintenance template.',
            },  
            {
              description:
                'Inspection & Induction module supports rule action.',
            },      
            
             
          ],
        },
         {
          date: "February 28, 2022",

          bugfixes: [
            {
              description:
                'Add attachments(documents, pictures, etc) as part of each Items & Tools in the Inventory module.',
            },
            {
              description:
                "Display of Audience groups in the list page of Community module's Announcements, Deals & Offers, Neighbourhood, News & Information features.",
            },
            {
              description:
                "When the description of a work order is large, the description widget size will increase dynamically in workorder summary page.",
            },  
            {
              description:
                'In workorder module, while adding images to the tasks, the images will now be mapped to both “Before” and “After” section as per the user’s discretion.',
            },
            {
              description:
                'Calculation of duration of the Visitor will now be based on check-in and check-out time.',
            },
            {
              description:
                "Axis label placement and color contrast issues in Dashboard has been fixed.",
            },
            {
              description:
                'Inspection can now be conducted for “current asset” as scope category.',
            },
             {
              description:
                "Few UI issues in iOS mobile app has been fixed.",
            },
            {
              description:
                'In the Android mobile app, updated data will be displayed post refreshing the list pages.',
            },
                  

          ],
          features: [
            {
              description:
                'Timeline - It helps users to craft maintenance job plans with duration for each technician. It also aids the user to identify any timing conflicts and make adjustments as work progresses.',
            },
         ],
            updates: [
            {
              description:
                'Enhancements in the Audience module along with the additional capability for filtering of records.',
            },
            {
              description:
                'Revamped UI for the summary page of Items in the Inventory module.',
            },
            {
              description:
                'IOS mobile app now supports Induction module.',
            },
            {
              description:
                'Android mobile app now supports Duration field in Template/Form and Summary page.',
            },
            {
              description:
                'IOS mobile app will now display confirmation dialog boxes (configured in stateflows).',
            },  
            {
              description:
                '“Open form” and “Open Summary” features added to Custom Button actions.',
            },      
            
             
          ],
        },
        {
          date: "February 21, 2022",

          bugfixes: [
            {
              description:
                'In the Asset module, for a particular asset, all the associated work orders can be viewed  for iPhones.',
            },
            {
              description:
                "Seamlessly add attachments(documents, pictures, etc)  in android phones.",
            },
            {
              description:
                'Preventive Maintenance template handles lookup fields (lookup fields are fields that map other modules to the current module).',
            },  
            {
              description:
                'Post deleting an attachment in work orders, the system now accepts reuploading of attachments without throwing an error.',
            },
            {
              description:
                'In Asset module, while exporting the asset data (to excel, csv, etc), columns were getting duplicated, it has been resolved.',
            },
            {
              description:
                "Reports for workorder will support Space module's fields as a dimension.",
            },
            {
              description:
                'Fixes in UI of listview page of alarms in alarms module.',
            },
                  

          ],
            updates: [
            {
              description:
                'Facilitates configuration of form rules in Visitor Kiosk application.',
            },
            {
              description:
                'Supports Stateflows for Inspection and Induction modules in android devices.',
            },
            {
              description:
                'Ability to view all the inventory items using a lookup wizard in Purchase Order, Purchase Request, Quote, Inventory Request, Transfer Request forms.',
            },
            {
              description:
                'Supports manual configuration of User permission to access Inventory.',
            },
            {
              description:
                'Supports addition of user-definable fields (custom fields) in Inventory Category module template.',
            },  
            {
              description:
                'Facilitates display of all the user-definable fields (custom fields) in Preventive Maintenance Summary page.',
            },
            {
              description:
                'Configuration to define the scope (access to platform features) for Users has been developed.',
            },
            {
              description:
                'While creating a field in all templates, the link name (unique field name accessed by API & scripts) will also be displayed.',
            },
            
             
          ],
        },
         {
          date: "February 14, 2022",

          bugfixes: [
            {
              description:
                'Issue in addition of multiple labourers in In Work Order module under “Items & Labour” section and Add Labour subsection - fixed.',
            },
            {
              description:
                'Multiple issues in Work Order tasks such as multiline text (iOS mobile app) - fixed.',
            },
            {
              description:
                'Unable to deselect the value which added in a lookup field (mobile app) - fixed.',
            },  
            {
              description:
                'In mobile app, once a filters or sort criteria is added, it needs to cleared to provide a new criteria - Fixed.  Now without clearing, the sort and filter can be edited.',
            },
            {
              description:
                'Issue in Multi-language translation of status in summary page - fixed.',
            },
                  

          ],
          features: [
            {
              description:
                "Auto update of Unit Price in LINE ITEM subform in Purchase Order, Purchase Request modules based on the Last Purchased Price instead of Selling Price (Selling Price should be considered as Unit Price only for Quotation module).",
            },
            {
              description:
                "Revamped UI of Tenant Module's List & Summary page.",
            }, 
            {
              description:
                "Optical Character Recognition (OCR) feature enabled in Android app.",
            },     
          ],
            updates: [
            {
              description:
                'Now Pagination is supported for Workflow rule and Notifications.',
            },
            {
              description:
                'Agent trigger rule supported in IoT app.',
            },
            
            
             
          ],
        },
        {
          date: "February 7, 2022",

          bugfixes: [
            {
              description:
                'In Analytics -> Add Points, Points / Assets list keep loading if there are no assets - fixed.',
            },
            {
              description:
                'Dashboard filters not applied when downloading as PDF - fixed.',
            },
            {
              description:
                'Floorplan search not working when having many desks/spaces in the floorplan - fixed.',
            },  
            {
              description:
                'Duration field UI glitches in form - fixed.',
            },
            {
              description:
                'Wrong work order comments count in list page - fixed.',
            },
            {
              description:
                'Unable to delete Inspection attachments - fixed.',
            },  
            {
              description:
                'Fixed offline issues in tasks and stateflow.',
            },        

          ],
          features: [
            {
              description:
                "Induction module released in Android WorkQ app.",
            },
            {
              description:
                "Change status action added in workflows, custom buttons, stateflows, and approval process.",
            },      
          ],
            updates: [
            {
              description:
                'Supported large text field for long description in "Terms and conditions" module.',
            },
            {
              description:
                'More detailed history/ activities captured for Service Request.',
            },
            {
              description:
                "Supported transform hooks for agent via script.",
            },
            {
              description:
                'Mobile lookup filter UI enhanced.',
            },
            {
              description:
                "Site Switch feature supported in iOS WorkQ app.",
            },
            {
              description:
                'Signature field enabled for custom modules.',
            },
            
             
          ],
        },
         {
          date: "January 31, 2022",

          bugfixes: [
            {
              description:
                'Workorder resolve button in mobile does not validate task completion while offline - fixed.',
            },
            {
              description:
                'Documents not filtered based on scope in the iOS mobile app - fixed.',
            },
            {
              description:
                'Not able to add new scheduled reports - fixed.',
            },            

          ],
          features: [
            {
              description:
                "Site Switch enabled in Android WorkQ app.",
            },
            {
              description:
                "Email notification templates supported placeholders for URL attachments.",
            },
            {
              description:
                "Nice URL & view folder supported for all views in Portfolio.",
            },
            {
              description:
                "Enabled advanced filter for Sites & Building module.",
            },
            
            
            
          ],
            updates: [
            {
              description:
                "PM - Task templates will list only active asset categories.",
            },
            {
              description:
                'Added validation while deleting a role with any user associated with it.',
            },
            {
              description:
                "Added new tab in quote summary which will list all non-primary fields.",
            },
            {
              description:
                'Supported "Tax component display toggle" in form builder for PR, PO, Quote line-items section.',
            },
            
             
          ],
        },
         {
          date: "January 24, 2022",

          bugfixes: [
            {
              description:
                'Android mobile app crashing while drill down to work order list from the dashboard - fixed.',
            },
            {
              description:
                'Unable to add custom fields to tool type module - fixed.',
            },
            {
              description:
                'Creating audience with role not working - fixed.',
            },
            {
              description:
                'Schedule report was not working - fixed.',
            },
            {
              description:
                'Hidden file fields not shown in the summary page issue - fixed.',
            },
            
             

          ],
          features: [
            {
              description:
                "Allow create option provided for lookup fields in the form.",
            },
            
            
            
          ],
            updates: [
            {
              description:
                "PM Resource Planner search optimized.",
            },
            {
              description:
                'Prefill last purchased price in PO/PR form line items.',
            },
            {
              description:
                "Added uploaded time for before and after images in the task.",
            },
            {
              description:
                "In PO/PR/Quote line items, introduced an option to hide the tax components in the form.",
            },
            {
              description:
                'Autofill description of item type/ tool type in PO/PR/Quote line item form.',
            },
            {
              description:
                "Pagination supported for tenant portal users list.",
            },
            
             
          ],
        },
        {
          date: "January 17, 2022",

          bugfixes: [
            {
              description:
                'Site type & managed by not displayed properly in sites list issue - fixed.',
            },
            {
              description:
                'The form used for creation not getting opened during the edit of Inspection - fixed.',
            },
            
             

          ],
          features: [
            {
              description:
                "Inspection module released in iOS apps.",
            },
            {
              description:
                "Time log tab introduced in workorder summary.",
            },
            
            
          ],
            updates: [
            {
              description:
                "Product banner added on top for delegated user.",
            },
            {
              description:
                'Account level time format settings introduced.',
            },
            {
              description:
                "Item type & Tool type summary UI enhanced.",
            },
            
             
          ],
        },
         {
          date: "January 10, 2022",

          bugfixes: [
            {
              description:
                'Date and time format was not saving in company profile - fixed.',
            },
            {
              description:
                'Vendor lookup not displaying all records PM form - fixed.',
            },
            {
              description:
                "New fields not showing up during import because of cache - fixed.",
            },
            {
              description:
                "Scroll not smooth in workorder summary item tab - fixed.",
            },
             

          ],
          features: [
            {
              description:
                "Multi-controller discovery is now supported in the commissioning page.",
            },
            {
              description:
                "Transform script support for Agent types other than Facilio & Niagara.",
            },
            
            
          ],
            updates: [
            {
              description:
                "Approvals tab now supported for web portals.",
            },
            {
              description:
                'Created by field enabled in work order summary page.',
            },
            {
              description:
                "Profile page released in iOS apps.",
            },
            {
              description:
                'Now delegated user get notified while creating delegation.',
            },
             
          ],
        },
        {
          date: "January 3, 2022",

          bugfixes: [
            {
              description:
                'Filter not working for String fields if the search term has “-” - fixed.',
            },
            {
              description:
                'Multi Receivables were getting created when PO is updated or receipt is added - fixed.',
            },
             

          ],
          features: [
            {
              description:
                "Inspection module released in android WorkQ app.",
            },
            {
              description:
                "New field type “URL” supported in form builder.",
            },
            
            
          ],
            updates: [
            {
              description:
                "Added invitation link expiry time in the invitation email.",
            },
            {
              description:
                'Proper error message added in reset password page.',
            },
            {
              description:
                "Summary page added for contact directory and admin documents modules.",
            },
            {
              description:
                'Changed primary field as a hyperlink in list view for ease of use.',
            },
            {
              description:
                'Removed large multiline text field from view column customization.',
            },
             
          ],
        },
        {
          date: "December 27, 2021",

          bugfixes: [
            {
              description:
                "Items and tools count was not refreshed in summary when new item/tool types are added - fixed.",
            },
            {
              description:
                'Edit storeroom from list redirection not working - fixed.',
            },
            {
              description:
                'Updating line items not reflecting in transfer request - fixed.',
            },
            {
              description:
                "Multi lookup fields not rendering in work order summary page - fixed.",
            },
            {
              description:
                "Lookup field hyperlink redirection was not working in custom module summary page - fixed.",
            },
             

          ],
          features: [
            {
              description:
                "Now user has the ability to delegate views, approvals, dashboards, and all email notifications to another user.",
            },
            
            
          ],
            updates: [
            {
              description:
                "Profile page added in WorkQ android app.",
            },
            {
              description:
                'Reading report templates is now supported for dashboard filters.',
            },
             
          ],
        },
        {
          date: "December 20, 2021",

          bugfixes: [
            {
              description:
                "Inventory request quick create form was not working - fixed.",
            },
            {
              description:
                'Terms & conditions module filter was not working - fixed.',
            },
            {
              description:
                'Custom fields display issue in inspection summary - fixed.',
            },
            {
              description:
                "Tenant, vendor portal custom logo resolution fixed.",
            },
             

          ],
          features: [
            {
              description:
                "Added stacking analytics in workplace management.",
            },
            
            
          ],
            updates: [
            {
              description:
                "Security update - Log4j updated to 2.15.0.",
            },
            {
              description:
                'Publish & Revision support added in terms & conditions.',
            },
             {
              description:
                "Data scoping support added in user delegation functionality.",
            },
             {
              description:
                "Option to map custom script for dashboard cards.",
            },
            {
              description:
                'Custom buttons is now supported for assets and purchase orders list view.',
            },
             {
              description:
                "Star rating question type added in inspection.",
            },
            {
              description:
                "New currency codes (SAR, OMR) added to company settings.",
            },
             
          ],
        },
         {
          date: "December 13, 2021",

          bugfixes: [
            {
              description:
                "Invite link in email not handled for custom domain - fixed.",
            },
            {
              description:
                'Forgot password email breakage - fixed.',
            },
            {
              description:
                'Unable to answer MCQs in Inspection in AU region - fixed.',
            },
            {
              description:
                "Client contact summary page: List overview redirection issue is fixed.",
            },
            {
              description:
                'Service catalog image get deleted while edit - fixed.',
            },
             

          ],
          features: [
            {
              description:
                "Now announcements can be cloned to create new announcements.",
            },
            
            
          ],
            updates: [
            {
              description:
                "Introduced permissions for Terms and Conditions module.",
            },
            {
              description:
                'Enabled estimated end, scheduled start fields in form builder.',
            },
             {
              description:
                "Now admin can delegate data scoping, dashboards & views to another user.",
            },
             
             
          ],
        },
        {
          date: "December 6, 2021",

          bugfixes: [
            {
              description:
                "Issue in Service catalog sharing - fixed.",
            },
            {
              description:
                "Item type category shows ID instead of name - fixed.",
            },
            {
              description:
                'Item type selling price defaults to "-1" while editing the record.',
            },
             

          ],
          features: [
            {
              description:
                "Audience functionality supported in Announcements & News Modules.",
            },
            
            
          ],
            updates: [
            {
              description:
                "Form rule supported in custom button and approvals forms.",
            },
            {
              description:
                'State transition flow execution time optimized.',
            },
             {
              description:
                "View folder now supported in iOS WorkQ & Portal apps.",
            },
             {
              description:
                "Option to export data points in IoT app.",
            },
             {
              description:
                "Disabling user invite mail for SSO enabled accounts.",
            },
             
          ],
        },
        {
          date: "November 29, 2021",

          bugfixes: [
            {
              description:
                "Signature field not working in some android mobiles - fixed.",
            },
            {
              description:
                "Permission issue in scanning asset for some android mobiles - fixed.",
            },
            {
              description:
                "PM - Resource planning summary not rendering - fixed.",
            },
             

          ],
          features: [
            {
              description:
                "Store to store transfer requests & shipment modules released.",
            },
            
            
          ],
            updates: [
            {
              description:
                "View folder now supported Android WorkQ and Portal apps.",
            },
            {
              description:
                'Added "Tasks Completed Count” column in workorder export.',
            },
             {
              description:
                "History supported for inventory requests module.",
            },
             {
              description:
                "Now user list can be filtered by name & email.",
            },
             
          ],
        },
         {
          date: "November 22, 2021",

          bugfixes: [
            {
              description:
                "Image upload not working in inspection question description - fixed.",
            },
            {
              description:
                "Sorting field issue in dashboard reading table - fixed.",
            },
            {
              description:
                "Login page crash in specific android device - fixed.",
            },
             

          ],
          features: [
            {
              description:
                "Markdown texts supported for comments.",
            },
            {
              description:
                "Users who are taking leave can delegate approvals and tasks to another user.",
            },
            
          ],
            updates: [
            {
              description:
                "User management UI enhancements.",
            },
            {
              description:
                "Inventory items list view UI enhancements in storeroom summary page.",
            },
             {
              description:
                "Radio button display type supported for boolean type fields.",
            },
             {
              description:
                "FormBuilder integrated with custom button and approval actions.",
            },
             {
              description:
                "Workflows supported for attachments.",
            },
            

          ],
        },
        {
          date: "November 15, 2021",

          bugfixes: [
            {
              description:
                "Inspection/ Induction template history not loading - fixed.",
            },
             

          ],
          features: [
            {
              description:
                "PM - End date configuration for trigger is supported now.",
            },
            
          ],
            updates: [
            {
              description:
                "Import history UI enhancements.",
            },
            {
              description:
                "Performance optimisation for assets and workorder listing.",
            },
             {
              description:
                "PM Import - Task section level settings supported.",
            },
            

          ],
        },
        {
          date: "November 8, 2021",

        features: [
            {
              description:
                "WorkQ app released",
            },
          ],
          updates: [
            {
              description:
                "Comment deletion captured in work order history",
            },
            {
              description:
                "Custom button supported for list view",
            },
          ],
         },

         {
          date: "November 1, 2021",

          bugfixes: [
            {
              description:
                "Unable to create new dependent WO from related records tab - Fixed.",
            },
             {
              description:
                "Current site field display format is not proper in vendor portal summary - Fixed.",
            },
            {
              description:
                "Approval lock state UI fixes in custom module record summary page.",
            },
             {
              description:
                "Site not pre-filling while creating the dependent workorder - Fixed.",
            },


          ],
          updates: [
            {
              description:
                "Account invitation expiry duration extended to 7 days.",
            },

          ],
         },
        {
          date: "October 25, 2021",

          bugfixes: [
            {
              description:
                "Workorder to quote and vice versa redirection issue - Fixed.",
            },
             {
              description:
                "Distorted org logo in workorder printouts - Fixed.",
            },
            {
              description:
                "Styling and table alignment issue fixed in inventory summary.",
            },
             {
              description:
                "Disabled record updation in custom-module while the record is under approval process.",
            },
            {
              description:
                "Approval view was not loading - Fixed.",
            },
            {
              description:
                "Pagination issue in lookup wizard dialogs - Fixed.",
            },

          ],
          features: [
            {
              description:
                "Support to add workflows for storeroom creation and updation.",
            },
            {
              description:
                "Filters/sort feature for all module list views.",
            },
            {
              description:
                "Highlighting error messages in form (Android).",
            },
          ],
            updates: [
            {
              description:
                "Support to create workorders while doing state transition.",
            },
            {
              description:
                "Support to entry zipcode in address field.",
            },
             {
              description:
                "Option to set particular time in notification date field triggers.",
            },
            {
              description:
                "Related records listed in WO summary page.",
            },
            {
              description:
                "Multiple buildings and site support for triggers in inspection module.",
            },
             {
              description:
                "Error page added for 403 code.",
            },

          ],
        },
         {
          date: "October 18, 2021",

          bugfixes: [
            {
              description:
                "Unit conversion. Loss of precision for certain Metrics - Fixed.",
            },
             {
              description:
                "WO created from SR was not showing up in related list - Fixed.",
            },
            {
              description:
                "System created by/ time was getting set as null on update - Fixed.",
            },
             {
              description:
                "Throwing error to make sure an user email is present only in one region - Fixed.",
            },
            {
              description:
                "Few Issues related form rules in portal mobile apps - Fixed.",
            },

          ],
          features: [
            {
              description:
                "Asset module introduced in vendor portal.",
            },
            {
              description:
                "Service Request conversion support in tenant/occupant portal",
            },
          ],
            updates: [
            {
              description:
                "Handled Transaction initiated by details for all item/tool transaction records.",
            },
            {
              description:
                "Handled Workflow support for storeroom creation/updation.",
            },
             {
              description:
                "Avoiding duplicate email in From Address (Email Setting).",
            },


          ],
        },
         {
          date: "October 11, 2021",

          bugfixes: [
            {
              description:
                "Error while adding file attachment with .msg, .docx extensions - Fixed.",
            },
             {
              description:
                "Logout button hidden in safari browser - Fixed.",
            },
            {
              description:
                "Issue in chart tooltip if multiple datapoint had same colour - Fixed",
            },

          ],
          features: [
            {
              description:
                "Ability to edit pre-defined asset categories.",
            },
            {
              description:
                "UI enhanced in stateflow transition field configuration.",
            },


          ],
        },
        {
          date: "October 4, 2021",

          bugfixes: [
            {
              description:
                "Attachments was not rendering in work order summary page - Fixed.",
            },
             {
              description:
                "Broken link from workorder to asset summary page in vendor portal - Fixed.",
            },
            {
              description:
                "Unable to drag & drop status and transitions in state flow builder - Fixed",
            },

          ],
          features: [
            {
              description:
                "Now service request can be related with other modules using lookup field.",
            },
            {
              description:
                "Ability to create approval process for Assets. ",
            },


          ],
        },
        {
          date: "September 27, 2021",

          bugfixes: [
            {
              description:
                "Issue in editing contract's Terms and Condition summary page fixed.",
            },
             {
              description:
                "Issue in filter option at Asset list fixed.",
            },

          ],
          features: [
            {
              description:
                "EMail Notifications enhanced to include file attachment.",
            },
            {
              description:
                "News enabled with ability to comment.",
            },
             {
              description:
                "Permissions to show/hide the button to convert service requests to workorder. ",
            },

          ],
        },
        {
          date: "September 20, 2021",


          features: [
            {
              description:
                "Inventory Adjustment  - Item adjustment for non-rotating items.",
            },
            {
              description:
                "Customization support enabled for Inspection and Induction modules.",
            },
             {
              description:
                "Ability to display Asset activities in vendor portals.",
            },
            {
              description:
                "Ability to create Custom Buttons for buildings.",
            },
             {
              description:
                "Service Request card and count displayed in home page of Tenant Portal.",
            },

          ],
        },
         {
          date: "September 13, 2021",

          bugfixes: [
            {
              description:
                "Issue in stateflow builder’s User/Criteria dialog fixed.",
            },
             {
              description:
                "Issue in form rules for resource fields fixed.",
            },

          ],
          features: [
            {
              description:
                "Sort option available for views in Tenant and Vendor portals.",
            },
            {
              description:
                "Advanced search based on multi-select fields.",
            },
             {
              description:
                "Ability to attach file for Q.&.A section of Inspection module.",
            },

          ],
        },
         {
          date: "September 6, 2021",
          updates: [
            {
              description:
                "Handled fetch-view in custom module creation.",
            },
            {
              description:
                "Added cloud service type in agent.",
            },
            {
              description:
                "Form rules and Stateflow screens revamped.",
            },

          ],
          bugfixes: [
            {
              description:
                "Storeroom- Issue in displaying Item drop down is fixed.",
            },

          ],
          features: [
            {
              description:
                "Advanced Search option is provided for Portal Apps (Occupant , Tenant  and Vendor Portal).",
            },
            {
              description:
                "Analytics - Ability to plot custom baseline curves in scatter analytics.",
            },
             {
              description:
                'Introduced new field type "floor plan picker".',
            },

          ],
        },
        {
          date: "August 30, 2021",
          updates: [
            {
              description:
                "Admin also will list in assignment in addition to site scoped users.",
            },
            {
              description:
                "Work Order- list module state field changes.",
            },
            {
              description:
                "Patch capturing activities for Sidebar.",
            },
            {
              description:
                "Work Order- Uploaded file will display in summary page.",
            },
            {
              description:
                "Handled failed case in attachment upload.",
            },
          ],
          bugfixes: [
            {
              description:
                "Contract Module- Issue in rendering the list page and it is fixed now.",
            },
            {
              description:
                "Quote- Issue in hard coded api call and it id fixed now.",
            },
            {
              description:
                "Connected apps- Rendering issue in placeholder api call and it is fixed now.",
            },
            {
              description:
                "Agent- Status issue, while discovering controllers for agent, and it is fifed now.",
            },
            {
              description:
                "Uploaded attachment can be delete by any user, and it is fixed now.",
            },

          ],
          features: [
            {
              description:
                "Planned Maintenance- Users can see only their accessible site's workorders.",
            },
            {
              description:
                "Connected Apps added  in the tab group for portal app users.",
            },

          ],
        },
        {
          date: "August 23, 2021",
          updates: [
            {
              description:
                "Dashboard filters change event supported for connected app widgets.",
            },
            {
              description:
                "Added sub form check for the form section.",
            },
            {
              description:
                "Prefilling site field in work order creation when redirecting from asset.",
            },
            {
              description:
                "Some change in Display name of system field at Work order summary.",
            },
            {
              description:
                "E-Mail- Added regional mail domains for schedulers.",
            },
          ],
          bugfixes: [
            {
              description:
                "Pre-Filling issue in custom module and it is fixed now.",
            },
            {
              description:
                "UI issue when form is opened through dialog and it is fixed now.",
            },
            {
              description:
                "Issue in fetching only site related users to assign, in Planned maintenance and it is fixed now.",
            },
            {
              description:
                "Issue in closing the task and it is fixed now.",
            },

          ],
          features: [
            {
              description:
                "E-Mail- Forward address and From address will use mail domain fetched from backend.",
            },

          ],
        },
         {
          date: "August 16, 2021",
          updates: [
            {
              description:
                "Approval- Summary page is supported by custom modules.",
            },
            {
              description: "Portfolio modules- Change in the details of widget. ",
            },
            {
              description:
                "Supported with Maximum number of character(validation) in live forms.",
            },
            {
              description:
                "Added module summary fetch for site, building, floor and space edits.",
            },
            {
              description:
                "Added encode url in custom buttons while opening a placeholder urls.",
            },
             {
              description:
                "Place-Holder support for set value action(including lookup module fields).",
            },
            {
              description:
                "Form Rule- Status added in column(UI support), Added module data id.",
            },
            {
              description:
                "Handled language support in portal user(Tenant, Occupant, Vendor). ",
            },
          ],
          bugfixes: [
            {
              description:
                "E-Mail-Issue when from address is not specified, and it is fixed now.",
            },
            {
              description:
                "Issue in redirection from approvals to custom modules summary and it is fixed now.",
            },
            {
              description:
                "Asset- Loading issue in summary page and it is fixed now.",
            },
            {
              description:
                "Custom Module- Issue in searching and it is fixed now.",
            },

          ],
        },
        {
          date: "August 9, 2021",
          updates: [
            {
              description:
                "A new state added for mobile homepage at Occupant portal.",
            },
            {
              description: "Handled view-sidebar and language preference for portal users.",
            },
            {
              description:
                "Added Module State in supplement record at summary and list.",
            },
            {
              description:
                "Change in Tenant contact addition in Tenant overview.",
            },
            {
              description:
                "Patch capturing activities for v3(assets module).",
            },
          ],
          bugfixes: [
            {
              description:
                "Refresh issue in booking and facility modules in portal apps and it is fixed now.",
            },
            {
              description:
                "Dashboard tab switch select issue and it is fixed now.",
            },
            {
              description:
                "E-Mail- From address resolution issue and it is fixed now.",
            },
            {
              description:
                "E-Mail- Site Field fetching issue and it is fixed now.",
            },
            {
              description:
                "Cards Lookup field updated to latest Version -Dashboard.",
            },
          ],
          features: [
            {
              description:
                "CSV API added to hels in downloading the list of points in CSV format.",
            },

          ],
        },
        {
          date: "August 2, 2021",
          updates: [
            {
              description:
                "Update & Delete permission handeled in portals (Occupant Portal, Tenant Portal and Vendor Portal).",
            },
            {
              description: "Tenent contact info added in Tenent summary page.",
            },
            {
              description:
                "Search option added to the Module report fields selection list.",
            },
            {
              description:
                "Additional validation added for facility booking form.",
            },
          ],
          features: [
            {
              description:
                "Ability to define the more than one languages for Tenant/vendor portal to support.",
            },
            {
              description: "Ability to edit child records.",
            },

          ],
        },
        {
          date: "July 26, 2021",
          updates: [
            {
              description: "Main field hover UI enhancement in the list view",
            },
            {
              description:
                "Option to filter fields of lookup field is now supported in the module filters",
            },
            {
              description:
                "Search and pagination support added in the Portal users list page",
            },
            {
              description:
                "Search and pagination support added in the Add Existing user list dialog",
            },
            {
              description:
                "Desk type change handled in Floormap (Assignable to reservable desk and Reservable to assignable desk)",
            },
            {
              description:
                "Added support for discovering points for RDM controllers",
            },
            {
              description:
                "Null check added during the validation handling in add sensor rule",
            },
          ],
          bugfixes: [
            {
              description:
                "User duplication issue is fixed while adding from existing user list",
            },
            {
              description:
                "Drop down box was not appearing in Inventory -> Issue Item dialog and it is fixed now.",
            },
            {
              description:
                "Look up wizard is not pre-populating the selected sites upon edit issue fixed",
            },
          ],
        },
        {
          date: "July 19, 2021",
          updates: [
            {
              description:
                "BACnet protocol is enabled by default in agent configuration",
            },
            {
              description:
                "Form rule execution handled for custom module V3 apis",
            },
          ],
          bugfixes: [
            {
              description:
                "Null handled in field placeholders construction for email notification templates",
            },
            {
              description: "Add controller api fixes for RDM",
            },
            {
              description:
                "Avatar url fix in resource context (assets, space, etc..)",
            },
            {
              description: "Configuration issue in add agent is fixed",
            },
          ],
        },
        {
          date: "July 12, 2021",
          updates: [
            {
              description: "Roles and permissions is extended to Portal users ",
            },
            {
              description: "Roles and permissions is extended to Web tab users",
            },
            {
              description:
                "State flows - support to provide actions based on a form field and support for portal users to perform specific actions",
            },
          ],
          bugfixes: [
            {
              description:
                "Visitor Management - Visited Space display issue is fixed",
            },
            {
              description:
                "Addition of a tool / item was failing in work order and it is fixed",
            },
            {
              description:
                "An Inventory  transaction was showing Undefined in the User interface  , when a tool / item was assigned to a  Portal user and this is fixed",
            },
            {
              description:
                "Undesirable behaviour when adding more than one  multi-lookup to the same module is Fixed",
            },
          ],
          features: [
            {
              description:
                "Work space management - Room / Space booking from Floor Plan",
            },
            {
              description: "Inspection Module for Work orders",
            },
            {
              description: "Scripting  support in  email Notifications module",
            },
            {
              description:
                "Service request/ help centre ticket creation from email. ",
            },
          ],
        },
        {
          date: "May 20, 2021",
          features: [
            {
              description:
                "Service Request Management:- Service request management uniquely involves a user submitting their request for something that’s related to their properties or facilities in their occupied property.",
            },
            {
              description:
                "Service Catalogue :- A service catalog , is an organized and curated collection of Facilities and Workplace related service requests.",
            },
          ],
        },
        {
          date: "February 15, 2021",
          updates: [
            {
              description: "Receivables support improved for Inventory module",
            },
            {
              description: "Layout changes for Fault Module",
            },
          ],
          bugfixes: [
            {
              description: "Format changed for Quotes generated",
            },
          ],
          features: [
            {
              description:
                "Vendor Portal Support :- Portal provided for vendors to manage their WorkOrders and upload/track their insurance",
            },
            {
              description: "SAML based SSO support provided",
            },
          ],
        },
        {
          date: "December 10, 2020",
          updates: [
            {
              description:
                "‘‘Till now’’ operator supported in criteria builder",
            },
            {
              description:
                "For Analytics, Derivation is supported for any number of points.",
            },
          ],
          bugfixes: [
            {
              description:
                "Fixed file field handling for custom modules in transition form",
            },
          ],
          features: [
            {
              description:
                "Tenant Portal Support :- Self service portal for the tenants.",
            },
            {
              description:
                "Enabled signature field for Purchase Request and Purchase Order module",
            },
          ],
        },
      ],
    };
  },

  components: {
    Navbar,
    Footer,
  },
  head() {
    return {
      title: "Facilio Release Notes",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Check out our full list of release notes, and stay up to date with what's going on.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio Release Notes",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Check out our full list of release notes, and stay up to date with what's going on.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/release-notes/",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio Release Notes",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Check out our full list of release notes, and stay up to date with what's going on.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/release-notes/",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/release-notes/",
        },
      ],
      script: [
        {
          src: "../../js/page.js",
        },
        {
          src: "../../js/waypoints.min.js",
        },
        {
          src: "../../js/includes.js",
        },
      ],
    };
  },
};
</script>
<style>
.release-notes-date {
  font-family: ProximaNovabold;
  font-size: 19px;
  color: #1678dc;
}
.release-notes-header {
  font-family: "ProximaNovaBold";
  font-size: 17px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #171128;
}
.release-notes-border {
  margin-top: 30px;
  margin-bottom: 30px;
  border-top: 1px solid #e6e9f2;
}
.fc-release-notes {
  font-family: ProximaNovaSemiBold, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  margin-top: 40px;
  padding-top: 40px;
  padding-bottom: 50px;
}
.release-notes-content {
  font-size: 15px;
  font-family: proximaNovaRgRegular;
}
.release-notes-content li {
  color: #181b3b;
}
.release-notes-image {
  padding-top: 10px;
  padding-bottom: 10px;
}
.fc-release-notes .container {
  max-width: 900px;
}
</style>

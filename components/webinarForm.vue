  <template>
  <div>
 <script src='https://facilio.freshsales.io/web_forms/1cb009807b96bd8f89467972bacf2e47b9b8947c922af8d12b1ec70d4021c6aa/form.js' crossorigin='anonymous' id='fs_1cb009807b96bd8f89467972bacf2e47b9b8947c922af8d12b1ec70d4021c6aa'></script>
  </div>
</template>

<script>
export default {
  mounted: function() {

      //--google analytics

        (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-MFHN2HR');

  //--google analytics

    function getEventDemo() {
      var fullName = document.getElementById("eventfullname").value;
      fullName = fullName.trim();
      var demoemail = document.getElementById("eventemail").value;
      var demonumber = document.getElementById("eventnumber").value;
      var website = document.domain;
      let first = "";
      let last = "";
      if (fullName !== "") {
        if (fullName.indexOf(" ") > 0) {
          first = fullName.substring(0, fullName.indexOf(" "));
          last = fullName.substring(fullName.indexOf(" ") + 1, fullName.length);
        } else {
          first = "";
          last = fullName;
        }
      } else {
        first = "Not";
        last = "specified";
      }

      if (demoemail === "" || demoemail.indexOf("@") === -1) {
        document.getElementById("demoemail").className =
          "form-control fc-input error";
        return false;
      }

      var lead_props = {
        first_name: first,
        last_name: last,
        email: registeredemail,
        mobile_number: demonumber,
        medium: document.domain,
        lead_source_id: 2000516787
      };
      trackLead(lead_props);

      document.getElementById("EventForm").style.display = "none";
      document.getElementById("EventSuccessMsg").style.display = "block";
      return false;
    }

    function trackLead(lead) {
      var postData = {
        data: lead
      };
      var postUrl = location.protocol + "//api.facilio.com/api/tracklead";

      var xhr = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open("POST", postUrl);
      xhr.onreadystatechange = function() {
        if (xhr.readyState > 3 && xhr.status == 200) {
          console.log(xhr.responseText);
        }
      };
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(postData));
      return xhr;
    }

    function checkCountry() {
      let url = location.protocol + "//freegeoip.net/json/";
      $.getJSON(url, function(data) {
        var ip = data.ip;
        var country_code = data.country_code;
        if (country_code === "AE") {
          window.location.href = location.protocol + "//facilio.ae";
        }
      });
    }
    var WebFormEvent = {
      afterInstall: function() {

        let url = location.protocol + "//geoip-db.com/json/";
        $.getJSON(url, function(data) {
          if (data && data.country_name) {
            WebForm.$('input[name="lead[country]"]').val(data.country_name);
          }
        });
      },
      afterSubmit: function(event, data, error) {
        console.log("After submit hook triggered.");
        console.log("Data => ", data);
        var dt = JSON.parse(data);
        var obj = dt.find(e => {
          return e.name == "lead[email]";
        });
        var email = "undefined";
        if (obj) {
          email = obj.value;
        }
        ga("send", {
          hitType: "event",
          eventCategory: "Form",
          eventAction: "ondemandwebinar",
          eventLabel: registeredemail
        });
        if (error) {
          console.log("Error => ", error);
        }
      }
    };
  },
      script: [
        { src: "../../../js/includes.js" }
      ]
};
</script>

<style>
.fserv-form {
  border-radius: 10px;
  padding: 20px;
  position: relative;
  font-family: Arial, sans-serif;
}
.fserv-button-submit
{
  background-color:#ff3184 !important;
}
.powered-by
{
  display:none;
}
</style>

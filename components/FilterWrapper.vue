<template>
  <div class="grid-filters text-center filters">
    <div class="option-set" data-group="categories">
      <FilterItem
        v-for="item in filterList"
        v-bind:key="item.inputId"
        v-bind:inputValue="item.inputValue"
        v-bind:inputId="item.inputId"
        v-bind:inputLabel="item.inputLabel"
      />
    </div>
  </div>
</template>

<script>
import FilterItem from "./FilterItem";
export default {
  data() {
    return {
      filterList: [
        {
          inputId: "digitisation",
          inputValue: ".digitisation",
          inputLabel: "Digitisation"
        },
        {
          inputId: "automisation",
          inputValue: ".automisation",
          inputLabel: "Automation"
        },
        {
          inputId: "sustainability",
          inputValue: ".sustainability",
          inputLabel: "Sustainability"
        },
        {
          inputId: "realworld",
          inputValue: ".realworld",
          inputLabel: "Real-World Case Studies"
        }
      ]
    };
  },
  components: {
    FilterItem
  },
  mounted: function() {
    var $container;
    // var comboFilter = getComboFilter();
    var filters = {};
    $(function() {
      $container = $("#grid-list");
      var $filterDisplay = $("#filter-display");
      $container.isotope();
      $("#videoOptions").on("change", function(jQEvent) {
        var $checkbox = $(jQEvent.target);
        manageCheckbox($checkbox);
        var comboFilter = getComboFilter(filters);
        $container.isotope({
          filter: comboFilter
        });
        $filterDisplay.text(comboFilter);
      });
    });
    var data = {
      categories: "digitisation automisation sustainability realworld".split(
        " "
      ),
      colors: "digitisation automisation sustainability realworld".split(" ")
    };
    $("#grid-list").isotope({
      masonry: {
        gutter: 33
      }
    });

    function getComboFilter(filters) {
      var i = 0;
      var comboFilters = [];
      var message = [];
      for (var prop in filters) {
        message.push(filters[prop].join(" "));
        var filterGroup = filters[prop];
        if (!filterGroup.length) {
          continue;
        }
        if (i === 0) {
          comboFilters = filterGroup.slice(0);
        } else {
          var filterSelectors = [];
          var groupCombo = comboFilters.slice(0);
          for (var k = 0, len3 = filterGroup.length; k < len3; k++) {
            for (var j = 0, len2 = groupCombo.length; j < len2; j++) {
              filterSelectors.push(groupCombo[j] + filterGroup[k]);
            }
          }
          comboFilters = filterSelectors;
        }
        i++;
      }
      var comboFilter = comboFilters.join(", ");
      return comboFilter;
    }

    function manageCheckbox($checkbox) {
      var checkbox = $checkbox[0];
      var group = $checkbox.parents(".option-set").attr("data-group");
      var filterGroup = filters[group];
      if (!filterGroup) {
        filterGroup = filters[group] = [];
      }
      var isAll = $checkbox.hasClass("all");
      if (isAll) {
        delete filters[group];
        if (!checkbox.checked) {
          checkbox.checked = "checked";
        }
      }
      var index = $.inArray(checkbox.value, filterGroup);
      if (checkbox.checked) {
        var selector = isAll ? "input" : "input.all";
        $checkbox.siblings(selector).removeAttr("checked");
        if (!isAll && index === -1) {
          filters[group].push(checkbox.value);
        }
      } else if (!isAll) {
        filters[group].splice(index, 1);
        if (!$checkbox.siblings("[checked]").length) {
          $checkbox.siblings("input.all").attr("checked", "checked");
        }
      }
    }
  }
};
</script>

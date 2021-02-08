<template>
<div>    
  <b-navbar toggleable="lg" type="dark" variant="dark" class="w-100">
    <b-navbar-brand to="/">
      <span class="font-weight-bold">AlgoVision</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <span v-for="(item,key) in menu" :key="key">
          <b-nav-item  :to="item.name" v-if="!item.children">
            {{item.label}}
          </b-nav-item>
          <b-nav-item-dropdown
            v-else
            :text="item.label"
            toggle-class="nav-link-custom"
            right
          >
            <b-dropdown-item 
              v-for="(child, childKey) in item.children" :key="key+','+childKey" 
              :to="child.name"
            >
              {{child.label}}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </span>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <Nuxt />
</div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: "Pathfinding", label: "Path Finding" },
        { name: "Suduko", label: "Suduko" },
        { name: "", label: "Dynamic Programming", children: [
          { name: "ShiftLinkedList", label: "Shift Linked List" },
          { name: "LongestSubstring", label: "Longest Substring" },
          { name: "LongestSubsequence", label: "Longest Subsequence" },
          { name: "Fibonacci", label: "Fibonacci Sequence" },
          { name: "GridTraveler", label: "Grid Traveler" },
          { name: "RiverSizes", label: "River Sizes"},
        ]},
        { name: "", label: "Sum", children: [
          { name: "CanSum", label: "Can Sum" },
          { name: "HowSum", label: "How Sum" },
          { name: "BestSum", label: "Best Sum" },
        ]},
        { name: "", label: "Construct", children: [
          { name: "CanConstruct", label: "Can Construct" },
          { name: "CountConstruct", label: "Count Construct" },
          { name: "AllConstruct", label: "All Construct" },
        ]},

      ]
    };
  }
};
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body, html { 
    overflow: hidden; 
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

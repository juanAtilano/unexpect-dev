<template>
  <div id="pagination">
    <div class="pagination-container">
      <img class="pagination-btn-arrow" src="../assets/icons/chevron-left.svg" alt="">
      <div v-for="page in pages" class="pagination-div">
        <button v-bind:id="'pagination-'+ page " v-if="page == isActive" v-bind:class="classActive">{{page}}</button>
        <button v-bind:id="'pagination-'+ page " v-else v-bind:class="classPag" v-on:click="chancePage(page)">{{page}}</button>
      </div><!--
      -->
      <img class="pagination-btn-arrow" src="../assets/icons/chevron-right.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pages', 'isActive', 'type'],
  data () {
    return {
      classPag: 'pagination-btn-number',
      classActive: 'pagination-btn-number pagination-active'
    }
  },
  methods: {
    chancePage: function (page) {
      this.$emit('changePagination', {
        pagination: page,
        type: this.type,
      })
    }
  }
};
</script>

<style scoped>

  .pagination-btn-number {
    color: #344955;
    background-color: #fff;
    border-top: 0;
    border-bottom: 0;
    border-left: 1px solid rgba(52, 73, 94, 0.3);
    border-right: 1px solid rgba(52, 73, 94, 0.3);
    padding: 8px 10px;
  }

  .pagination-active {
    background-color: #344955;
    color: #fff;
  }

  .pagination-container {
    width: 90%;
    margin: 20px 0 20px 5%;
  }

  .pagination-btn-arrow {
    width: 25px;
    height: 25px;
    margin-bottom: -7px;
  }

  .pagination-div {
    display: inline;
  }

</style>

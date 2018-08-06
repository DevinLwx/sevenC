<template>
  <div class="indexContent main">
    <Button @click="handleClearCurrentRow">清除选择</Button>
    <div class="p-t-8">
      <Table ref="currentRowTable" highlight-row :columns="columns" :data="data" :border="true"
             @on-current-change="selectTable"></Table>
    </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .indexContent {
    padding: 15px;
  }
</style>

<script>
  import { getPrizeList } from '../../../api/home';

  export default {
    name: 'indexContent',
    data () {
      return {
        columns: [
          {
            type: 'index',
            width: 60,
            align: 'center'
          }, {
            title: '年份',
            key: 'year',
            width: 60,
            align: 'center'
          }, {
            title: '期号',
            key: 'version',
            width: 60,
            align: 'center'
          }, {
            title: '星期',
            key: 'week',
            width: 60,
            align: 'center'
          }, {
            title: '开盘时间',
            key: 'activeDate',
            width: 150,
            align: 'center'
          }, {
            title: '封盘时间',
            key: 'closeDate',
            width: 150,
            align: 'center'
          }, {
            title: '开奖时间',
            key: 'openDate',
            width: 150,
            align: 'center'
          }, {
            title: '开奖号码',
            key: 'number',
            width: 70,
            align: 'center'
          }, {
            title: '退码分钟',
            key: 'tmfz',
            width: 70,
            align: 'center'
          }, {
            title: '直码',
            key: 'zm',
            width: 60,
            align: 'center'
          }, {
            title: '限售',
            key: 'zmxs',
            width: 60,
            align: 'center'
          }, {
            title: '两同',
            key: 'lt',
            width: 60,
            align: 'center'
          }, {
            title: '限售',
            key: 'ltxs',
            width: 60,
            align: 'center'
          }, {
            title: '三同',
            key: 'st',
            width: 60,
            align: 'center'
          }, {
            title: '限售',
            key: 'stxs',
            width: 60,
            align: 'center'
          }, {
            title: '四同',
            key: 'sit',
            width: 60,
            align: 'center'
          }, {
            title: '限售',
            key: 'sitxs',
            width: 60,
            align: 'center'
          }, {
            title: '两定',
            key: 'ld',
            width: 60,
            align: 'center'
          }, {
            title: '限售',
            key: 'ldxs',
            width: 60,
            align: 'center'
          }, {
            title: '三定',
            key: 'sd',
            width: 60,
            align: 'center'
          }, {
            title: '限售',
            key: 'sdxs',
            width: 60,
            align: 'center'
          }, {
            title: '销售总额',
            key: 'xsze',
            width: 70,
            align: 'center'
          }, {
            title: '佣金总额',
            key: 'yjze',
            width: 70,
            align: 'center'
          }, {
            title: '中奖总额',
            key: 'zjze',
            width: 70,
            align: 'center'
          }, {
            title: '股东吃码',
            key: 'gdcm',
            width: 70,
            align: 'center'
          }, {
            title: '股东中奖',
            key: 'gdzj',
            width: 70,
            align: 'center'
          }, {
            title: '转购总额',
            key: 'zgze',
            width: 70,
            align: 'center'
          }, {
            title: '转购中奖',
            key: 'zgzj',
            width: 70,
            align: 'center'
          }, {
            title: '盈亏',
            key: 'yk',
            width: 60,
            align: 'center'
          }, {
            title: '备注',
            key: 'remark',
            width: 200,
            align: 'center'
          }
        ],
        data: []
      }
    },
    methods:{
      getPrizeList() {
        getPrizeList().then((res) => {
          console.log(res.data)
          if(res.data.success) {
            this.data = res.data.data;
          }
        }, (err) => {
          console.log(err);
          alert('请求出错，请刷新页面或联系管理员');
        });
      },
      selectTable(currentRow, oldCurrentRow) {
        console.log(currentRow, oldCurrentRow)
      },
      handleClearCurrentRow () {
        this.$refs.currentRowTable.clearCurrentRow();
      }
    },
    mounted:function(){
      this.getPrizeList();
    }
  }

</script>

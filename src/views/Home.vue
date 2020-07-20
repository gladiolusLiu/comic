<template>
  <el-container>
    <el-header style="height: 300px;">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-header>
    <el-main>
      
    <el-row>
      <el-col :span="5" v-for="(site, index) in sites" :key="index" :offset="index > 0 ? 1 : 0" style="margin-left: 0;margin-right: 20px;">
        <el-card :body-style="{ padding: '1px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>{{ site.name }}</span>
            <div class="bottom clearfix">
              <span>{{ site.desc }}</span>
              <el-collapse>
                <el-collapse-item title="下载" style="float: left;">
                  <div v-for="(item, index) in site.items" :key="index" :offset="index > 0 ? 1 : 0">
                    <el-collapse>
                      <el-collapse-item :title="item.fansub">
                        <div v-for="(item2, index) in item.items2" :key="index" :offset="index > 0 ? 1 : 0">
                          <el-button @click="open(item2.part,item2.magnet)" type="primary" style="margin-left: 16px;">{{ item2.part }}</el-button>
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-drawer
      :title="title"
      :visible.sync="drawer"
      :with-header="false">
      <el-input type="textarea" v-model="content" :disabled="true"></el-input>
      <el-divider></el-divider>
      <el-button type="success" class="btn" 
        v-clipboard:copy="content" 
        v-clipboard:success="onCopy" 
        v-clipboard:error="onError">
        复制链接
      </el-button>
    </el-drawer>

    <el-pagination
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      :current-page="currentPage"
      @current-change=page>
    </el-pagination>

    </el-main>

    <el-footer>
      <div>
        <a href="" rel="nofollow" target="_blank">
          <img id="cnnic_img" src="https://common.cnblogs.com/images/cnnic.png" alt="" width="64" height="23">
        </a>
        <a target="_blank" href="" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img src="https://common.cnblogs.com/images/ghs.png" alt="">
          <span style="float:left;height:20px;line-height:20px;margin: 0 5px 0 5px; color:#939393;">沪公网安备 xxxxxxxxxxx号</span>
        </a>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 1,
        total: 10,
        pageSize: 5,
        currentDate: new Date(),
        title:"",
        content:"",
        drawer:false,
        sites: [
          {name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
          ,{name: 'Runoob',desc:"描述",items:[
            {fansub:"极影字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab1"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2"}
            ]},
            {fansub:"不明字幕组",items2:[
              {part:"01",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3"},
              {part:"02",magnet:"magnet://adafafaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4"}
            ]}
          ]}
        ]
      }
    },
    methods:{
      page(currentPage) {
        const _this = this
        _this.$axios.get("/blogs?currentPage=" + currentPage).then(res => {
          console.log(res)
          _this.blogs = res.data.data.records
          _this.currentPage = res.data.data.current
          _this.total = res.data.data.total
          _this.pageSize = res.data.data.size

        })
      },
      open(title,content) {
        this.title=title;
        this.content=content;
        this.drawer=true;
      },
      onCopy(e) {
        console.log("复制成功！"+e);
        this.$message('复制成功！');
      },
      onError(e) {
        console.log("复制失败！"+e);
        this.$message('复制失败！');
      }
    },
    created:function(){
      console.info("created");
      this.page(1);
    }
  }
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>

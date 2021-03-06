const coinUtil = require("../js/coinUtil.js")
module.exports=require("../js/lang.js")({ja:require("./ja/finished.html"),en:require("./en/finished.html")})({
  data(){
    return {
      loading:false
    }
  },
  store:require("../js/store.js"),
  methods:{
    start(){
      this.loading=true
      coinUtil.shortWait().then(()=>{
        this.loading=false
        if(this.$store.state.finishNextPage.page){
          this.$emit("replace",this.$store.state.finishNextPage.page)
        }else{
          this.$emit("pop")
        }
        this.$store.commit("setFinishNextPage",{infoId:"",payload:{}})
      })
      
    }
  },
  computed:{
    infoId(){
      return this.$store.state.finishNextPage.infoId
    },
    payload(){
      return this.$store.state.finishNextPage.payload
    }
  }
})

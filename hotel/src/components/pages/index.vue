<style scoped>
	#index{
		width: 7.5rem;
		margin: 0 auto; 
	}
	.header{
		position: relative;
	}
	.banner{
		width: 100%;
		height: 3.8rem;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
	.header_plate{
		width: 6.9rem;
		height:4.7rem;
		background: #fff;
		border-radius: .1rem;
		position: absolute;
		top: 2.62rem;
		left: .3rem;
		z-index: 100;
	}
	.header_hotel_info{
		width: 100%;
		display: flex;
		justify-content:space-between;
		align-items: center;
		padding:.25rem .35rem 0rem;
		box-sizing: border-box;
		color: #333;
	}
	.title_info{
		font-style: .36rem;
		font-weight: 600;
	}
	.header_hotel_img{
		width:.62rem;
		height: .62rem;
		background:transparent;
	}
	.header_address{
		display: flex;
		align-items: center;
		font-size: .24rem;
	}
	.header_address_img{
		width: .24rem;
		height: .27rem;
		margin-right: .1rem;
		background:transparent;
	}
	.header_border_bottom{
		width: 6.2rem;
		margin: 0 auto;
		padding-bottom: .28rem;
		border-bottom: .01rem solid #ddd
	}
	.header_address_info{
		width: 5rem;
		font-size: .26rem;
		color: #666;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		text-align: right;
		line-height: .3rem
	}
	.header_select{
		width: 6.2rem;
		margin: 0 auto;
		height: .8rem;
		padding:.52rem 0 .42rem;
		position: relative;
	}
	.header_select:after{
		content: "";
		display: block;
		clear: both;
	}
	.header_select_item{
		width: 50%;
		height: 100%;
		float: left;
		text-align:left;
		box-sizing: border-box;
	}
	.header_select_item:last-child{
		text-align:right;
		padding-right: .36rem
	}
	.header_time_show{
		text-align: center;
		font-size: .24rem;
		color: #888;
		display: inline-block;
	}
	.time_info{
		font-weight: 500;
		font-size: .36rem;
		color: #333;
		padding-top: .18rem;
	}
	.time_duration{
		width: .8rem;
		height: .8rem;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -.4rem;
		margin-top: -.4rem;
		border:.01rem solid #ddd;
		border-radius: 50%;
		text-align: center;
		line-height: .8rem;
		font-size: .3rem;
		color: #9f3c79;
	}
	.header_btn{
		width: 6.12rem;
		margin:0 auto;
		height: .90rem;
		text-align: center;
		line-height: .9rem;
		background: #9f3c79;
		border-radius: .1rem;
		color: #fff;
		font-size: .36rem;
		display: block;
		outline: none;
		border:0;
	}
	.gray{
		background: #ddd;
	}
	.list{
		width: 100%;
		padding-top:3.84rem;
		padding-bottom: 1rem;
	}
	.list_item{
		width: 6.9rem;
		height: 2.14rem;
		border-radius: .1rem;
		background:#fff;
		margin: 0 auto;
		box-sizing: border-box;

	}
	.list_left{
		height:100%;
		width: 2.14rem;
		box-sizing: border-box;
		padding-top: .3rem
	}
	.list_left img{
		width: 1.54rem;
		height: 1.54rem;
	}
	.list_right{
		width: 4.76rem;
		height: 100%;
		box-sizing: border-box;
		display: flex;
  		justify-content: space-between;
  		flex-direction: column;
  		text-align: left;
	}
	.content_title{
		font-weight: 600;
		padding-top:.36rem;
		font-size: .3rem;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.content_tags{
		width: 100%;
		font-size: .24rem;
		color: #888;
		display: flex;
		align-items: center;
	}
	.content_tags div{
		width: 33%;
		text-align: left;
	}
	.content_bottom{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: .3rem;
	}
	.content_price{
		font-size: .24rem;
		font-weight: 660;
		color: #9f3c79;
		margin-right: .05rem;
	}
	.ft36{
		font-size: .36rem;
	}
	.content_buy{
		width: 1.7rem;
		height: .6rem;
		border-radius: .04rem;
		border:.01rem solid #9f3c79;
		color: #9f3c79;
		text-align: center;
		line-height: .6rem;
		margin-right: .35rem;
		font-size: .28rem;
	}
	a{
		display: block;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		margin-bottom: .2rem;
	}
</style>
<template>
	<div id="index">
		<!-- 轮播图 -->
		<div class="header">
		<div class="banner">
			<Swiper :showIndicator='false' interval="5000" duration="1000">
				<Slide>
					<img src="../../assets/banner.png" class="">
				</Slide>
				<Slide>
					<img src="../../assets/banner.png" class="">
				</Slide>
				<Slide>
					<img src="../../assets/banner.png" class="">
				</Slide>
			</Swiper>
		</div>
		<!-- 头部信息列表 -->
		<div class="header_plate">
			<div class="header_hotel_info">
				<div class="title_info" @click="jump()">大成国际酒店</div>
				<img class="header_hotel_img" src="../../assets/01.png">
			</div>
			<div class="header_hotel_info ">
				<div class="header_address">
					<img src="../../assets/02.png" class="header_address_img">
					<span>地址</span>
				</div>
				<div class="header_address_info">
					<span>大涌道大涌村大勇组135号</span>
				</div>
			</div>
			<div class="header_border_bottom"></div>
			<div class="header_select">
				<div class="time_duration" v-if="days>0">{{days}}晚</div>
				<div class="header_select_item" @click="startOp('in')">
					<div class="header_time_show">
						<div>入住时间</div>
						<div class="time_info">{{in_time.text}}</div>
					</div>
				</div>
				<div class="header_select_item">
					<div class="header_time_show" @click="startOp('out')">
						<div>离店时间</div>
						<div class="time_info">{{out_time.text}}</div>
					</div>
				</div>
			</div>
			<div v-if="days<=0" class="header_btn gray">立即搜索</div>
			<button v-else  class="header_btn">立即搜索</button>
			<calendar v-model="calendarShow"  @change="handelChange" :min-date="limit.down" :max-data="limit.up"></calendar>
		</div>
		</div>
		<!-- 下面的列表 -->
		<ul class="list">
			<li class="list_item">
				<router-link to="/hotel">
				<div class="list_left">
					<img src="../../assets/05.png">
				</div>
				<div class="list_right">
					<div class="content_title">精致大双人房</div>
					<div class="content_tags">
						<div>20-36米</div>
						<div>大床</div>
						<div>wify覆盖</div>
					</div>
					<div class="content_bottom">
						<div>
							<span class="content_price">¥</span>
							<span class="content_price ft36">300</span>
						</div>
						<div class="content_buy">预定</div>
					</div>
				</div>
				</router-link>
			</li>
		</ul>
		<!-- 底部tabbar -->
		<tabbar index-type="index"></tabbar>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import tabbar from '@/components/component/tabbar'
	import { Swiper, Slide } from 'vue-swiper-component'
	import Calendar from 'vue-mobile-calendar'
	Vue.use(Calendar)
	export default {
		name:'index',
		 components:{
    		tabbar,
    		Swiper,
    		Slide
  		},
  		data(){
  			return{
  				calendarShow:false,  		//日期组件的显示与隐藏
  				time_select_type:"",  			//此时时间选择器的类型
  				in_time:{time:'',text:"请选择入住时间"},  	//入住时间
  				out_time:{time:'',text:"请选择离店时间"},  //离店时间
  				limit:{
  					down:new Date(),
  					up:new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 30),
  				},
  				defaultDate:" ",
  				days:0
  			}
  		},
  		mounted(){
  			console.log('month')
  			this.limit.down=new Date()
  			console.log(this.limit)
  		},
  		methods:{
			startOp(e){
				this.time_select_type=e
  				if(e=='out'&&!this.in_time.time){
  					this.$layer.toast({
		              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
		              content: '请先选择入住时间',
		              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
		            })
  				}else{
  					this.calendarShow=true
  				}
			},
			handelChange(e){
				console.log(e)
				let month=e.getMonth()<10?'0'+ (e.getMonth()+1) : e.getMonth()+1
				let days = e.getDate()<10?'0'+ e.getDate() : e.getDate()
				if(this.time_select_type=='in'){
					if(this.out_time.time&&e>this.out_time.time){
						this.$layer.toast({
						icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
						content: '入住时间不能大于离店时间',
						time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
		            })
					}else{
						this.in_time.text=month+'月'+days+'日'
						this.in_time.time=e
					}
				}else if(this.time_select_type=='out'&&this.in_time.time<e){
					if((e-this.in_time.time)/3600/1000/24<30){
						this.out_time.text=month+'月'+days+'日'
						this.out_time.time=e;
					}else{
						this.$layer.toast({
						icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
						content: '单次选择的最大入住时间不能超过30',
						time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
		            })
					}
				}else{
					this.$layer.toast({
		              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
		              content: '请至少在入住的第二天离店',
		              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
		            })
				}
				if(this.out_time.time&&this.in_time.time){
					this.days=(this.out_time.time-this.in_time.time)/3600/1000/24
				}
			},
			jump(){
				this.$router.push({
					name:"introduce"
				})
			}
  		}
	}
</script>
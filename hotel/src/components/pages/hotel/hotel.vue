<style>
@import 'hotel.css'
</style>
<template>
	<div id="hotel">
		<div  class='header'>
			<Swiper :showIndicator='false' interval="5000" duration="1000" class='header' @transtionend="getNum">
				<Slide v-for="(item,index) in list" :key="index">
					<img :src="item" class="">
				</Slide>
			</Swiper>
			<div class="header_number">{{swiper_index+1}}/{{list.length}}</div>
		</div>
		<!-- simple_info -->
		<div class="simple_info">
			<div class="simple_item simple_item_left">
				<div class="simple_title">
					<span>面积</span>
					<span>35m²</span>
				</div>
				<div class="simple_title">
					<span>窗户</span>
					<span>有</span>
				</div>
				<div class="simple_title">
					<span>上网</span>
					<span>WIFi和宽带</span>
				</div>
				<div class="simple_title">
					<span>床型</span>
					<span>大床1.8*2.0米</span>
				</div>
			</div>
			<div class="simple_item">
				<div class="simple_title2">
					<span>卫浴</span>
					<span>独立</span>
				</div>
				<div class="simple_title2">
					<span>可住</span>
					<span>2人</span>
				</div>
				<div class="simple_title2">
					<span>楼层</span>
					<span>5层</span>
				</div>
				<div class="simple_title2">
					<span>早餐</span>
					<span>五早安</span>
				</div>
			</div>
		</div>
		<!-- detail_info -->
		<div class="detail_info">
			<div class="detail_title">客房设施</div>
			<div class="detail_content">多种规格电源插座</div>
			<div class="detail_title">浴室</div>
			<div class="detail_content">电热水器，室内卫生间，收费提供一次性洗漱服务器，沐浴</div>
			<div class="detail_title">食品饮品</div>
			<div class="detail_content">电热水壶，瓶装水</div>
			<div class="detail_title">媒体科技</div>
			<div class="detail_content">电视</div>
			<div class="detail_title">温馨提示</div>
			<div class="detail_content">限时抢购只限于乡情双人间，大床：180CM*200CM或双床：120com*200cm;不提供一次性免费洗漱用品</div>
		</div>
		<!-- buy_plate -->
		<div class="buy_plate">
			<div class="price">
				<span class="buy_logo">¥</span>
				<span>360</span>
			</div>
			<div class="buy_btn" @click="buy">预定</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import { Swiper, Slide } from 'vue-swiper-component'
	export default {
		name:'hotel',
		components:{
			Swiper,
			Slide
		},
		data(){
			return{
				list:["","",""],
				swiper_index:0,
				bindPhone:false
			}
		},
		created(){
			for(var i = 0;i<this.list.length;i++){
				var j= i+1;
				this.list[i] = require('../../../assets/08.png');
			}
		},
		methods:{
			getNum(e){
				this.swiper_index=e
			},
			buy(){this.bindPhone&&this.$router.push({
                            name:"bindPhone"
                        })
				!this.bindPhone&&this.$router.push({
                            name:"order"
                        })
		},
	},

	}
</script>
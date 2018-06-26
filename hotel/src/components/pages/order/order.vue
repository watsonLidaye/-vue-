<style scoped>
@import 'order.css'
</style>
<template>
	<div id="order">
		<div class="header">
			<div class="header_plate">
				<div class="header_plate_title">高级大床房</div>
				<div class="header_plate_select">
					<div class="in"  @click="startOp('in')">
						<img src="../../../assets/10.png" class="header_plate_img">
						<div><span class="grap_text">入住:</span>{{in_time.text}}</div>
					</div>
					<div class="in"  @click="startOp('out')"><span class="grap_text">离店:</span>{{out_time.text}}</div>
					<div class="totall" v-if="days>0">共{{days}}晚</div>
				</div>
				<div class="header_plate_bottom">大床房 | 含早餐 | 有wiFi和宽带</div>
			</div>
		</div>
		<div class="form">
			<div class="form_item">
				<div>房间数   </div>
				<div class="add_plate">
					<div @click="reduce()">-</div>
					<div>{{room_number}}</div>
					<div @click="add()">+</div>
				</div>
			</div>
			<div class="form_item">
				<div>入住人</div>
				<div >
					<input class="form_input" type="text" name="enter_name" v-model="enter_name" placeholder="请输入入住人姓名" maxlength="10">
				</div>
			</div>
			<div class="form_item">
				<div>入住手机号码</div>
				<div >
					<input class="form_input" type="number" name="enter_phone" v-model="enter_phone" placeholder="请输入入住手机号码" maxlength="10">
				</div>
			</div>
		</div>
		<div class="form_item" @click="invoiceOp()">
			<div>是否需要发票</div>
			<div class="invoice" :class="{active:need_invoice}">
				<div class="invoice_item"></div>
			</div>
		</div>
		<div class="info">
			<div class="info_title">
				<img src="../../../assets/11.png">
				<div>温馨提示</div>
			</div>
			<div>请于入住日下午14:00后办理入住，如提前到酒店，视酒店空房情 况安排。 本订单最晚保留时间为19:00，若到店时间较晚，建议</div>
		</div>
		<div class="buy_plate">
			<div class="price">
				<span class="buy_logo">¥</span>
				<span>{{price*room_number}}</span>
			</div>
			<div class="buy_btn" @click="buy()">去付款</div>
		</div>
		<calendar v-model="calendarShow"  @change="handelChange" :min-date="limit.down" :max-data="limit.up"></calendar>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import Calendar from 'vue-mobile-calendar'
	Vue.use(Calendar)

	export default {
		name:'order',
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
  				days:0,
  				room_number:1,
  				enter_name:"",
  				enter_phone:"",
  				need_invoice:false,
  				price:350
  			}
  		},
  		created(){
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
  			reduce(){
  				if(this.room_number<=1){
  					this.$layer.open({
  						content:'房间数不能小于1',
  						btn:''
  					})
  				}else{
  					this.room_number=this.room_number-1
  				}
  			},
  			add(){
  				this.room_number+=1
  			},
  			invoiceOp(){
  				this.need_invoice=!this.need_invoice
  			}
  		}
  	}
  </script>
<style scoped>
	@import 'bindPhone.css'
</style>
<template>
	<div id="bindPhone" :style="{height:winHeight+'px'}">
		<div>
			<div class="input_plate">
				<div class="input_item border_bottom">
					<div class="input_title">手机号码</div>
					<input type="number" name="phone" placeholder="请输入您的手机号码" maxlength="20">
				</div>
				<div class="input_item">
					<div class="input_title">验证码</div>
					<input type="number" name="phone" placeholder="请输入您的验证码" maxlength="20">
				</div>
			</div>
			<div class="confir">确定</div>
		</div>
	
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'bindPhone',
		data(){
			return{
				winHeight:""
			}
		},
		created(){
			console.log(document.documentElement.clientHeight)
			this.winHeight=document.documentElement.clientHeight
		}
	}
</script>
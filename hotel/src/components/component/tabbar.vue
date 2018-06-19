<style scoped>
	#tabbar{
		width: 7.5rem;
		margin: 0 auto;
	}
	img{
	background: transparent;
	}
	.ul{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .96rem;
		background: #f3edf1;
		display: flex;
		align-items: center
	}
	.li{
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
			align-items: center;
		font-size: .22rem;
		color:rgba(106,86,97,.5);
		height: 100%;
	}
	.active{
		color: #9f3c79;
	}
	img{
		width: .4rem;
		height: .4rem;
		margin-bottom: .1rem;
	}
</style>
<template>
	<div id="tabbar">
		<div class="ul">
			<router-link class="li" :class="{'active':indexType=='index'}" to="/">
				<img v-if="indexType=='index'" src="../../assets/03.png">
				<img v-else src="../../assets/06.png">
				<div>首页</div>
			</router-link>
			<router-link class="li" :class="{'active':indexType=='person'}" to="/person">
				<img v-if="indexType=='index'" src="../../assets/04.png">
				<img v-else src="../../assets/07.png">
				<div>我的</div>
			</router-link>
			</li>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'tabbar',
		props:{
			indexType:String
		},
		data () {
			return{
				index_img:"",
				person_img:""
			}
		},
	}
</script>
<template>
	<div class="index">
		<header class="index-header">
			<div class="index-logo">
				<img :src="logo" />
				<p>XXXX</p>
			</div>
			<div class="bar-con">
				<i class="iconfont index-fold" :class="[collapse ? 'icon-zhankai':'icon-suofang']" @click="fold"></i>
				<el-menu class="barMenu" :default-active="activeIndex" mode="horizontal" @select="handleSelect" text-color="#333" active-text-color="#f00">
					<el-menu-item index="he1">
						<span slot="title">Test</span>
					</el-menu-item>
					<el-menu-item index="he2">
						<span slot="title">Test2</span>
					</el-menu-item>
				</el-menu>
				<div class="index-oper">
					<i class="icon-btn iconfont icon-clock_fill"></i>
					<el-dropdown trigger="click">
						<div class="index-user">
							<img src="../../../public/img/avatar/avatar.png" />
						</div>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="myIndex">
								<i class="iconfont icon-kongjian "></i>我的空间
							</el-dropdown-item>
							<el-dropdown-item command="personalSetting">
								<i class="iconfont icon-geren "></i>个人设置
							</el-dropdown-item>
							<el-dropdown-item command="logout">
								<i class="iconfont icon-tuichu2 "></i>退出系统
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
		</header>
		<aside class="index-aside">
			<el-menu :default-active="activeMenuIndex" :unique-opened='true' class="main-menu" @select="clickAsideMenu">
				<el-submenu index="ae1">
					<template slot="title">
						<i class="iconfont icon-kongjian "></i>
						<span>xxx</span>
					</template>
					<el-submenu index="ae2">
						<template slot="title">
							<i class="iconfont icon-kongjian "></i>
							<span>xxxwww</span>
						</template>
						<el-menu-item index="ae2-1">
							<i class="iconfont icon-kongjian "></i>
							<span>xxxwww</span>
						</el-menu-item>
					</el-submenu>
					<el-menu-item index="ae1-1">
						<i class="iconfont icon-kongjian "></i>
						<span>xxxwww</span>
					</el-menu-item>
				</el-submenu>
			</el-menu>
		</aside>
		<main class="index-main ">

		</main>
	</div>
</template>

<script>
	import logo from "../../assets/logo.png";
	export default {
		name: "index",
		data() {
			return {
				logo,
				activeIndex: "2",
				activeMenuIndex: "",
				collapse: true
			};
		},
		methods: {
			fold() {
				this.collapse = !this.collapse;
			},
			handleSelect() {

			},
			clickAsideMenu() {

			}
		}
	};
</script>

<style lang="scss" scoped="scoped">
	.index-header {
		height: 50px;
	}
	
	.index-logo {
		float: left;
		line-height: 50px;
		font-size: 16px;
		width: 180px;
		height: 100%;
		overflow: hidden;
		color: white;
		background-color: #434752;
		text-align: center;
		transition: all 0.3s;
		img {
			width: 35px;
			height: 35px;
		}
		p {
			display: inline-block;
		}
		* {
			vertical-align: middle;
		}
	}
	
	.bar-con {
		height: 50px;
		overflow: hidden;
		border-bottom: 1px solid #4dbd73;
		box-sizing: border-box;
		
		.index-fold {
			float: left;
			margin-top: 11px;
			margin-left: 20px;
			cursor: pointer;
			font-size: 20px;
			color: #888888;
		}
	}
</style>
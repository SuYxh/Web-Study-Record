-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2020-11-18 05:28:09
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kml_db`
--

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE `banner` (
  `id` smallint(5) UNSIGNED NOT NULL COMMENT '轮播图id',
  `title` varchar(50) NOT NULL COMMENT '轮播图标题',
  `img` varchar(255) NOT NULL COMMENT '轮播图图片地址',
  `status` tinyint(1) NOT NULL COMMENT '状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='轮播图表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`id`, `title`, `img`, `status`) VALUES
(4, '1', '/uploads/banner/113d0200-28b3-11eb-818b-3bceeadd88a2.webp', 1),
(5, '2', '/uploads/banner/1560bb10-28b3-11eb-818b-3bceeadd88a2.webp', 1),
(7, '3', '/uploads/banner/b233b800-28ce-11eb-8ca4-c51a3f8dbc24.webp', 1);

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE `cart` (
  `id` int(10) UNSIGNED NOT NULL COMMENT '购物车主键',
  `uid` varchar(50) NOT NULL COMMENT '用户id',
  `goodsid` int(11) NOT NULL COMMENT '商品编号',
  `num` tinyint(3) NOT NULL COMMENT '数量',
  `status` tinyint(1) NOT NULL COMMENT '选中状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='购物车表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`id`, `uid`, `goodsid`, `num`, `status`) VALUES
(30, '3a319540-d6c9-11ea-b402-7539692da67c', 1, 3, 1),
(31, '3a319540-d6c9-11ea-b402-7539692da67c', 7, 1, 1),
(32, '3a319540-d6c9-11ea-b402-7539692da67c', 9, 1, 1),
(33, '3a319540-d6c9-11ea-b402-7539692da67c', 10, 1, 1),
(34, '3a319540-d6c9-11ea-b402-7539692da67c', 33, 3, 1);

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE `category` (
  `id` smallint(5) UNSIGNED NOT NULL COMMENT '分类编号',
  `pid` smallint(5) UNSIGNED NOT NULL COMMENT '上级分类编号',
  `catename` varchar(50) NOT NULL COMMENT '分类名称',
  `img` varchar(255) NOT NULL COMMENT '分类图片',
  `status` tinyint(1) UNSIGNED NOT NULL COMMENT '状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品分类表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`id`, `pid`, `catename`, `img`, `status`) VALUES
(21, 0, '家用电器', '/uploads/category/b40853f0-28ad-11eb-818b-3bceeadd88a2.png', 1),
(22, 0, '手机', '/uploads/category/d0d86d30-28ad-11eb-818b-3bceeadd88a2.webp', 1),
(23, 0, '电脑办公', '/uploads/category/0674a3a0-28ae-11eb-818b-3bceeadd88a2.jpg', 1),
(24, 0, '服装', '/uploads/category/22d24c00-28ae-11eb-818b-3bceeadd88a2.jpg', 1),
(25, 0, '食品', '/uploads/category/4be34c20-28ae-11eb-818b-3bceeadd88a2.png', 1),
(26, 0, '图书', '/uploads/category/706e7600-28ae-11eb-818b-3bceeadd88a2.png', 1),
(27, 21, '电视', '/uploads/category/9d6a9300-28ae-11eb-818b-3bceeadd88a2.jpg', 1),
(28, 21, '冰箱', '/uploads/category/f8d2b0b0-28ae-11eb-818b-3bceeadd88a2.webp', 1),
(29, 21, '空调', '/uploads/category/18174c60-28af-11eb-818b-3bceeadd88a2.jpg', 1),
(30, 22, 'apple', '/uploads/category/44deebe0-28af-11eb-818b-3bceeadd88a2', 1),
(31, 22, '华为', '/uploads/category/60a81c70-28af-11eb-818b-3bceeadd88a2', 1),
(32, 22, '小米', '/uploads/category/8ef94220-28af-11eb-818b-3bceeadd88a2', 1),
(33, 23, 'Dell', '/uploads/category/a5b480b0-28af-11eb-818b-3bceeadd88a2.jpg', 1),
(34, 24, '男装', '/uploads/category/bc74c850-28af-11eb-818b-3bceeadd88a2.jpg', 1),
(35, 25, '牛奶', '/uploads/category/dbdca370-28af-11eb-818b-3bceeadd88a2.jpg', 1),
(36, 26, '经管类', '/uploads/category/16eb8120-28b0-11eb-818b-3bceeadd88a2.webp', 1);

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `id` int(10) UNSIGNED NOT NULL COMMENT '商品编号',
  `first_cateid` smallint(5) UNSIGNED NOT NULL COMMENT '一级分类编号',
  `second_cateid` smallint(6) NOT NULL COMMENT '二级分类编号',
  `goodsname` varchar(100) NOT NULL COMMENT '商品名称',
  `price` decimal(10,2) NOT NULL COMMENT '商品价格',
  `market_price` decimal(10,2) NOT NULL COMMENT '市场价格',
  `img` varchar(255) NOT NULL COMMENT '商品图片',
  `description` text COMMENT '商品描述',
  `specsid` int(11) NOT NULL COMMENT '规格id',
  `specsattr` varchar(255) NOT NULL COMMENT '规则属性值',
  `isnew` tinyint(1) NOT NULL COMMENT '是否新品1是2不是',
  `ishot` tinyint(1) NOT NULL COMMENT '是否热卖1是2不是',
  `status` tinyint(1) NOT NULL COMMENT '状态1启用2禁用'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `first_cateid`, `second_cateid`, `goodsname`, `price`, `market_price`, `img`, `description`, `specsid`, `specsattr`, `isnew`, `ishot`, `status`) VALUES
(11, 26, 36, '破格', '48.00', '34.00', '/uploads/47dd4250-28b0-11eb-818b-3bceeadd88a2.webp', '<div id="activity_header" clstag="shangpin|keycount|product|activityheader"><a href="https://pro.m.jd.com/mall/active/mHMwHt4sHg2JiBs7Yeg8ogUPu4w/index.html"><img width="750" height="261" alt="" src="https://img30.360buyimg.com/jgsq-productsoa/jfs/t1/148971/36/14381/53170/5fae741cE7e8eb48e/f436264c55dcef39.jpg"></a><a href="https://pro.m.jd.com/mall/active/3wU8Bp2CnsE5xN7BFLFx9kvhKaBP/index.html"><img alt="" src="https://img30.360buyimg.com/jgsq-productsoa/jfs/t1/144075/24/14349/18756/5fae7438E93a653a7/09c273064f50b5ed.jpg"></a></div><div id="J-detail-pop-tpl-top-new" clstag="shangpin|keycount|product|pop-glbs"></div><div><div><div><div id="J-detail-top"></div><div id="J-detail-content"><div id="detail-tag-id-1" name="detail-tag-id-1" text="产品特色" clstag="shangpin|keycount|product|chanpintesequ_3"><div><h3>产品特色</h3></div><div><div><p><img title="微信图片_20200908102728.jpg" src="https://img30.360buyimg.com/vc/jfs/t1/131508/1/9540/365934/5f56f00fEb4248554/79283b15a825f154.jpg"></p><p><img title="破格-新.jpg" src="https://img30.360buyimg.com/vc/jfs/t1/142883/9/6681/1167614/5f45d56bE49a913eb/26496c38f56fab51.jpg"></p><p><br></p></div></div></div></div></div></div></div>', 0, '', 1, 1, 1),
(12, 22, 32, '小米10青春版 双模5G 骁龙765G 50倍潜望式变焦四摄 6GB+128GB 蓝莓薄荷 游戏手机', '1999.00', '1999.00', '/uploads/d6348260-28b1-11eb-818b-3bceeadd88a2.png', '<div><div><h3>主体</h3><dl><dl><dt>入网型号</dt><dd><a href="https://item.jd.com/100007010653.html#none"><i></i></a></dd><dd>以官网信息为准</dd></dl><dl><dt>品牌</dt><dd>小米（MI）</dd></dl><dl><dt>产品名称</dt><dd>小米10青春版</dd></dl><dl><dt>上市年份</dt><dd>2020年</dd></dl><dl><dt>首销日期</dt><dd>30日</dd></dl><dl><dt>上市月份</dt><dd>4月</dd></dl></dl></div><div><h3>基本信息</h3><dl><dl><dt>机身长度（mm）</dt><dd>164.02mm</dd></dl><dl><dt>机身重量（g）</dt><dd>192g</dd></dl><dl><dt>机身材质工艺</dt><dd>以官网信息为准</dd></dl><dl><dt>机身宽度（mm）</dt><dd>74.77mm</dd></dl><dl><dt>机身材质分类</dt><dd>其他</dd></dl><dl><dt>机身厚度（mm）</dt><dd>7.88mm</dd></dl><dl><dt>运营商标志或内容</dt><dd><a href="https://item.jd.com/100007010653.html#none"><i></i></a></dd><dd>无</dd></dl></dl></div><div><h3>主芯片</h3><dl><dl><dt>CPU品牌</dt><dd>高通(Qualcomm)</dd></dl></dl></div><div><h3>屏幕</h3><dl><dl><dt>屏幕材质类型</dt><dd>AMOLED</dd></dl><dl><dt>屏幕刷新率</dt><dd>60Hz</dd></dl><dl><dt>主屏幕尺寸（英寸）</dt><dd>6.57英寸</dd></dl></dl></div><div><h3>后置摄像头</h3><dl><dl><dt>后摄主摄光圈</dt><dd>f/1.79</dd></dl><dl><dt>闪光灯</dt><dd>LED灯</dd></dl></dl></div><div><h3>前置摄像头</h3><dl><dl><dt>前摄主摄光圈</dt><dd>其他</dd></dl></dl></div><div><h3>电池信息</h3><dl><dl><dt>电池是否可拆卸</dt><dd><a href="https://item.jd.com/100007010653.html#none"><i></i></a></dd><dd>电池不可拆卸</dd></dl><dl><dt>充电器</dt><dd>其他</dd></dl><dl><dt>无线充电</dt><dd><a href="https://item.jd.com/100007010653.html#none"><i></i></a></dd><dd>不支持无线充电</dd></dl></dl></div><div><h3>网络支持</h3><dl><dl><dt>最大支持SIM卡数量</dt><dd>2个</dd></dl><dl><dt>网络频率（2G/3G）</dt><dd>以官网信息为准</dd></dl><dl><dt>5G网络</dt><dd>移动5G；联通5G；电信5G</dd></dl><dl><dt>4G网络</dt><dd><a href="https://item.jd.com/100007010653.html#none"><i></i></a></dd><dd>4G FDD-LTE(联通)；4G TD-LTE(移动)；4G FDD-LTE(联通、电信)</dd></dl><dl><dt>双卡机类型</dt><dd>双卡双待单通</dd></dl><dl><dt>3G/2G网络</dt><dd>3G WCDMA(联通)；3G CDMA2000(电信)；2G GSM(移动/联通)；2G CDMA(电信)</dd></dl><dl><dt>SIM卡类型</dt><dd><a href="https://item.jd.com/100007010653.html#none"><i></i></a></dd><dd>Nano SIM</dd></dl></dl></div><div><h3>数据接口</h3><dl><dl><dt>数据传输接口</dt><dd>WIFI；蓝牙；NFC；红外</dd></dl><dl><dt>耳机接口类型</dt><dd>3.5mm</dd></dl><dl><dt>充电接口类型</dt><dd>Type-C</dd></dl><dl><dt>NFC/NFC模式</dt><dd>支持（点对点模式）；支持（读卡器模式）；支持卡模拟</dd></dl></dl></div><div><h3>辅助功能</h3><dl><dl><dt>常用功能</dt><dd>便签；计算器；录音；超大字体</dd></dl></dl></div></div><div><h3>包装清单</h3><p>手机主机 / 电源适配器 / USB Type-C 数据线 高透软胶抗菌手机保护壳 /抗菌贴膜（已贴于机身屏幕） / 个性贴纸/卡针 / 三包凭证 / 说明书</p></div>', 9, '64G,32G,128G,256G', 1, 1, 1),
(13, 21, 27, '小米电视4S 75英寸超大屏 4K超高清蓝牙语音遥控 2GB+8GB L75M5-4S 人工智能语音网络液晶平板教育电视', '4499.00', '4999.00', '/uploads/7bcbb6d0-28b2-11eb-818b-3bceeadd88a2.png', '<div id="detail"><div><div><br></div></div><div id="suyuan-video"></div><div id="J-detail-banner"></div><div id="activity_header" clstag="shangpin|keycount|product|activityheader"></div><div id="J-detail-pop-tpl-top-new" clstag="shangpin|keycount|product|pop-glbs"><div><div><div skucode="100010"></div><div id="zbViewFloorHeight_shopPrior" value="683"></div><div align="center"><img src="http://img11.360buyimg.com/cms/jfs/t1/118905/19/13097/370103/5f1958e7Ee082f673/a550cef9483f71cd.jpg" alt="TV-7.24.jpg" border="0" usemap="#TV-7.24"></div></div></div></div></div>', 8, '47,52,60,100', 1, 1, 1),
(14, 22, 30, 'Apple iPhone 12 Pro Max (A2412) 128GB 金色 支持移动联通电信5G 双卡双待手机', '9299.00', '9299.00', '/uploads/e5dd2fe0-28b2-11eb-818b-3bceeadd88a2.webp', '<div><div><br></div></div><div id="suyuan-video"></div><div id="J-detail-banner"></div><div id="activity_header" clstag="shangpin|keycount|product|activityheader"></div><div id="J-detail-pop-tpl-top-new" clstag="shangpin|keycount|product|pop-glbs"><div><div><div skucode="100010"></div><div id="zbViewFloorHeight_activity" value="18"></div><div><a href="https://pro.jd.com/mall/active/zWkKvbSZFLfS1BKeCLmzQ3otsuT/index.html" target="_blank"><img src="https://img14.360buyimg.com/cms/jfs/t1/144765/25/13448/54276/5fa50cb7E9252a878/9f28b53126805620.jpg"></a></div></div></div><div><div></div></div></div><div><div><div><div id="J-detail-top"></div><div id="J-detail-content"><br><div cssurl="//sku-market-gw.jd.com/css/pc/100016034398.css?t=1602627267285"></div><div skucode="100010"></div><div><img src="https://img13.360buyimg.com/cms/jfs/t1/120836/20/14832/819799/5f8604f8Eb381a921/5be9108f28a06b69.jpg"></div></div></div></div></div>', 9, '256G,128G', 1, 1, 1);

-- --------------------------------------------------------

--
-- 表的结构 `member`
--

CREATE TABLE `member` (
  `id` int(10) UNSIGNED NOT NULL,
  `uid` varchar(50) NOT NULL COMMENT '用户编号',
  `phone` char(11) NOT NULL COMMENT '手机号',
  `nickname` varchar(50) NOT NULL COMMENT '昵称',
  `password` char(32) NOT NULL COMMENT '密码',
  `randstr` char(5) NOT NULL COMMENT '密码随机串',
  `addtime` char(13) NOT NULL COMMENT '注册时间',
  `status` tinyint(1) NOT NULL COMMENT '状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会员表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `member`
--

INSERT INTO `member` (`id`, `uid`, `phone`, `nickname`, `password`, `randstr`, `addtime`, `status`) VALUES
(9, 'd0ab6390-28ca-11eb-8ca4-c51a3f8dbc24', '15011554922', 'davie', '192007bccb6060b09ca32bdcec596e64', 'jsA8F', '1605613711433', 1);

-- --------------------------------------------------------

--
-- 表的结构 `menu`
--

CREATE TABLE `menu` (
  `id` smallint(5) UNSIGNED NOT NULL COMMENT '菜单编号',
  `pid` smallint(6) NOT NULL COMMENT '上级菜单编号',
  `title` varchar(50) NOT NULL COMMENT '菜单名称',
  `icon` varchar(100) NOT NULL COMMENT '菜单图标',
  `type` tinyint(1) NOT NULL COMMENT '菜单类型1目录2菜单',
  `url` varchar(100) NOT NULL COMMENT '菜单地址',
  `status` tinyint(1) NOT NULL COMMENT '菜单状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='后台菜单权限表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `menu`
--

INSERT INTO `menu` (`id`, `pid`, `title`, `icon`, `type`, `url`, `status`) VALUES
(1, 0, '系统设置', 'el-icon-setting', 1, '', 1),
(2, 1, '菜单管理', '', 2, '/menu', 1),
(3, 1, '角色管理', '', 2, '/role', 1),
(7, 1, '管理员管理', '', 2, '/user', 1),
(8, 0, '商城管理', 'el-icon-s-goods', 1, '', 1),
(9, 8, '商品分类', '', 2, '/cate', 1),
(10, 8, '商品规格', '', 2, '/specs', 1),
(11, 8, '商品管理', '', 2, '/goods', 1),
(12, 8, '会员管理', '', 2, '/member', 1),
(14, 8, '轮播图管理', '', 2, '/banner', 1),
(20, 8, '秒杀活动', '', 2, '/seckill', 1);

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE `role` (
  `id` smallint(5) UNSIGNED NOT NULL COMMENT '角色编号',
  `rolename` varchar(100) NOT NULL COMMENT '角色名称',
  `menus` varchar(255) NOT NULL COMMENT '菜单权限 存放的是菜单编号，用逗号隔开',
  `status` tinyint(1) NOT NULL COMMENT '角色状态1正常2禁用'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='后台用户角色表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`id`, `rolename`, `menus`, `status`) VALUES
(3, '系统管理员', '1,2,3,7,8,9,10,11,12,14,20', 1),
(9, '普通管理员', '1,2,8,9,10,11,12,14,20', 1),
(10, '客服', '8,9,10,11,12,14,20', 1);

-- --------------------------------------------------------

--
-- 表的结构 `seckill`
--

CREATE TABLE `seckill` (
  `id` int(10) UNSIGNED NOT NULL COMMENT '秒杀表id',
  `title` varchar(100) NOT NULL COMMENT '活动名称',
  `begintime` char(13) NOT NULL COMMENT '秒杀开始时间',
  `endtime` char(13) NOT NULL COMMENT '秒杀结束时间',
  `first_cateid` smallint(5) NOT NULL COMMENT '商品一级分类编号',
  `second_cateid` smallint(5) NOT NULL COMMENT '商品二级分类编号',
  `goodsid` int(11) NOT NULL COMMENT '商品编号',
  `status` tinyint(1) NOT NULL COMMENT '状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='限时秒杀活动表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `seckill`
--

INSERT INTO `seckill` (`id`, `title`, `begintime`, `endtime`, `first_cateid`, `second_cateid`, `goodsid`, `status`) VALUES
(10, '活动-1', '1605016613551', '1605621413551', 26, 36, 11, 1),
(11, '双十一', '1603029494394', '1605621494394', 21, 27, 13, 2);

-- --------------------------------------------------------

--
-- 表的结构 `specs`
--

CREATE TABLE `specs` (
  `id` int(10) UNSIGNED NOT NULL COMMENT '规格id',
  `specsname` varchar(50) NOT NULL COMMENT '规格名称',
  `status` tinyint(1) NOT NULL COMMENT '规格状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品规格表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `specs`
--

INSERT INTO `specs` (`id`, `specsname`, `status`) VALUES
(8, '尺寸', 1),
(9, '内存', 1),
(10, '尺码', 1);

-- --------------------------------------------------------

--
-- 表的结构 `specs_attr`
--

CREATE TABLE `specs_attr` (
  `id` int(10) UNSIGNED NOT NULL COMMENT '规格项编号',
  `specsid` int(11) NOT NULL COMMENT '规格的specsid',
  `specsval` varchar(50) NOT NULL COMMENT '规格值'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品规格明细表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `specs_attr`
--

INSERT INTO `specs_attr` (`id`, `specsid`, `specsval`) VALUES
(23, 8, '47'),
(24, 8, '52'),
(25, 8, '60'),
(26, 8, '100'),
(27, 9, '32G'),
(28, 9, '64G'),
(29, 9, '128G'),
(30, 9, '256G'),
(31, 10, 's码'),
(32, 10, 'm码'),
(33, 10, 'l码'),
(34, 10, 'xl码');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` smallint(5) UNSIGNED NOT NULL COMMENT '住建',
  `uid` varchar(50) NOT NULL COMMENT '管理员编号',
  `roleid` smallint(5) NOT NULL COMMENT '角色编号',
  `username` varchar(30) NOT NULL COMMENT '用户名',
  `password` char(32) NOT NULL COMMENT '密码',
  `randstr` char(5) NOT NULL COMMENT '随机加密串',
  `status` tinyint(1) NOT NULL COMMENT '状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='后台管理员用户表' ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `uid`, `roleid`, `username`, `password`, `randstr`, `status`) VALUES
(1, '7f412140-6b72-11ea-a476-bbdc6fb709e3', 3, 'admin', '904793bd8f8b17435798173c6af24eff', 'LFLK8', 1),
(6, '80635f10-d018-11ea-a049-5b6688d56bd4', 3, 'davie', '6d9ebb86f0c60fdcd1969ee07fea6e2e', '77xAo', 1),
(22, '3a950a80-28e5-11eb-8ca4-c51a3f8dbc24', 10, '客服-1', 'fcf66c0d0e87b9058ab22fe276abfaa0', 'OCw4k', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `uid` (`uid`,`goodsid`) USING BTREE;

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `seckill`
--
ALTER TABLE `seckill`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `specs`
--
ALTER TABLE `specs`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `specs_attr`
--
ALTER TABLE `specs_attr`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `uid` (`uid`) USING BTREE;

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `banner`
--
ALTER TABLE `banner`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '轮播图id', AUTO_INCREMENT=8;
--
-- 使用表AUTO_INCREMENT `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '购物车主键', AUTO_INCREMENT=35;
--
-- 使用表AUTO_INCREMENT `category`
--
ALTER TABLE `category`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '分类编号', AUTO_INCREMENT=37;
--
-- 使用表AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '商品编号', AUTO_INCREMENT=15;
--
-- 使用表AUTO_INCREMENT `member`
--
ALTER TABLE `member`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- 使用表AUTO_INCREMENT `menu`
--
ALTER TABLE `menu`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '菜单编号', AUTO_INCREMENT=21;
--
-- 使用表AUTO_INCREMENT `role`
--
ALTER TABLE `role`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '角色编号', AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `seckill`
--
ALTER TABLE `seckill`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '秒杀表id', AUTO_INCREMENT=12;
--
-- 使用表AUTO_INCREMENT `specs`
--
ALTER TABLE `specs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '规格id', AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `specs_attr`
--
ALTER TABLE `specs_attr`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '规格项编号', AUTO_INCREMENT=35;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '住建', AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

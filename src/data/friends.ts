// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "神。",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
	},
	{
		id: 2,
		title: "Mizuki Docs",
		imgurl: "http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "Mizuki模板方便了100000个人建站，伟大无需多言",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["Docs"],
	},
	{
		id: 3,
		title: "Vercel",
		imgurl: "https://avatars.githubusercontent.com/u/14985020?v=4&s=640",
		desc: "免费部署和托管，好人",
		siteurl: "https://vercel.com",
		tags: ["Hosting", "Cloud"],
	},
	{
		id: 4,
		title: "ZCJun.com",
		imgurl: "https://avatars.githubusercontent.com/u/45475778?v=4&s=640",
		desc: "Zc菌分享：探索新领域，发现新美好，分享小快乐",
		siteurl: "https://zcjun.com/",
		tags: ["Blog"],
	},
	{
		id: 5,
		title: "LeetCode CN",
		imgurl: "https://assets.leetcode.cn/aliyun-lc-upload/uploaded_files/2021/03/73c9f099-abbe-4d94-853f-f8abffd459cd/leetcode.png?x-oss-process=image%2Fformat%2Cwebp",
		desc: "力扣——进步从刷题开始",
		siteurl: "https://leetcode.cn/",
		tags: ["Site"],
	},

];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

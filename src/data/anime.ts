// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "那年那兔那些事儿 第七季",
		status: "completed",
		rating: 9.4,
		cover: "/assets/anime/nt7.webp",
		description: "本季（第七季）以志愿军兔退伍老兵和后代的视角，讲述种花家制造业从无到有，从落后到追赶，最终形成完备的自有体系的故事。",
		episodes: "12 episodes",
		year: "2025",
		genre: ["漫画改", "历史"],
		studio: "深红之翼",
		link: "https://www.bilibili.com/bangumi/media/md24491383",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2025-02",
		endDate: "2025-07",
	},
	{
		title: "阿衰 第五季",
		status: "watching",
		rating: 9.1,
		cover: "/assets/anime/as7.webp",
		description: "怕踢中学的出糗大王阿衰，为人缺少稳重，好胡思乱想、不切实际、异想天开……总是闹出笑话来。阿衰的身边有一群形形色色的同学和老师，他们一起经历了许多有趣的校园故事。",
		episodes: "34 episodes",
		year: "2025",
		genre: ["漫画改", "搞笑"],
		studio: "周政",
		link: "https://www.bilibili.com/bangumi/media/md28234572",
		progress: 24,
		totalEpisodes: 34,
		startDate: "2021-06",
		endDate: "2021-09",
	},
	{
	    title: "Rick and Morty",
		status: "planned",
		rating: 9.5,
		cover: "/assets/anime/rm.webp",
		description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
		episodes: "121 episodes",
		year: "2013",
		genre: ["科幻", "搞笑"],
		studio: "Justin Roiland",
		link: "https://www.bilibili.com/video/BV1UnBUB2EiG/",
		progress: 0,
		totalEpisodes: 121,
		startDate: "2013-12",
		endDate: "2021-05",
	},
];

export default localAnimeList;

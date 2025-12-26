// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Lenovo: [
		{
			name: "Lenovo Legion Y7000P IRX9",
			image: "/images/device/y7000p.png",
			specs: "i7-14700HX / 16G RAM / RTX 4060 / 512G SSD",
			description:
				"第14代智能英特尔®酷睿™ i7-14650HX/Windows 11 家庭中文版/16英寸/16G/1T SSD/RTX™ 4060 8G独显/月蚀灰",
			link: "https://item.lenovo.com.cn/product/1051304.html",
		},
	],
	Xiaomi: [
		{
			name: "Redmi K60",
			image: "/images/device/redmik60.png",
			specs: "Octa-core Max 3.0GHz / 16GB RAM / 256GB Storage",
			description:
				"Redmi K60搭载高通骁龙8+ Gen 1移动平台，配备16GB LPDDR5内存和256GB UFS 3.1闪存，提供强劲性能和流畅体验。",
			link: "https://www.mi.com/redmi-k60",
		},
		{
			name: "Redmibook Pro 14",
			image: "/images/device/book14.png",
			specs: "i5-12450H / 16G RAM / 512G SSD",
			description:
				"Redmibook Pro 14搭载第12代英特尔酷睿i5处理器，配备16GB内存和512GB SSD，轻薄便携，性能强劲。",
			link: "https://www.mi.com/redmi-books/14",
		},
	],
};

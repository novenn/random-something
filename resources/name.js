const names = [
  // 历史
  '神农氏',
  '轩辕氏',
  '颛顼',
  '李世民',
  '孔融',
  '屈原',
  '李白',
  '杜甫',
  ' 白居易',
  '刘禹锡',
  '李商隐',
  '杜牧',
  '李贺',
  '张九龄',
  '王之涣',
  '王勃',
  '皇甫松',
  '李珣',
  '李煜',
  '高适',
  '王维',
  '刘长卿',
  '韩愈',
  '柳宗元',
  '顾况',
  '李益',
  '范仲淹',
  '欧阳修',
  '陆游',
  '辛弃疾',
  '岳飞',
  '秦始皇',
  '商鞅',
  '王安石',
  '吕不韦',
  '朱元璋',
  '曹操',
  '赵匡胤',
  '赢政',
  '刘邦',
  '诸葛亮',
  '李世民',
  '张居正',
  '陶渊明',
  '柳宗元',
  '司马迁',
  '文天祥',
  '孙子',
  '庄子',
  '荀子',
  '老子',
  '韩非',
  '司马相如',
  '黄帝',
  '武则天',
  '刘邦',
  '刘桓',
  '刘启',
  '李世民',
  '李渊',
  '赵匡胤',
  '铁木真',
  '朱元璋',
  '康熙',
  '乾隆',
  '李煜',
  '成吉思汗',
  '武则天',
  '慈禧太后',
  '陈圆圆',
  '杨玉环',
  '李清照',
  '貂禅',
  '赛金花',
  '文成公主',
  '孝庄皇后',
  '李师师',
  '赵飞燕',
  '蔡文姬',
  '黄道婆',
  '卓文君',

  // 明星
  '郭德纲',
  '于谦',

  // 射雕英雄传
  '一灯大师',
'马青雄',
'马钰',
'小沙弥',
'木华黎',
'丘处机',
'沈青刚',
'书记',
'书生',
'天竺僧人',
'王处一',
'王罕',
'尹志平',
'包惜弱',
'冯衡',
'术赤',
'孙不二',
'札木合',
'华筝',
'李萍',
'刘玄处',
'刘瑛姑',
'吕文德',
'农夫',
'乔寨主',
'曲三',
'曲傻姑',
'全金发',
'汤祖德',
'朱聪',
'陈玄风',
'赤老温',
'灵智上人',
'陆乘风',
'陆冠英',
'沙通天',
'完颜洪烈',
'完颜洪熙',
'吴青烈',
'杨康',
'杨铁心',
'余兆兴',
'张阿生',
'张十五',
'忽都虎',
'欧阳峰',
'欧阳克',
'拖雷',
'者勒米',
'周伯通',
'段天德',
'郭靖',
'郭啸天',
'郝大通',
'洪七公',
'侯通海',
'姜文',
'柯镇恶',
'枯木',
'南希仁',
'胖妇人',
'胖丐',
'胖子',
'哑梢公',
'都史',
'钱青健',
'桑昆',
'铁木真',
'盖运聪',
'黄蓉',
'黄药师',
'梁长老',
'梁子翁',
'梅超风',
'渔人',
'博尔忽',
'博尔术',
'程瑶迦',
'韩宝驹',
'韩小莹',
'焦木和尚',
'鲁有脚',
'穆念慈',
'彭长老',
'彭连虎',
'童子',
'窝阔台',
'简长老',
'简管家',
'裘千仞',
'裘千丈',
'瘦丐',
'察合台',
'酸儒文人',
'谭处端',
'黎生',
'樵子',

// 天龙八部
'刀白凤',
'丁春秋',
'马夫人',
'马五德',
'小翠',
'于光豪',
'巴天石',
'不平道人',
'邓百川',
'风波恶',
'甘宝宝',
'公冶乾',
'木婉清',
'少林老僧',
'太皇太后',
'天狼子',
'天山童姥',
'王语嫣',
'乌老大',
'无崖子',
'云岛主',
'云中鹤',
'止清',
'白世镜',
'包不同',
'本参',
'本观',
'本相',
'本因',
'出尘子',
'冯阿三',
'古笃诚',
'过彦之',
'兰剑',
'平婆婆',
'石清露',
'石嫂',
'司空玄',
'司马林',
'玄慈',
'玄寂',
'玄苦',
'玄难',
'玄生',
'玄痛',
'叶二娘',
'左子穆',
'华赫艮',
'李春来',
'李傀儡',
'李秋水',
'刘竹庄',
'朴者和尚',
'祁六三',
'乔峰',
'全冠清',
'阮星竹',
'西夏宫女',
'许卓诚',
'朱丹臣',
'竹剑',
'阿碧',
'阿洪',
'阿胜',
'阿朱',
'阿紫',
'波罗星',
'陈孤雁',
'何望海',
'鸠摩智',
'来福儿',
'孟师叔',
'努儿海',
'宋长老',
'苏星河',
'苏辙',
'完颜阿古打',
'吴长风',
'吴光胜',
'吴领军',
'辛双清',
'严妈妈',
'余婆婆',
'岳老三',
'张全祥',
'单伯山',
'单季山',
'单叔山',
'单小山',
'单正',
'段延庆',
'段誉',
'段正淳',
'段正明',
'范禹',
'范百龄',
'范骅',
'苟读',
'和里布',
'耶律洪基',
'耶律莫哥',
'耶律涅鲁古',
'耶律重元',
'易大彪',
'郁光标',
'卓不凡',
'宗赞王子',
'哈大霸',
'姜师叔',
'枯荣长老',
'梦姑',
'神山上人',
'神音',
'狮鼻子',
'室里',
'项长老',
'姚伯当',
'幽草',
'赵钱孙',
'赵洵',
'哲罗星',
'钟灵',
'钟万仇',
'高升泰',
'龚光杰',
'贾老者',
'康广陵',
'秦红棉',
'容子矩',
'桑土公',
'唐光雄',
'奚长老',
'徐长老',
'诸保昆',
'崔百泉',
'崔绿华',
'符敏仪',
'黄眉和尚',
'菊剑',
'聋哑婆婆',
'梅剑',
'萧远山',
'虚竹',
'游骥',
'游驹',
'游坦之',
'程青霜',
'傅思归',
'葛光佩',
'缘根',
'智光大师',
'鲍千灵',
'褚万里',
'瑞婆婆',
'端木元',
'赫连铁树',
'黎夫人',
'慕容博',
'慕容复',
'谭公',
'谭婆',
'谭青',
'摘星子',
'慧方',
'慧观',
'慧净',
'慧真',
'穆贵妃',
'薛慕华',

// 笑傲江湖
'卜沉',
'丁坚',
'丁勉',
'上官云',
'万大平',
'于人豪',
'于嫂',
'不戒和尚',
'长青子',
'仇松年',
'丹青生',
'邓八公',
'方人智',
'方生',
'方证',
'风清扬',
'计无施',
'木高峰',
'天门道人',
'天松道人',
'天乙道人',
'王伯奋',
'王诚',
'王二叔',
'王夫人',
'王家驹',
'王家骏',
'王元霸',
'王仲强',
'白二',
'白熊',
'丛不弃',
'东方不败',
'乐厚',
'令狐冲',
'宁中则',
'平夫人',
'平一指',
'申人俊',
'史镖头',
'史登达',
'司马大',
'田伯光',
'仪和',
'仪琳',
'仪清',
'玉玑子',
'玉灵道人',
'玉磬子',
'玉音子',
'玉钟子',
'左冷禅',
'成不忧',
'成高道人',
'冲虚道长',
'吉人通',
'老不死',
'老头子',
'刘菁',
'刘芹',
'刘正风',
'米为义',
'农妇',
'齐堂主',
'曲非烟',
'曲洋',
'任我行',
'英颚',
'西宝',
'向大年',
'向问天',
'陈七',
'陈歪嘴',
'迟百诚',
'狄镖头',
'狄修',
'定静师太',
'杜长老',
'何三七',
'季镖头',
'劳德诺',
'陆伯',
'陆大有',
'任盈盈',
'沙天江',
'秃笔翁',
'吴柏英',
'吴天德',
'辛国梁',
'严三星',
'杨莲亭',
'余沧海',
'余人彦',
'岳灵珊',
'张夫人',
'张金鏊',
'定逸',
'建除',
'林平之',
'林远图',
'林震南',
'罗人杰',
'易国梓',
'易师爷',
'易堂主',
'英白罗',
'英长老',
'岳不群',
'郑镖头',
'郑萼',
'周孤桐',
'费彬',
'封不平',
'洪人雄',
'侯人英',
'觉月',
'施戴子',
'施令威',
'闻先生',
'哑婆婆',
'钟镇',
'祝镖头',
'祖千秋',
'高克新',
'高明根',
'贾布',
'贾人达',
'莫大',
'秦娟',
'秦伟帮',
'桑三娘',
'桃干仙',
'桃根仙',
'桃花仙',
'桃实仙',
'桃叶仙',
'桃枝仙',
'陶钧',
'夏老拳师',
'崔镖头',
'黄伯流',
'黄国柏',
'黄钟公',
'假东方不败',
'梁发',
'绿竹翁',
'麻衣汉子',
'清虚道人',
'游迅',
'葛长老',
'黑白子',
'黑熊',
'鲁连荣',
'舒奇',
'童百熊',
'鲍大楚',
'解风',
'蓝凤凰',
'谭迪人',
'震山子',

  
]

module.exports = function getRandomName() {
  var index = Math.floor(names.length * Math.random())
  return names[index]
}
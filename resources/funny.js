
const funnys = [
    '聊了很久的女神突然问我：想看我素颜吗？我说当然啦。很兴奋的接了视频。看后，心里想，我眼光还是不错，素颜还是这么漂亮。正准备夸两句，视频已关，好友已删…我忘了关自己的摄像头…',
    '暴雨过后# 这次暴雨后，我给一女同学发信息调侃道:你昨晚被泡了吗？ 不一会女同学回信息说:恩.昨晚雨太大，你也被阉了吧！',
    '去一家公司面试销售岗位，前面的都顺利通过。最后一关，老板给了我们一张A4纸，全英文的，我英文一窍不通。但是又很渴望这份工作，就瞎念，然后老板一脸茫然地看着我。我以为他也不会，就更自信地瞎念，然后还各种加入自己的理解。最后老板发话了：做销售就需要你这种不要脸的精神，明天来上班吧！',
    '今天一家人出门，我和闺女在楼下等我媳妇，结果等了半小时还没下来。闺女：“爸，手机给我，我叫我妈下来。”我：“你叫不动她的，她没化够一小时的妆，肯定不会下来。”闺女：“放心，我有办法！”于是我把手机递过去给闺女。闺女打电话就喊：“老妈，我爸和30多岁的少妇在聊天，我把他手机拿来了，他都不知道！”媳妇：“你在那等着，我马上下去！”闺女把手机交到我手上还没两分钟，媳妇就冲下楼来了…..',
    '16岁时留着胡子特显老成。一次坐公交上学，邻座一30多岁的叔叔问：“大哥你去哪儿？”我没好气的说：“一中。”他又问：“你是去看孩子的吧？上几年级了？”我压着怒火说：“高一！”此男提高了嗓门：“大哥啊！你结婚挺晚啊！”',
    '我们县正在搞文明县城评比。话说我一哥们抽烟，然后把烟头一扔。被环卫工人看见了：“随便扔烟头罚款二十。”我哥们当时蹲下，把烟头捡起来猛吸一口说：“正吸着怎么掉地上了。”我当时就凌乱了……',
    '小姨子和老公结婚四年了，一直没怀上孩子。上个星期老公带她去庙里祈福，祈求观音菩萨保佑她早点怀上孩子！临走的时候小姨子看庙里的方丈非常眼熟，就多看了两眼，没想到方丈居然问：“你瞅啥？”小姨子说：“我看你有点眼熟，有点像我……”后半句话小姨子没敢说，方丈说：“不是像，我就是你前男友！”',
    '在某宝给女朋友买了一套内衣，里面一个纸条返现，好评加图片返现10元！我一看就吃醋了，我媳妇能给你们看吗？我立马穿上内衣拍了5连拍，点好评，然后发了过去。过来一会，手机来了一个电话：大哥，我不知道是您穿，那个内衣算我们免费送的！可以把评论删了吗，谢谢啊……',
    '最近我在减肥，几乎很少吃东西，但是一个月过了竟然又胖了五斤。正在纳闷的时候。听到二货老婆在和闺蜜打电话：“我告诉你啊，我老公可好玩了——他每天晚上睡觉磨牙，我就往他嘴里塞吃的，一晚上能塞进去好多呢！”老婆闺蜜:“是啊，你老公睡觉时磨牙特别烦人！”',
    '腾讯被三个自称为老干妈业务经理的人伪造的老干妈公章，骗取一千多万的广告费。 腾讯老干妈事件搞笑段子 李国庆：我就说公章有用他们不信，还吃我的瓜。 腾讯：这下我信了。。。 腾讯老干妈事件的始末是这样的，有三名人员伪造了老干妈的公章，并且伪造了老干妈的市场营销部的经理和腾讯公司签订了一系列的合作协议，目的是为了获取到2019年那时候的10月份的礼盒礼包码，礼包码奖励有：一定概率获',
    '表姐三十来岁没有结婚，姑妈在我们这些亲戚面前总是念叨自己的女儿为啥就嫁不出去。我就劝她，“姑妈，你看表姐那么听话的，将来肯定会找到一个很好的如意郎君。”姑妈叹了口气，“你没有养女儿，你不明白，一个三十岁都还按时回家的女儿，能不叫人担心吗？”',
    '下班回到家，老婆从背后一把抱住我，兴奋地说：“老公你对我太好了！”看我一脸蒙圈，她继续道：“今天收拾房间，在衣柜角落找到500元钱，里面还有张纸条：‘存着给老婆买礼物。’”我故作镇定道：“唉，本来想给你惊喜的，结果被发现了，哈哈……”她亲了我一下兴奋的说：“你会不会还在某个角落给我准备了惊喜呢。”我战战兢兢说：“没…没有了，我哪有那么多钱。”“不，你有。”说完她脸色一变走到电视柜，拉',
    '刚去买药，突然忘了药的名字，药店老板说：“我卖药30年了，只要你说出药里的两个字，我就知道是什么药。”我想了很久说：“我只知道最后两个字。”老板说：“什么字？”我说：“胶囊。”',
    '上大学时，男生宿舍里，只有我住的这寝室被评为是全能型的！ 晚上睡觉，有打呼噜的，磨牙的，唱歌的，说梦话的。。。 而我睡下铺，实在受不了，只能睡着后，出去溜达一圈。。。',
    '和男友相识一周年纪念日，约了他在第一次见面的地方等。下班后，我匆匆赶去约会。路上，察觉有个人鬼鬼祟祟的一路尾随着我。我马上警惕起来，偷偷回头瞄一眼…… 我擦！竟是我那二货男友！他一定是忘记我俩第一次见面的地方了，以为戴着鸭舌帽，裹个大口罩我就认不出来了？',
    '今天接到一电话：先生您好，我是蛋糕店的店长，今天我们店里搞活动，会按照您的星座送东西，如果是巨蟹座就送一只大螃蟹，如果是双鱼座就送两条鱼……想请问您是什么星座？这店主为了自己200多斤的女儿的后半生，真的是煞费苦心啊！',
    '阿姨要给我介绍对象，介绍的女孩才十八。我才刚二十岁，着啥急？阿姨瞅我一眼说：傻孩子你不懂，趁你们还小，小闺女也没啥经验，你多说点甜言蜜语，再买点衣服买个包包啥的，就能骗个媳妇回家，再过几年，等她们长大了，知道要高富帅的时候，你说你有啥？',
    '今天第一次去富二代女友家，结果吃饭的时候被她父亲看到我的银行卡余额了。他脸色瞬间变了，说：你就这么点余额，怎么养得起我女儿？我说：叔叔，你知道支付宝吗？她爸笑着点头表示知道，问：你是把钱都存在支付宝了吗？我摇头说：不不不，我的意思是支付宝有花呗，还有借呗。她爸：你给我滚！我：叔叔，您先别生气啊，我还有三张信用卡呢！',
    '我妈最近在公园跳广场舞认识了阿姨，刚好她有个女儿没男朋友，就撮合我们认识。今天到了公园我妈指着一个女孩子说：就是那个女孩子。于是，我走了过去，拍了拍她的肩膀，她愣了一下，然后把手里的喝完的矿泉水瓶子递给我了！',
    '一同事歌唱的不堪入耳朵，但挺能活跃气氛的。一次ktv嗨皮完买单时，老板默默的抽着烟，忧郁的眼神看着我们：“兄弟啊，给你们个五折优惠，你们下次去祸害旁边那家吧！”老板你怎么可以这样呢？隔壁那家他也是这么说的',
    '我有个从小玩到大的闺蜜，她哪都好就太女汉子了。最近她苦苦地追着一个帅小伙，可帅小伙对她一直冷冰冰的。闺蜜急眼了：我都快把心掏给你了，你咋像个冷血动物，一点儿反应都没有呢？帅小伙：你说的不对，我一直都是有反应的。闺蜜：你有啥反应，我咋一点儿都没看出来？帅小伙：我的大脑一直提醒着自己，切不可接近孙二娘！',
    '老婆怀孕后，买了不少CD，有音乐，也有英语，说是给宝宝进行胎教，忙得不亦乐乎。我不理解，就劝道：“我看你还是好好休息吧！等宝宝长大后，再给他报兴趣班也不迟。”老婆连忙摆手说：“那不一样。”“怎么不一样？”我问道，老婆说：“最起码现在宝宝不能逃课！”我……',
    '夜深人静的时候，爸爸妈妈已经睡了，我独自一人在房间被窝里偷偷用手机看电影。你们懂的。正当演到正激烈时候，竟然没有声音！我把音量开到最大也无济于事，插上耳机也没用，十分疑惑。这时我的房门突然被打开了！我爸把蓝牙音响扔在了我的床上。',
    '演唱会上，一哥们激动的拿着话筒对台上的明星说：“我是你最忠实的粉丝，我几乎参加了你的每一场演唱会，今天终于等到了机会！您能和我女朋友和张影吗？”明星觉得很感动，毫不犹豫的答应了. 然后这哥们听了高兴的对着台下问：“太好了，那么各位美女，谁愿意当我女朋友啊？”',
    '女神约我去KFC，我激动不已，农村长大的我，从没去过。我特意去请教舍友，舍友非常耐心又详细地给我说了去KFC该注意什么。第二天见面了，当我用筷子夹着汉堡包蘸着自带的老干妈时，女神急忙说家里有事先走了……怎么就那么巧呢？',
    '迫于家里的压力，我这个名牌大学的高材生也去相亲了。一见面，女的就问了我：“你出门坐公交给老奶奶让座吗？”我：“必须让啊！”女的说：“我们不合适！”说完转身就要走。这时我默默的掏出我的保时捷车钥匙，她惊喜：“其实我们还是能试试看的！”我什么话都没事，用保时捷车钥匙悠悠的点上一支软中华……',
    '最近家里有老鼠，我妈买了几个老鼠夹子回来，今天一大早就硬拉我起床看她的战果，只见两只大老鼠，还有几个小的。我就问我妈: 一大早的，让我看这个干嘛啊？我妈说: 闺女，咱家老鼠都结婚，有小孩了，你什么时候结婚啊？',
    '老爸是个警察，现在退休了，每天都絮叨：“你爸当了一辈子警察，唯独有两个遗憾，第一个遗憾是失手让一个持刀歹徒逃走；第二个遗憾是没有在你30岁之前，把你这个臭丫头嫁出去。我笑着说道：“爸，你说啥呢！我今年才29，今天我就完成你的遗憾，人我都带来了。”说完，我就把男朋友从门外拽了进来。老爸见到我的男朋友后，二话没说，一个熟悉的擒拿手，就把我的男朋友按在了地上。',
    '经王姨撮合，今天去相亲，内心充满期待。王姨跟我反复交代：这找媳妇啊，就要找老实本分的，丑点什么的都没关系，胖瘦也没啥多大关系，关键性格要好，你说呢？我来个去，听了王姨这话，我怎么突然有一种不详的预感呢。',
    '现在流行晒自己媳妇有多漂亮，殊不知，老婆漂亮没好处，许仙娶了漂亮的白素贞，结果自己当了道士，周瑜娶了漂亮的小乔，自己却英年早逝。相反，齐宣王娶了丑女无盐女，成就齐国霸业，诸葛亮娶了丑女黄月英，成为一代贤相。我靠，照这个思路推演下去，再想想我老婆的长相，我有可能当总统啊！',
    '晚饭后我在收拾碗筷，不小心打碎了一个盘子，听见声响，老婆和女儿同时冲进了厨房。老婆指着我一顿数落，女儿默默从橱柜里拿出煎蛋的小锅递给老婆，说道：妈妈，给你平底锅。特么的，动画果然害人不浅！',
    '老哥想去健身房锻炼一下，于是便去询问了解一下，前台小姐姐叫他一个人到处转转，他见一腹肌大哥在哪儿锻炼，于是上前问他:“大哥，我想健身，你能带我一下嘛？”那大哥抬头看着我哥，问:“你健身是为了什么？”我哥不好意思地说:“为了找女朋友，我太瘦了连女朋友都不好找！”结果那哥们放下手中的健身器材，一脸认真的问我哥:“在健身房呆久了，谁还喜欢女的？”',
    '公司IT小伙和一个女同事出差，忙碌了一天，晚上一起吃了个宵夜，回到酒店临分手时，女同事微笑着问小伙：“光辉岁月是谁的歌呀？”小伙脱口而出：“黄家驹的。”女同事哼了一声，扭头就走了。小伙回来问我，我也没明白……',
    '那天突然心血来潮想练空翻，然后翻着翻着床就塌了，怕被骂，就给原样拼好闪人，结果那天晚上姐姐带着姐夫回来，关到房间里没五分钟就听到一声巨响，然后姐和姐夫就红着脸出来了，老爸在一旁道：不得不佩服， 年轻人就是有活力啊！',
    '受疫情影响，在家呆久了，媳妇处处看我不顺眼，我眼睛疼，她说肯定是玩手机玩的。我颈椎不舒服，她说都是玩手机玩的。连我嘴里长泡儿，她也认为是玩手机玩的! 我反驳:我玩手机也不是一点好处也没有，这几天有点拉肚子，刚才着急上厕所，发现没拿手机硬是给憋住了，手机治好了我的拉肚子! 媳妇:那你一定得感谢我，是我把你手机扔到垃圾桶的!',
    '宿舍突然来了一位大妈，她扫视一圈，盯着我问“小伙子，你谈恋爱了吗？” 我告诉她没谈。大妈松了口气，说“我女儿谈了个男朋友，说就是这个宿舍的，我来看看。” 我问“大妈，我们宿舍6个人，为啥就问我呢？” 大妈“只要不是你我就放心了！',
    '小姨子暗恋一个男生4年了，一直以朋友的身份相处，没捅破那层窗户纸。 前两天小姨子过生日，请那个男生来家里吃饭。 男生不好意思空手来，就问小姨子：你想要什么生日礼物？ 小姨子羞涩的说道：我想要对象！ 于是那个男生买了两个桃木雕刻的小象送给小姨子了！',
    '有一次去领导家求合同，从商店买了几瓶好酒，手里捏着刚找的零钱。我推开领导家门，突然看见领导和我们公司王总正在吃饭！我一愣，立即说：“王总，这是你要的酒，找的零钱给您放桌子上，您忙，我先回去了。”第二天，领导打电话给我：“下午带齐资料，过来签合同吧……”',
    '我老爸对我说：“其实你妈挺会关心人的，变天了还会问我冷不，受伤了还会问我疼不。”我说：“那她为啥只关心你不关系我啊？”老爸不高兴了：“咋不关心你了？每次抽你耳光时，她不都会关心的问你，你还嘴硬不？”',
    '我是一名北漂，刚刚结婚，结婚以后，媳妇让我找到了小时候的感觉。首先，媳妇做的饭和老妈做的一样难吃；其次，媳妇骂我的口气和老妈一样凶；再次，媳妇惩罚我力度和老爸一样很还有，媳妇的毛病比奶奶还多；最后，媳妇让我交作业的次数，比小学老师还多。',
    '“马云在和王健林一起喝茶时接到一个电话：“我绑了你儿子，半小时内准备100万现金，否则撕票！” 马云一下慌了，连忙问王健林：“你身上有没有带100万零钱？” 王健林不高兴了：“你当我乞丐啊！”马云把情况一说， 王健林安慰他：“别急！没准我司机车上有，我问问看！””',
    '两口子走在路边，突然有一辆迈巴赫驶过，溅了媳妇一身水，于是媳妇骂道：眼瞎了吗？车子停了下来， 开车的男人伸出头：妹子，你是骂我？ 媳妇走上去：不骂你骂谁？难道你看不到路边有人 ？ 男人：妹子，是你眼瞎才对！ 媳妇：我走路，我溅你一身水了吗？我眼瞎？ 司机一指媳妇后面老公：你要不眼瞎，会找一个没有车，长得也丑，还这么儒弱的男人？”',
    '和我哥们，女朋友还有闺蜜一起出去爬山，天气预报说今天有雨，女朋友问我要带伞吗？我说带几把伞，然后女朋友一巴掌扇过来……我说错话了？火气咋这么大呢？不说了现在还疼！',
    '上午去洗头发，一坐下，帅哥就过来问:“美女，头发这么长可以烫了，很漂亮的!”我说:“不烫。”几分钟后头洗完了，他给我吹头发时候问我:“烫吗?!”我说:“不烫。”又过了会儿，风力越来越大，男生问:“烫吗?”我说:“烫!”于是他就给我烫起了头发…..',
    '我满头大汗，小心翼翼的开着车，喝多的老公在一旁迷糊的喊道：“前面红绿灯化妆品，然后一直开路口一个包……”坐在后面两个老公喝多的朋友问道：“弟妹第一次上手开车，你在旁边瞎喊什么玩意儿呢？”老公淡定的说道：“你弟妹不知道左右，只知道化妆品和包……”',
    '十八岁时，幼稚的我也曾想过想找一个能够爱我的缺点的人，后来才发现，连爱我的优点的人都屈指可数。',
    '我和老婆一起教训儿子：“你卧室里已经摆满玩具了，为什么还要把客厅摆满？”“你卧室里放那么多私房钱，不也还在客厅……”我上前慌乱地堵住儿子的嘴',
    '想在农村的老家盖一栋房子，包工头介绍道：”你想盖多少钱的？现在二三十万的也有，七八十万的也有，最低十万起，上不封顶。”考虑到资金紧张，我选了十万的。到了验收的那天，我发现这栋房子果然没有顶。。。',
    '叫了个保洁来打扫房子，阿姨进门要穿鞋套。我赶紧说： 不用不用可以直接踩进来！保洁阿姨：不是，我怕把我鞋弄脏了。。。',
    '以前，我和舍友都对班花有好感。正一起自修，班花说有点湿疹，我二话不说跑药店买了治湿疹的药膏。回到自修室，舍友正给班花捏脖子：“落枕就落枕，就别说成失枕，力道重了说一声。”……现在他们孩子十岁了！',
    '晚上老公喝醉了很晚才回来，走路东倒西歪，一身酒气，我眼瞅着就来气。但是，生气归生气，想着还是给他削起梨子。刚拿起刀，老公好像酒醒了一样，蹭的从沙发上跌倒在地上，一边爬一边跪着喊：“媳妇，我知道错了，我再也不敢，你别拿刀杀我，我怕！”我……',
    '诸葛亮临死前料定他死后魏延必反，暗嘱马岱杀掉魏延。蜀将中人才济济，马岱武功并不高强，为何诸葛亮偏要找马岱担此重任呢？因为，马岱字丁琳，马丁琳专治魏延。',
    '今天老婆无聊突然问我：“你有暗恋的经历吗？”我：“有啊！”老婆：“后来呢？”我看见她意味深长的瞥了我一眼，瞬间清醒：“已经追到了。”好机智的回答……给自己一百个大写的赞！',
    '喜欢一个妹子很久了，但是一直没有勇气追。有天我对她说:“我妈要过来住几天，你能冒充我女朋友吗？就当帮个忙吧！”妹子犹豫的答应了，还约法三章！后来的几天里，我带着老妈和妹子玩了几天。老妈对她是赞不绝口。当牵手成为自然，拥抱不再谨慎的时候，我对她说:“做我女朋友吧，我是认真的！”于是我们在一起了。最后送老妈的那天，我给她塞了一千元，说:“阿姨，下次再用妈，我还雇你！”',
    '我和同学都有非常忙碌的父亲。同学：爸爸，你一天赚多少钱呀？父亲：大概1000元吧，怎么了？同学：爸爸，这是我存很久的1000元，今天可以陪我一天吗？父亲红了眼眶，父子相拥而泣，重获天伦之乐。我听了之后，也决定效仿同学！我：爸爸，你一天赚多少钱呀？父亲：10万左右吧，怎么了？我：没事呀。。。我就随便问问。。。',
    '哥哥嫂子都是暴脾气，两人动不动就开火。于是我劝哥哥，下次要发脾气前，你试试深呼吸然后默念10遍“不要发脾气”，让火气消下去。昨晚嫂子又为了一点小事生气一直吧啦吧啦念叨，哥哥想起我的话，深吸一口气嘴里开始默念……嫂子见状一巴掌招呼过去：你居然敢念咒语？咒我死？',
    '新年催婚，母亲大人下了最后通碟，今年再找不到就给我包办一个。对于这种封建传统的做法，作为新一代的年轻人，我表示强烈赞同，靠我自己是真不行了。',
    '我失恋了，正在房间里郁闷，十岁的侄子乖巧的打开门，来到我身边递给我一块巧克力，安慰我说：“姑姑，你这么年轻，其实就不该谈恋爱，失恋了更好，好好玩几年再说，别亏待了自己。”我觉得侄子说得有理，开心的吃了一口巧克力：“呀，这巧克力真好吃，什么牌子的？”侄子：“不知道呀，我女朋友送的！”',
    '昨天我结婚，我认为结婚的时候，老丈母娘应该抱着姑娘哭的稀里哗啦的，但是昨天丈母娘笑的特别开心，好像根本不是嫁姑娘一样，接亲的时候一路畅通无阻，根本没人拦着，进屋以后我舅哥就拍拍我的肩膀，叫了声妹夫……然后就没说话。我跟我媳妇是介绍认识的，我俩认识一个星期就结婚了！我有点慌……',
    '我经常出差，每次回家，孩子都用一种怯生生的眼神看我，这次出差回来，我突发奇想问孩子：“儿子，王叔叔什么时候走的？”儿子来了一句：“到底你俩谁是王叔叔？”',
    '夜加完班，和女同事买了炸豆腐，边吃边等车。豆腐很辣，弄得我汗水和眼泪混集在一起。这时我叫的车来了，我冲女同事说声“再见”就上了车。到了一个十字路口，司机忽然猛打方向盘掉头，然后说：“兄弟回去吧，我年轻时跟你一样犟，结果失去了很多。”',
    '有一个女人，曾经说要和我一辈子在一起，后来她结婚了，新郎不是我。后来她生了一个儿子，我有了女儿，她说:“我们以后做亲家吧！”现在我女儿大二，她竟然给我送来了请柬，她儿子结婚了，这个女人要到什么时候才能说话算个数啊……',
    '我哥们去相亲，因为身高只有168，所以给媒人报的是172，然而对方妹子确是实实在在的172，妹子给媒人报的是168，俩人见面，对方都没想到，172会比168矮那么多，场面一下子很难控制。',
    '今天倒车后轮卡到了排水沟里，附近又没人，想起看过一个段子说有人遇到同样的事，点了十份外卖，来了十个小哥给抬了出来，然后请小哥们吃了点的外卖。我决定也试一试。结果现在，我和外卖小哥两个人围着十份外卖边吃边讨论哪个环节出了问题！',
    '人到中年，就是一部西游记。悟空的压力，八戒的身材，老沙的发型，唐僧一样的絮絮叨叨。关键还TM的离西天越来越近了！',
    '谈了5年的女朋友总是抱怨我是一个直男，不懂的浪漫，不会给她惊喜！我大怒道：“每个月工资卡在你那！每天给的钱刚够吃中午饭！下午必须回家吃！我的朋友都被你警告过一遍，不准借钱给我！我还到底要怎么样才能给你浪漫！”然后她还想说什么，最后沉默了。',
    '本人已婚少妇，平时性情豪放爱开玩笑，也经常跟单位九零后未婚小女孩说一些成人的笑话。。。这是背景。有一次一个小姑娘很严肃的对我说，姐你知道么，认识你之前我的世界是黑白的，我立刻打断说，我知道我知道，你是不是想说，认识我以后全黑了？她一本正经摇头，不是，是全黄了。。。',
    '老婆温情的说：”老公，我经常欺负你，你有啥感受？”我：”唉，敢怒不敢言呗。”老婆啪就是一巴掌：”哟，胆儿越来越肥了，还敢怒！ “我。。。',
    '一哥们骑摩托车载6个人，怎么坐的大家自己想象，我只能告诉你放脚的地方还有人站的。一路上风驰电掣，这时驾驶摩托这哥们手机响了，他拿出手机来看，后边坐着的哥们不淡定了，高喊道：坐这么多人你别打电话。驾驶那哥们回：我不打电话，我回个短信。',
    '女友肚子疼，让男友去买姨妈巾，男友不愿意去，说是怕遇到熟人。女友顺手递给他个黑塑料袋，意思让他买了放里面。只见男友拿着塑料袋，犹豫了一下，迅速的在袋子上抠出两个窟窿，往头上一套就冲了出去！',
    '收快递的小伙昨天把人撞了，不知道啥情况，今天来后问他怎么回事。他一脸懊恼的说别提了，昨天去送件， 电动三轮车没拔钥匙放在小区楼下，不知车哪坏了直接动了，把一个骑车的妹子撞了。经典的是妹子爬起来缓缓神说:几个月没骑车，这马上就到家了，竟然被一辆无人驾驶的电动车给撞了…',
    '带小侄子逛公园，一对对情侣恩爱秀那叫一个不忍直视，情不自禁的叹了叹气。这时小家伙问道：叔叔，你啥时候给我找个婶婶啊？我微笑着回：等你考100分的时候。只见其愣了几秒，黑着脸说：叔，你千万别拿自己的终身大事开玩笑！我……',
    '牧师对买了他马和马车的农夫说：“这匹马只能听懂教会的语言，叫”感谢上帝”它就跑;叫”赞美上帝”它才停下。”农夫将信将疑，他试着喊了一声感谢上帝，那匹马立刻飞奔起来，越跑越快。一只跑到悬崖边上惊恐的农夫才想起让它停下来的口令“赞美上帝”。果然，马停下来了。死里逃生的农夫长出一口气：“感谢上帝………”',
    '刚才老爸在家收拾东西，老爸说:“奇怪了，跟你妈的结婚证怎么找不到了？”老妈无所谓的样子，老爸又来一句:“找不到这玩意，以后离婚不好搞啊？”结果今晚老爸没得饭吃了……',
    '婚后，原来挺勤快的老婆原形毕露。看到老婆懒洋洋地躺在床上指挥我做这做那，我虽然顺从但心里很郁闷。时间久了，我忍不住埋怨几句，老婆听见了竟和我论起了理：“亏你还是个搞文学的，你没听说过女人是水，男人是钢吗？”我当然不服，辩解道：“你是个搞化工的，你应该知道水和钢放在一起会起化学反应吧？”“能起什么化学反应啊？”老婆蛮横地瞪起了眼。“长久下去，再好的钢也会生锈的！ ”我据理力争',
    '小区终于解除封闭，老婆和闺蜜约好去剪头发，我陪她们去，忽然一阵风吹来，把她们的长发吹进嘴里，老婆的闺蜜轻轻的用手撩开，抚弄着秀发，一副娇弱的样子，让人怜惜……老婆：呸！呸！呸！把头发“吹”出去，然后对我说：老九，你是不是老毛病又犯了？看那呢？',
    '单身久了真的会得病，昨天女上司的闺女来公司实习，一身米色工装亮瞎了我的眼，整整一天，我的眼睛就没离开过她，做事也心不在焉的。女上司来到我面前敲了敲桌子，问我：“发什么呆呢？下午把策划案交上来。”我看看女上司，又看看她闺女，鬼使神差的答应了一声：“妈，你就放心吧，保证完成任务！”唉，不说了，今天刚上班就被调到后勤做保洁了，也不知道啥时候是个头？',
    '一个非常冷的冬天，早上一老一小两个乞丐去乞讨， 他们走到一家餐厅门口等老板扔剩饭。功夫不负有心人， 不一会老板就拿一桶剩饭出来了，小乞丐连忙上去吃， 而老乞丐却站在旁边不动。因为天气很冷，饭很凉， 乞丐吃了几口就胃难受，所以就吐出来！ 这时，老乞丐冲了上去，很感动的说：“就等你这口热的了。”',
    '儿子因为顶嘴被老公狠狠削了一顿，一个人躲在房间里哭。我进去想开导开导他，不料他突然开口问我：“妈，你前男友叫什么名字？”我诧异：“问这个干嘛？”他抽噎着说：“我觉得他应该才是我的亲爹，我就想知道我亲爹姓什么？”',
    '我如愿以偿追到了全班女生公认最帅的帅哥。这天，我在寝室里对闺蜜说：“大姨妈没来，是不是怀上了他的种？”闺蜜白我一眼，说：“不可能，除非你脚踏两只船。”',
    '老婆生了个胖小子后，渐显富态，脾气也大了，每逢吵架，就往娘家跑，做起大小姐来。次数多了，丈母娘当着她的面来电责怪我：“你这是买犊还‘猪’啊！”',
    '同事甲：“好久不见了，你女朋友小美还好吗？”同事乙：“她早就不是我的女朋友了！”同事甲：“早就该这样！以前咱们一起上班的时候，我就听说她和好多男的有染！”同事乙一脸铁青，过了好一会儿才低声喝道：“她现在是我老婆！”',
    '一同事技术男，大龄未婚，一女同事家电脑坏了，拉他去修。其间，一美貌女子几次出入房间，技术男心动不已。遂问女同事她是谁？答曰：我嫂子。技术男默然。过了一会儿，不死心的问道：你嫂子结婚了吗？',
    '前段时间我被公司给开除了，老板给我的理由居然是功高震主！我心里十分郁闷，就给老板发微信：我功劳再高也是个打工的，这点您完全多虑了，我手上刚签了多份合同，我离开了那些客户也怎么办，您的损失有多大知道吗？过了一会儿，老板回道：实话跟你说吧，我媳妇越来越欣赏你了，我害怕，所以即使失去整个天下我也不能失去她！',
    '昨天晚上，我和一兄弟出去吃饭，他说：“老婆出差了，终于过上了皇帝般的生活，每天晚上都可以翻牌子！”我羡慕嫉妒恨地问：“有多少牌子可以翻？”他笑答：“洗碗、不洗碗、看电视、打游戏、聊天……一直翻到写有‘睡觉’的牌子为止。”',
    '一个月前，在网上聊了一个妹子，聊得不错，中午约出来见面。见面之后妹子上下打量了我一下说：一见你，我就知道令堂一定是位慈母！我一听顿时有些窃喜，谦虚回道：哪里哪里，请问你是如何看出来的？妹子叹了口气，幽幽的说：俗话说，慈母多败儿！',
    '前几天跟一女同事聊天，她说晚上要和聊一些小孩不知道的的事。我怀着激动的心，等着日暮。好不容易等到天黑，她竟然给我发来她孩子的寒假作业的一道题，一年级数学竟然把我难住啦，然后，我就被拉黑了！',
    '终于和女友睡在一张床上，相拥着说不完的情话。眼看夜深了，女友对我说：“不要光和我说话……呀！”我明白她的意思，起身关了灯，拥着她说：“好了，没有光了，我们继续说话吧。”.',
    '今天去应聘，到了经理那一关了。经理看了我的简历好久。幽幽的说一句，我认识你爸！我心里一喜有关系了！然后他又说就是以前上学天天打我的那个。我心里咯噔一下想扭头走呢。他接着叹了一口气说，明天来上班吧！你们说我是去还是不去呢？',
    '昨天我陪着女朋友去验血，她有点害怕。医生说：“放松点，别怕，一点都不疼，没事。”这时女友突然放了个响屁，医生说：“咋回事啊？”女友说：“我这是太放松了。”医生赶忙说：“你差点吓死我，我还以为把你给扎漏气了呢。”',
    '和男朋友出去吃麻辣烫，最后结账，服务员说：“六九七十八，给七十五吧！”我一听急了：“我们都老顾客了，应该优惠，给你七十算了。”最后只掏了七十块，男友从昨晚一直夸我到今天早上，好幸福的感觉 ！',
    '第一次去男朋友家，他妈妈请我喝茶，一直表情严肃的跟我讲三从四德，审问我的过去恋爱史。我一直微笑不语，只是茶水不经意间被我洒在桌子上，慢慢汇聚成一个房子和一辆车子的形状。然后男友妈妈默默无声的走开了……',
    '一个老外来到北京，忽然看到一大波人在涌动，便问：今天是什么节日，怎么那么多人！我说：这只是一次很小的迁徙，下班回家啊！',
    '第一次去女友家特紧张，一大家子都在，叔叔、阿姨、兄弟姐妹叫了个遍，这时又从厨房出来一位30来岁留着板寸的女的，岳父对我说：“这是你姑。”我一听是尼姑，赶忙双手合十道：“师太好！”当时姑姑脸都黑了……',
    '丑小鸭长的越来越漂亮了，鸭妈妈则非常地担心。这天，鸭妈妈拿来剪刀，要把丑小鸭的翅膀剪掉。丑小鸭不肯，问妈妈：“为什么要剪掉我的翅膀？”鸭妈妈道：“如果不剪你的翅膀，你就要飞起来了，你爸爸知道你会飞，他还不剥了我的皮？”',
    '上次高中同学给我邮寄了一箱槟榔。一哥们问我是啥，我说是湖南特产。他一听来劲了，要尝一点，好吧，我给他了。半个小时后，他居然跑到我宿舍跪在我面前，真的跪了，满脸通红，额头全是汗，只说了一句话：你给我的是啥？解药，解药给我。',
    '小明应征入伍，在一次野外求生时为了生火什么招都用上了，钻木取火手都磨出血泡也没燃起火；用放大镜对着太阳照枯叶，眼睛都照瞎了还没生起火；看着渐渐暗下来的天色，小明拿出打火机点了一根烟：难道我真的不适合当兵？',
    '我有个朋友之前混社会的，混了十五年了还是一事无成身无分文，去年金盆洗手，现在房子车都买了。我请教他是怎么发的财，他说现在扫黑除恶，一看悬赏令，有一半都认识。',
    '和同事去理发店洗头，给他洗头那个妹子挺漂亮。刮胡子的时候，正常情况都是躺着，然后闭上眼睛，可是这货躺在那里，两眼睁得滚圆，直勾勾的盯着妹子。妹纸似乎犹豫了一会儿，终于轻轻把手盖在他额头上，往下抚了抚。',
    '学姐向我借了U盘，今天拿过来还我，对我说：“你U盘好像有点问题，500G只显示200G，我帮你弄好了。”说完以后还得意的朝我笑了笑，我一脸疑惑，回到宿舍后看了一下，她居然帮我格式化了！我……',
    '男子去相亲，女方挺不错，问男的怎么来的，男：做公交。你呢？女：电动车。男子吃完饭要送她也不让送，最后2人在停车场相遇。男看看女的A6，又看看自己的X5相对一笑。',
    '老王好赌，在胸口纹了一个刺青，是扑克牌的四张A，自以为天下无敌，天天敞胸露怀上街晃荡。一天在路上看见前面一人，更牛，在脑袋上纹了个骰子！老王上去对他拍肩膀说：哥们你也喜欢赌啊？那人一回头：阿弥陀佛……',
    '男生最害怕什么样的女生1.一言不合就拿现任和前任作比较。2.身边一推男闺蜜，个个留着当备胎。3.一句玩笑话就能翻脸。4.问她什么都说随便，你做了决定后她又会生气。5.因为自己是女生，觉得全世界都得围着她转。6.看起来很清纯，其实比谁都有心机。 7.喜欢装可怜，无脑卖萌的傻白甜。',
    '有一次在XXX高速，碰到前女友在那做收费员，她认出我后没收钱就把闸给开了，说道：快走！别让领导看见！此刻车上刚好放着刘欢的好汉歌。那一瞬间我眼角的泪水随着一脚油门流了下来，内心一阵内疚和懊悔，她还喜欢我！ ！后来我上了高速公路黑名单 。',
    '小姨子出嫁，丈母娘各种不舍得，哭哭啼啼的，我安慰丈母娘，别哭了，小美嫁了以后还会回来的，说不准还给你带个外孙呢！谁晓得丈母娘悠悠的来句：别说话，不假装哭，小美以为我不疼她！',
    '老李头的儿媳妇整天在家里闹得不可开交。老李头没办法，找到媒人说：“当初你给咱娃介绍对象的时候，口口声声说是一个好女子，谁知她竟是这样……”媒人解释说：“当初我只说她是个好女子，可没说她是好媳妇呀！',
    '老公出差回来小别胜新婚，中午忍不住到卧室反锁了门。儿子敲门：“你们干嘛呢？”我说：“爸爸困了，睡会儿觉。”儿子说：“一会儿该送我上学了，你们亲够了赶紧出来。”',
    '朋友聚会，一哥们喝多了，我把他带到了宾馆房间。然后通知他老婆来照顾他。结果他老婆进门的一刻，他吼了句，给我换一个年轻的……',
    '所谓“尼姑女孩”：我都没有男孩找我聊天的！我几乎不认识男孩！也没有暧昧对象！我整个就是过得像尼姑的那种女孩！',
    '都快十二点了，我媳妇在外面玩还不回来，给她发了条微信：“你如果二十分钟还不回来，我就去我哥们家住了。”过了两分钟，我哥们给我来了一条微信：“今晚我家有人，你别过来睡了。”十分钟后我感觉好像哪里不对……不说了，我去车库找找我的板刀，你们等我好消息！',
    '我家土狗把一纯血统的博美给上了，博美家主人不服气，跟踪我家土狗到我家，找我爹理论，我爹慌里慌张的跟我打电话，我顿时就笑我爹：多大个事儿啊，爸你自己解决吧！我爹说：不是不是，你听我说，你听我说，这蛮不讲理的老头家还有个漂亮女儿呢……',
    '一个二货室友，不小心踩到钉子上了，于是去医院打破伤风疫苗，结果，第二天又踩到了，去医院问医生：我还用打疫苗不？医生淡淡的来句：不用了，有那闲钱看看眼睛吧，别老瞎么呼哧的老踩钉子。',
    '和劫匪狭路相逢，我拿起一块鹅卵石轻轻一握就捏成粉末。劫匪说：这次就算了，看得出来你手头有点紧。',
    '一个本科男找了一个女博士。春节过后情人节那天，本科男给女博士发了一个520元的红包，附言:我爱你。稍后，女博士给本科男发了一个5.20元的红包，并附言:我爱你多一点！本科男感叹道:有文化，太可怕，少花钱，会说话！',
    '我在一家美容院等我朋友下班，发现他们美容院墙上整了个大液晶屏，除了一般的宣传海报外，还滚动播放主治医生自己拍摄的世界各国风景，顿时觉得这个老板还是很良心的，至少让患者看见“你们花的钱都去哪儿了”。',
    '班上有一女生追她班一男生，整天就坐在男生那个旁边，天天花痴状看着男生，还摸男生的大腿，最后狗血的竟是那男的顶不住折磨，竟然妥协了答应了，我懂了爱情就得有一方先耍流氓的道理。',
    '和女友交往快半年了，我问她：“你对我有什么感觉？”女友：“没感觉！”于是我赶忙请她出去吃了份烛光晚餐，吃完后，我问：“现在有感觉了吧！”女友：“嗯，感觉挺饱的！”',
    '闺蜜喜欢网上聊天，有次去和男网友见面，我问她什么情况？她说：笔试通过，面试通不过。现在见网友还要考试吗？吓的我都不敢网聊了',
    '大学时有次一个男生问我要了一个女生的电话，出于好心，我特意打电话过去给那个女生，说那个男生有点花心，不要被他骗了。第二天就听说他俩在一起了，我靠！',
    '新婚夜那天，老婆含情脉脉的对我说：老公呀，从现在开始，你就长大了，不能再玩小孩子游戏了，得干大人该干的事了！我红着脸，老婆又说：你过来，我给你看看你以后经常摸到的小宝贝。然后拉着我的手，让我看洗碗刷子、抹布还有洗衣机！',
    '男友带我参加朋友聚会，大家摇骰子，猜大小！男友连输好几把，然后问我：“这把猜什么？”我一挺胸，刚要开口，男友瞄了我一眼胸，心领神会，大吼一声：“小！”尼玛！',
    '女的知道男的喜欢她非常久了，一天女问：傻小子，你喜欢我那么久了，怎么不追我呢？男：觉得没可能。女：你不追怎么知道不可能。男一听感觉有戏，于是天天在她面前献殷勤。一段时间以后男的向她表白，不料竟被拒绝了，他愤闷的问她为什么？她却冷冷的说：我就是用实际行动告诉你什么叫不可能！',
    '有次在饭店相亲，感觉人还不讨厌，没想结账时他竟然要AA制，不到100块，我直接来句： “我请客，”把账结了，心中邪火飞起。 出来后他还要去看电影，好心情全都败了，强推没去。回家后越想越气，没承想他微信发过来：“你就是我寻寻觅觅的人”， 还跟着一个红包，心中又起波澜， 娇羞的打开一看“0.52”，敢情劳资100斤的肉只值五毛二？',
    '新加了一位美女好友，怕聊多了对方烦，聊少了对方把我忘了…于是早上：姐姐早上好，美女回复：弟弟早上好。中午：姐姐中午好，美女回：弟弟中午好……到了晚上：妹妹晚上好，美女：你不是一直喊我姐姐吗，怎么变成妹妹了？我说：因为我一到了晚上就变大了，哈哈哈……',
    '妻子想让老公早回家，于是规定：晚于11点回家就锁门。第一周奏效，第二周老公又晚归，老婆按制度把门锁了，于是老公干脆不回家了。老婆郁闷，后经高人指点，修改规定：23点前不回家，我就开着门睡觉。老公从此准时回家。',
    '老师：小明，你长大后有什么理想吗？小明：我想拥有一架客机！别人都要买票，老师你不用！老师：嗯！有志气！也谢谢你！小明：然后等飞半空的时候查票，没票的，滚出去！',
    '想起我同桌，有次挺对不起他的，那次上课我来晚了，进班看见这货在擦黑板，老师又不在，我上去把他裤子脱了，又来了一脚，我在那哈哈大笑，我永远忘不了最后一排做的班主任校长还有来听课几个老师的眼光。',
    '昨晚喝醉了，拿起手机，对微信里43个女微友发去一条同样的信息“我爱你”，然后就断片了。今早酒醒了一看，40个骂我不要脸；一个把我拉黑了，这人是高中时的班花；一个叫我上班后去她办公室谈谈，这人是我单位的女主管；还有一个给我转了1000块，说没钱用了就说这三个字，这人是我妈！',
    '现在的父母为了增加孩子记忆力，会买蓝莓、深海鱼、菠菜、全麦面包、燕麦….给孩子吃。以前可没那么麻烦，爸妈只需要给两巴掌，我们就会永远记得了！',
    'A：“常听人将老婆说成“太太”，我结婚后终于悟出了其中道理。”B：“悟出了什么道理？”A：“我烧菜多放几粒盐，她说“太”咸；少放几粒盐，她又说“太”淡；买楼盘底层嫌“太”潮湿；买高层又嫌“太”累；每月工资交给她又说“太”少了……”',
    '宿舍有一室友，每次周末都能一觉睡到下午。我那天问他，有什么力量能让你这么能睡？他回我：我每次醒来都会在心里问自己两个问题，你有钱吗？还有几块钱？通常这样一下子就能激励到自己，然后为了省下一顿饭钱而勇敢地继续睡下去。',
    '生活中你遇到哪些让人恨到咬牙切齿的男生？那年我上班的医院来了个男医生，刚混熟，每天夜里8点，他准时会打来电话，先从医院正事开始，不得不接，后面就叽叽喳喳的说些生活小事，中间还掺杂些小笑话，一聊就是两三个小时。时间长了我有些不耐烦，就放茶几上不接，好事的老妈笑嘻嘻的去按接听键：找我女儿吗？她就在旁边，小美，电话！为此我故意停了几次机，他竟然直接给我充了话费。 痛苦的日子过了两个多',
    '公司一妹子，和男友谈恋爱四年多了，今天特然把自己头发染成青色的，设计小吴问她怎么染成这颜色，不怕男友有想法吗？她说：别提了，提起他气死了，他就是个渣渣，跟我从大学就是男女朋友。昨天才发现，他同时跟我俩闺蜜暖味也就算了，关键是昨天居然有个小靓妹找上门了。昨天问他为啥这样对我，他竟然说是有个准备，谁要的彩礼少就娶谁。我算看透了，染个青青草原的头发，谁出的彩礼多我就嫁给谁了！',
    '有一个小女孩，她独自在大街上，不停的叫卖着:“卖核弹，卖核弹，谁要买一个核弹？”但是并没有人理她，小女孩感觉浑身都冻僵了，她想奶奶了，于是点燃了一颗核弹，于是，这个城市的人都见到了她奶奶',
    '办离婚证的时候，工作人员问一对夫妻：你们是自愿离婚吗？女的说：是。男的说：不是。工作人员问男的说：那你怎么还来了？男的说：我是被别人强迫拉来的。女的说：别废话。男的就默默不作声了。',
    '朋友在一家居商场做销售。 今天来一大姐说要买一款钟，落地的那种，说要放厕所 朋友不解问：“为什么要放厕所？” 大姐特别有学问地说：“我要做到有屎有钟。”',
    '前几天把车停在宾馆门前去超市买东西，等出来的时候，一辆宝马挡住我的车，贴得很紧！我看车上有挪车电话，就打了过去，是一男的接的，我叫他挪下车，他说是他媳妇开的，还问我停哪了？我说宾馆门前。他反问：“宾馆门前？哪个宾馆？” 我如实说后才反应过来，完了，我闯祸了！赶紧把旁边的电动车挪开，赶紧开溜……',
    '小棉袄两三岁，喜欢小动物。第一次给她买了两只仓鼠，不到三天就全踩死了。第二次，给她买了小乌龟，本以为踩不死，没想到她将乌龟扔到汤锅里。后来，我又给她买了一只刺猬，闺女从此再也不吵着要小动物了！',
    '朋友送了一只整羊，得切碎了放冰箱，我找了斧子砍刀，半天不知道怎么办！ 媳妇学医的，拿起把尖水果刀，一会功夫分成几大块，再一会骨架子和肉都分出来了。 我很是佩服，这时媳妇来了句：“你要敢做对不起我的事，这就是你的下场！” 我一晚上没睡好，总觉得背后凉飕飕的……',
    '今天在街上看见一女的，总感觉认识，可是总是想不起来是谁？晚上回家的时候看见老婆，忽然反应过来是自己老婆，她早上没化妆出去了！',
    '我暗恋一姑娘很久了，于是借机找她帮个忙。事成之后我说：“我该怎么感谢你呢？我娶你吧。”姑娘仔细看了看我，说：“你怎么能恩将仇报呢？”',
    '二爷爷在村口有个菜园子，离家不远，二爷爷说菜园子旁有人乱扔垃圾和随地大小便，臭的很。那次去帮二爷爷浇菜，看到菜园子旁竖一牌子：在此处随地大小便者，拉肚子一周，在此处乱扔垃圾者，一年买奖不中。正感慨二爷爷如此幽默时，发现牌子下面还有一行小字：正是因为拉肚子，不得已才随地大小便的嘛，见谅见谅！',
    '一个人无聊逛商场，巧遇前女友挽着男友，想假装没看见擦肩而过，结果前女友和她男友把我拦住，各种言语挑衅，轻视！哎！这是何必呢？于是我无奈的对着前女友说：儿子最近老是念叨想你，希望你有时间去看看他，然后就头也不回地走了……',
    '哥们谈得有个女朋友，但有人说要给他做介绍时，本着结婚前多几个选择的心理还是去了，见面一看，竟然是她女朋友，两人大吵一架……现在哥们可以放心去相亲了！',
    '公司的数据库突然坏了，报一些稀奇古怪的错误代码，公司没人能搞定。老板很着急，把我叫到办公室说：“你赶紧在招聘网站发布一个DBA职位，年薪50万……”我大吃一惊：“50万?”老板点点头，接着说：“你负责面试，就问他们怎样恢复我们的数据库，切记，不管他们能不能答出来，都把他们拒绝了！”',
    '经过一个配钥匙的小摊，听见一MM问老板：“老板，可以配钥匙么 ？”老板答：“可以啊。”然后，MM呆站在摊前，老板望着她，长时间的沉默…沉默 ……最后老板忍不住了说：“钥匙呢？”MM：“钥匙？我有钥匙干嘛还来找你配？” 老板： 。。。',
    '坐公交偶遇帅哥，他问我有没有零钱？我说没有。第二次，我们又偶遇，他问我有没有电话，刚好我没带，再次说没有。我跟闺蜜说了，闺蜜骂我傻子，下次遇到了，不管问什么都先说有。 第三次偶遇帅哥，他居然不搭话了，我故意踩了他两下。他回头问了一句：“你是不是有病啊？”我居然微笑的使劲点了点头，然后就没有然后了，我感觉我的智商要让我绝后……',
    '前段时间失业在家待着被老妈唠叨不说，饭菜也越来越咸，我：“炒菜别放太多盐，咸了对身体不好！”老妈桌子一拍眼一瞪：“知道闲了对身体不好，你还不赶紧找工作去？”我……',
    '我姐有个宝贝儿子特别的淘气，昨天被我姐暴揍了一顿。他哭着抽泣说：“等我长大了我就……”还没等他说完，我姐就插着腰打断他“呦，小伙子你反了是吧，等你长大了怎么样。”小家伙被我姐吓到了哆嗦的说：“等我长大了也生个儿子使劲地揍他。”',
    '在路边发现一美女哭泣，热心的我去询问情况，原来是被她男朋友打了，我就安慰她几句，然后她就开始向我诉苦，我越听越气愤，世界上竟然还有如此禽兽不如的男人！我拉着美女大声说：“走，去我家，我帮你报复他！',
    '去宠物店给狗狗剪毛，问老板多少钱，老板说100元。我大惊：“卧槽，我剪个头发才20，你们这也太贵了吧！？”老板说：“它敢吃屎你敢么？”我不服：“我要是敢呢？”老板说：“那我给你剪也收100！”',
    '昨晚鼓起勇气约了女神：“晚上请你去看电影呀？” 谁知女神对此并不感冒，她竟然更想去见我家长，这不是明明白白暗示我已经跟我确定恋爱关系了吗？一想到这，我心花怒放，挂了电话甜蜜地回想着她刚才的回答：去看你妈！',
    '一直怀念初中和班花女神没捅破的爱情。今年四十多岁了，还没结婚，亲戚朋友到处为我安排相亲。一天，家人打电话说安排了一个相亲，我屁颠屁颠跑去看到女孩竟然就是我的初中暗恋女神！我激动的脑袋发热，支支吾吾的问道：“你还好么？”她低着头道：“就是你要跟我女儿相亲？',
    '高中时，我的几个朋友都给自己树立了梦想，有人想当科学家，有的人相当医生，而我的梦想是回家种田，后来他们的梦想都没实现，只有我实现了……',
    '记者：“大爷，请问您长寿的原因？”老人：“我从不喝酒，不吸烟，早睡早起！”这时隔壁传来摔砸东西和叫骂的声音。记者：“怎么回事？”老人：“我父亲，他是个烟鬼，天天酗酒，一没有酒就骂人！”',
    '昨天叫了外个卖，等了一个小时都没送到，就打电话质问外卖小哥。电话那头沉默了一下说：哥，我是个辍学的学生，今天头一天上班，6块钱的配送费，我找了你一个小时了，赚钱太难了。我想回学校去读书了，你的外卖我现在就吃了。你投诉我吧！我。。。。。',
    '“快起床，懒虫！你看，太阳都起床了，你还睡！” “太阳六点钟就睡觉了，我十点钟才睡。”',
    '刚刚和舍友一起去打开水，回来的路上听到暖瓶吱吱的响。我说：“不好，要炸了！”这哥们嗖的一声把暖瓶扔了出去。只听嘭的一声，果然炸了。这哥们心有余悸的的说：“幸亏我仍的快，不然就炸到咱俩了！”',
    '喜欢一个人千万别怂，一旦决定了，就上前去亲她。她要是喜欢你，肯定不会推开你。她要是不喜欢你，也不打紧，毕竟你亲都亲了，又没吃亏……',
    '前阵子出门太急，开车快了点，不小心刮倒一老太太，赶紧下车说到：“姐姐你没事吧？”老太太爬起来拍拍衣服说道：“小伙子嘴巴真甜，姐没事，你走吧!”反应快活得才轻松啊。',
    'A:我在38岁实现了财务自由、提前退休。 B:你是怎么做到的？ A:秘诀竟是低物欲、不消费。 B:。。。',
    '3月8日，巴菲特：我活了89岁，只见过一次美股熔断。 3月9日，巴菲特：我活了89岁，只见过两次美股熔断。 3月12日，巴菲特：我活了89岁，只见过三次美股熔断。 3月16日，巴菲特：我活了89岁，只见过四次美股熔断。 3月18日，巴菲特：我太年轻了…… 美股只在1997年10月27日出现过一次熔断，当天道琼斯工业指数暴跌7.18%。而3月9日以来，美股在短短10天时间内4次',
    '顾客：“我想买本书，里面没有凶杀，却暗藏杀机；没有爱情，却爱恨难舍；没有侦探，却时时警惕……你能给我介绍一本吗?”店员：“《股市行情》。”',
    '有个记性不好的人乘火车，列车员前来检票时，他竟找不到票了，急得满头大汗。列车员说：“找不到就算了，再补张票好了。”他说道：“这怎么可以，找不到那张票，我就不知道我要去哪里了！”',
    '床铺晃动了一下，瘦老公一激灵爬了起来。 瘦老公：“老婆，快起来！地震了……” 胖老婆：“死鬼，哪里有地震？是老娘翻身了！”',
    '媳妇在某高速服务区，不小心把钥匙锁车里了，打电话给我，远水解不了近渴，我也没办法，就让他她砸一块最小的车玻璃……结果几分钟后媳妇来电：喂！老公，后视镜我已经打碎了，车门怎么打开？ 女子无车便是德 哈哈',
    '在4S店里提了一辆劳斯莱斯，办手续时等的实在是有些无聊就点了雪茄。销售经理走过来说：“先生，这里不让抽烟。” 我站起来，往前走了两步：“这里呢？”销售经理：“也不行。”我又走了几步，试探地问：“这里行了吧？” 销售经理：“还是不可以。”沮丧的我往左挪了几步：“这里也不可以吗？”销售经理：“你都抽完了还问我！”',
    '一天和老婆开玩笑，儿子也在。老婆说儿子，你爸经常出差，说不定你外面有弟弟妹妹呢。我说：还有哥哥姐姐。老婆：儿子你听见了吧，你在外有哥哥姐姐，你爸在外有小三！儿子头也没抬说：老妈你有没有搞错，如果我有哥哥姐姐的话，你就是小三了好不好！',
    '壮壮：小时候家教非常好，每次出门都会扯嗓子喊一句，妈我走了。等我妈应声之后，我才走。结果有一天我妈没睡醒，我喊了一声，妈，我走了。没回应。接着喊，妈，我走了，又没回应。接着又喊，妈我走了！我妈爬起来，冲门口。上来一句，滚！我，踏实的走了……',
    '哥们给介绍一对象，见面前特意叮嘱要穿好一点，我问他怎么穿好一点？他说穿最贵那件。第二天我穿着我那件波司登羽绒服就去了，结果那女的见了我转身就走了，我都没整清状况，这么热的天，我热得跟狗一样，你倒好，招呼都不打就走了，也太没礼礼貌了吧？',
    '男孩得意地对女孩说：“老婆，我涨工资了，月薪六千了。你干脆辞职安心待家里做全职太太吧！我养你！！！”女孩摇头，男孩生气地指责女孩：“女人结婚了，就要待家里相夫教子。”女孩沉默不语，看了眼化妆台上那瓶两千多的眼霜……',
    '网上买了个东西，想着捉弄一下快递小哥，收件人写的皇上，终于来了，对着快递小哥等他说：“皇上，你的快递。 ”想不到的是他问：“拿谁的快递？”我只能说：“拿皇上的。”快递小哥给我来了句：“哦～公公好年轻啊！”​',
    '刚刚在街上看见前面一美女钱掉了，我上去拍了拍美女说：美女你钱掉了。美女没理我。我又拍了拍她说：美女你钱掉了。美女还不理我。我刚想再拍她的时候。美女回过头冲我吼到：一块钱我不想捡！你再拍我屁股，我报警了！！！',
    '从前有个穷学生，买不起灯油。他的隔壁住一对新婚夫妇，昼夜烽火灯火通明，他就在墙上凿了一个洞，从此学业荒废，一蹶不振…',
    '女：你做什么工作的？男：关于治理环境污染方面的工作。女：这工作好啊！能不能带我去你单位参观下？男：可我们单位不能免费进啊。女：那我掏钱行了吧？进去一回多少钱？男：大号一块，小号五毛……女：尼玛，扫。。。扫厕所的啊……',
    '父亲问在风景区当保安的儿子:“听说你们那里的山很高，你说说看，到底有多高？”儿子想了下说：“有次，我们组织打篮球，篮球从山上滚到了山沟，经理特地派了两个保安，打着背包、带着干粮下山去检篮球了。”',
    '昨天下雨，内裤没晒干，索性就没穿内裤跑去上班，正好坐在电梯里遇到女领导，电梯里就我两个人，女领导一本正经的说：你今天没穿内裤吧？我心想领导果然有先见之明便说：您不会有透视眼吧？领导说：不，你的裤链没拉…',
    '曾经有个小屁孩，考试只考了18分。然后他拿红笔添了一横，变成了78，一看这78不够拉风啊，又在7的上面多加了半圈，然后就变成了98。拿回家给他妈看，他妈妈说:“这么明显的改动，你以为我看不出来其实你只考了78分！”',
    '一个女孩打开家门，发现门口竟然有条死鱼，她感觉十分晦气，于是马上把它装垃圾袋扔了。过了一天，又有一条鱼躺在门口，她还是把鱼扔了。为了抓住了那个恶作剧的人，她选择第二天待在不远的楼梯口盯着。不久，一只猫走了过来，把嘴里的鱼放在门口，有些不舍的离开了。她看到那只自己曾经救过受伤的猫，眼睛湿润了……——也许你不喜欢，也许你不需要，可是它已经给了你它认为最好的东西',
    '一次去银行存钱，职员说：“存10万以上需要身份证。” 在一摸口袋，发现自己没带身份证，我说：“忘带了，你就通融下吧！” 银行说：“不行！这是规定！10万以上必须要身份证！” 我说：“那就存99999.9元。” 银行：“……”',
    '有位客人点了一只北京烤鸭，服务员端上来后，客人在鸭嘴上舔了一下说：“不对，这是只南京鸭。”服务员忙换了一只，客人舔了一下鸭嘴说：“不对，这是只湖北的鸭子。”服务员又换了一只，客人又舔了一下鸭嘴说：“还是不对，这是只广东鸭！ ”这事惊动了饭店老板，老板非常激动地跑出来，把嘴凑到客人面前说：“我从小就是孤儿，不知道自己是哪儿生的。麻烦您也舔我一下，看看我是哪儿的人。”',
    '我一同事下班找我单挑军棋，我自信的接受了。跟他打来打去，最后我能动只有一个师长，他能动的只有一个团长。后来，那团长直接吃了我的师长，我说你开挂啊！哪有团长吃师长的！他淡淡地说：“这个团长叫李云龙”我：“……',
    '老爸在做饭，厨房里面没盐了然后就给了老弟十块钱。你去看看对面超市有盐没！过一会老弟回来手里面拿着瓶可乐和一些吃的说 爸超市里有盐！',
    '一个很胖的女人好不容易挤上了公交车，找不到座位，只能拉着车上的拉环，不料司机一个急刹车，胖女人把拉环拉断了，并一下子扑到了司机面前。司机看着她和她手上握着的拉环，没好气的说：“ 这是这个月你第五个了！再这样我工资就被你拆光了 ！” 瞬间，车厢里一阵爆笑……',
    '小侄子放学回来愁眉苦脸，我问他咋了。他说：“考试了。”我嘲笑他：“考试有什么大不了的。”小侄子白了我一眼大吼：“说得轻松，好像你考完不用挨打似的！”',
    '有个讨厌的同事跟我借车，我说坏了。然后她提出借相机，我说坏了。她又提出借iPad，我说也坏了。她很激动地质问道：“你怎么什么东西都是坏的！”我耸耸肩说：“因为男人没有一个好东西。”',
    '昨晚公司加班，和女主任为工作的事发生了争执，闹得不欢而散，回到家心里一直不痛快，老婆问我咋了，我说没事，她一脸狐疑地看着我。今天早饭，女主任发了个语音，因为吃饭，我打开了声音，只听她说：大家都是成年人了，昨晚的事就算了，就当什么也没发生，妻子没听完，一盘豆角就扔向了我的脸',
    '第一次去女朋友家，她家住十八楼，刚好那天电梯坏了，我只好爬楼梯上去。累的我满头大汗，敲门后开门的是她妈，我气喘吁吁的叫了句：阿姨好！紧接着双腿不听使唤一下就跪在她妈面前……',
    '我开了一个包子铺，昨天，和别人吵架，那人放狠话：“你等着，明天让你好看。” 今天上午，来了一个大汉，大金链子墨镜，买了十块钱包子，我给他装好包子，那人不走。 恶狠狠的问我：“你以为，这样就完了吗？” 我害怕，假装糊涂，又给了他两个包子，大汉又说话：“这样就完了吗，你是不是忘了？” 我：“大哥，忘什么了？” 大汉：“谁家卖包子不给几头大蒜！”',
    '老公：你说我是A型血，你是B型血，孩子却是O型血是怎么回事？老婆：这都怪你！孩子出生你也不在身边，当时孩子生下来体弱贫血，必须输血，好心的邻居大哥给输的血，孩子才抢救过来！',
    '大学毕业那天，一直单身的舍友居然带了女朋友来看拍毕业照，而且非常非常的漂亮，大伙都向他投来羡慕嫉妒恨的眼神。我问：“有什么秘诀？教下我！”他回了一句：“300”。',
    '高中快毕业时，全班都在笑呵呵地写通讯录。老师冷笑：“都别写了吧，以后混得好的，不会联系你，混得差的，也不想被联系，关系好的，不写也联系，关系不好的，写了也不联系，有那时间不如多做几道题。”全班脸都青了…',
    '西餐厅吃饭，看到一个妈妈带着一个三四岁的小女孩，汉堡好了之后，妈妈趁小女孩没注意把里面的肉吃了，然后把汉堡递给小女孩。小女孩吃了几口觉得不好吃。。。她妈说：不好吃吧，就说它不好吃，广告里那都是骗人的，以后还吃吗？小女孩：不吃了。。',
    '“我想和丈夫离婚！”一位美国女演员走进纽约的一家律师事务所说。“可以。”律师爽快地回答：“您给300元，我马上就给您办妥离婚手续。”“什么，要300元？”女演员大声喊道：“太贵了！我找人开枪打死他，人家才只要150元呢！”',
    '丈母娘考验仨女婿。先邀大女婿散步，过桥时突然跳下，大女婿跳水救起，丈母娘赠他广本车一辆。丈母娘又如法炮制，考验二女婿， ，也被救，受伤的二女婿获赠辆奥迪。她再试三女婿，三女婿不会游泳搭救不及，丈母娘溺水而亡。翌日，岳父赠他一辆奔驰！',
    '信徒：“大师，同事老是惹我生气该怎么办？”大师：“想吵架的时候先深吸一口气。”信徒：“是让自己冷静下来吗？”大师：“你看我”，大师深吸一口气，“你个从小缺钙长大缺爱姥姥不疼舅舅不爱左脸欠抽右脸欠踹驴见驴踢猪见猪踩小贱人再惹我信不信一巴掌拍晕你让你回家你爹妈都不认识你，哎呦，憋死我了，不深吸口气还真说不完。”信徒：……大师威武！',
    '开窗户不小心把花盆碰了下去，正巧砸在一辆豪车上。我马上蹲下，故装镇定，就当什么事也没有发生。楼下开豪车那男的大声喊道：“敢做不敢当是不是？你要是有点良心，就伸个脑袋出来，看一下我的车都被砸成啥样了。”我颤颤巍巍的把头伸了出去，说道：“喊什么呀！我…我赔你。”然后我这一赔，就是一辈子。',
    '今天我问老板：“我上个月也没迟到早退？为什么工资会比别人少？”老板：“因为别人的工资比你多，所以看起来你的工资就比别人少。”我。。。',
    '以前我问女友：“你以前找过几个男朋友？”前女友说：“你别管我找过几个男朋友，我发誓你是我最后一个男朋友。”我听后非常高兴，心里暖暖的。只是三个月后的今天她成为了别人的新娘，她确实没有骗我，我只是她的最后一个男朋友。',
    '菜点多了，跟服务员说：“看看酸菜鱼做了没？没做就不要了。”服务员满脸微笑说：“好的，我看看作没做。”她拿着耳麦：“16号桌酸菜鱼做了没？好的知道了。”放下耳麦：“不好意思已经做好了，不能退了。”我笑说：“好吧那就不退了。”过了一会儿服务员又满脸通红回来了：“你没点酸菜鱼啊。”',
    '“老板对秘书说：“开除湿机。” 正巧司机经过门口并听到了，于是他迅速返回办公室，写了辞职信递交给老板。 老板疑惑问：“为什么要辞职？” 司机悲痛地说：“长痛不如短痛，我都听见了，你说开除司机。””',
    '小时候我胃肠不好，经常放屁。有一天晚上在奶奶家睡觉，突然放了一个三四秒左右的屁。然后奶奶坐起来和我说：“快去开门，你二叔骑摩托车回来了。”',
    '我站在宝马车旁打电话。一桑塔纳倒车的时候刮了宝马车一下。我问桑塔纳驾驶员：“老弟，你咋开的车？你丫的会开车吗？” 桑塔纳驾驶员赶紧陪笑：“对不起了，老哥，我赔你1000块钱吧。”我拿着钱，等那司机走了以后，赶紧骑上我的自行车，一溜烟跑了。',
    '今天陪朋友去医院做手术（痔疮），做完后医生说：小伙子，皮.包有点长，一起割了吧！我朋友冷冷的看了医生一眼说：痔疮做了，皮.包割了，你让我接下来这个月还怎么活？我怎么感觉到哪里不对呢！',
    '今天在大街上正走着，有一家店搞周年庆，主持人叫住我指着一排金蛋说“今天我们店活动，你砸到什么，我就送你什么!”说完一个漂亮女孩递过来一个小锤，我想了想，用锤子锤了一下那女孩。',
    '和同事出差，在火车站吃面条，老板说十块钱一碗。我们吃了两碗，拿一百元给老板，找了我六十，我问老板：不是十块钱一碗吗？老板：站着吃十块钱一碗，坐着吃二十块一碗。同事不高兴了，问：我刚才就是站在店门口吃的，为什么也收二十块钱？老板：你应该站店里面的，站外面坏了我店里的形象，所以收二十块。火车站小吃太宰人……',
    '晚上回家，老婆问：π是多少？我说：没事你问我这个干嘛？老婆大手一挥说：别废话！问你π是多少！我想了想说：3·**。正背着，老婆一巴掌扇了过来说：这么多数都背的下来，今天我生日你记不住？',
    '坐火车遇到一印度人，他也闲着没事，用中文和我聊哪个国家有文化。我说中国的筷子你会用么？他说，用手抓才是最正确的吃饭方式，而且不受制于食物，啥都可以用手抓。我这个人就爱专治各种不服，到了站我就带他去吃了顿火锅。',
    '非诚勿扰，男嘉宾出来开始自我介绍。“我整天和土地打交道……” 灯灭了6个。“我没有高工资……”灯灭了8个。“我也没买房子……” 灯全灭了。孟非赶紧圆场：我觉得很多人看不起我们的农民兄弟，认为他们没钱，没房，这是一种极其错误的思想……。男嘉宾：非哥打断下，我不是农民，我是房地产开发商。',
    '一天，一只麻雀对鸽子说：“你敢去打老鹰吗？”“当然敢了”说完鸽子就飞走了，过了一会鸽子飞了回来，身上的羽毛一根也没了。 麻雀就问：“出了什么事？”鸽子说：“那小子不服气，我光着膀子揍了他一顿。”',
    '哥们收到了女友寄来的礼物，打开一看是顶LV的帽子，他若有所思的问我：“LV用中文怎么说？”我:……',
    '我爸是小学教师，他希望我长大后能有出息，能给人带来希望和光明，于是给我取名叫光明。经过多年的努力，我终于没让大家失望，成为了一名电工！对了，我姓宋。',
    '“邻居老大娘和老大爷闹离婚，我就纳闷了都一把年纪了。怎么还闹离婚，后来才知道，昨天晚上停电，老大爷和老大娘找蜡烛，后来老大娘递给老大爷一根，老大爷点着了，结果炸了……',
    '一个南方的小伙子和窦姓姑娘恋爱，到了谈婚论嫁的地步，窦姑娘突然移情别恋，小伙子恨难自抑，托物明志，每天在窗台放一块豆腐，意为“窦负”，早晨第一件事就是以额头大力将豆腐撞碎，恨意稍缓，此习惯多年不改，直到有一天，小伙子去了东北…',
    '父亲：“你知道为什么袋鼠的肚子前面有个袋子？”小孩：“我想一定是用来装小袋鼠的。”父亲：“但小袋鼠的肚子前面也有一个袋子，这又作何解释呢？”小孩：“那肯定是用来装糖果的！”',
    '老婆走丢了，去警察局报警。警察：兄弟你冷静一下，你这么一直笑，我录不了笔录啊。',
    '我养了一只会说“当然”的鹦鹉，当然呢，它只是会说当然，于是我就带上街准备把它卖掉。这时一个买主就问我了，买主：“这鹦鹉多少钱啊？” 我说一千块钱，买主：“怎么那么贵啊？”我：“因为我的鹦鹉很聪明啊”买主就问了鹦鹉了：“鹦鹉你很聪明吗？”鹦鹉：“当然！” 买主于是就买下了鹦鹉，当他发现这只鹦鹉只会说“当然”之后他很生气，气愤愤得骂道：“只有傻子才会花1000块钱买这样的鹦鹉”鹦鹉：',
    '大学招聘会，我跟一室友去应聘。面试官问他：“英语四级考过没？”他回答：“考过。”面试官：“为啥没带证书来？”他说：“没考过。”面试官：“到底考过没？”室友：“考过，但没考过。”',
    '今天和一哥们闲聊，他说他上周投资了一个几百万的项目，今天亏得一毛不剩。 我问他干啥了，一个星期就亏得一毛不剩。他从衣服兜里摸出一张纸说道：“买了十块钱的双色球。”',
    '有个同学去非洲援建，刚到工地接待他的施工员是个黑人，他就用英语跟人家交流，黑人没做声。 然后他又用法语，黑人还是没说话。 然后他用手去比划。黑人终于开口了：瞎比划嘎哈，整个工地都中国人。',
    '饿狼觅食，听见有家人在训孩子：“再哭就把你扔出去喂狼！”可是，孩子哭了一夜…第二天早晨，狼长叹一声：“哎！人类说话不算数！”',
    '老骗子收了个徒弟，学师拜艺学了十年。终于在今天徒弟要出师了。临别前，徒弟突然哈哈大笑起来。徒弟：师父，你也被我骗了，每次咱合伙骗来钱，我都会偷偷的吃掉百分之三十。 师父：臭小子，跟我比骗术，你还嫩了点。其实我们的骗术，半年就能学会，你可白白的跟我干了十年的活，哈哈。 徒弟：哈哈，师父，你以为我不知道吗？你闺女都跟我好上快十年了，以后你的也就是我的。师父：啊，你个逆徒！',
    '我深刻的记得我们隔壁家阿姨给我介绍了一个女朋友，说她是空姐，我激动了一晚上没睡好。第二天我们见了面，人真的是长得漂亮。但是一开口就问收入多少，问房子有多大，我不大爽的说：“嘿你咋不上天呢?”没想到那个空姐一笑：“我今天休假。”',
    '三年前我高考的时候成绩出来是3本的,妈妈沉默了好久最后掏出来手机,拨打了她最最要好的一个阿姨的电话:“XX啊,我跟你说,我妹子只考了三本,要多出2万8的学费啊,我以后不能跟你们打5块的麻将了,我们下次打2块的吧',
    '和朋友外出游山，结果被大雨困在了半山腰的寺庙里，幸亏方丈好心收留我们住宿。知道朋友嘴贱，我提醒他：“你可千万别在方丈前提什么秃子、梳子之类的词啊！” “你放心吧。”朋友冲我点点头，然后对方丈说：“方丈大师，您看我们都淋湿了，您这里有吹风机吗？”',
    '今天在火车上一个推销的在我旁边一个劲儿的推销他的充电宝，我拿出我的诺基亚说我不需要。他说要不给你女朋友买个吧，我斜了他一眼说：我女朋友充气不充电。。。',
    '老师：牛贵，还是鸡贵？小明抢答：鸡贵！老师：为什么？小明：九牛才一毛，鸡八毛。老师：滚！生物课上老师问：狼和狗交配后生下的叫狼狗，那老虎和狮子呢？小明又抢答：叫老狮。老师：滚出去！? 数学老师：同学们，今天我们来复习一下乘法口诀。老师：三七？小明：四妾！老师…',
    '我妈打电话问我回家过年吗？我：回啊。我妈：一个还是两个？我不耐烦的说：没男朋友，就我一个人。我妈在电话那头一下就吼道：那还不赶紧回来，回来迟了人都被挑完了！',
    '表弟游手好闲，借了一笔高利贷就跑了，放贷的天天给舅妈打电话。每天下午五点钟，舅妈准时抱着手机跟放贷的通话，天天讲她的苦难史…… 就在刚刚，舅妈在房里走来走去，坐立不安，嘴里念念有词：这怎么还不打电话过来呀，这我故事讲给谁听呀……',
    '妈妈逼迫下和她高中同学儿子相亲。见面一看，感觉有点老又不帅，于是我立马点根烟：我这人一点不好，喜欢和各种男的出去约。我们年轻人的事你别和我妈说，我当你是朋友。这时一个帅气小伙从厕所走过来，惊愕：爸，这就是和我相亲的？',
    '在大润发看到有好多大妈大爷围着米堆翻找什么呢，走近一看，原来一粒一粒挑大米呢。一位大妈说米也有公母之分，母的好吃，长见识了',
    '下班高峰，有个小伙子坐地铁，刚挤上去就发觉自己踩到了别人。扭头一看，见是一位漂亮的女孩，他忙红着脸道歉说：“对不起，小姐，我踩到你的脚了。”女孩却是一脸茫然。旁边一位阿姨开口了：“小伙子，你踩的是我的脚。”这下小伙子的脸更红了，忙对那位阿姨说：“对不起，阿姨，我踩错脚了。”',
    '单位有个同事，蒙古人。一年休假回家，假期过了好几天还不回来，领导给打电话，他在电话里说： 领导，我还在呼伦贝尔草原上骑马找家呢，我家是游牧民族，现在不知道搬到哪里去了？',
    '老板是老婆的小学同学，今天公司裁人，把我裁掉了，回家闷闷不乐跟老婆说了，老婆一听生气的说道：难道他不知道你是我老公，不行我去找他。当晚老板就发信息给我：明天你还来上班吧，你老婆那三寸不烂之舌我是服了！',
    '今天同事讲了个趣事，他哥们儿特丑总找不到女朋友，不知道听谁说的遛狗能泡到妹子。哥们儿就买了条狗整天在小区遛，几天后还真找到了个女朋友，闪婚后，那丑哥们儿问他妻子:你当时怎么就看上我了？他妻子回答:我之前在宠物店上过班，一眼就看出来了，你那狗值一百多万',
    '吃完饭走出饭店，在马路上碰到一个乞丐，竟然在用价值6000多的手机，我惊讶地问道：“你能用得起，为何还来乞讨？”，要饭的说：“给我5块钱，我告诉你。”我掏出5块钱给他。他说：“因为已经有1000多人付费问我这个问题了，这就是付费问答的魅力所在…”',
    '去年租了个玛莎拉蒂回家过年，赶上村里面修路我捐了五万。今年回去没开玛莎拉蒂，村长问我是不是生意失败了！我叹了口气没说话。然后村长就在村里组织募捐了，目前已经进账20万！',
    '坐公交车的时候，我旁边有个瘦妹子一个胖妹子，胖妹子问瘦妹子：“你的双眼皮哪儿做的？”瘦妹子说：“天生的。” 接下来瘦妹子惊讶地问：“你的双下巴哪儿做的？真漂亮！ ”胖妹子很淡定地说：“吃肉送的。”.',
    '去年春节去岳父家拜年，大舅哥给我递烟，我说我不抽烟，他就说“你一个研究生，怎么连烟都不会抽！”。然后进厨房给岳母帮忙包饺子，结果半天都没包好一个，岳母就说“你一个研究生，怎么连饺子都不会包！”吃饭的时候，岳父给我倒酒，我说不会喝酒，结果岳父就说“你一个研究生，怎么连酒都不会喝！”唉！我现在很后悔考研。',
    '一只皮球破窗而入，进了穆勒太太的厨房，不久，一个小孩来按门铃说：我爸一会儿就来给你装新玻璃。果然不错，一个男人走上台阶，穆勒太太把皮球还孩子，孩子走了。那人把玻璃换好后说：十块钱。什么?你不是他的爸爸?穆勒太太问。什么?你不是他的妈妈?',
    '本人幼师。最近一调皮小男生表现良好，我给他爸打电话表扬他，他硬说我看上他爸爸了，要当他后妈，我没在意。结果没几天，他找我请假，张嘴就是：“妈，我要请假！”我……',
    '有一天，两姐妹在睡觉 妹妹对姐姐说：姐今天蚊子好多哦～ 姐姐说：把灯关了蚊子就看不到我们了 后来妹妹真的把灯关了 忽然间一双萤火虫飞了进来 妹妹很紧张的说：姐惨了，蚊子提着灯笼来找我们了…',
    '有一医生哥们是个肛肠科大夫，一次聚会问他为啥选择了这么个科室，哥们叹口气说道，那时还在转科，一次和医院里几个老大夫吃饭，遂打探医院哪个科室挣钱多，有说外科的，有说骨科的。这时医院一位德高望重的老主任说：屁！眼科最挣钱！于是哥们最后选择了肛肠科。PS：没听清害死人啊！',
    '小张想捉弄一下同事小敏，就说：“你信不信，我可以不用嘴，就能亲到你的嘴。”小敏瞪大了眼睛说：“我不信。”小张说：“我们赌10块钱。”小敏同意了。小张起身走到小敏面前，用嘴亲了一下小敏的嘴。小敏顿时傻眼了：“你不是说不用嘴吗？”小张说：“是啊，所以我输了。”说完，他拿出10元钱递给了小敏。',
    '一天在天桥下乞讨！遇到一个美女。“可怜可怜，给点钱吧！”美女看了看我，从钱包拿出一百块。 “我靠，这是要发啊。”又拿出一百！ “我靠，大款啊！”又拿出一百！！ “我靠，土豪啊！！！”又拿出一百！ 我都激动的不知道说什么了！ 美女突然说话了“记得钱包里有一张一块的，怎么找不到了！ 算了，还是下次再给吧！”',
    '前天在东外滩，我支好相机坐在阶梯上，等待合适的光线。这时一个乞丐来我边上乞讨，我就给了他1块钱，然后继续调试相机。他可能生意不好，就无聊的看看我在干什么。然后过了一会，他幽幽地说：你用区域曝光法好些……',
    '高三快毕业了，老师带着同学来到操场，说：“快毕业了，你们把想干的事都现在干出来吧。”顿时，台下表白拥抱亲嘴样样都有。突然，我的同桌大叫一声qnmd，一脚把老师踹开三米远。人们都惊呆了。现在，听说他还没有毕业……',
    '圣诞节是年轻人追捧的新兴节日，年轻人最大的刚需是谈恋爱。有对象的年轻人直接发合影和礼物照片，狂秀恩爱，满满恋爱铜臭味。而单身狗也要刷一波存在感，可以发一条带有撩骚意味的土味情话。 一、撩骚版 1、圣诞老爷爷您好，我把床暖好了，您可以把我喜欢的人塞我被窝里了，谢谢。 2、可爱的圣诞公公，我不要糖，我不要巧克力，我不要新衣服，你在圣诞夜把我的爱人放在我的大袜子里吧，注意头',
    '高中时，情人节那天晚上。我和男朋友出去玩，回家晚了点。轻手轻脚打开家门，老爸已一脸严肃的坐在厅里，叫住我就是一顿骂。几分钟后，我哥也鬼鬼祟祟的回来了。我暗暗偷笑，我哥回来分担火力了。老爸抬头看我哥一眼：“回来了？真没用！”',
    '警察在街上抓住了一个阿拉伯毒贩。因为语言不通。请了一个翻译。进行逼供。警察问告诉我500万赃款你藏在什么地方！再不说我就一枪打死你！翻译转述给了囚犯囚犯急得大喊我说！！我说！！我就藏在我车子的座位下面！翻译他说有本事打死我啊。我死也不会说的。',
    '老师：“小明，回答一下什么是四通八达。” 小明：“老师应该是三通一达才对，中通，圆通，汇通，韵达。” 老师：“滚出去。””',
    '唐僧师徒来到女儿国，见到一户比较贫穷的人家。 唐僧：女施主，贫僧是从东土大唐而来，去往西天拜佛求经的和尚，路过此地，想借一碗斋饭，填填肚子。 女人道：好好好，长老想吃点什么？ 唐僧：蒜泥黄瓜。 女人：这，长老，黄瓜我家没有啊~ 唐僧：那就红烧茄子。 女人：也没有。 唐僧：那萝卜丝呢？ 女人叹道：长老您是不知道啊，我们女儿国没有男生，所以这黄瓜，茄子什么的，都是天价啊~',
    '今天在水果摊买水果，和同事聊今天的新闻，卖水果的大婶问：乔布斯是谁啊?同事说：卖苹果的。大婶很黯然说：唉，水果生意不好做啊！',
    '研一，我研究生导师看我单身，分配了一个单身的学妹让我去带。 研二，老板看我还是单身，于是又分配了一个单身的学妹让我去带。 又一年过去，研三，我，剑圣的跳刀，手下师妹无数，仍旧单身，于是我老板…… 给我分配了一个单身的学弟。',
    '话说小王租了一间房。租期一年。才住了半年。房东就要将其赶出去。小王跑过来问缘由。房东说：“这个房间旺桃花，将来我得给我儿子住。“小王分辨说：“我都住了半年了也没找到女朋友啊。“房东说：“我就是怕你坏了风水。”',
    '“大学期间有一回去食堂，我对食堂阿姨说“拿两个馒头。” 阿姨说“没有馒头。” “那就拿两个豆腐饼吧。” “有豆腐包。” 我说“哦，那就拿两个豆腐饼吧。” 阿姨给我拿了两个馒头！”',
    '和同桌抽烟被班主任抓住了，同桌被打的半死，我却没事，我私下问班主任为啥把我同桌收拾的那么惨，班主任：“他抽的烟和我那天我家衣柜里的烟味一样！”我：确定么？”班主任说肯定啊，然后他为了证明，拿出十几种烟让我轮流抽了起来，他闭上眼睛说牌子！',
    '在公交车上，一女孩腿不舒服，没给大妈让座，大妈开始骂那女孩，说话很难听，冷嘲热风的。说人家没出息，嫁不出去怎样的，还说女孩爸妈没教好她，都怪父母教育程度低怎么怎么的……我听不下去了，趁人多的时候，我把那个大妈的钱包偷了。',
    '公园有花坛，花坛上有个牌子，牌子上写：“踏入花坛者，罚款3元！”据说看花坛的老爷爷每天都会向花坛里扔个一元的硬币。。。然后每天都会有人被罚3元钱。',
    '儿子这次考试考了第二名，我问他：“成绩怎么下降了呢？” 儿子说：“经过计算，我考第二名比考第一名划算。” 我一头雾水地问：“究竟怎么回事？” 儿子说：“我考第一名，你只奖励我100块；我同学考第一名，他爸奖励他1000块，他答应分一半给我。”',
    '法官要劝一位老太太打消离婚的念头。他说：“您都九十二岁了，您丈夫也九十四岁了。你们结婚七十三年，为什么还要离婚呢？”“我们的婚姻早已破裂多年，”那位太太说，“只是为了儿女，才决定等到儿女们都死了再说。”',
    '去小卖部买东西，买完了，喊一声：“大姐，结帐。”那大姐噗噗笑了，指了指一个二十多的美女说：“我女儿都这么大了，你该叫我什么？”我说：“妈！',
    '一个中年妇女找大夫看病，可能是她为了显示自己年轻，当大夫问她年龄的时候，她说：“哦已经满20了。”于是，医生在病历卡上写道：“失去记忆力。”',
    '当你心情不好的时候，你应该跟社区的大妈们聊天，不出一分钟你就知道哪一栋哪一户的人比你过得还惨，瞬间就不那么难过了！',
    '昨天和兄弟在一个考场考试。看着空白的试卷和流逝的时间，心中一片茫然。突然兄弟趁老师不注意飞来一张纸条，我那个激动呀。各种藏，就怕老师看见。颤抖地打开一看，写到：中午吃啥？',
    '小孩问妈妈：为什么苍蝇贴纸上已经粘了很多苍蝇，还会有苍蝇会去站上面呢？ 妈妈：如果大街上很多人围着，你会不会上去凑热闹。。。',
    '那一年，他用6000元买苹果5，而我用6000元摆地摊。一年后，他用6000元买苹果5s，而我有了6万元，开了家小店。两年后，他用6000元买苹果6，而我有了自己的公司。三年后，他用6000元买苹果6s，而我有车有房有存款。如今，他用6000元买苹果7，而我，四处躲债，亡命天涯。',
]

module.exports = function getRandomName() {
    var index = Math.floor(funnys.length * Math.random())
    return funnys[index]
  }
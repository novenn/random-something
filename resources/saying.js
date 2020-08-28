const contents = [
  // 论语
  '知者乐水，仁者乐山。',
  '志当存高远。',
  '言必信，行必果。',
  '人而无信，不知其可也。',
  '鞠躬尽瘁，死而后已。',
  '敏而好学，不耻下问。',
  '君子坦荡荡，小人长戚戚。',
  '自行束修以上，吾未尝无诲焉。',
  '己所不欲，勿施于人。',
  '学而不思则罔，思而不学则殆。',
  '业精于勤，荒于嬉；行成于思，毁于随。',
  '三军可夺帅也，匹夫不可夺志也。',
  '温故而知新，可以为师矣。',
  '人生自古谁无死，留取丹心照汗青。',
  '君子喻于义，小人喻于利。',
  '不学礼，无以立。',
  '先天下之忧而忧，后天下之乐而乐。',
  '笃信好学，守死善道。',
  '父母在，不远游，游必有方。',
  '人无远虑，必有近忧。',
  '逝者如斯夫，不舍昼夜。',
  '学而时习之，不亦说乎。',
  '不在其位，不谋其政。',
  '欲穷千里目，更上一层楼。',
  '知者乐水，仁者乐山，知者动，仁者静，知者乐，仁者寿。',
  '穷且益坚，不坠青云之志。',
  '未知生，焉知死。',
  '不患人之不己知，患不知人也。',
  '学而不厌，诲人不倦。',
  '工欲善其事，必先利其器。',
  '成事不说，遂事不谏，既往不咎。',
  '人背信则名不达。',
  '道不同，不相为谋。',
  '君子和而不同，小人同而不和。',
  '德不孤，必有邻。',
  '父母之年，不可不知也，一则以喜，一则以惧。',
  '人无忠信，不可立于世。',
  '巧言令色，鲜矣仁。',
  '默而识之，学而不厌，诲人不倦，何有于我哉。',
  '都说人往高处走，可是高处不胜寒，水往低处流，谁知低处纳百川。',
  '君子坦荡荡，小人常戚戚。',
  '吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎。',
  '君子食无求饱，居无求安，敏于事而慎于言，就有道而正焉，可谓好学也已。',
  '士不可以不弘毅，任重而道远。',
  '举直错诸枉，则民服；举枉错诸直，则民不服。',
  '君子周而不比，小人比而不周。',
  '爱之欲其生，恶之欲其死。',
  '君子泰而不骄，小人骄而不泰。',
  '不愤不启，不悱不发，举一隅而不以三隅反，则不复也。',
  '志士仁人，无求生以害仁，有杀身以成仁。',
  '今之孝者，是谓能养，至于犬马，皆能有养，不敬，何以别乎。',
  '马之将亡！其鸣也哀！人之将死！其言也善。',
  '四海之内皆兄弟也。',
  '仁远乎哉？我欲仁，斯仁至矣。',
  '欲速则不达，见小利则大事不成。',
  '文质彬彬，然后君子。',
  '博学而笃志，切问而近思，仁在其中矣。',
  '自古皆有死，民无信不立。',
  '巧言乱德，小不忍则乱大谋。',
  '君子一言，驷马难追。',
  '父在观其志，父没观其行；三年无改于父之道，可谓孝矣。',
  '父母，唯其疾之忧。',
  '温、良、恭、俭，让。',
  '已矣乎！吾未见好德如好色者也。',
  '三人行，必有我师焉，择其善者而从之，择其不善者而改之。',
  '不迁怒，不贰过。',
  '有朋自远方来，不亦乐乎。',
  '发愤忘食，乐以忘忧，不知老之将至。',
  '学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎。',
  '事君尽礼，人以为谄也。',
  '君子疾没世而名不称焉。',
  '不学诗，无以言。',
  '夫人不言，言必有中。',
  '事父母，几谏，见志不从，又敬不违，劳而不怨。',
  '人之过也，各于其党，观过，斯知仁矣。',
  '苟志于仁矣，无恶也。',
  '色难，有事，弟子服其劳，有酒食，先生馔，曾是以为孝乎。',
  '人而不仁，如礼何？人而不仁，如乐何。',
  '君子欲讷于言而敏于行。',
  '学如不及，犹恐失之。',
  '邦有道，危言危行；邦无道，危行言孙。',
  '先行其言而后从之。',
  '温故而知新。',
  '以直报怨，以德报德。',
  '君使臣以礼，臣事君以忠。',
  '君子务本，本立而道生。',
  '动人以言者，其感不深；动人以行者，其应必速。',
  '士志于道，而耻恶衣恶食者，未足与议也。',
  '不义而富且贵，于我如浮云。',
  '益者三友，友直，友谅，友多闻，益矣。',
  '子曰：君子周而不比，小人比而不周。',
  '日知其所亡，月无忘其所能，可谓好学也已矣。',
  '后生可畏，焉知来者之不如今也。',
  '智者上善若水，海纳百川；仁者高山仰止，厚德载物。',
  '名不正，则言不顺，言不顺，则事不成。',
  '见义不为，无勇也。',
  '人不知而不愠，不亦君子乎。',
  '三思而后行。',
  '唯仁者能好人，能恶人。',
  '子曰：默而识之，学而不厌，诲人不倦，何有于我哉。',
  '若圣与仁，则吾岂敢，抑为之不厌，诲人不倦，则可谓云尔已矣。',
  '仕而优则学，学而优则仕。',
  '德之不修，学之不讲，闻义不能徙，不善不能改，是吾忧也。',
  '忠告而善道之，不可则止，毋自辱焉。',
  '古者言之不出，耻躬不逮也。',
  '君子无所争，必也射乎！揖让而升，下而饮，其争也君子。',
  '道之以政，齐之以刑，民免而无耻；道之以德，齐之以礼，有耻且格。',
  '信近于义，言可复也，恭近于礼，远耻辱也，因不失其亲，亦可宗也。',
  '放于利而行，多怨。',
  '善人，吾不得而见之矣，得见有恒者，斯可矣，亡而为有，虚而为盈，约而为泰，难乎有恒矣。',
  '有则改之，无则加勉。',
  '欲速则不达。',
  '饱食终日，无所用心，难矣哉。',
  '慎终，追远，民德归厚矣。',
  '导之以政，齐之以德，民免而无耻，导之以德，齐之以礼，有耻且格。',
  '人之生也直，罔之生也幸而免。',
  '子曰：朝闻道，夕死可矣。',
  '无欲速，无见小利，欲速，则不达；见小利，则大事不成。',
  '饭疏食、饮水，曲肱而枕之，乐亦在其中矣，不义而富且贵，于我如浮云。',
  '子温而厉，威而不猛，恭而安。',
  '子曰：志于道，据于德，依于仁，游于艺。',
  '少成若天性，习惯如自然。',
  '吾日三省吾身。',
  '夫子温、良、恭、俭、让。',
  '学而时习之，温故而知新。',
  '老骥伏枥，志在千里；烈士暮年，壮心不已。',
  '不知命，无以为君子也。',
  '谛，自既灌而往者，吾不欲观之矣。',
  '道不行，乘桴浮于海，从我者其由与。',
  '君子不重则不威，学则不固，主忠信，无友不如己者，过则勿惮改。',
  '能以礼让为国乎，何有，不能以礼让为国，如礼何。',
  '恭则不侮，宽则得众，信则人任焉，敏则有功，惠则足以使人。',
  '天生德于予，桓雎其如予何。',
  '君子哉若人！鲁无君子者，斯焉取斯。',
  '夷狄之有君，不如诸夏之无也。',
  '其为人也，发愤忘食，乐以忘忧，不知老之将至云尔。',
  '与其进也，不与其退也，唯何甚，人洁己以进，与其洁也，不保其往也。',
  '朽木，不可雕也，粪土之墙，不可圬也，于予与何诛。',
  '子曰：质胜文则野，文胜质则史，文质彬彬，然后君子。',
  '以约失之者鲜矣。',
  '言寡尤，行寡悔，禄在其中矣。',
  '君子之德风，小人之德草，草上之风，必偃。',
  '众恶之，必察焉；众好之，必察焉。',
  '譬如为山，未成一篑，止，吾止也，譬如平地，虽覆一篑，进，吾往也。',
  '弟子入则孝，出则悌，谨而信，泛爱众而亲仁，行有余力，则以学文。',
  '生死有命，富贵在天。',
  '圣人，吾不得而见之矣，得见君子者斯可矣。',
  '以不教民战，是谓弃之。',
  '君子之于天下也，无适也，无莫也，义之与比。',
  '大哉问！礼，与其奢也，宁俭，与其易也，宁戚。',
  '道千乘之国，敬事而信，节用而爱人，使民以时。',
  '不知也，知其说者之于天下也，其如示诸斯乎。',
  '非其鬼而祭之，谄也，见义不为，无勇也。',
  '内省不疚，夫何忧何惧。',
  '犬马，皆能有养；不敬，何以别乎。',
  '听其言而观其行。',
  '天何言哉！四时行焉，百物生焉，天何言哉。',
  '温故而知新，能够为师矣。',
  '宁武子，邦有道，则知，邦无道，则愚，其知可及也，其愚不可及也。',
  '孔子曰：诲汝知之乎？知之为知之，不知为不知，是知也。',

  // 土话
  '眼泪终究流不成海洋，人总要不断成长。', 
  '听说你顺产了小子，不顺产难道还是逆子吗', 
  '有的人活了一辈子，却没有真正活过完整的一天！因为他们不是追忆过去，就是期许未来，从来没有活在当下。', 
  '一个有灵魂的女人，才是一个有魅力的女人。一个有信仰的女人，才是一个有能量的女人。可以暂时茫然，但不自怨自艾，可以一时感慨，但不一直沉迷。若是美好，叫做精彩。若是糟糕，叫做经历。', 
  '伟人所达到并保持着的高处，并不是一飞就到的，而是他们在同伴们都睡着的时候，一步步艰辛地向上攀爬的。', 
  '迷茫总是一时的，选择的道路一直走下去，才是一世的。', 
  '有钱的捧个钱场，没钱的回家取点钱来捧个钱场。', 
  '生活真他(和谐)妈好玩，因为生活老他(和谐)妈玩我。', 
  '酸甜苦辣是生命的富有，赤橙黄绿是人生的斑斓。', 
  '我们这一生，会遇到很多人，缘分皆朝生暮死脆弱如露水。唯独与你，像是一条生生不息的河流。', 
  '如果我们都是孩子,就可以留在时光的原地,坐在一起一边听那些永不老去的故事一边慢慢皓首', 
  '当男人遇见女人，从此只有纪念日，没有独立日。', 
  '左手拿着书，右手拿着打火机，哪里不会点哪里。', 
  '在你发怒的时候，要紧闭你的嘴，免得增加你的怒气。', 
  '内心再强大一点，就不会听风是雨。知道的事再多一点，就不会人云亦云。', 
  '有时候命运是嘲弄人的，让你遇到，但却晚了;让你看到，却不能相依;让我们有了情，却只能分开!曾经把爱深深埋在了心底，以为这样才是最安全的，却不知如此的距离也将自己伤的最深。我试着恨你，却想起你的笑容。', 
  '善良是心湖绽放柔媚的花朵，它如雪花一样晶莹纯洁，是人生的底色；它如太阳一般温暖明媚，是爱与爱传递的桥梁；它如山间泉水一样清彻透明，荡涤生命的尘埃；它如琴音一样拨动心弦，在心湖上奏出最动听的音乐，善良是一盏心灯，照亮人们前行的脚步，善良是一片绿州，装点生命的诗行，善良是人生最美的风景。', 
  '幸福是温暖，是感激，是满足，是宽恕，是奉献，我们苦苦寻觅，殷殷向往，有时，幸福真的很简单……幸福就是在你忧伤的时候有人安慰你，在你孤单的时候有人陪伴你，在你失落的时候有人帮助你。幸福就是无论你走到天涯海角，总会有人牵挂你！', 
  '世间即使多可怕，总留下你依然让我值得牵挂。', 
  '把自己当傻瓜，不懂就问，你会学的更多。', 
  '时光总有一天会将你我拆散，可是即便如此，在那个时刻之前，也让我们在一起吧。', 
  '世界上，唯独骗不了的，是自己的心，它总在你最没提防时，暴露你的欢喜忧愁。', 
  '书画琴棋诗酒花，当年件件不离他；而今七事都更变，柴米油盐酱醋茶。载酒买花年少事，浑不似旧心情。当所有的梦想被现实磨洗的一干二净，当平庸的日子被繁琐填充，我再也没有了年轻时浪漫激越的心情。', 
  '做有用的事，说正能量的话，想美好的事，睡安稳的觉。把时间发生在进步上，而不是抱怨上。', 
  '时光荏苒，我自清欢，是否有一个地方，可以安置我漂泊的心灵港湾。', 
  '生活就像是跟老天对弈，对你而言，你走棋，那叫选择；老天走棋，那叫挑战。', 
  '真坏人并不可怕，可怕的是假好人。', 
  '下辈子我要做你嘴里面的牙，因为我痛你也会痛。', 
  '生命太短，没留时间给遗憾。若不是终点，请微笑一直向前。', 
  '当一个小小的心念变成成为行为时，便能成了习惯；从而形成性格，而性格就决定你一生的成败。', 
  '人生的目标与做人相互结合在一起才有了美好的希望。', 
  '情路走的太多，什么样的风景都已经看破', 
  '沟通心灵的桥是理解，连接心灵的路是信任。', 
  '每个人出生的时候都是原创，可悲的是，很多人渐渐都成了盗版！', 
  '这个世界不公平就在于上帝说“我要光!”于是有了白天。美女说“我要钻戒!”于是她有了钻戒。富豪说“我要女人!”于是他有了女人。我说“我要洗澡!”居然停水了', 
  '如果你是对的，你没必要发脾气；如果你是错的，你没资格去发脾气。这才是真正的智慧。', 
  '我爱的人，我愿意用尽我的一生来尝尽你给的喜悲', 
  '每天晚上盖被子，都感觉像是入土为安', 
  '你的世界会有光，那是因为我记忆里的太阳庇护着你', 
  '剑未佩妥，出门已是江湖；酒尚余温，入口不识乾坤。远离尽千帆，归来仍是少年。', 
  '我喜欢深存感恩之心又独自远行的人。知道谢父母，却不盲从。知道谢天地，却不畏惧。知道谢自己，却不自恋。知道谢朋友，却不依赖。知道谢每一粒种子，每一缕清风，也知道早起播种和御风而行。', 
  '世界上只有想不通的人，没有走不通的路。', 
  '讨厌我。没关系我不介意。我活着不是为了取悦你。', 
  '你以为放手可以成全我的幸福，可你不知道，我最大的幸福就是能和你手牵手。', 
  '记住了：刻薄嘴欠和幽默是两回事，口无遮拦和坦率是两回事，没有教养和随性是两回事，轻重不分和耿直是两回事。', 
  '每个人都想拥有一个优秀的爱人 却很少有人想过自己到底配不配', 
  '俗世尘染，蓦然，杳如烟云，幽幽的在岁月里演绎自己的歌与梦，一路款款回眸。', 
  '不想拥有太多情绪。陪朋友笑笑就可以。感觉累了就好好休息。何必苦了自己。', 
  '有时回忆是太甜蜜，也是太沉重的包袱', 
  '人生就像一杯茶，不会苦一辈子，但总会苦一阵子!', 
  '每个人都有不可理喻的地方，不要苛求别人，也不必埋怨自己。', 
  '一个坚定、独立、不对任何人负责的灵魂，应该对任何事物都保持一种批判的品格，怀疑的精神，保持一种在野的、边缘的身份。', 
  '太用力的爱情，让人看不清内心。用力过度就是不自信，不信任，怕来不及表达自己的情绪，怕没有时间耐心等待。但其实，细水长流，平静而深刻，才更容易看到内心。', 
  '脱了衣服我是禽兽，穿上衣服我是衣冠禽兽!', 
  '一个人总有一天会明白，忌妒是无用的，而模仿他人无异于自杀。因为不论好坏，人只有自己才能帮助自己，只有耕种自己的田地，才能收获自家的玉米。', 
  '男人和女人吵架，男人就像手枪，女人就像机关枪', 
  '哪有什么错过的人，会离开的都是路人；哪有什么命运不公，都是懒惰让你变得无能。', 
  '忙碌是一种幸福，让我们没时间体会痛苦；奔波是一种快乐，让我们真实地感受生活；疲惫是一种享受，让我们无暇空虚。', 
  '不要以为你长的狼样，我就能把你看成是灰太狼', 
  '不是不追求，只是不去追求，淡然地过着自己的生活，不要轰轰烈烈，只求安安心心。', 
  '生气，就是拿别人的过错来惩罚自己。原谅别人，就是善待自己。', 
  '生活是不公平的，我们不能去埋怨上帝，那也是徒劳的。我们只有去适应生活。', 
  '一路柔橹，一叶白帆，一夕飞沙，一曲离殇。何处归程，长亭连短亭。那万顷的柔情，漾涌于清清笔端。', 
  '爱，是心灵与心灵的相知，它可以不要太多的语言来粉饰。这就是爱情当一个女人不再对你吼对你闹。对你发脾气，-管你这管你那时当她沉默时，你真的在她心里已经失去了那个不可或缺的地位了。-纵使她还爱你但是有些东西真的变了。纠缠看似很烦其实是最幸福的。', 
  '有时侯，觉得自己其实一无所有，仿佛被世界抛弃;有时候，明明自己身边很多朋友，却依然觉得孤单;有时候，走过熟悉的街角，看到熟悉的背影，突然就想起一个人的脸;有时候，突然想哭，却难过的哭不出来;有时候，夜深人静的时候，突然觉得寂寞深入骨髓;有时候，突然找不到自己，把自己丢了。', 
  '一个人会突然想通一件事，如醍醐灌顶，如振聋发聩，从此境界大不相同。这或许跟时间有关系，也或许跟阅历有关系，但不到那个节点，无论别人如何苦口婆心，都无法消除困顿。所以给别人提意见，不必着急上火，他需要的或许不是建议，他需要的其实是时间。', 
  '“浪漫”是一袭美丽的晚礼服，但你不能一天到晚都穿着它。', 
  '许多事情的答案都不是只有一个，所以我们永远有路可以走。我们必须接受失望，因为它是有限的。生命真的很短，我们每一刻都在逼近那个终点，我们无法停止脚步，面对着稍纵即逝，我们唯一能做的真的就是爱生活，爱自己身边的每一个人。', 
  '黑夜的转弯是白天，愤怒的转弯是快乐，所以有的时候让心情转个弯就好了。', 
  '师太，你就从了老衲吧!…很久很久以后…师太，你就饶了老衲吧!', 
  '我们要学会珍惜生活的每一天，因为这每一天的开始，都将是我们余下生命之中的第一天。', 
  '在婚姻中慢慢修炼，渐渐明白，女人最重要的或许不是嫁谁，而是无论嫁了谁，都要有让自己幸福的能力。', 
  '不要说别人脑子有病，脑子有病的前提是必须有个脑子。', 
  '顺境是幸福，享受上天的恩赐；逆境也是幸福，在奋斗的汗水陪伴下拼搏。', 
  '别把自己想的太伟大，要知道，在别人的世界里，不管你做的多好，你都只是个配角而已。', 
  '每个人都会死，但并非每个人都真正活过。每个人都在追求高质量的生活，但并非每个人都活出了自我。', 
  '人生没有那么多的假设，现实是一个一个真实的耳光，打在你的脸上，喊疼毫无疑义。', 
  '人生，有多少计较，就有多少痛苦;有多少宽容，就有多少欢乐。痛苦与欢乐都是心灵的折射，就像镜子里面有什么，决定于镜子面前的事物。心里放不下，自然成了负担，负担越多，人生越不快乐。计较的心如同口袋，宽容的心犹如漏斗。复杂的心爱计较，简单的心易快乐。', 
  '看清了很多人，却不能随意拆穿。讨厌着很多人，却又不能轻易翻脸。有时候生活就是要逼自己变得逆来顺受，宠辱不惊。', 
  '因为知道不能没有你，所以我会更珍惜。', 
  '他知道要想逃避现实，最好的方式就是深深介入现实之中。', 
  '你知不知道思念一个人的滋味，就像喝了一杯很凉的水，然后用很长的时间，把它一点点化成眼泪。', 
  '生活中，我们每个人都要走过平坦的或是弯弯曲曲的路，留下或深或浅的足迹，有的人在风雨中匍匐，有的人在风雨中叹息，有的人却执着地前行。', 
  '现实是此岸，理想是彼岸，中间隔着湍急的河流，行动则是架在河上的桥梁。', 
  '生活于我们，是一道绚丽的风景，而经历，恰似一把锁，锁着风轻云淡，锁着或悲或喜，锁着无奈和忧郁……', 
  '我要把你放在一边晾干，然后在收回来', 
  '退让带来的基本都是得寸进尺，别妄想能换来什么尊重和心疼。', 
  '有的人是真孙子，有的人是装孙子。人们为了生存会装孙子，我年轻的时候也常常装孙子。最可怕的是装着装着就成了真孙子。能真实尽量真实吧。', 
  '追求和爱好决定了你精神的维度，心态和活法决定了你家园的大小。', 
  '人的生命，似洪水奔流，不遇着岛屿和暗礁，难以激起美丽的浪花。', 
  '幸福更是一种体会，需要用心去品味。鞋子穿得舒不舒服，只有脚知道，幸福亦如此。', 
  '保持微笑，停止抱怨那些改变不了的事。无论你开心与否，时间总是不等人的。', 
  '为什么我们总要到过了半生，总要等退无可退，才知道我们曾经亲手舍弃的东西，在后来的日子里再也遇不到了。', 
  '每个人心里，都住着这么一个人，遥远的爱着。这辈子也许都无法在一起，也许都没有说过几句话，也没有一起吃饭看电影，可就是这个遥远的人支撑了青春里最重要，最灿烂的那些日子。以至于让以后的我们想起来，都没有遗憾后悔，只是暖暖的回忆。', 
  '天塌下来你先顶着，我去找根棍子。', 
  '低头要有勇气，抬头要有底气。', 
  '即使你已经名花有主，我也要移花接木。', 
  '只有玫瑰才能理解另一朵玫瑰，只有漫天风雪才能理解冬天。', 
  '须交有道之人，莫结无义之友。饮清静之茶，莫贪花色之酒。开方便之门，闲是非之口。', 
  '我们应该尊重的是一个人的年龄还是他的行为？这句话说的真好',
  '觉得插件好用的话，点个赞吧',
  '觉得插件好用的话，转发一下吧',
  '你的传播是我们前进的动力'
]

module.exports = function getRandomContent(config) {
  if(config && config.length) {
    const _sayings = config
    var index = Math.floor(_sayings.length * Math.random())
    return _sayings[index]
  }
  var index = Math.floor(contents.length * Math.random())
  return contents[index]
}
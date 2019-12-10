const messages = {
    'ChangeLang': 'Change To English Site',
    'Title.nodelist': '节点列表',
    'Title.explorer': '浏览器',
    'Title.nodedetail': '节点详情',
    'Title.myaccount': '我的账户',
    'MetaMask.connected': '...已连接',
    'MetaMask.connectwallet': '链接钱包',

    'Node.active': '在线',
    'Node.inactive': '离线',
    'Events.Loading': '{type, select, withdraw {提现} claimreward {奖励提现} unregister {注销} upgrade {更新} unbond{解冻} delegate{委托}}:等待确认:{hash}',
    'Events.Success': '{type, select, withdraw {提现} claimreward {奖励提现} unregister {注销} upgrade {更新} unbond{解冻} delegate{委托}}:成功 (确认区块 {blockNumber})',

    'Table.Column.NodeList.Name': '名称',
    'Table.Column.NodeList.Node': '地址',
    'Table.Column.NodeList.Status': '状态',
    'Table.Column.NodeList.SelfStaked': '节点质押数',
    'Table.Column.NodeList.Delegated': '受委托数',
    'Table.Column.NodeList.RewardCut': '分奖比例',
    'Table.Column.NodeList.Uptime': '在线时长',
    'Table.Column.NodeList.MyDelegation': '我的质押',
    'Table.Column.NodeList.MyRewards': '我的奖励',

    'Tooltip.selfStaked': '节点自己质押的DOS通证数量',
    'Tooltip.delegate': '此节点受委托的总通证数',
    'Tooltip.rewartcut': '节点从用户质押奖励中保留的百分比',
    'Tooltip.uptime': '节点的总在线时间',
    'Tooltip.myDelegation': '您质押给此节点的DOS通证数量',
    'Tooltip.myRewards': '您从此节点处得到的奖励总数',
    'Tooltip.OnlyShowTheNodesRelatedToMe': '只显示与我相关的节点',
    'Tooltip.searchnodeaddress': '按节点地址搜索',
    'Tooltip.CreateANode': '创建新节点',
    'Form.Title.CreateNode': '创建新节点',
    'Form.Ok.Create': '创建',
    'Form.Cancel.Create': '取消',
    'Form.Error.tokenAmount': '请输入有效数字',
    'Form.Error.tokenAmount2': '请输入大于100,000的数量',
    'Form.Error.cutRate': '请输入有效数字',
    'Form.Error.cutRate2': '请输入有效百分比数字',


    'Form.Lable.Name': '名字',
    'Form.Message.InputName': '请命名你的节点',
    'Form.Lable.Node': '节点地址',
    'Form.Message.InputNodeAddress': "请输入你的节点地址",
    'Form.Lable.StakeingAmount': '质押数量',
    'Form.Message.InputStakeingAmount': "请输入你的质押数量",
    'Form.Placeholder.InputStakeingAmount': "最小100,000",
    'Form.Lable.dbAmount': 'Drop Burn 数量(可选)',
    'Form.Message.InputdbAmount': "请输入你的drop burn代币数量",
    'Form.Lable.cutRate': '分奖比例',
    'Form.Message.InputcutRate': "请输入你的分奖比例",

    /** NodeDetail**/

    'Form.Message.OwnerWithdraw': '没有足够的DOS可以提现',
    'Form.Message.DelegatorWithdraw': '没有足够的DOS可以提现',
    'Form.Message.OwnerClaimReward': '没有足够的奖励可以提现',
    'Form.Message.DelegatorClaimReward': '没有足够的DOS可以提现',
    'Tooltip.NodeDetail.MyDelegation': '我的委托',
    'Tooltip.NodeDetail.MyStakingToken': '我的质押',
    'Tooltip.NodeDetail.DropBurnToken': 'Drop Burn',
    'Tooltip.NodeDetail.WithdrawalFrozen': '可提现(冻结)',
    'Tooltip.NodeDetail.WithdrawalDropBurnFrozen': '提现Drop Burn(冻结)',
    'Tooltip.NodeDetail.Withdraw': '提现',
    'Tooltip.NodeDetail.MyRewards': '我的奖励',
    'Tooltip.NodeDetail.NodeAddress': '节点地址',
    'Tooltip.NodeDetail.NodeDescription': '节点描述',
    'Tooltip.NodeDetail.NodeSelt-Staked': '节点质押',
    'Tooltip.NodeDetail.TotalDelegated': '总委托数',
    'Tooltip.NodeDetail.RewardCut': '分奖比例',
    'Tooltip.NodeDetail.Uptime': '在线时长',
    'Tooltip.NodeDetail.Days': '天',
    'Tooltip.NodeDetail.UnBond': '解冻',
    'Tooltip.NodeDetail.Delegate': '委托',
    'Tooltip.NodeDetail.Upgrate': '更新',

    'Form.Button.Submit': '提交',
    'Form.Lable.DelegateAmount': '委托数量',
    'Form.Lable.UnbondAmount': '解冻数量',
    'Form.Lable.DropBurnAmount': 'Drop Burn数量',
    'Form.Lable.AddDelegateAmount': '增加委托数量',
    'Form.Lable.AddDropBurnAmount': '增加Drop Burn数量',
    'Form.Lable.UpdateRewardCut': '更新分奖比例',
    'Form.Message.InputUnbondAmount': "请输入解冻数量",
    'Form.Message.InputDropBurnAmount': "请输入drop burn数量",
    'Form.Message.InputDelegateAmount': "请输入委托数量!",
    'Form.Message.InputRewardCut': "请输入新分奖比例",


    /** Explorer**/

    'Tooltip.MarketInfo.InterestRate': '利率',
    'Tooltip.MarketInfo.NumberOfStakedToken': '总质押数',
    "Tooltip.MarketInfo.PriceOfDOS": 'DOS价格',
    'Tooltip.Search.placeholder': '按事件、请求标号、组号、地址等搜索',
    'Form.Button.Search': '搜索',
    'Table.Column.Explorer.TxHash': '交易哈希',
    'Table.Column.Explorer.Blocks': '区块',
    'Table.Column.Explorer.EventLog': '时间日志',
    'Table.Column.Explorer.Address': '地址',
    'Table.Column.Explorer.Balance': '余额',
    'Table.Column.Explorer.RegisterState': '注册状态',
    'Table.Column.Explorer.ActiveGroups': '活动组',
    'Table.Column.Explorer.ExpiredGroups': '过期组',
    'Table.Column.Explorer.GroupInfo': '组信息',
    'Table.Column.Explorer.GroupId': '组Id',
    'Table.Column.Explorer.AcceptedBlockNumber': 'Accepted Block Number',
    'Table.Column.Explorer.DisresolvedBlockNumber': 'Disresolved Block Number',
    'Table.Column.Explorer.UrlRequests': 'Url Requests',
    'Table.Column.Explorer.RandomRequests': 'Random Requests',
    'Table.Column.Explorer.GroupPublickKey': 'Group Publick Key',
    'Table.Column.Explorer.GroupNodeIds': 'Group NodeIds',

    'Table.Column.Explorer.RequestInfo': 'Request Info',
    'Table.Column.Explorer.RequestId': 'Request Id',
    'Table.Column.Explorer.DispatchedGroupId': 'Dispatched Group Id',
    'Table.Column.Explorer.Submitter': 'Submitter',
    'Table.Column.Explorer.SubmittedBlockNumber': 'Submitted Block Number',
    'Table.Column.Explorer.SubmittedTxHash': 'Submitted TxHash',
    'Table.Column.Explorer.Message': 'Message',
    'Table.Column.Explorer.Signature': 'Signature',
    'Table.Column.Explorer.PublickKey': 'Publick Key',
    'Table.Column.Explorer.LastSystemRandomness': 'Last System Randomness',
    'Table.Column.Explorer.UserSeed': 'User Seed',
    'Table.Column.Explorer.Pass': 'Pass',


    /**MyAccount */

    'Tooltip.MyAccount.AccountBalance': '账户余额',
    'Tooltip.MyAccount.TotalDelegated': '委托总数',
    'Tooltip.MyAccount.MyRewards': '奖励总数',
    'Tooltip.MyAccount.Unbondedtokens': '冻结总数',
    'Table.Column.Activites.AccountActivity': '账户活动',
    'Table.Column.Activites.Time': '时间',
    'Table.Column.Activites.Action': '操作',
    'Table.Column.Activites.TxHash': '交易哈希',

    'Tooltip.Explorer.Pagnation': '最近 {pageSize} 个事件'
}
export default messages

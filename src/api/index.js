import request from '@/utils/request'

/** 系统公告*/
const noticeApi = {
  announce: '/api/notice',                        // 发布公告/更新公告/删除公告  POST/PUT/DELETE
  userAnnouncementList: '/api/notice/user',       // 用户公告列表 get
  adminAnnouncementList: '/api/notice/admin',     // 管理员公告列表 get
  noticeSelectOrgs: '/api/notice/orgs',           // 发布公告可选组织列表 get
  noticeSelectUsers: '/api/notice/org/users',     // 组织下人员列表 get
  noticeUsers: '/api/notice/{noticeId}/users',    // 公告通知人员列表 get
  messageCount: '/api/message/count',             // 消息数量 get
  messageList: '/api/message',                    // 消息列表 get
}
/** 押品柜、抽屉、区域管理*/
const arkDrawerApi = {
  getAreaList:'/prd/cabinet/getAreaList',             // 区域列表 get
  insertArea:'/prd/cabinet/insertArea',               // 新增区域 post
  updateArea:'/prd/cabinet/updateArea',               // 修改区域参数 PUT
  deleteArea:'/prd/cabinet/deleteArea',               // 删除区域参数 DELETE
  cabinetList:'/prd/cabinet/getCabinetInfoList',      // 柜子列表 post
  cabinetAdd:'/prd/cabinet/saveCabinetInfo',          // 新增/修改柜子信息 post
  cabinetGet:'/prd/cabinet/getCabinetInfo',           // 获取柜子信息 get
  cabinetDelete:'/prd/cabinet/deleteCabinetInfo',     // 删除柜子信息 post
  coordinate:'/prd/cabinet/coordinate',               // 修改柜子坐标PUT
  drawerList:'/prd/cabinet/getDrawerInfoList',        // 抽屉列表 post
  drawerAdd:'/prd/cabinet/saveDrawerInfo',            // 新增/修改抽屉信息 post
  drawerGet:'/prd/cabinet/getDrawerInfo',             // 获取抽屉信息 get
  drawerDelete:'/prd/cabinet/deleteDrawerInfo',       // 删除抽屉信息 post
  fullDrawer:'/prd/cabinet/fullDrawer',               // 抽屉设为满箱PUT
  switchDrawer:'/prd/event/switchDrawer',             // 开关抽屉 post
  drawerRecord:'/prd/cabinet/getDrawerOperationRecord',// 获取抽屉操作记录 get
  cabinetInitialization:'/prd/cabinet/initialization'  //柜子初始化
}
/** 押品*/
const collateralApi = {
  collateralList:'/api/collateral/list',                          // 押品列表
  collateralListNew:'/prd/report/form/collateral',                // 押品列表new
  collateralDetail:'/api/collateral/details',                     // 押品详情 get
  reportFormDownload:'/prd/report/form/download/collateral',      // 押品列表报表导出
  collateralInventory:'/api/home/page/collateral',                // 押品库存 GET
  collateralLineChart:'/api/home/page/collateral/statistics',     // 押品库存折线图 GET
  collateralPieChart:'/api/home/page/cabinet/pie/chart',          // 智能柜统计 GET
  pollingSet:'/api/task/save',                                    // 自动巡检设置 post
  checkPollingSet:'/api/task/check',                              // 获取自动巡检设置 get
  collateralFrontList:'/api/collateral/front/list',               // 前置库存列表 get
  collateralFrontDetail:'/api/collateral/front/details',          // 前置押品详情 get
  collateralFrontDelete:'/api/collateral/front/info',             // 前置押品删除 delete
  collateralFrontPut:'/api/collateral/front/info',                // 前置押品修改 put
  collateralFrontUpload:'/api/collateral/front/upload',           // 前置押品导入 post
  collateralTemplateGet:'/api/excel/template/config',             // 获取模板配置 get
  collateralTemplatePut:'/api/excel/template/info',               // 修改模板位置 put
  collateralTemplateDelete:'/api/excel/template/info',            // 删除模板信息 delete
  collateralTemplatePost:'/api/excel/template/info',              // 保存模板信息 post
  collateralTemplateDetailList:'/api/excel/template/details/list',// 获取模板详情列表 get
  collateralFrontSync:'/api/collateral/front/sync',               // 前置押品同步 post
}
/**查库*/
const inqApi = {
  inqList: '/prd/check/checkStockList',           // 列表接口 查库事件单
  inqOne: '/prd/event/getEventNo',                // 获取事件单号接口
  inqAdd: '/prd/check/addOrUpdateCheckStock',     // 新增/修改查询事件单列表接口
  inqPolling: '/prd/check/checkResult',           // (轮询)获取查库结果
  inqStart: '/prd/check/checkCollateral',         // 开始查库
  inqTotalNum: '',         // 查库总数
  inqCheck: '/prd/check/checkValidate',           // 检查人验证
  inqCheckInfo: '/prd/check/getCheckCollateralInfo',// 获取查库押品信息
  inqEventDetails: '/prd/check/stock/details',    // 查库事件单详情
  inqColBagRecord: '/prd/check/collateral/record',// 获取查库押品记录
  customCheckEventCreat:'/prd/check/save/location',// 定位排查事件单创建
  createAbnormalEvent:'/api/abnormal/event',       // 生成异常处理单
}
/** 配置*/
const settingsApi = {
  aboutOrg:'/api/org',                                // 新增、修改、删除机构 post put delete
  aboutDept:'/api/dept',                              // 新增、修改、删除部门 post put delete
  aboutPosts:'/api/post',                             // 新增、修改、删除岗位 post put delete
  aboutJurisdiction:'/api/permission',                // 列表,新增权限 get post
  postsJurisdictionList:'/api/permission/post',       // 岗位权限列表 get
  authorization:'/api/permission/authorization',      // 角色/岗位授权 POST
}
/** 用户*/
const userApi = {
  login: '/login',                                      // 登录 post
  fingerLogin: '/api/finger/login',                     // 指纹登录 post
  logOut: '/auth/logout',                               // 登出 get
  changePassword: '/api/user/password',                 // 用户修改密码 PUT
  changeMobile: '/api/user/mobile',                     // 用户修改手机号 PUT
  register: '/register',                                // post
  getUserInfo: '/api/user',                             // 用户详情 get
  passwordForgot: '/api/user/password/forgot',          // 忘记密码，手机号找回 put
  passwordReset: '/api/admin/password/reset',           // 管理员重置密码 put
  passwordUpdate: '/api/user/password',                 // 用户修改密码 put
  fingerAdd: '/api/finger/add',                         // 新增指纹 post
  userList: '/api/user/plat',                           // 用户列表 put
  admAddsUser: '/api/admin/register',                   // 管理员添加用户 post
  userThePost: '/api/admin/transfer/post',              // 用户调岗（更改用户信息） put
  userDelete: '',// 用户删除 delete
  sldOrgsList: '/api/org/user/condition',               // 获取组织信息（下拉框使用，管理员添加用户，调岗，查询用户） get
  tissueList: '/api/post/tissue',                       // 新增岗位时可操作组织列表（新增岗位下拉框选择机构部门时使用） get
  approvalUserList: '/api/post/users/approval',         // 流程审批岗位人员列表
  enablePassword: '/api/admin/password/enable',         // 启用密码登录
  disablePassword: '/api/admin/password/disable',       // 禁用密码登录
  disableUser: '/api/admin/disable',                    // 禁用用户
  enableUser: '/api/admin/enable',                      // 启用用户
}
const randomCheckApi = {
  randomCheckList: '/prd/random/randomCheckList',                     // 获取抽查事件单列表 post
  randomCheckdtl: '/prd/random/randomCheckDtl',                       // 获取抽查事件单详情 get
  editRandomCheck: '/prd/random/addOrUpdateRandomCheck',              // 新增/修改抽查事件单列表 post
  getEventNo: '/prd/event/getEventNo',                                // 获取事件单号 post
  randomCheck: '/prd/random/randomCheck',                             // 开始盘查--停止盘查 post
  randomCheckPoll: '/prd/random/randomCheckRoundRobin',               // 抽查轮询 post
}
/** 工作流（详见接口文档3.8）*/
const workflowApi = {
  flowTemplate: '/api/flow/task',                                      // 流程模板 添加/修改/删除/列表  post/put/delete/get
  flowNode: '/api/flow/task/node',                                     // 流程节点 添加/修改(单个)/删除/详情  post/put/delete/get
  flowTemplateDetailId: '/api/flow/task',                              // 流程模板详情（更新模板id获取） get
  flowTemplateDetailType: '/api/flow/task/type',                       // 流程模板详情（根据模板类型获取） get
  flowWorkInst: '/api/flow/work/inst',                                 // 任务流程实例id查询流程 get
  flowEvent: '/api/flow/work/event',                                   // 事件单查询流程 get
  flowApproval: '/api/flow/work',                                      // 流程审批 put
  flowInst: '/api/flow/task/inst',                                     // 新建审批流 post
  flowUsers: '/api/flow/task/node',                                    // 流程节点候选审批人 get  /api/flow/task/node/{taskId}/{nodeCode}/users
}
const others = {
  toDoTheSummary: '/api/home/page/todo',                          // 首页待办汇总
  systemLogDownload: '/prd/report/form/download/log',
  eventDocumentList:'/prd/event/findEventDocumentList',           // 事件单查询
  exportEvent: '/prd/event/export',                               // 事件单导出
  oneTimeToken:'/prd/report/form/oneTimeToken',                   // 获取一次性Token
  testCmd:'/test/send/cmd',                                       // 硬件调试
  selfInspection:'/api/hardware/selfInspection',                  // 硬件 自检服务 post
  ...arkDrawerApi
}
let api = {...inqApi,...settingsApi,...userApi,...others,...randomCheckApi,...noticeApi,...collateralApi,...workflowApi};
/**
 * @name 对应api的key
 * @params 第一请求参数
 * @params1 第二请求参数
 * @method 请求方式
 * */
export  function doRequest(name,params,method='post',params1=undefined){
  let paramIsnm = /string|number/g.test(typeof params); //判断第一参数是否是非object类型
  let url = api[name];
  if(params && paramIsnm) url+=`/${params}` // api:/xxx/xxx/{id}
  const f=_=>{
    let key = /get/g.test(method)?'params':'data'
    if(!params1){//只传第一参
      if(params && paramIsnm) return {data:{}} // 只传第一参 且 第一参是字符串或数字类型
      else return {[key]:params}
    }
    else return {data:params1}
  }
  return request({
    url, method, ...f()
    // [/post|put/g.test(method)?'data':'params'] : (params1?params1:params)
  })
}
export async function doRequestP(name,params,method='post'){
  const f = _ => {
    let str = '';
    for (let key in _) {
      str+= str.length ? `&${key}=${encodeURIComponent(_[key])}`:`?${key}=${encodeURIComponent(_[key])}`
    }
    return str
  }
  // 下载文件
  if(method ==='download'){
    let oneToken = await doRequest('oneTimeToken','','get')
    params = {...params, token: oneToken.data}
    console.log(process.env.VUE_APP_HERF_HEADER + api[name] + f(params))
     return process.env.VUE_APP_HERF_HEADER + api[name] + f(params)
  }
  // 上传文件
  if(method ==='upload'){
    return request({
      url:api[name],
      data:params,
      method:'post',
      headers:{'Content-Type':'multipart/form-data'}
    })
  }
  // 其他
  return request({ url: api[name], params, method })
}
export let reqApi = api

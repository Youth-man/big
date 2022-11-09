$(function () {
  // 点击去注册，就隐藏自己，显示注册页面
  $('.login-box').on('click', 'a', function () {
    $('.login-box').hide().siblings('.reg-box').show()
  })
  // 点击去登录，就隐藏自己，显示登录页面
  $('.reg-box').on('click', 'a', function () {
    $('.reg-box').hide().siblings('.login-box').show()
  })
})
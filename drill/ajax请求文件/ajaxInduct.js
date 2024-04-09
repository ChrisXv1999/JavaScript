function ajax({url,method}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  // 设置自定义请求头
  xhr.setRequestHeader("Authorization", "Bearer your_token_here");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      let oS = document.createElement('script');
      oS.innerText  = xhr.responseText;
      document.body.append(oS);
    } else {
      console.error("请求失败：" + xhr.status);
    }
  };

  xhr.send();
}
